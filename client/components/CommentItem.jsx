import Image from 'next/image';
import Avatar from '../public/avatar.jpg';
import TopNavIcon from './TopNavIcon';
import { BiDislike, BiLike, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function CommentItem() {
	return (
		<div className="flex items-start mb-1.5">
			<div className="relative w-10 h-10 mr-3">
				<Image
					className="rounded-full"
					src={Avatar}
					alt="avatar"
					layout="fill"
				/>
			</div>
			<div className="flex-1">
				<p className="">
					<span className="text-[13px] font-medium">Anh Ban NY</span>{' '}
					<span className="text-xs text-gray-color">10 months ago</span>
				</p>
				<div className="flex items-start">
					<p className="flex-1 text-sm">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas fuga
						voluptates asperiores magnam, et molestiae ad consequuntur assumenda
						nam voluptas maiores beatae nemo distinctio natus corrupti, ex
						blanditiis eius voluptatem?
					</p>
					<TopNavIcon mx={0} Icon={BsThreeDotsVertical} />
				</div>
				<div className="flex">
					<div className="flex items-center ml-[-10px]">
						<TopNavIcon mx={0} Icon={BiLike} />
						<p className="text-sm font-medium ml-[-2px]">1k</p>
					</div>
					<div className="flex items-center">
						<TopNavIcon mx={0} Icon={BiDislike} />
						<p className="text-sm font-medium ml-[-2px]">1k</p>
					</div>
				</div>
			</div>
		</div>
	);
}
