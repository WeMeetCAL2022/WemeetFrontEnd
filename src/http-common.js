import axios from 'axios';

export default axios.create({
    //baseURL: 'https://arcane-castle-91734.herokuapp.com/wemeet/',
    baseURL: 'http://localhost:8080/wemeet/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*',
    }
});