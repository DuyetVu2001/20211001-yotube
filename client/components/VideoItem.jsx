import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Avatar from '../public/avatar.jpg';
import TopNavIcon from './TopNavIcon';
import Link from 'next/link';

export default function VideoItem({ row, video }) {
	const {
		title,
		videoId,
		user: { username, avatar },
	} = video;

	let containerClass = '';
	if (row) {
		containerClass = 'flex h-[94px] mt-[10px]';
	}

	return (
		<div className={containerClass}>
			<div className="relative aspect-16-9 bg-black">
				<Link href={`video/${videoId}`}>
					<a>
						<Image
							className="object-cover"
							src={`https://i.ytimg.com/vi/${videoId}/sddefault.jpg`}
							layout="fill"
						/>
						<p className="absolute flex bottom-1 right-1 px-1 tracking-wide leading-relaxed rounded-sm text-xs font-medium text-white bg-black">
							36:30
						</p>
					</a>
				</Link>
			</div>

			<div className={`flex items-start ${row ? 'ml-2' : 'mt-3'}`}>
				{!row && (
					<div className="relative w-9 h-9 mr-3">
						<Image
							className="object-cover rounded-full"
							src={avatar || Avatar}
							layout="fill"
						/>
					</div>
				)}

				<div className="flex-1 mr-2">
					<Link href={`video/${videoId}`}>
						<a>
							<h3 className={`${row && 'text-sm'} leading-5 font-bold`}>
								{title}
							</h3>
						</a>
					</Link>
					<p
						className={`pt-1 dark:text-dark-text ${
							row ? 'text-xs' : 'text-sm'
						} text-[#606060] font-medium`}
					>
						{username}
					</p>
					<p
						className={`${
							row ? 'text-xs' : 'text-sm'
						} text-[#606060] dark:text-dark-text font-medium`}
					>
						144k views
					</p>
				</div>

				<TopNavIcon font="text-lg" mx={0} Icon={BsThreeDotsVertical} />
			</div>
		</div>
	);
}
