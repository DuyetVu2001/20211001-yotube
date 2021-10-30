import axios from 'axios';
import useSWR from 'swr';
import { API } from '../constant';

const fetcher = async (url) => {
	const res = await axios.get(API + url);
	return res.data.comments;
};

export default function useFetchComment(videoId) {
	const { data, error } = useSWR(`comment/${videoId}`, fetcher);

	return {
		data,
		loading: !error && !data,
		error,
	};
}
