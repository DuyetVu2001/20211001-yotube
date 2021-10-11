import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';
import VideoItem from '../components/VideoItem';
import Categories from '../components/Categories';
import DescriptionVideo from '../components/DescriptionVideo';

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
