import { useState } from 'react';

export default function TopNavIcon({ Icon, bg, font, size, mx }) {
	const [isBackground, setIsBackground] = useState(false);

	return (
		<div
			className={`flex-center justify-center ${mx >= 0 ? 'mx-' + mx : 'mx-1'} ${
				size ? 'w-' + size + ' ' + 'h-' + size : 'w-10 h-10'
			} rounded-full ${
				isBackground
					? 'bg-gray-200 dark:bg-dark-third'
					: bg && 'bg-gray-50 dark:bg-dark-main'
			}`}
			onMouseDown={() => setIsBackground(true)}
			onMouseUp={() => setIsBackground(false)}
		>
			<Icon className={`${font || 'text-xl'}`} />
		</div>
	);
}
