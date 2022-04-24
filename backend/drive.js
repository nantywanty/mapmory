const fetch = require('node-fetch');

async function getMetaData(_, { accessToken, id }) {
    const response = await fetch(
        'https://www.googleapis.com/drive/v3/files/' + id + '?fields=imageMediaMetadata',
        {
            method: 'GET',
            headers: { Authorization:'Bearer '+accessToken }
        }   
    )

    var data = await response.json();
    // console.log(data);

    var obj = {
        location: null,
        date: null,
    };
    try {
        obj = {
            location: {
                lat: data.imageMediaMetadata.location.latitude,
                lng: data.imageMediaMetadata.location.longitude
            },
            date: data.imageMediaMetadata.time,
        }
    } catch {
        
    }
    // console.log(obj);
    return obj;
}

module.exports = { getMetaData };

