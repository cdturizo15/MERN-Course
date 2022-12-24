
export const getGifs = async (category) =>{
    const req = `https://api.giphy.com/v1/gifs/search?api_key=J2YIpcY9h6G1h2EoIDCTelUn7LTZEDDg&q=${category}`
    const resp = await fetch(req);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
} 


