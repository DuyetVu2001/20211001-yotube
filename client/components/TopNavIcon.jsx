import { useState } from 'react';

export default function TopNavIcon({ Icon, bg }) {
	const [isBackground, setIsBackground] = useState(false);

	return (
		<div
			className={`flex-center justify-center mx-1 w-10 h-10 rounded-full ${
				isBackground ? 'bg-gray-200' : bg && 'bg-gray-50'
			}`}
			onMouseDown={() => setIsBackground(true)}
			onMouseUp={() => setIsBackground(false)}
		>
			<Icon className="text-xl" />
		</div>
	);
}
