import axios from 'axios';

async function fetchPictures(name, page = 1) {

    return await axios.get('https://pixabay.com/api/', {
        params: {
            key: '32843857-becb0ae38391759a35788f5eb',
            q: `${name}`,
            image_type: 'photo',
            safeSearch: 'true',
            page: `${page}`,
            per_page: '40',
        },
    })
}

export {fetchPictures};