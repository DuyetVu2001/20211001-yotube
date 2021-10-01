import { FaBars, FaMicrophone, FaRegKeyboard, FaYoutube } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { BsBell } from 'react-icons/bs';
import Avatar from '../public/avatar.jpg';
import TopNavIcon from './TopNavIcon';

export default function TopNav() {
	return (
		<div className="flex-center justify-between p-2">
			{/* LEFT */}
			<div className="flex-center">
				<TopNavIcon className="pt-10" Icon={FaBars} />

				<div className="flex items-end ml-2">
					<FaYoutube className="relative text-red-500 text-3xl" />
					<h1 className="text-2xl font-bold">
						YouTube{' '}
						<span className="absolute text-sm font-normal text-gray-500">
							vn
						</span>
					</h1>
				</div>
			</div>

			{/* MID */}
			<div className="flex-center">
				{/* SEARCH */}
				<div className="flex-center mr-2 h-10 border">
					<input
						className="w-[600px] ml-2 outline-none bg-transparent"
						type="text"
						placeholder="Search"
					/>
					<FaRegKeyboard />
					<div className="flex-center justify-center ml-2 h-full w-14 border-l border-gray-600 bg-gray-200">
						<AiOutlineSearch />
					</div>
				</div>

				{/* MIC */}
				<TopNavIcon bg Icon={FaMicrophone} />
			</div>

			{/* RIGHT */}
			<div className="flex-center">
				<div className="">
					<TopNavIcon Icon={AiOutlineVideoCameraAdd} />
				</div>
				<TopNavIcon Icon={CgMenuGridO} />
				<TopNavIcon Icon={BsBell} />
				<div className="ml-3 rounded-full overflow-hidden">
					<img className="w-8 h-8" src={Avatar} alt="avatar" />
				</div>
			</div>
		</div>
	);
}
