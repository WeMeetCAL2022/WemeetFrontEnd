import React from "react";
import InviteEvent from "../components/InviteEvent";
import apiService from "../service/api.service";

export default function InviteEventPage() {
    const id = window.location.pathname.split("/")[3];
    const [event, setEvent] = React.useState([]);
    React.useEffect(() => {
        apiService.getEvent(id).then(r => {
            setEvent(r.data);
        })
    })

    return (
        <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center my-8">
                Inviter des personnes à l'
                <span className="text-purple-600">event</span>
            </h1>
            <InviteEvent event={event}/>
        </div>
    )
}