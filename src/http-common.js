import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/wemeet/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*',
    }
});