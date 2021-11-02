import VideoItem from '../VideoItem';

export default function VideoList(props) {
	const {
		id,
		routerLoad,
		data,
		loading,
		error,
		categoryList,
		categoryError,
		handleClickCategory,
		categoryBtnActive,
	} = props;

	return (
		<>
			<div className="w-full mt-6 overflow-auto">
				<div className="flex mb-2 gap-2">
					<p
						className={`flex-initial flex-shrink-0 leading-[30px] px-3 border-[1px] border-[#ccc] rounded-3xl text-sm dark:bg-white dark:text-black cursor-pointer ${
							categoryBtnActive === ''
								? 'text-white bg-[#000]'
								: 'text-black bg-[#eee] hover:bg-[#e2e2e2]'
						}`}
						onClick={() => handleClickCategory('')}
					>
						All
					</p>
					{!categoryError &&
						categoryList &&
						categoryList.map((category) => (
							<p
								key={category}
								className={`flex-initial flex-shrink-0 leading-[30px] px-3 border-[1px] border-[#ccc] rounded-3xl text-sm dark:bg-white dark:text-black cursor-pointer ${
									categoryBtnActive === category
										? 'text-white bg-[#000]'
										: 'text-black bg-[#eee] hover:bg-[#e2e2e2]'
								}`}
								onClick={() => handleClickCategory(category)}
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
					.filter((video) => video._id !== id)
					.map((video) => <VideoItem key={video._id} row video={video} />)
			)}
		</>
	);
}
