const tenorApi = 'AIzaSyDvss4Ia0gh8lW8UeZzDxd6uA9O-yBzNn8'

export const getGifs = async (category, animeName) =>{
    const req = `https://tenor.googleapis.com/v2/search?q=${category+' '+animeName}&key=${tenorApi}&client_key=_app&limit=8`
    const resp = await fetch(req);
    const data = await resp.json();
    return data
} 