import { useEffect, useState } from 'react';

export default function useClickOutside(ref) {
	const [isDisplay, setIsDisplay] = useState(false);

	useEffect(() => {
		// hidden if clicked on outside of element
		const handleClickOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				isDisplay && setIsDisplay(false);
			}
		};
		// Bind the event listener
		document.addEventListener('mouseup', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mouseup', handleClickOutside);
		};
	}, [ref, isDisplay]);

	return [isDisplay, setIsDisplay];
}
