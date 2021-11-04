import axios from 'axios';
import moment from 'moment';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { AiFillLike, AiTwotoneDislike } from 'react-icons/ai';
import { BiDislike, BiLike, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import IconButton from '../../components/IconButton';
import { API } from '../../constant';
import { AuthContext } from '../../contexts/AuthContext';
import useHandleLike from '../../hooks/useHandleLike';
import Avatar from '../../public/avatar.jpg';

export default function VideoSection({ video }) {
	const {
		_id: id,
		title,
		user: { _id: userId, username, avatar, subscribers },
		likes,
		dislikes,
		videoId,
		totalViews,
		createdAt,
	} = video;
	const { auth } = useContext(AuthContext);
	const [isSub, setIsSub] = useState(false);
	const [totalSub, setTotalSub] = useState(0);
	const { isLike, isDislike, countLikes, countDislikes, handleLikeClick } =
		useHandleLike({ likes, dislikes, id });

	useEffect(() => {
		if (!auth.user || !subscribers) return;
		if (subscribers.includes(auth.user._id)) setIsSub(true);
		setTotalSub(subscribers.length);
	}, [auth.user, subscribers]);

	const handleSubscribe = async () => {
		await axios.put(API + 'user/subscriber', { subscriptionId: userId });
		setIsSub(!isSub);
		isSub ? setTotalSub(totalSub - 1) : setTotalSub(totalSub + 1);
	};

	return (
		<>
			<iframe
				className="w-full aspect-16-9"
				src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>

			<div className="mt-[14px]">
				{/* <p className="cursor-pointer text-blue-color text-xs">
				#LenXeTV #BEIJINGX7 #X7
			</p> */}
				<h2 className="text-lg font-medium">{title}</h2>

				<div className="3sm:flex mt-[6px]">
					<p className="flex-1 mb-3 text-sm">
						<span className="font-medium">
							{totalViews > 0
								? totalViews + 1 + ' views'
								: totalViews + 1 + ' view'}{' '}
							• {moment(createdAt).format('ll')} •{' '}
						</span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
					</p>

					<div className="flex self-end gap-4">
						<div className="flex items-center">
							{isLike ? (
								<div onClick={() => handleLikeClick('like')}>
									<IconButton size="md" Icon={AiFillLike} />
								</div>
							) : (
								<div onClick={() => handleLikeClick('like')}>
									<IconButton size="md" Icon={BiLike} />
								</div>
							)}
							<p className="text-sm font-medium ml-[-2px]">{countLikes}</p>
						</div>
						<div className="flex items-center">
							{isDislike ? (
								<div onClick={() => handleLikeClick('dislike')}>
									<IconButton size="md" Icon={AiTwotoneDislike} />
								</div>
							) : (
								<div onClick={() => handleLikeClick('dislike')}>
									<IconButton size="md" Icon={BiDislike} />
								</div>
							)}
							<p className="text-sm font-medium ml-[-2px]">{countDislikes}</p>
						</div>
						<div className="flex items-center">
							<IconButton size="md" Icon={BiShare} />
							<p className="text-sm font-medium ml-[-2px]">SHARE</p>
						</div>
						<div className="flex items-center">
							<IconButton size="md" Icon={BiShare} />
							<p className="text-sm font-medium ml-[-2px]">SAVE</p>
						</div>
						<IconButton Icon={BsThreeDotsVertical} />
					</div>
				</div>

				{/* SUBSCRIBED */}
				<div className="flex justify-between h-[52px] mt-3 pl-3 border-[1px] border-[#ddd] dark:border-dark-border">
					<div className="flex items-center">
						<div className="relative w-9 h-9 mr-3">
							<Image
								className="rounded-full"
								src={avatar || Avatar}
								alt="avatar"
								layout="fill"
							/>
						</div>
						<div className="">
							<p className="font-medium text-sm">{username}</p>
							<p className="font-medium text-xs text-gray-color dark:text-dark-text">
								{totalSub} subscribers
							</p>
						</div>
					</div>

					<div className="flex items-center">
						<div
							className={`mr-0.5 py-[8px] px-[18px] font-medium text-sm dark:text-dark-text dark:bg-dark-third cursor-pointer ${
								isSub
									? 'bg-[#0000000D] text-gray-color'
									: 'bg-[#CC0000] text-white'
							}`}
							onClick={handleSubscribe}
						>
							SUBSCRIBED
						</div>
						{/* <IconButton Icon={BiLike} /> */}
					</div>
				</div>
			</div>
		</>
	);
}
