import axios from 'axios';

export default axios.create({
    baseURL: 'https://infinite-dusk-97347.herokuapp.com/wemeet/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*',
    }
});