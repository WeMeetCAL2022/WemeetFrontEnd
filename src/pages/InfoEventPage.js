import React from "react";
import apiService from "../service/api.service";
import EventInfo from "../components/EventInfo";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import PlaceIcon from "@mui/icons-material/Place";
import GroupIcon from "@mui/icons-material/Group";
import FaceIcon from "@mui/icons-material/Face";
import EuroIcon from "@mui/icons-material/Euro";


export default function InfoEventPage() {
    const id = window.location.pathname.split("/")[2];
    const [event, setEvent] = React.useState({
            "id": 0,
            "title": "",
            "description": "",
            "date": "",
            "time": "",
            "city": "",
            "address": "",
            "postalCode": "",
            "country": "",
            "price": 0,
            "isPublic": false,
            "maxParticipants": 0,
            "participants": [],
            "organizer": {
            },
        "co_organizers": [],
        longitude: 0,
        latitude: 0,



        }
    );
    React.useEffect(() => {
            apiService.getEvent(id).then(r => {
                setEvent(r.data);
            })
        }
    , [id]);


    return (
        <>
        <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold text-center text-gray-700">Event Details</p>
            <div className="flex flex-col items-center justify-center">
                <EventInfo event={event}/>
            <div/>
        </div>
        </div>
        </>
)
}