import Image from 'next/image';

export default function SideBarItem({
	large,
	color,
	space,
	pl,
	active,
	Icon,
	image,
	title,
}) {
	return (
		<>
			{/* SMALL SCREEN */}
			{!large && (
				<div
					className={`flex flex-col items-center justify-center w-[72px] h-[72px] cursor-pointer ${
						active ? 'bg-[#E5E5E5]' : 'hover:bg-[#0000000d]'
					}`}
				>
					<Icon className="text-2xl" />
					<p className="text-[10px] mt-1">{title}</p>
				</div>
			)}

			{/* LARGE SCREEN */}
			{large && (
				<div
					className={`flex items-center w-full h-10 ${
						pl == 'sm' ? 'pl-4' : 'pl-6'
					} cursor-pointer ${active ? 'bg-[#E5E5E5]' : 'hover:bg-[#0000000d]'}`}
				>
					<div className="w-9">
						{Icon ? (
							<Icon className="text-2xl" color={color || 'black'} />
						) : (
							<div className="relative w-6 h-6">
								<Image className="rounded-full" layout="fill" src={image} />
							</div>
						)}
					</div>
					<p className={`flex-1 ${space === 'sm' ? 'ml-0' : 'ml-3'} text-sm`}>
						{title}
					</p>
				</div>
			)}
		</>
	);
}
