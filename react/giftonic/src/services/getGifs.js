
export const getGifs = async (category) =>{
    const req = `https://api.giphy.com/v1/gifs/search?api_key=M6Vu5giW93uteNJfyuIKYw8JsK6NVKHj&q=${category}`
    const resp = await fetch(req);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
} 


