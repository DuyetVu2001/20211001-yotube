import { useState } from 'react';
import { BsCollectionPlay } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { IoLibraryOutline } from 'react-icons/io5';
import SideBarItem from './SideBarItem';
import Avatar from '../public/avatar.jpg';

export default function SideBar() {
	const [isDisplay, setIsDisplay] = useState(true);

	return (
		<div className="fixed top-nav left-0 bottom-0">
			{/* SMALL SCREEN */}
			{!isDisplay && (
				<div className="w-[72px]">
					<SideBarItem active Icon={HiHome} title="Home" />
					<SideBarItem Icon={BsCollectionPlay} title="Explore" />
					<SideBarItem Icon={BsCollectionPlay} title="Subscriptions" />
					<SideBarItem Icon={IoLibraryOutline} title="Library" />
				</div>
			)}

			{/* LARGE SCREEN */}
			{isDisplay && (
				<div className="w-60 pr-4">
					<SideBarItem large active Icon={HiHome} title="Home" />
					<SideBarItem large Icon={BsCollectionPlay} title="Explore" />
					<SideBarItem large Icon={HiHome} title="Subscriptions" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />

					<div className="h-[1px] my-3 bg-gray-200" />

					<SideBarItem
						large
						image={Avatar}
						title="Anh Ban Hoc Di Xem Tiktok cai doub"
					/>
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />

					<div className="h-[1px] my-3 bg-gray-200" />
					<h4 className="text-sm font-medium pb-2">SUBSCRIPTIONS</h4>
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
				</div>
			)}
		</div>
	);
}
