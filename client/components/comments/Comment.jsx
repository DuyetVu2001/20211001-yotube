import Image from 'next/image';
import Avatar from '../../public/avatar.jpg';
import TopNavIcon from '../TopNavIcon';
import { AiFillLike, AiTwotoneDislike } from 'react-icons/ai';
import { BiDislike, BiLike, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { format } from 'timeago.js';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import { API } from '../../constant';
import CommentInput from './CommentInput';

const check = (arr, userId) => arr.includes(userId);

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
	const { auth } = useContext(AuthContext);
	const [isLike, setIsLike] = useState(false);
	const [isDislike, setIsDislike] = useState(false);
	const [countLikes, setCountLikes] = useState(likes.length);
	const [countDislikes, setCountDislikes] = useState(dislikes.length);
	const [showReplyInput, setShowReplyInput] = useState(false);
	const [replyComment, setReplyComment] = useState('');

	useEffect(() => {
		if (!auth?.user?._id) return;
		setIsLike(check(likes, auth?.user?._id));
		setIsDislike(check(dislikes, auth?.user?._id));
	}, [auth?.user?._id]);

	const handleLikeClick = async (action) => {
		await axios.put(`${API}comment/${action}/${id}`);

		if (action === 'like') {
			if (isLike) {
				setIsLike(false);
				setCountLikes((state) => state - 1);
			} else if (isDislike) {
				setIsLike(true);
				setCountLikes((state) => state + 1);
				setIsDislike(false);
				setCountDislikes((state) => state - 1);
			} else {
				setIsLike(true);
				setCountLikes((state) => state + 1);
			}
		} else {
			if (isDislike) {
				setIsDislike(false);
				setCountDislikes((state) => state - 1);
			} else if (isLike) {
				setIsDislike(true);
				setCountDislikes((state) => state + 1);
				setIsLike(false);
				setCountLikes((state) => state - 1);
			} else {
				setIsDislike(true);
				setCountDislikes((state) => state + 1);
			}
		}
	};

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
					<TopNavIcon mx={0} Icon={BsThreeDotsVertical} />
				</div>
				<div>
					<div className="flex items-center">
						<div className="flex items-center ml-[-10px]">
							{isLike ? (
								<div onClick={() => handleLikeClick('like')}>
									<TopNavIcon mx={0} Icon={AiFillLike} />
								</div>
							) : (
								<div onClick={() => handleLikeClick('like')}>
									<TopNavIcon mx={0} Icon={BiLike} />
								</div>
							)}

							<p className="text-sm font-medium ml-[-2px]">{countLikes}</p>
						</div>
						<div className="flex items-center">
							{isDislike ? (
								<div onClick={() => handleLikeClick('dislike')}>
									<TopNavIcon mx={0} Icon={AiTwotoneDislike} />
								</div>
							) : (
								<div onClick={() => handleLikeClick('dislike')}>
									<TopNavIcon mx={0} Icon={BiDislike} />
								</div>
							)}
							<p className="text-sm font-medium ml-[-2px]">{countDislikes}</p>
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
