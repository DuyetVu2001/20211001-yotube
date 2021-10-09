import Image from 'next/image';
import Avatar from '../public/avatar.jpg';
import TopNavIcon from './TopNavIcon';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';

export default function VideoItem({ row }) {
	let containerClass = '';
	if (row) {
		containerClass = 'flex h-[94px] mt-[10px]';
	}

	return (
		<div className={containerClass}>
			<div className="relative aspect-16-9 bg-black">
				<Image className="object-cover" src={Avatar} layout="fill" />
				<p className="absolute flex bottom-1 right-1 px-1 tracking-wide leading-relaxed rounded-sm text-xs font-medium text-white bg-black">
					36:30
				</p>
			</div>

			<div className={`flex items-start ${row ? 'ml-2' : 'mt-3'}`}>
				{!row && (
					<div className="relative w-9 h-9 mr-3">
						<Image
							className="object-cover rounded-full"
							src={Avatar}
							layout="fill"
						/>
					</div>
				)}

				<div className="flex-1 mr-2">
					<h3 className={`${row && 'text-sm'} leading-5 font-bold`}>
						Lorem ipsum dolor sit amet Lordd sssum dolor sit
					</h3>
					<p
						className={`pt-1 ${
							row ? 'text-xs' : 'text-sm'
						} text-[#606060] font-medium`}
					>
						Lorem ipsum dolor sit amet
					</p>
					<p
						className={`${
							row ? 'text-xs' : 'text-sm'
						} text-[#606060] font-medium`}
					>
						144k views
					</p>
				</div>

				<TopNavIcon font="text-lg" mx={0} Icon={BsThreeDotsVertical} />
			</div>
		</div>
	);
}
