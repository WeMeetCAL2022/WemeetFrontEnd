import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/wemeet/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hbEBnbWFpbC5jb20iLCJleHAiOjE2Njg2Mjc4MDIsImlhdCI6MTY2ODU5MTgwMn0.eHOfeZcTGQA-e35mz9Fcy8CzxeitDR3THEfa9-5djFc'
    }


});