import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/wemeet/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hbEBnbWFpbC5jb20iLCJleHAiOjE2NjgzNzM1NjYsImlhdCI6MTY2ODMzNzU2Nn0.t7NKYVbLKfI6JpIKQUhSNlDqHRh2RDn4NHfxJFGyQv4'
    }


});