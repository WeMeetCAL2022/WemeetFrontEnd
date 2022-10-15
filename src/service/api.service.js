import http from '../http-common';

class ApiService {
    constructor() {
        this.http = http;
    }
    
    

    get(path) {
        return this.http.get(path);
    }

    post(path, data) {
        return this.http.post(path, data);
    }

    put(path, data) {
        return this.http.put(path, data);
    }

    delete(path) {
        return this.http.delete(path);
    }

    createEvent(param) {
        
    }
}

export default new ApiService();