import react from 'react';
import apiService from "../service/api.service";
import Dropdown from './Dropdown';
import GroupIcon from '@mui/icons-material/Group';
import FaceIcon from '@mui/icons-material/Face';
import EuroIcon from '@mui/icons-material/Euro';


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
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <div
                className="absolute top-20 left-0 w-full px-10">
                <p className="text-xl text-center my-4">Liste des événements</p>

                <div
                    className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden">
                </div>
                <div className="relative grid gap-5 grid-cols-4">
                    {events.map((event) => {
                            console.log(event)
                            return (
                                <div
                                    className="flex flex-col justify-between text-left transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl">

                                    <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">

                                        <div className="stack">
                                            <img
                                                alt="Home"
                                                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                                className="h-56 w-full rounded-md object-cover"
                                            />
                                        </div>
                                        <div className="flex justify-end mb-2"></div>
                                        <div className="mt-2">
                                            <dl>
                                                <div className="flex">
                                                    <dt className="text-gray-500">Titre</dt>
                                                    <dd className="font-medium">&nbsp;: {event.title}</dd>
                                                    <div className="flex-1"></div>
                                                    <div><Dropdown id={event.id}/></div>
                                                </div>

                                                <div className="flex">
                                                    <dt className="text-gray-500">Adresse :&nbsp;</dt>
                                                    <dd className="font-medium flex-1">{event.address}, {event.city} {event.postalCode}</dd>
                                                </div>
                                            </dl>

                                            <div className="mt-6 flex items-center gap-8 text-xs">
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