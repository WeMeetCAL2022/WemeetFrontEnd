import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/wemeet/',
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hbEBnbWFpbC5jb20iLCJleHAiOjE2Njc3MDEzOTEsImlhdCI6MTY2NzY2NTM5MX0.gEhfrIL_W7CX3ylQ7c75_tPoTQHpB71-LWh7L68EAh4'
    }


});