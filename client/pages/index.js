import { useContext } from 'react';
import Categories from '../components/Categories';
import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';
import VideoItem from '../components/VideoItem';
import { IsDisplaySideBarContext } from '../context/IsDisplaySideBarContext';

export default function Home() {
	const { isDisplay } = useContext(IsDisplaySideBarContext);

	return (
		<div className="">
			<TopNav />
			<SideBar />

			<div
				className={`fixed right-0 ${
					isDisplay ? 'left-[240px]' : 'left-[72px]'
				} z-40 py-3 border-t-[1px] border-b-[1px] border-[#ddd] bg-white`}
			>
				{/* <div className="pl-6 overflow-auto">
					<Categories />
				</div> */}
				<div className="pl-6">
					<Categories />
				</div>
			</div>

			{/* LIST VIDEOS */}
			<div
				className={`flex flex-wrap mt-[60px] ${
					isDisplay ? 'ml-[240px] px-20' : 'ml-[72px] px-4'
				} bg-[#F9F9F9] pt-6`}
			>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
				<div className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}>
					<VideoItem />
				</div>
			</div>
		</div>
	);
}
