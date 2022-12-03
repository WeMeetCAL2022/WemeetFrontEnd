import React from "react";
import apiService from "../service/api.service";
import EventInfo from "../components/EventInfo";


export default function InfoEventPage() {
    const id = window.location.pathname.split("/")[2];
    const [event, setEvent] = React.useState([]);
    React.useEffect(() => {
        apiService.getEvent(id).then(r => {
            setEvent(r.data);
        })
    })
    return(
        <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-8">
                Information de l'
                <span className="text-purple-600">event</span>
            </h1>
            <EventInfo event={event}/>
        </div>
    )
}