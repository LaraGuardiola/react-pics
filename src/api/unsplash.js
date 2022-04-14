import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ovCBcI4NQF1PuZV-56HDRiByJ0SXndeRgzslu4WbMIk'
    }
})