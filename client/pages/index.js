import { useContext } from 'react';
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

			{/* LIST VIDEOS */}
			<div
				className={`flex flex-wrap ${
					isDisplay ? 'ml-[240px] px-20' : 'ml-[72px] px-4'
				} pt-6 bg-[#F9F9F9]`}
			>
				<div
					className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} w-[25%] mb-10 px-2`}
				>
					<VideoItem />
				</div>
				<div
					className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} w-[25%] mb-10 px-2`}
				>
					<VideoItem />
				</div>
				<div
					className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} w-[25%] mb-10 px-2`}
				>
					<VideoItem />
				</div>
				<div
					className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} w-[25%] mb-10 px-2`}
				>
					<VideoItem />
				</div>
				<div
					className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} w-[25%] mb-10 px-2`}
				>
					<VideoItem />
				</div>
				<div
					className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} w-[25%] mb-10 px-2`}
				>
					<VideoItem />
				</div>
				<div
					className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} w-[25%] mb-10 px-2`}
				>
					<VideoItem />
				</div>
			</div>
		</div>
	);
}
