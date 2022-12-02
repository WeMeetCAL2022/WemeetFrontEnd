import http from '../http-common';

class MapApiService {
    constructor() {
        this.http = http;
    }

    async getLatLong(address) {
        console.log("GetLatLong() " + address)
        const response = await fetch('https://nominatim.openstreetmap.org/search?q=' + address + '&format=json');
        const data = await response.json();
        console.log(data)
        if(data.length < 1) {
            return {lat: 0, lon: 0};
        }
        return {lat: data[0].lat, lon: data[0].lon};
    }
}

export default new MapApiService();