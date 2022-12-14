import http from '../http-common';



class ApiService {
    constructor() {
        this.http = http;
        if (localStorage.getItem('token') != null) {
            this.http.defaults.headers.common['Authorization'] = localStorage.getItem('token').slice(1, -1);

        }
    }

    getEvents() {
        return this.http.get('/events');
    }

    getEvent(id) {

        return this.http.get('/events/event/' + id);
    }

    getMyEvents() {
        return this.http.get('/events/mine');
    }

    cancelEvent(id) {

        return this.http.post('/events/cancel/' + id);
    }

    participate(id) {
        return this.http.post('/events/participate/' + id);
    }

    put(path, data) {
        return this.http.put(path, data);
    }

    delete(path) {
        return this.http.delete(path);
    }

    createEvent(path, data) {
        return this.http.post(path, data);
    }

    login(param) {
        return this.http.post('/auth/signin', param);
    }

    signup(param) {
        return this.http.post('/auth/signup', param);
    }

    getParticipeEvent(){
        return this.http.get('/events/participations')
    }

    inviteByEmail(param, data){
        let config = {
            headers: {
                'Content-Type': 'text/plain;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        return this.http.post('/events/invite/' + param, data, config)
    }
}

export default new ApiService();