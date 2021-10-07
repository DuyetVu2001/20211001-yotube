import { useContext } from 'react';
import { BsCollectionPlay } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { IoLibraryOutline } from 'react-icons/io5';
import { VscChevronDown } from 'react-icons/vsc';
import { IsDisplaySideBarContext } from '../context/IsDisplaySideBarContext';
import Avatar from '../public/avatar.jpg';
import SideBarItem from './SideBarItem';

export default function SideBar() {
	const { isDisplay } = useContext(IsDisplaySideBarContext);

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
				<div className="h-full w-60 pt-[7px] pr-4 overflow-auto">
					<SideBarItem large active Icon={HiHome} title="Home" />
					<SideBarItem large Icon={BsCollectionPlay} title="Explore" />
					<SideBarItem large Icon={BsCollectionPlay} title="Subscriptions" />
					<div className="h-[1px] my-3 bg-gray-200" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />
					<SideBarItem large Icon={VscChevronDown} title="Show more" />
					<div className="h-[1px] my-3 bg-gray-200" />

					<h4 className="pl-6 text-sm text-[#666] font-medium pb-2">
						SUBSCRIPTIONS
					</h4>
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />
					<SideBarItem large image={Avatar} title="Anh Ban Chat" />

					<div className="h-[1px] my-3 bg-gray-200" />
					<h4 className="pl-6 text-sm text-[#666] font-medium pb-2 uppercase">
						More from YouTube
					</h4>
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />

					<div className="h-[1px] my-3 bg-gray-200" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />
					<SideBarItem large Icon={IoLibraryOutline} title="Library" />

					<div className="h-[1px] my-3 bg-gray-200" />
				</div>
			)}
		</div>
	);
}