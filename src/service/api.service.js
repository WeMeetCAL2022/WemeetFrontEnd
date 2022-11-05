import http from '../http-common';

class ApiService {
    constructor() {
        this.http = http;
    }
    
    

    getEvents() {
        return this.http.get('/events');
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
}

export default new ApiService();