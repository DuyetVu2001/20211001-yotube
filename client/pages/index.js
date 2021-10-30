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
	const { data: categoryList, error: categoryError } = useFetchCategories();

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

	if (loading) return <h1>Loading...</h1>;

	return (
		<div>
			<SideBar />

			{/* CATEGORIES */}
			<div
				className={`left-0 top-nav-height md:left-[72px] xl:left-[240px] opacity-[0.97] fixed right-0 z-30 py-3 border-t-[1px] border-b-[1px] border-[#ddd] dark:border-dark-border bg-white dark:bg-dark-second`}
			>
				<div className="pl-6 flex gap-3">
					<p
						className={`leading-[30px] px-3 border-[1px] border-[#ccc] rounded-3xl text-white text-sm bg-[#000] dark:bg-white dark:text-black cursor-pointer`}
						onClick={() => handleClick('')}
					>
						All
					</p>
					{!categoryError &&
						categoryList &&
						categoryList.map((category) => (
							<p
								key={category}
								className={`leading-[30px] px-3 border-[1px] border-[#ccc] rounded-3xl text-white text-sm bg-[#000] dark:bg-white dark:text-black cursor-pointer`}
								onClick={() => handleClick(category)}
							>
								{category}
							</p>
						))}
				</div>
			</div>

			{/* LIST VIDEOS */}
			<div className="md:ml-[72px] xl:ml-[240px] mt-nav-height pt-6 bg-[#F9F9F9] dark:bg-dark-main">
				<div
					className={`max-w-[320px] mx-auto sm:max-w-[670px] 2md:max-w-[1002px] lg:max-w-[1500px]`}
				>
					<div className="flex flex-wrap -mx-2 2md:mx-4">
						{videos.map((video) => (
							<div
								key={video._id}
								className={`sm:w-1/2 2md:w-1/3 lg:w-1/4 mb-10 px-2`}
							>
								<VideoItem video={video} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
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
