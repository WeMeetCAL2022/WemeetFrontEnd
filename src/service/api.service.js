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
        console.log("laaaa", data)
        //return this.http.post(path, {title: "foot",date: "2022-11-08",city: "lille",address: "4 rue des postes", postalCode: "59000", country: "France", price: "2", isPublic: false, maxParticipants: "5", description: "match de foot entre amis" });
        return this.http.post(path, data);
    }

    login(param) {
        return this.http.post('/auth/signin', param);
    }
}

export default new ApiService();