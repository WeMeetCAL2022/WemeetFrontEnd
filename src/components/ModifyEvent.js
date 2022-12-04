import React, {useState} from "react";
import apiService from "../service/api.service";
import {countryList, EventFields} from "../constants/FormFields";

const fields = EventFields

export default function ModifyEvent() {

    const [event, setEvent] = useState({
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

        }
    );

    const [error, setError] = useState();

    const eventId = window.location.pathname.split("/")[3];


    React.useEffect(() => {
            apiService.getEvent(eventId).then(r => {
                const dt = new Date(r.data.date);
                r.data.date = dt.toISOString().substring(0, 10);
                r.data.time = dt.getHours() + ':' + ('0'+dt.getMinutes().toString()).slice(-2);
                setEvent(r.data);
            })
        }
        , [eventId]);


    const handleSubmit = (e) => {
        e.preventDefault();
        let formError = false;
        Object.keys(event).forEach((fieldName,i) => {
            if(fieldName !== 'co_organizers' && fieldName !== 'participants' && event[fieldName].length === 0) {
                formError = true;
            }
        });
        if(formError) {
            setError('Veuillez renseigner tous les champs')
            return;
        }

        apiService.put('/events/edit/' + eventId, event).then((response) => {
            window.location.href = "/myevents";
        }).catch((error) => {
            setError('Veuillez renseigner tous les champs')
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEvent({...event, [name]: value});
    }


    return (
        <>
            {error && <div role="alert" className="mt-8">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    Erreur
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p> {error} </p>
                </div>
            </div>}
            <form className="mt-8 space-y-3 shadow-2xl rounded-lg p-10">
                <div className="space-y-px ">
                    {fields.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="flex mt-4 justify-center">
                                        {item.type === "select" ? (
                                            <select
                                                id={item.id}
                                                name={item.name}
                                                type={item.type}
                                                autoComplete={item.autoComplete}
                                                required={item.isRequired}
                                                value={event[item.id]}
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                                onChange={handleChange}
                                            >
                                                {(countryList.map((country) => {
                                                    return (
                                                        <option key={country} value={country}>{country}</option>
                                                    )
                                                }))}
                                            </select>
                                        ) : (<>
                                                <input
                                                    id={item.id}
                                                    name={item.id}
                                                    type={item.type}
                                                    autoComplete={item.id}
                                                    value={event[item.id]}

                                                    required
                                                    className={item.id === "isPublic" ? "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" :
                                                        "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}
                                                    onChange={handleChange}
                                                    // if type name is price then add min value
                                                    min={item.min}
                                                />
                                                {item.type === "checkbox" ?
                                                    <label
                                                        htmlFor={item.id}
                                                        className={"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"}>
                                                        {item.name}
                                                    </label>
                                                    : <></>}
                                            </>
                                        )}
                                    </div>

                                </div>

                            )
                        }
                    )}

                    <div className="flex justify-center pt-4">
                        <button
                            className={"bg-gradient-to-l from-purple-600 to-indigo-600 w-full hover:bg-purple-700 text-white  font-bold py-2 px-2 rounded"}
                            onClick={handleSubmit}
                        >
                            Modifier
                        </button>
                    </div>
                </div>
            </form>
        </>
    )


}