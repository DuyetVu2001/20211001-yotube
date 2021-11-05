import Image from 'next/image';
import Avatar from '../../../public/avatar.jpg';

export default function CommentInput({
	small,
	value,
	setValue,
	handleSubmit,
	hiddenInput,
	noCancel,
}) {
	return (
		<div className="flex items-start">
			<div className={`relative ${small ? 'w-6 h-6' : 'w-10 h-10'} mr-3`}>
				<Image
					className="rounded-full"
					src={Avatar}
					alt="avatar"
					layout="fill"
				/>
			</div>
			<div className="flex-1">
				<div className="border-b-[1px] border-[#999] dark:border-dark-border">
					<input
						className="w-full text-sm mb-1 placeholder-[#666] dark:placeholder-dark-text outline-none bg-transparent"
						type="text"
						placeholder="Add a public comment..."
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								if (!value) return;
								handleSubmit();
							}
						}}
					/>
				</div>
				<div className="flex justify-end mt-1.5">
					{!noCancel && (
						<div
							className="mr-0.5 py-[8px] px-[18px] text-gray-color font-medium text-sm dark:text-dark-text  cursor-pointer"
							onClick={() => hiddenInput && hiddenInput()}
						>
							CANCEL
						</div>
					)}
					<div
						className={`mr-0.5 py-[8px] px-[18px]  font-medium text-sm cursor-pointer ${
							value.length > 0
								? 'text-white bg-[#065FD4] dark:text-gray-900 dark:bg-[#3EA6FF]'
								: 'text-[#909090] bg-[#0000000D] dark:text-dark-text dark:bg-dark-third'
						} `}
						onClick={() => {
							if (!value) return;
							handleSubmit();
						}}
					>
						{small ? 'REPLY' : 'COMMENT'}
					</div>
				</div>
			</div>
		</div>
	);
}
