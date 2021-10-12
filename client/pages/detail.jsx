import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';
import VideoItem from '../components/VideoItem';
import Categories from '../components/Categories';
import DescriptionVideo from '../components/DescriptionVideo';
import CommentItem from '../components/CommentItem';
import Avatar from '../public/avatar.jpg';
import Image from 'next/image';

export default function Detail() {
	return (
		<div className="">
			<TopNav />
			{/* <SideBar /> */}

			<div className="bg-[#F9F9F9]">
				<div className="flex pt-6 w-[1706px] mx-auto">
					<div className="flex-1 pr-6">
						<div className="">
							<iframe
								width="1280"
								height="720"
								src="https://www.youtube.com/embed/iORWC-hZeX8"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>

						<DescriptionVideo />

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
									<div className="flex-1 border-b-[1px] border-[#999]">
										<input
											className="w-full text-sm mb-1 placeholder-[#666] outline-none bg-transparent"
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
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
						<VideoItem row video={{ title: 'Nothing' }} />
					</div>
				</div>
			</div>
		</div>
	);
}
