import axios, { AxiosResponse } from "axios";

interface Reponse {
	ret: number;
	msg: string;
}
export async function fetch(url: string, req: string) {
	const base_url = "";
	const res = await axios.get(base_url + url, {
		params: {
			req
		}
	});

	return res;
}
