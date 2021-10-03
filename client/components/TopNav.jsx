import { FaBars, FaMicrophone, FaRegKeyboard, FaYoutube } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { BsBell } from 'react-icons/bs';
import Avatar from '../public/avatar.jpg';
import TopNavIcon from './TopNavIcon';
import Image from 'next/image';

export default function TopNav() {
	return (
		<div className="flex-center justify-between p-2">
			{/* LEFT */}
			<div className="flex-center">
				<TopNavIcon className="pt-10" Icon={FaBars} />

				<div className="flex ml-2">
					<FaYoutube className="relative text-red-500 text-3xl" />
					<h1 className="text-xl font-semibold tracking-[-2px]">
						YouTube{' '}
						<span className="absolute top-[8px] text-xs font-normal tracking-[0] text-gray">
							vn
						</span>
					</h1>
				</div>
			</div>

			{/* MID */}
			<div className="flex-center">
				{/* SEARCH */}
				<div className="flex-center mr-2 h-10 border border-gray-400">
					<input
						className="w-[560px] mx-2 outline-none bg-transparent"
						type="text"
						placeholder="Search"
					/>
					<FaRegKeyboard />
					<div className="flex-center justify-center ml-3 h-full w-16 border-l border-gray-400 bg-gray-50">
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
				<div className="relative w-8 h-8 ml-3">
					<Image
						className="rounded-full"
						src={Avatar}
						alt="avatar"
						layout="fill"
					/>
				</div>
			</div>
		</div>
	);
}
