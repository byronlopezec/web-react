export const dataGifAPI = async ({category}) => {
    const api_key = 'IeSlcE9JlBLhzpNlK7PPFQHfkvcg0mjY';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const imgs = data.map((item) => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium.url,

        }
    })
    return imgs;
}
