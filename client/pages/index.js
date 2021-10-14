import axios from 'axios';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useContext, useState } from 'react';
import Categories from '../components/Categories';
import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';
import VideoItem from '../components/VideoItem';
import { IsDisplaySideBarContext } from '../context/IsDisplaySideBarContext';

export default function Home({ videos: videoList }) {
	const { isDisplay } = useContext(IsDisplaySideBarContext);
	const [videos, setVideos] = useState([...videoList]);

	// Theme
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div className="">
			<TopNav />
			<SideBar />

			<div
				className={`opacity-[0.97] fixed right-0 ${
					isDisplay ? 'left-[240px]' : 'left-[72px]'
				} z-30 py-3 border-t-[1px] border-b-[1px] border-[#ddd] dark:border-dark-border bg-white dark:bg-dark-second`}
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
				className={`flex flex-wrap mt-nav-height pt-6 ${
					isDisplay ? 'ml-[240px] px-20' : 'ml-[72px] px-4'
				} bg-[#F9F9F9] dark:bg-dark-main`}
			>
				{videos.map((video, index) => (
					<div
						key={index}
						className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}
					>
						<Link href="/detail">
							<a>
								<VideoItem video={video} />
							</a>
						</Link>
					</div>
				))}
				<button className="px-4 text-white bg-black" onClick={toggleTheme}>
					cai nut
				</button>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const res = await axios.get('http://localhost:4000/video');
	return {
		props: {
			videos: res.data.videos,
		},
	};
}
