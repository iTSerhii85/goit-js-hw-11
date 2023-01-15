import axios from 'axios';
const axios = require('axios').default;

async function fetchPictures(name) {
    return await axios.get('https://pixabay.com/api/', {
        params: {
            key: '32843857-becb0ae38391759a35788f5eb',
            q: `${name}`,
            image_type: 'photo',
            safeSearch: 'true',
            pageLimit: '40',
        },
    })
}

export {fetchPictures};



// async function fetchPictures(name) {
//     const BASE_URL = 'https://pixabay.com/api';
//     const KEY = '32843857-becb0ae38391759a35788f5eb';
//     const safeSearch = true;
//     const pageLimit = '40';

//     const response = await fetch(`${BASE_URL}/?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=${safeSearch}&per_page=${pageLimit}`);
//     const pictures = await response.json();
//     return pictures;
// }
