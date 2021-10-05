import Image from 'next/image';
import Avatar from '../public/avatar.jpg';
import TopNavIcon from './TopNavIcon';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';

export default function VideoItem() {
	return (
		<div className="">
			<div className="relative w-full pb-[56.25%]">
				<Image className="object-cover" src={Avatar} layout="fill" />
				<p className="absolute flex bottom-1 right-1 px-1 tracking-wide leading-relaxed rounded-sm text-xs font-medium text-white bg-black">
					36:30
				</p>
			</div>

			<div className="flex items-start mt-3">
				<div className="relative w-9 h-9 mr-3">
					<Image
						className="object-cover rounded-full"
						src={Avatar}
						layout="fill"
					/>
				</div>

				<div className="flex-1 mr-2">
					<h3 className="font-bold">
						Lorem ipsum dolor sit amet Lordd sssum dolor sit amet em ipsu
					</h3>
					<p className="pt-1 text-sm text-[#606060] font-medium">
						Lorem ipsum dolor sit amet
					</p>
					<p className="text-sm text-[#606060] font-medium">144k views</p>
				</div>

				<TopNavIcon font="text-lg" mx={0} Icon={BsThreeDotsVertical} />
			</div>
		</div>
	);
}
