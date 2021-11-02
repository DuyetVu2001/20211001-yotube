import { useState } from 'react';

export default function IconButton({ Icon, bg, size }) {
	const [isBackground, setIsBackground] = useState(false);

	return (
		<div
			className={`flex-center justify-center ${
				size
					? size === 'md'
						? 'w-9 h-9'
						: size === 'sm' && 'w-8 h-8'
					: 'w-10 h-10'
			} rounded-full ${
				isBackground
					? 'bg-gray-200 dark:bg-dark-third'
					: bg && 'bg-gray-50 dark:bg-dark-main'
			}`}
			onMouseDown={() => setIsBackground(true)}
			onMouseUp={() => setIsBackground(false)}
		>
			<Icon
				className={`${
					!size || (size && size === 'md')
						? 'text-xl'
						: size === 'sm' && 'text-[16px]'
				}`}
			/>
		</div>
	);
}
