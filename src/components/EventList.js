import react from 'react';
import apiService from "../service/api.service";
import Dropdown from './Dropdown';
import GroupIcon from '@mui/icons-material/Group';
import FaceIcon from '@mui/icons-material/Face';
import EuroIcon from '@mui/icons-material/Euro';
import mapService from "../service/openstreemap";
import 'leaflet/dist/leaflet.css'
import PlaceIcon from '@mui/icons-material/Place';

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export default function EventList({isMyEvent}) {
    const [events, setEvents] = react.useState([]);
    const [loading, setLoading] = react.useState(true);
    const [error, setError] = react.useState(null);

    react.useEffect(() => {
            if (isMyEvent) {
                apiService.getMyEvents().then(async (response) => {
                        for (let i = 0; i < response.data.length; i++) {
                            console.log('getLatLong');
                            const address = response.data[i].address;
                            const city = response.data[i].city;
                            console.log(address + " " + city)
                            await mapService.getLatLong(address + ' ' + city).then((l) => {
                                console.log(l);

                                response.data[i]['long'] = l.lon;
                                response.data[i]['lat'] = l.lat;
                            });

                        }
                        setEvents(response.data);
                        setLoading(false);
                    }
                ).catch((error) => {
                        setError(error);
                        setLoading(false);
                    }
                )
            } else {
                apiService.getEvents().then(async (response) => {
                        for (let i = 0; i < response.data.length; i++) {
                            console.log('getLatLong');
                            const address = response.data[i].address;
                            const city = response.data[i].city;
                            console.log(address + " " + city)
                            await mapService.getLatLong(address + ' ' + city).then((l) => {
                                console.log(l);

                                response.data[i]['long'] = l.lon;
                                response.data[i]['lat'] = l.lat;
                            });

                        }
                        console.log('setEvents');
                        console.log(response.data)
                        setEvents(response.data);
                        setLoading(false);

                    }
                ).catch((error) => {
                        setError(error);
                        setLoading(false);
                    }
                )
            }
        }
        , []);
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <div
                className="absolute top-20 left-0 w-full px-10">
                {isMyEvent && <p className="text-xl text-center my-4">Liste de mes événements </p>}
                {!isMyEvent && <p className="text-xl text-center my-4">Liste des événements </p>}
                <div
                    className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden">
                </div>
                <div className="relative flex flex-row flex-wrap gap-5 justify-evenly">
                    {events.map((event) => {
                            let date = new Date(event.date)
                            let eventDate = date.getDate() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getFullYear()
                            let eventHeure = date.getHours() + ':' + date.getMinutes()

                            console.log("Event pos : " + event.lat + " : " + event.long);
                            const position = [event.lat, event.long]

                            return (
                                <div
                                    className="basis-[24%] text-left transition-shadow duration-200 rounded shadow-xl hover:shadow-2xl">
                                    <a className="block rounded-lg p-4 shadow-sm shadow-indigo-100">

                                        <div className="relative">
                                            <div className="border-amber-300 w-full h-64">
                                                <MapContainer center={position} zoom={13} scrollWheelZoom={false} zoomControl={false} dragging={false}
                                                              className="h-full w-full">
                                                    <TileLayer
                                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                    />
                                                    <Marker position={position} key={PlaceIcon} ></Marker>
                                                </MapContainer>
                                            </div>
                                            {event.state === 'CANCELLED' && <div
                                                className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <h3>Annulé</h3></div>}
                                        </div>
                                        <div className="mt-4">
                                            <dl>
                                                <div className="flex">
                                                    <dt className="text-gray-500">Titre</dt>
                                                    <dd className="font-medium">&nbsp;: {event.title}</dd>
                                                    <div className="flex-1"></div>
                                                    {(event.state !== 'CANCELLED' && isMyEvent) &&
                                                        <div><Dropdown id={event.id}/></div>
                                                    }
                                                </div>

                                                <div className="flex">
                                                    <dt className="text-gray-500">Adresse :&nbsp;</dt>
                                                    <dd className="font-medium flex-1">{event.address}, {event.city} {event.postalCode}</dd>
                                                </div>

                                                <div className="flex mt-2">
                                                    <dt className="text-gray-500">Date :&nbsp;</dt>
                                                    <dd className="font-medium flex-1">{eventDate}</dd>
                                                </div>

                                                <div className="flex mt-2">
                                                    <dt className="text-gray-500">Heure :&nbsp;</dt>
                                                    <dd className="font-medium flex-1">{eventHeure}</dd>
                                                </div>
                                            </dl>

                                            <div className="mt-6 flex items-center gap-8 text-xs flex-wrap">
                                                <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                                    <GroupIcon/>
                                                    <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                        <p className="text-gray-500">Participants</p>

                                                        <p className="font-medium">{event.participants.length} / {event.maxParticipants}</p>
                                                    </div>
                                                </div>

                                                <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                                    <FaceIcon/>

                                                    <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                        <p className="text-gray-500">Organisateur</p>
                                                        <p className="font-medium">{event.organizer.firstName} {event.organizer.lastName}</p>
                                                    </div>
                                                </div>

                                                <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                                    <EuroIcon/>

                                                    <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                        <p className="text-gray-500">Prix</p>

                                                        <p className="font-medium">{event.price} € / pers.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        }
                    )}

                </div>

            </div>
        </>
    )
}