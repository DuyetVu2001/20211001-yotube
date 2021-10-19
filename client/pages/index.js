import axios from 'axios';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import VideoItem from '../components/VideoItem';
import { API } from '../constant';
import { IsDisplaySideBarContext } from '../context/IsDisplaySideBarContext';
import useFetchCategories from '../hooks/useFetchCategories';

export default function Home({ videos: videoList }) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [videos, setVideos] = useState(videoList);
	const { isDisplay } = useContext(IsDisplaySideBarContext);
	const { data: categoryList, error: categoryError } =
		useFetchCategories('video/categories');

	useEffect(() => {
		if (videos) setLoading(false);
	}, []);

	const handleClick = async (category) => {
		setLoading(true);
		const res = await axios.get(API + 'video?category=' + category);
		setVideos(res.data.videos);
		setLoading(false);

		router.push(`?category=${category}`, undefined, {
			shallow: true,
		});
	};

	// Theme
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	if (loading) return <h1>Loading...</h1>;

	return (
		<>
			<SideBar />

			<div
				className={`opacity-[0.97] fixed right-0 ${
					isDisplay ? 'left-[240px]' : 'left-[72px]'
				} z-30 py-3 border-t-[1px] border-b-[1px] border-[#ddd] dark:border-dark-border bg-white dark:bg-dark-second`}
			>
				<div className="pl-6 flex gap-3">
					<p
						className={`flex-initial flex-shrink-0 leading-[30px] px-3 border-[1px] border-[#ccc] rounded-3xl text-white text-sm bg-[#000] dark:bg-white dark:text-black cursor-pointer`}
						onClick={() => handleClick('')}
					>
						All
					</p>
					{!categoryError &&
						categoryList &&
						categoryList.map((category) => (
							<p
								key={category}
								className={`flex-initial flex-shrink-0 leading-[30px] px-3 border-[1px] border-[#ccc] rounded-3xl text-white text-sm bg-[#000] dark:bg-white dark:text-black cursor-pointer`}
								onClick={() => handleClick(category)}
							>
								{category}
							</p>
						))}
				</div>
			</div>

			{/* LIST VIDEOS */}
			<div
				className={`flex flex-wrap mt-nav-height pt-6 ${
					isDisplay ? 'ml-[240px] px-20' : 'ml-[72px] px-4'
				} bg-[#F9F9F9] dark:bg-dark-main`}
			>
				{videos.map((video) => (
					<div
						key={video._id}
						className={`${!isDisplay ? 'w-[20%]' : 'w-[25%]'} mb-10 px-2`}
					>
						<VideoItem video={video} />
					</div>
				))}
				<button className="px-4 text-white bg-black" onClick={toggleTheme}>
					cai nut
				</button>
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	const { query } = context;
	const { category } = query;
	const queryString = category ? `category=${category}` : '';
	const res = await axios.get(API + 'video?' + queryString);
	return {
		props: {
			videos: res.data.videos,
		},
	};
}

// export async function getStaticProps() {
// 	const res = await axios.get(API + 'video');
// 	return {
// 		props: {
// 			videos: res.data.videos,
// 		},
// 		revalidate: 10,
// 	};
// }

// Home.getLayout = (page) => <>{page}</>;
