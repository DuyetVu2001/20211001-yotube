import Image from 'next/image';

export default function NotificationItem({
	channel,
	content,
	time,
	thumbnail,
}) {
	return (
		<div className="">
			<div className="relative w-[38px] h-[38px]">
				<Image
					className="rounded-full object-cover"
					src={channel}
					layout="fill"
				/>
			</div>

			<div className="">
				<div className="">{content}</div>
				<div className="">{time}</div>
			</div>

			<div className="relative w-[86px]">
				<Image className="object-cover" src={thumbnail} layout="fill" />
			</div>
		</div>
	);
}
