import React from "react";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import PlaceIcon from "@mui/icons-material/Place";
import GroupIcon from "@mui/icons-material/Group";
import FaceIcon from "@mui/icons-material/Face";
import EuroIcon from "@mui/icons-material/Euro";


export default function EventInfo(props) {
    const {event} = props;
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
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} zoomControl={false}
                              dragging={false}
                              className="h-full w-full">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={position} key={PlaceIcon}></Marker>
                </MapContainer>

            </div>
            <div className="mt-4 text-slate-700">
                <div className="flex">
                    <span className="text-gray-500">Titre</span>
                    <span className="font-medium">&nbsp;: {event.title}</span>
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
        </div>
    );
}