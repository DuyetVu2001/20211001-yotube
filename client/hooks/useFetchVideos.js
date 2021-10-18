import axios from 'axios';
import useSWR from 'swr';
import { API } from '../constant';

const fetcher = async (url) => {
	const res = await axios.get(API + url);
	return res.data.videos;
};

export default function useFetchVideos(url) {
	const { data, error } = useSWR(url, fetcher);

	return {
		data,
		loading: !error && !data,
		error,
	};
}
