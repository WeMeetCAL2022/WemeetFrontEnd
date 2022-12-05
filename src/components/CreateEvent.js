import React, {useState} from "react";
import ApiService from "../service/api.service";
import {EventFields,countryList} from "../constants/FormFields";

const field = EventFields;
let fieldsState = {};
field.forEach((item) => {fieldsState[item.id] = ""});

export default function CreateEvent() {
    const [fields, setFields] = useState(fieldsState);
    const [error, setError] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        let formError = false;
        if(fields['isPublic'].length === 0) {
            fields['isPublic'] = false;
        }

        Object.keys(fields).forEach((fieldName,i) => {
            console.log(fieldName + ':' + fields[fieldName]);
            if(fieldName !== 'co_organizers' && fieldName !== 'participants' && fields[fieldName].length === 0) {
                formError = true;
            }
        });
        if(formError) {
            setError('Veuillez renseigner tous les champs')
            return;
        }
        const json = JSON.stringify(fields);

        ApiService.createEvent("/events/create",JSON.parse(json)).then(r =>
            r.status===201? window.location.href = "/myevents": window.location.reload());
        //redirect to my events

    }

    return (
        <form className="mt-8 space-y-3 shadow-2xl rounded-lg p-10">
            <div className="space-y-px ">
                {error && <div role="alert" className="mt-8">
                    <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                        Erreur
                    </div>
                    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        <p> {error} </p>
                    </div>
                </div>}
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