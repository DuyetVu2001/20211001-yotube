import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillLike, AiTwotoneDislike } from 'react-icons/ai';
import { BiDislike, BiLike } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { format } from 'timeago.js';
import IconButton from '../../../components/IconButton';
import { API } from '../../../constant';
import useHandleLike from '../../../hooks/useHandleLike';
import Avatar from '../../../public/avatar.jpg';
import CommentInput from './CommentInput';

export default function Comment({ small, comment: data }) {
	const {
		_id: id,
		comment,
		commentId,
		user: { username, avatar },
		videoId,
		createdAt,
		likes,
		dislikes,
	} = data;
	const [showReplyInput, setShowReplyInput] = useState(false);
	const [replyComment, setReplyComment] = useState('');
	const { isLike, isDislike, countLikes, countDislikes, handleLikeClick } =
		useHandleLike({ type: 'comment', likes, dislikes, id });

	const handleSubmitComment = async () => {
		await axios.post(API + 'comment', {
			comment: replyComment,
			commentId: id,
			videoId,
		});
		setReplyComment('');
		setShowReplyInput(false);
	};

	return (
		<div className="flex items-start mb-1.5">
			<div className={`relative ${small ? 'w-6 h-6' : 'w-10 h-10'} mr-3`}>
				<Image
					className="rounded-full"
					src={avatar || Avatar}
					alt="avatar"
					layout="fill"
				/>
			</div>
			<div className="flex-1">
				<p className="">
					<span className="text-[13px] font-medium">{username}</span>{' '}
					<span className="text-xs text-gray-color dark:text-dark-text">
						{format(createdAt)}
					</span>
				</p>
				<div className="flex items-start">
					<p className="flex-1 text-sm">{comment}</p>
					<IconButton Icon={BsThreeDotsVertical} />
				</div>
				<div>
					<div className="flex items-center -mt-5">
						<div className="flex items-center ml-[-10px] mr-2">
							{isLike ? (
								<div onClick={() => handleLikeClick('like')}>
									<IconButton size="sm" Icon={AiFillLike} />
								</div>
							) : (
								<div onClick={() => handleLikeClick('like')}>
									<IconButton size="sm" Icon={BiLike} />
								</div>
							)}

							{countLikes > 0 && (
								<p className="text-sm font-medium ml-[-2px]">{countLikes}</p>
							)}
						</div>
						<div className="flex items-center">
							{isDislike ? (
								<div onClick={() => handleLikeClick('dislike')}>
									<IconButton size="sm" Icon={AiTwotoneDislike} />
								</div>
							) : (
								<div onClick={() => handleLikeClick('dislike')}>
									<IconButton size="sm" Icon={BiDislike} />
								</div>
							)}
							{countDislikes > 0 && (
								<p className="text-sm font-medium ml-[-2px]">{countDislikes}</p>
							)}
						</div>
						{!commentId && (
							<p
								className="ml-5 cursor-pointer text-gray-color text-[13px] font-medium"
								onClick={() => setShowReplyInput(true)}
							>
								REPLY
							</p>
						)}
					</div>
					{showReplyInput && (
						<CommentInput
							small
							value={replyComment}
							setValue={setReplyComment}
							handleSubmit={handleSubmitComment}
							hiddenInput={() => setShowReplyInput(false)}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
