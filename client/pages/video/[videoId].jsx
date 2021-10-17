import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Categories from '../../components/Categories';
import CommentItem from '../../components/CommentItem';
import DescriptionVideo from '../../components/DescriptionVideo';
import TopNav from '../../components/TopNav';
import VideoItem from '../../components/VideoItem';
import Avatar from '../../public/avatar.jpg';

export default function Video({ video, listVideo = [] }) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	const { videoId, title, user } = video;

	return (
		<div className="">
			<TopNav />

			<div className="bg-[#F9F9F9] dark:bg-dark-main">
				<div className="flex pt-6 w-[1706px] mx-auto">
					<div className="flex-1 pr-6">
						<iframe
							width="1280"
							height="720"
							src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>

						<DescriptionVideo title={title} user={user} />

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

					<div className="w-[402px]">
						<div className="w-full overflow-auto">
							<Categories sm />
						</div>
						{listVideo
							.filter((video) => video.videoId !== videoId)
							.map((video) => (
								<VideoItem key={video._id} row video={video} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const res = await axios.get('http://localhost:4000/video');
	const paths = res.data.videos.map((video) => ({
		params: { videoId: `${video.videoId}` },
	}));

	return { paths, fallback: true };
}

export async function getStaticProps(context) {
	const { params } = context;
	const res = await axios.get('http://localhost:4000/video/' + params.videoId);
	const resListVideo = await axios.get('http://localhost:4000/video');

	return {
		props: {
			video: res.data.video,
			listVideo: resListVideo.data.videos,
		},
		revalidate: 10,
	};
}
