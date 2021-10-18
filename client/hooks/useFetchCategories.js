import axios from 'axios';
import useSWR from 'swr';
import { API } from '../constant';

const fetcher = async (url) => {
	const res = await axios.get(API + url);
	return res.data.categories;
};

export default function useFetchCategories(url) {
	const { data, error } = useSWR(url, fetcher);

	return {
		data,
		loading: !error && !data,
		error,
	};
}
