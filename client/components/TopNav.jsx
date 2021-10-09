import Image from 'next/image';
import { useContext, useRef, useState } from 'react';
import {
	AiOutlinePlaySquare,
	AiOutlineSearch,
	AiOutlineVideoCameraAdd,
} from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';
import { BsBell } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';
import { FaBars, FaMicrophone, FaRegKeyboard, FaYoutube } from 'react-icons/fa';
import { IsDisplaySideBarContext } from '../context/IsDisplaySideBarContext';
import useClickOutside from '../hooks/useClickOutside';
import Avatar from '../public/avatar.jpg';
import NotificationItem from './NotificationItem';
import SideBarItem from './SideBarItem';
import TopNavIcon from './TopNavIcon';

export default function TopNav() {
	const { toggleIsDisplay } = useContext(IsDisplaySideBarContext);
	const [voicePopupDisplay, setVoicePopupDisplay] = useState(false);
	const videoRef = useRef(null);
	const menuRef = useRef(null);
	const bellRef = useRef(null);
	const personalRef = useRef(null);
	const [videoDisplay, setVideoDisplay] = useClickOutside(videoRef);
	const [menuDisplay, setMenuDisplay] = useClickOutside(menuRef);
	const [bellDisplay, setBellDisplay] = useClickOutside(bellRef);
	const [personalDisplay, setPersonalDisplay] = useClickOutside(personalRef);

	return (
		<div className="sticky top-0 left-0 right-0 z-40 h-nav flex-center justify-between pl-3 pr-10 bg-white">
			{/* LEFT */}
			<div className="flex-center">
				<div onClick={() => toggleIsDisplay()}>
					<TopNavIcon className="pt-10" Icon={FaBars} />
				</div>

				<div className="flex ml-2">
					<FaYoutube className="relative text-red-500 text-3xl" />
					<h1 className="text-xl font-semibold tracking-[-2px]">
						YouTube{' '}
						<span className="absolute top-[8px] text-xs font-normal tracking-[0] text-gray-color">
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
						className="w-[530px] mx-2 outline-none bg-transparent"
						type="text"
						placeholder="Search"
					/>
					<FaRegKeyboard />
					<div className="flex-center justify-center ml-3 h-full w-16 border-l border-gray-400 bg-gray-50">
						<AiOutlineSearch />
					</div>
				</div>

				{/* MIC */}
				<div onClick={() => setVoicePopupDisplay(true)}>
					<TopNavIcon bg Icon={FaMicrophone} />
				</div>
			</div>

			{/* VOICE POPUP */}
			{voicePopupDisplay && (
				<div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center">
					<div
						className="absolute w-full h-full bg-black opacity-75"
						onClick={() => setVoicePopupDisplay(false)}
					/>
					<div className="relative top-3 w-[590px] h-[420px] bg-white">
						<div
							className="absolute top-3 right-3"
							onClick={() => setVoicePopupDisplay(false)}
						>
							<TopNavIcon Icon={IoCloseOutline} />
						</div>
						<p className="text-2xl font-medium pt-12 pl-6">Listening...</p>
						<div className="absolute left-0 bottom-12 w-full flex justify-center">
							<div className="flex items-center justify-center rounded-full w-16 h-16 bg-red-600">
								<FaMicrophone className="text-2xl text-white" />
							</div>
						</div>
					</div>
				</div>
			)}
			{/* RIGHT */}
			<div className="flex-center">
				<div ref={videoRef} className="relative">
					<div onMouseUp={() => setVideoDisplay(!videoDisplay)}>
						<TopNavIcon Icon={AiOutlineVideoCameraAdd} />
					</div>

					{videoDisplay && (
						<div className="absolute left-0 w-[180px] py-2 bg-white shadow">
							<SideBarItem
								large
								pl="sm"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
							<SideBarItem
								large
								pl="sm"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Upload video"
							/>
						</div>
					)}
				</div>

				<div ref={menuRef} className="relative">
					<div onMouseUp={() => setMenuDisplay(!menuDisplay)}>
						<TopNavIcon Icon={CgMenuGridO} />
					</div>

					{menuDisplay && (
						<div className="absolute right-0 w-[220px] py-2 bg-white shadow">
							<SideBarItem
								large
								pl="sm"
								color="red"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
							<div className="h-[1px] my-2 bg-[#ddd]" />
							<SideBarItem
								large
								pl="sm"
								color="red"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
							<SideBarItem
								large
								pl="sm"
								color="red"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Upload video"
							/>
							<div className="h-[1px] my-2 bg-[#ddd]" />
							<SideBarItem
								large
								pl="sm"
								color="red"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
							<SideBarItem
								large
								pl="sm"
								color="red"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Upload video"
							/>
						</div>
					)}
				</div>

				<div ref={bellRef} className="relative">
					<div onMouseUp={() => setBellDisplay(!bellDisplay)}>
						<TopNavIcon Icon={BsBell} />
					</div>

					{bellDisplay && (
						<div className="absolute right-0 w-[478px] bg-white shadow">
							<div className="flex items-center justify-between h-12 shadow">
								<p className="ml-4 text-lg font-medium">Notifications</p>
								<TopNavIcon Icon={AiOutlinePlaySquare} />
							</div>
							<div className="max-h-[590px] overflow-auto">
								<NotificationItem
									channelImg={Avatar}
									content="dsf dsf sdf sdf sdf dsf sdf dsf sdf d"
									time="8"
									thumbnail={Avatar}
								/>
								<NotificationItem
									channelImg={Avatar}
									content="dsf dsf sdf sdf sdf dsf sdf dsf sdf d"
									time="8"
									thumbnail={Avatar}
								/>
								<NotificationItem
									channelImg={Avatar}
									content="dsf dsf sdf sdf sdf dsf sdf dsf sdf d"
									time="8"
									thumbnail={Avatar}
								/>
								<NotificationItem
									channelImg={Avatar}
									content="dsf dsf sdf sdf sdf dsf sdf dsf sdf d sdf sdf dsf sdf dsf sdf d sdf sdf dsf sdf dsf sdf d"
									time="8"
									thumbnail={Avatar}
								/>
								<NotificationItem
									channelImg={Avatar}
									content="dsf dsf sdf sdf sdf dsf sdf dsf sdf d sdf sdf dsf sdf dsf sdf d sdf sdf dsf sdf dsf sdf d"
									time="8"
									thumbnail={Avatar}
								/>
								<NotificationItem
									channelImg={Avatar}
									content="dsf dsf sdf sdf sdf dsf sdf dsf sdf d sdf sdf dsf sdf dsf sdf d sdf sdf dsf sdf dsf sdf d"
									time="8"
									thumbnail={Avatar}
								/>
								<NotificationItem
									channelImg={Avatar}
									content="dsf dsf sdf sdf sdf dsf sdf dsf sdf d"
									time="8"
									thumbnail={Avatar}
								/>
								<NotificationItem
									channelImg={Avatar}
									content="dsf dsf sdf sdf sdf dsf sdf dsf sdf d"
									time="8"
									thumbnail={Avatar}
								/>
								<NotificationItem
									channelImg={Avatar}
									content="dsf dsf sdf sdf sdf dsf sdf dsf sdf d"
									time="8"
									thumbnail={Avatar}
								/>
								<NotificationItem
									channelImg={Avatar}
									content="dsf dsf sdf sdf sdf dsf sdf dsf sdf d"
									time="8"
									thumbnail={Avatar}
								/>
							</div>
						</div>
					)}
				</div>

				<div ref={personalRef} className="relative">
					<div onMouseUp={() => setPersonalDisplay(!personalDisplay)}>
						<div className="relative w-8 h-8 ml-3">
							<Image
								className="rounded-full"
								src={Avatar}
								alt="avatar"
								layout="fill"
							/>
						</div>
					</div>

					{personalDisplay && (
						<div className="absolute top-9 right-0 w-[300px] pb-2 bg-white shadow">
							<div className="p-4 flex items-center">
								<div className="relative w-10 h-10 mr-4">
									<Image
										className="rounded-full"
										src={Avatar}
										alt="avatar"
										layout="fill"
									/>
								</div>

								<div className="">
									<p className="text-lg font-medium">Vũ Ngọc Duyệt</p>
									<p className="mt-1 text-sm text-blue-color">
										Manage your Google Account
									</p>
								</div>
							</div>
							<div className="h-[1px] mb-2 bg-[#ddd]" />
							<SideBarItem
								large
								pl="sm"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
							<SideBarItem
								large
								pl="sm"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
							<SideBarItem
								large
								pl="sm"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
							<div className="h-[1px] my-2 bg-[#ddd]" />
							<SideBarItem
								large
								pl="sm"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
							<SideBarItem
								large
								pl="sm"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
							<SideBarItem
								large
								pl="sm"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
							<div className="h-[1px] my-2 bg-[#ddd]" />
							<SideBarItem
								large
								pl="sm"
								space="sm"
								Icon={AiOutlinePlaySquare}
								title="Go live"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
