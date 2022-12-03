import react from 'react';
import apiService from "../service/api.service";
import Dropdown from './Dropdown';
import GroupIcon from '@mui/icons-material/Group';
import FaceIcon from '@mui/icons-material/Face';
import EuroIcon from '@mui/icons-material/Euro';
import 'leaflet/dist/leaflet.css'
import PlaceIcon from '@mui/icons-material/Place';

import {MapContainer, TileLayer, Marker} from 'react-leaflet'

export default function EventList({isMyEvent}) {
    const [events, setEvents] = react.useState([]);
    const [loading, setLoading] = react.useState(true);
    const [error, setError] = react.useState(null);

    react.useEffect(() => {
            if (isMyEvent) {
                apiService.getMyEvents().then(async (response) => {
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
        <div
            className="px-10">
            {loading && <p>Loading...</p>}

            {isMyEvent && <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-8">
                Liste de mes
                <span className="text-purple-600"> events</span>
            </h1>}
            {!isMyEvent && <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-8">
                Liste des
                <span className="text-purple-600"> events</span>
            </h1>}

            {events.length < 1 &&
                <div className="text-center"><p className="text-red-600 text-xl">Aucun événement disponible pour le moment </p></div>}
            {error && <div className="text-center"><p>Nous avons rencontré une erreur : "{error.message}"</p></div>}

            <div className="flex flex-row flex-wrap gap-8 justify-evenly">
                {events.map((event) => {
                        let date = new Date(event.date)
                        let eventDate = date.getDate() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getFullYear()
                        let eventHeure = date.getHours() + ':' + date.getMinutes()

                        console.log("Event pos : " + event.latitude + " : " + event.longitude);
                        const position = [event.latitude, event.longitude]

                        return (
                            <div
                                className="basis-[30%] text-left transition-shadow
                                duration-200 rounded shadow-xl hover:shadow-2xl p-4 hover:shadow-indigo-300">
                                <div className="relative h-52">

                                    {event.state === 'CANCELLED' ?
                                        <>
                                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} zoomControl={false}
                                                  dragging={false}
                                                  className="h-full w-full blur ">

                                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                        <Marker position={position} key={PlaceIcon}></Marker>
                                    </MapContainer>
                                        <div
                                            className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
                                            <h3>Annulé</h3></div>
                                        </>:
                                        <>
                                        <MapContainer center={position} zoom={13} scrollWheelZoom={false} zoomControl={false}
                                                      dragging={false}
                                                      className="h-full w-full ">

                                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                            <Marker position={position} key={PlaceIcon}></Marker>
                                        </MapContainer>

                                        </>}
                                </div>
                                <div className="mt-4 text-slate-700">
                                    <div className="flex">
                                        <span className="text-gray-500">Titre</span>
                                        <span className="font-medium">&nbsp;: {event.title}</span>
                                        <div className="flex-1"></div>
                                        {(event.state !== 'CANCELLED' && isMyEvent) &&
                                            <div><Dropdown id={event.id}/></div>
                                        }
                                    </div>

                                    <div className="flex">
                                        <span className="text-gray-500">Adresse :&nbsp;</span>
                                        <span
                                            className="font-medium flex-1">{event.address}, {event.city} {event.postalCode}</span>
                                    </div>

                                    <div className="flex mt-2">
                                        <span className="text-gray-500">Date :&nbsp;</span>
                                        <span className="font-medium flex-1">{eventDate}</span>
                                    </div>

                                    <div className="flex mt-2">
                                        <span className="text-gray-500">Heure :&nbsp;</span>
                                        <span className="font-medium flex-1">{eventHeure}</span>
                                    </div>

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
                                <button
                                    className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    disabled={event.state === 'CANCELLED'}
                                    onClick={() => {
                                        window.location.href = "/event/" + event.id;
                                    }}>
                                    En savoir plus
                                </button>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}