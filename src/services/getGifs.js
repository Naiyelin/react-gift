const API_KEY = "OnBgKyy177W707nikXACMnoPlCibYIxA";

async function getGifs({ keyword, limit } = {}) {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`

    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if(data.data.length !== 0) {
            const gifs = data.data.map((singleGif) => {
                const { id, title, images } = singleGif;
                const { url } = images.fixed_height;
    
                return { id, title, url };
            })
    
            return gifs;
        }


        return []
    } catch (error) {
        return error;
    }

}

export { getGifs }