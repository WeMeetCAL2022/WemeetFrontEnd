import React from "react";
import apiService from "../service/api.service";
import {countryList, EventFields} from "../constants/FormFields";

const fields = EventFields

export default function ModifyEvent() {

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

    }
    );

    const eventId = window.location.pathname.split("/")[3];


React.useEffect(() => {
        apiService.getEvent(eventId).then(r => {
            setEvent(r.data);
        })
    }
    , [eventId]);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(event);
        apiService.put('/events/edit/' + eventId, event).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEvent({...event, [name]: value});
    }



    return (
        <>

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
                                                placeholder={item.placeholder}
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
                                                    placeholder={event[item.id]}

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