import react from "react";
import InviteEvent from "../components/InviteEvent";
import apiService from "../service/api.service";

export default function InviteEventPage() {
    const id = window.location.pathname.split("/")[3];
    const [event, setEvent] = react.useState([]);

    react.useEffect(() => {
            apiService.getEvent(id).then(r => {
                console.log(r.data)
                setEvent(r.data);
            }).catch(e => {
                console.log("ERROR : " + e)
            })
        }
        , [id]);

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