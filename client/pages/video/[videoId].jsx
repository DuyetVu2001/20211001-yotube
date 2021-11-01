import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Comments from '../../components/comments';
import DescriptionVideo from '../../components/DescriptionVideo';
import VideoItem from '../../components/VideoItem';
import { API } from '../../constant';
import useFetchCategories from '../../hooks/useFetchCategories';
import useFetchVideos from '../../hooks/useFetchVideos';

export default function Video({ video }) {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const [routerLoad, setRouterLoad] = useState(true);
	const { data, loading, error } = useFetchVideos(`video?category=${query}`);
	const { data: categoryList, error: categoryError } = useFetchCategories();

	useEffect(() => {
		if (!router.isReady) return;
		setRouterLoad(false);
		setQuery(() => router.query.category);
	}, [router.isReady]);

	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	const { videoId, title, user } = video;

	const handleClick = (category) => {
		setQuery(category);
		router.push(`${video.videoId}?category=${category}`, undefined, {
			shallow: true,
		});
	};

	const rightSideData = {
		routerLoad,
		data,
		loading,
		error,
		categoryList,
		categoryError,
		videoId,
		handleClick,
	};

	return (
		<div className="overflow-hidden bg-[#F9F9F9] dark:bg-dark-main">
			<Head>
				<title>{video.title}</title>
				<meta name="description" content={video.title} />
			</Head>

			<div className="min-w-[476px] max-w-[1754px] mx-auto px-6">
				<div className="flex pt-6">
					<div className="flex-grow-1 3md:pr-6">
						{/* <iframe
							className="w-full aspect-16-9"
							src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/> */}

						<DescriptionVideo
							id={video._id}
							title={title}
							user={user}
							likes={video.likes}
							dislikes={video.dislikes}
						/>

						{/*  */}
						<div className="3md:hidden">
							<RightSide data={rightSideData} />
						</div>

						{/* COMMENT SECTION */}
						<Comments videoId={video._id} />
					</div>

					<div className="hidden 3md:block min-w-[300px] max-w-[402px]">
						<RightSide data={rightSideData} />
					</div>
				</div>
			</div>
		</div>
	);
}

export const RightSide = ({ data: propData }) => {
	const {
		routerLoad,
		data,
		loading,
		error,
		categoryList,
		categoryError,
		videoId,
		handleClick,
	} = propData;

	return (
		<>
			<div className="w-full mt-6 overflow-auto">
				<div className="flex mb-2 gap-2">
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
			{loading || routerLoad ? (
				<h2>Loading...</h2>
			) : (
				!error &&
				data &&
				data
					.filter((video) => video.videoId !== videoId)
					.map((video) => <VideoItem key={video._id} row video={video} />)
			)}
		</>
	);
};

export async function getStaticPaths() {
	const res = await axios.get(API + 'video');
	const paths = res.data.videos.map((video) => ({
		params: { videoId: `${video.videoId}` },
	}));

	return { paths, fallback: true };
}

export async function getStaticProps(context) {
	const { params } = context;
	const res = await axios.get(API + 'video/' + params.videoId);
	return {
		props: {
			video: res.data.video,
		},
		revalidate: 10,
	};
}
