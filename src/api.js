import axios from "axios";

    const searchImages =  async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
            Authorization: 'Client-ID bQu_S9tCeeeyHA7Z0Ib2fX29GQwu6BtvaC53xY123GQ',
            },
            params: {
                query: term,
            },
        });
        return response.data.results;
    };


export default searchImages;