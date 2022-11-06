import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/wemeet/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hbEBnbWFpbC5jb20iLCJleHAiOjE2Njc3NjYzNDksImlhdCI6MTY2NzczMDM0OX0.2-pnCj-0l6WAl_kUykpVborbzejcggWrq2TbA3EIAhA'
    }


});