export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=gWTAM39HlVx76NdUpDDWnC9feXka5PPi`;
    const res = await fetch(url);
    const {data} = await res.json();


    const gifs = data.map(gif => {
        return {
            id:gif.id,
            title:gif.title,
            url:gif.images?.downsized_medium.url
        }
    });
    return gifs;
}