import react from 'react';
import apiService from "../service/api.service";


export default function EventList() {
    const [events, setEvents] = react.useState([]);
    const [loading, setLoading] = react.useState(true);
    const [error, setError] = react.useState(null);

    react.useEffect(() => {
        apiService.getEvents().then((response) => {
            setEvents(response.data);
            setLoading(false);
        }
        ).catch((error) => {
            setError(error);
            setLoading(false);
        }
        )
    }
    , []);

    return (
        <>
            <p>EventList</p>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {events.map((event) => {
                return (
                    <div key={event.id}>
                        <p>{event.title}</p>
                    </div>
                )
            }
            )}
        </>
    )
}