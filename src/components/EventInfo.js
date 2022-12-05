import React from "react";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import PlaceIcon from "@mui/icons-material/Place";
import GroupIcon from "@mui/icons-material/Group";
import FaceIcon from "@mui/icons-material/Face";
import EuroIcon from "@mui/icons-material/Euro";


export default function EventInfo({event}) {
    let date = new Date(event.date)
    let eventDate = date.getDate() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getFullYear()
    let eventHeure = date.getHours() + ':' + date.getMinutes()

    console.log(event)
    const position = [event.latitude, event.longitude]
    return (
        //Show event details like product component with map on left and details on right
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: 400, width: 500}}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={PlaceIcon}/>
                    </MapContainer>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        {event.title}
                    </div>
                </div>
            </div>
        </div>
    )
}


