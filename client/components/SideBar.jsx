import { useContext } from 'react';
import { BsCollectionPlay } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { IoLibraryOutline } from 'react-icons/io5';
import { VscChevronDown } from 'react-icons/vsc';
import { AuthContext } from '../contexts/AuthContext';
import { IsDisplaySideBarContext } from '../contexts/IsDisplaySideBarContext';
import SideBarItem from './SideBarItem';

export default function SideBar() {
	const { isDisplay } = useContext(IsDisplaySideBarContext);
	const { auth } = useContext(AuthContext);

	console.log(auth?.user);

	return (
		<div className="fixed top-nav-height left-0 bottom-0 dark:bg-dark-second">
			{/* SMALL SCREEN */}
			<div className="hidden md:block xl:hidden w-[72px]">
				<SideBarItem active Icon={HiHome} title="Home" />
				<SideBarItem Icon={BsCollectionPlay} title="Explore" />
				<SideBarItem Icon={BsCollectionPlay} title="Subscriptions" />
				<SideBarItem Icon={IoLibraryOutline} title="Library" />
			</div>

			{/* LARGE SCREEN */}
			<div className="hidden xl:block h-full w-60 pt-[7px] overflow-auto">
				<SideBarItem large active Icon={HiHome} title="Home" />
				<SideBarItem large Icon={BsCollectionPlay} title="Explore" />
				<SideBarItem large Icon={BsCollectionPlay} title="Subscriptions" />
				<div className="h-[1px] my-3 bg-gray-200 dark:bg-dark-border" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />
				<SideBarItem large Icon={VscChevronDown} title="Show more" />
				<div className="h-[1px] my-3 bg-gray-200 dark:bg-dark-border" />

				<h4 className="pl-6 text-sm text-[#666] font-medium pb-2 dark:text-dark-text">
					SUBSCRIPTIONS
				</h4>
				{auth?.user?.subscriptions?.map((sub) => (
					<SideBarItem large image={sub.avatar} title={sub.username} />
				))}

				<div className="h-[1px] my-3 bg-gray-200 dark:bg-dark-border" />
				<h4 className="pl-6 text-sm text-[#666] font-medium pb-2 uppercase dark:text-dark-text">
					More from YouTube
				</h4>
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />

				<div className="h-[1px] my-3 bg-gray-200 dark:bg-dark-border" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />
				<SideBarItem large Icon={IoLibraryOutline} title="Library" />

				<div className="h-[1px] my-3 bg-gray-200 dark:bg-dark-border" />
			</div>
		</div>
	);
}
