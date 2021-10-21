import SideBar from '../components/SideBar';

export default function Center() {
	return (
		<div className="flex flex-row flex-wrap py-4">
			{/* <div class="flex flex-row flex-wrap py-4">
				<aside class="w-full sm:w-1/3 md:w-1/4 px-2">
					<div class="sticky top-0 p-4 w-full">
						<ul class="flex flex-col overflow-hidden">...</ul>
					</div>
				</aside>
				<main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2"></main>
			</div> */}

			<div className="w-full sm:w-1/3 md:w-1/4 px-2">
				<div className="sticky top-0 bottom-0 left-0 h-screen p-4 w-full">
					<div className="h-full">
						<SideBar />
					</div>
				</div>
			</div>

			<div className="w-full sm:w-2/3 md:w-3/4 bg-green-500">
				<div className="w-full max-w-xs mx-auto sm:max-w-2xl">
					<div className="flex flex-wrap -mx-2">
						<div className="w-full sm:w-1/2 md:w-1/3 h-24 my-2 px-2">
							<div className="w-full sm:w-full h-full bg-white"></div>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 h-24 my-2 px-2">
							<div className="w-full sm:w-full h-full bg-white"></div>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 h-24 my-2 px-2">
							<div className="w-full sm:w-full h-full bg-white"></div>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 h-24 my-2 px-2">
							<div className="w-full sm:w-full h-full bg-white"></div>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 h-24 my-2 px-2">
							<div className="w-full sm:w-full h-full bg-white"></div>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 h-24 my-2 px-2">
							<div className="w-full sm:w-full h-full bg-white"></div>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 h-24 my-2 px-2">
							<div className="w-full sm:w-full h-full bg-white"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Center.getLayout = (page) => <>{page}</>;
