import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Comments from '../../components/videoPage/comments';
import VideoSection from '../../components/videoPage/VideoSection';
import { API } from '../../constant';
import useFetchCategories from '../../hooks/useFetchCategories';
import useFetchVideos from '../../hooks/useFetchVideos';
import VideoList from '../../components/videoPage/VideoList';

export default function Video({ video }) {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const [routerLoad, setRouterLoad] = useState(true);
	const [categoryBtnActive, setCategoryBtnActive] = useState('');
	const { data, loading, error } = useFetchVideos(`video?category=${query}`);
	const { data: categoryList, error: categoryError } = useFetchCategories();

	useEffect(() => {
		axios.put(API + 'video/up-view/' + video._id);
	}, []);

	useEffect(() => {
		if (!router.isReady) return;
		setRouterLoad(false);
		setQuery(() => router.query.category);
	}, [router.isReady]);

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	const handleClickCategory = (category) => {
		setCategoryBtnActive(category);
		setQuery(category);
		router.push(`${video.videoId}?category=${category}`, undefined, {
			shallow: true,
		});
	};

	const videoListProps = {
		id: video._id,
		routerLoad,
		data,
		loading,
		error,
		categoryList,
		categoryError,
		handleClickCategory,
		categoryBtnActive,
	};

	return (
		<div className="overflow-hidden bg-[#F9F9F9] dark:bg-dark-main">
			<Head>
				<title>{video.title}</title>
				<meta name="description" content={video.title} />
			</Head>

			<div className="min-w-[476px] max-w-[1754px] mx-auto px-6">
				<div className="flex pt-6">
					<div className="flex-grow 3md:pr-6">
						<VideoSection video={video} />

						{/* VIDEO LIST MOBILE */}
						<div className="3md:hidden">
							<VideoList {...videoListProps} />
						</div>

						<Comments videoId={video._id} />
					</div>

					{/* VIDEO LIST PC */}
					<div className="hidden 3md:block min-w-[300px] w-[402px]">
						<VideoList {...videoListProps} />
					</div>
				</div>
			</div>
		</div>
	);
}

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
