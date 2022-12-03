import React from "react";
import ApiService from "../service/api.service";
import {EventFields,countryList,visibility} from "../constants/FormFields";

const field = EventFields;
let fieldsState = {};
field.forEach((item) => {fieldsState[item.id] = ""});
console.log(fieldsState);

export default function CreateEvent() {
    const [fields, setFields] = React.useState(fieldsState);

    const handleSubmit = (event) => {
        event.preventDefault();
        const json = JSON.stringify(fields);
        console.log(json);

        ApiService.createEvent("/events/create",JSON.parse(json)).then(r =>
            r.status==201? window.location.href = "/myevents": window.location.reload());
        //redirect to my events

    }

    return (
        <form className="mt-8 space-y-3 shadow-2xl rounded-lg p-10">
            <div className="space-y-px ">
                {field.map((item) => {
                        return (
                            <div key={item.id}>

                                <div className="flex mt-4 justify-center">
                                    {item.type === "select"? (
                                        <select
                                            id={item.id}
                                            name={item.name}
                                            type={item.type}
                                            autoComplete={item.autoComplete}
                                            required={item.isRequired}
                                            placeholder={item.placeholder}
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                            onChange={(e) => setFields({...fields, [e.target.name]: e.target.value})}
                                        >
                                            {(countryList.map((country) => {
                                                    return (
                                                        <option key={country} value={country}>{country}</option>
                                                    )
                                                }))}
                                        </select>
                                    ):(<>
                                        <input
                                            id={item.id}
                                            name={item.id}
                                            type={item.type}
                                            autoComplete={item.id}
                                            placeholder={item.placeholder}

                                            required
                                            className={item.id==="isPublic"?"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600":
                                                "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}
                                            onChange={(e) => setFields({...fields, [e.target.name]: item.type === "checkbox" ? e.target.checked : e.target.value})}
                                            // if type name is price then add min value
                                            min={item.min}
                                        />
                                            {item.type === "checkbox" ?
                                                <label
                                                    for={item.id}
                                                    className={"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"}>
                                                    {item.name}
                                                </label>
                                            :<></>}
                                    </>
                                    )}
                                </div>

                            </div>

                        )
                    }


                )}

                <div className="flex justify-center pt-4">
                    <button className={"bg-gradient-to-l from-purple-600 to-indigo-600 w-full hover:bg-purple-700 text-white  font-bold py-2 px-2 rounded"}  onClick={handleSubmit}>Créer</button>
                </div>
            </div>
        </form>

    );

}