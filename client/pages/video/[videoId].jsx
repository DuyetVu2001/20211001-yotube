import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CommentItem from '../../components/CommentItem';
import DescriptionVideo from '../../components/DescriptionVideo';
import VideoItem from '../../components/VideoItem';
import { API } from '../../constant';
import useFetchCategories from '../../hooks/useFetchCategories';
import useFetchVideos from '../../hooks/useFetchVideos';
import Avatar from '../../public/avatar.jpg';

export default function Video({ video }) {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const [routerLoad, setRouterLoad] = useState(true);
	const { data, loading, error } = useFetchVideos(`video?category=${query}`);
	const { data: categoryList, error: categoryError } =
		useFetchCategories('video/categories');

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
		<>
			<Head>
				<title>{video.title}</title>
				<meta name="description" content={video.title} />
			</Head>

			<div className="bg-[#F9F9F9] dark:bg-dark-main">
				{/* <div className="flex pt-6 w-[1706px] mx-auto"> */}
				<div className="flex pt-6 mx-auto">
					<div className="flex-1">
						<iframe
							className="w-full aspect-16-9"
							// width="1280"
							// height="720"
							src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>

						<DescriptionVideo title={title} user={user} />

						{/*  */}
						<div className="">
							<RightSide data={rightSideData} />
						</div>

						{/* COMMENTS */}
						<div className="">
							<div className="">
								<p className="my-6 font-medium">200 Comments</p>
								<div className="flex items-start mb-8">
									<div className="relative w-10 h-10 mr-3">
										<Image
											className="rounded-full"
											src={Avatar}
											alt="avatar"
											layout="fill"
										/>
									</div>
									<div className="flex-1 border-b-[1px] border-[#999] dark:border-dark-border">
										<input
											className="w-full text-sm mb-1 placeholder-[#666] dark:placeholder-dark-text outline-none bg-transparent"
											type="text"
											placeholder="Add a public comment..."
										/>
									</div>
								</div>
							</div>

							<CommentItem />
							<CommentItem />
							<CommentItem />
							<CommentItem />
							<CommentItem />
						</div>
					</div>

					<div className="hidden w-[402px]">
						<RightSide data={rightSideData} />
					</div>
				</div>
			</div>
		</>
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
			<div className="w-full overflow-auto">
				<div className="flex gap-2">
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
