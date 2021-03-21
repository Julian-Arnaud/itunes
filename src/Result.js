export async function itunesApiRequest(term) {
	const url = new URL('https://itunes.apple.com/search?media=music&attributeType=music&term='+term.replace(' ','+'));

	try {
		const response = await fetch(url);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error(error);
	}
}