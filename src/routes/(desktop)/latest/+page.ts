export const load = async ({ fetch }) => {
	const response = await fetch('latest.json');
	const data = await response.json();

	const latest = data.latestPost;
	const latest_week = data.week;

	const latest_post = await fetch(latest);
	const post = await latest_post.json();

	const selectedObject = post.find((/** @type {{ week: any; }} */ obj) => obj.week === latest_week);

	return selectedObject;
};

export const prerender = false;
export const csr = true;
