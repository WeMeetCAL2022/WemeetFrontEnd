import axios from 'axios';

export default axios.create({
    baseURL: 'https://arcane-castle-91734.herokuapp.com/wemeet/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*',
    }
});