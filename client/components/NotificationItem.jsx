import Image from 'next/image';
import TopNavIcon from './TopNavIcon';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function NotificationItem({
	channelImg,
	content,
	time,
	thumbnail,
}) {
	console.log(thumbnail);

	return (
		<div className="flex items-start py-4 hover:bg-[#0000000d]">
			<div className="relative w-[48px] h-[48px] mx-4">
				<Image
					className="rounded-full object-cover"
					src={channelImg}
					layout="fill"
				/>
			</div>

			<div className="flex-1">
				<div className="font-medium text-sm">{content}</div>
				<div className="pt-1 text-[13px] text-gray-color">
					{time} minutes ago
				</div>
			</div>

			<div className="relative w-[86px] h-[50px]">
				<Image className="w-full object-cover" src={thumbnail} layout="fill" />
			</div>

			<TopNavIcon Icon={BsThreeDotsVertical} />
		</div>
	);
}
