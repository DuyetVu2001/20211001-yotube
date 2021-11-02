import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { API } from '../constant';
import { AuthContext } from '../contexts/AuthContext';

const check = (arr, userId) => arr.includes(userId);

export default function useHandleLike({ type = 'video', likes, dislikes, id }) {
	const { auth } = useContext(AuthContext);
	const [isLike, setIsLike] = useState(false);
	const [isDislike, setIsDislike] = useState(false);
	const [countLikes, setCountLikes] = useState(likes.length);
	const [countDislikes, setCountDislikes] = useState(dislikes.length);

	useEffect(() => {
		if (!auth?.user?._id) return;
		setIsLike(check(likes, auth?.user?._id));
		setIsDislike(check(dislikes, auth?.user?._id));
	}, [auth?.user?._id]);

	const handleLikeClick = async (action) => {
		await axios.put(`${API}${type}/${action}/${id}`);

		if (action === 'like') {
			if (isLike) {
				setIsLike(false);
				setCountLikes((state) => state - 1);
			} else if (isDislike) {
				setIsLike(true);
				setCountLikes((state) => state + 1);
				setIsDislike(false);
				setCountDislikes((state) => state - 1);
			} else {
				setIsLike(true);
				setCountLikes((state) => state + 1);
			}
		} else {
			if (isDislike) {
				setIsDislike(false);
				setCountDislikes((state) => state - 1);
			} else if (isLike) {
				setIsDislike(true);
				setCountDislikes((state) => state + 1);
				setIsLike(false);
				setCountLikes((state) => state - 1);
			} else {
				setIsDislike(true);
				setCountDislikes((state) => state + 1);
			}
		}
	};

	return {
		isLike,
		isDislike,
		countLikes,
		countDislikes,
		handleLikeClick,
	};
}
