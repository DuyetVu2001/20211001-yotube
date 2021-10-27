import Image from 'next/image';
import { BiDislike, BiLike, BiShare } from 'react-icons/bi';
import { AiFillLike, AiTwotoneDislike } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Avatar from '../public/avatar.jpg';
import TopNavIcon from './TopNavIcon';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const check = (arr, userId) => arr.includes(userId);

export default function DescriptionVideo(props) {
	const {
		title,
		user: { username, avatar },
		likes,
		dislikes,
	} = props;
	const { auth } = useContext(AuthContext);
	const [isLike, setIsLike] = useState(false);
	const [isDislike, setIsDislike] = useState(false);

	console.log(auth);

	useEffect(() => {
		if (!auth?.user?._id) return;
		setIsLike(check(likes, auth?.user?._id));
		setIsDislike(check(dislikes, auth?.user?._id));
	}, [auth?.user?._id]);

	return (
		<div className="mt-[14px]">
			{/* <p className="cursor-pointer text-blue-color text-xs">
				#LenXeTV #BEIJINGX7 #X7
			</p> */}
			<h2 className="text-lg font-medium">{title}</h2>

			{/* <div className="flex mt-[6px]"> */}
			<div className="3sm:flex mt-[6px]">
				<p className="flex-1 mb-3 text-sm">
					<span className="font-medium">3,888 views • Jul 19, 2021 • </span>Chủ
					xe khó tính về cách âm ồn trên BEIJING X7 ? X7 thay
				</p>

				{/* <div className="flex-1 self-end flex justify-end gap-4"> */}
				<div className="flex self-end gap-4">
					<div className="flex items-center">
						{isLike ? (
							<TopNavIcon mx={0} Icon={AiFillLike} />
						) : (
							<TopNavIcon mx={0} Icon={BiLike} />
						)}
						<p className="text-sm font-medium ml-[-2px]">1k</p>
					</div>
					<div className="flex items-center">
						{isDislike ? (
							<TopNavIcon mx={0} Icon={AiTwotoneDislike} />
						) : (
							<TopNavIcon mx={0} Icon={BiDislike} />
						)}
						<p className="text-sm font-medium ml-[-2px]">1k</p>
					</div>
					<div className="flex items-center">
						<TopNavIcon mx={0} Icon={BiShare} />
						<p className="text-sm font-medium ml-[-2px]">SHARE</p>
					</div>
					<div className="flex items-center">
						<TopNavIcon mx={0} Icon={BiShare} />
						<p className="text-sm font-medium ml-[-2px]">SAVE</p>
					</div>
					<TopNavIcon mx={0} Icon={BsThreeDotsVertical} />
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
							200k subscribers
						</p>
					</div>
				</div>

				<div className="flex items-center">
					<p className="mr-0.5 py-[8px] px-[18px] text-gray-color font-medium text-sm bg-[#0000000D] dark:text-dark-text dark:bg-dark-third cursor-pointer">
						SUBSCRIBED
					</p>
					<TopNavIcon Icon={BiLike} />
				</div>
			</div>
		</div>
	);
}
