import React, { useEffect, useRef, useState } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClick(ref, setIsDisplay) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsDisplay(false);
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideClick(props) {
	const [isDisplay, setIsDisplay] = useState(true);
	const wrapperRef = useRef(null);
	useOutsideClick(wrapperRef, setIsDisplay);

	return <div ref={wrapperRef}>{isDisplay && props.children}</div>;
}

export default OutsideClick;
