import React from "react";
import ApiService from "../service/api.service";

export default function CreateEvent() {
    const [date, setDate] = React.useState("");
    const [state, setState] = React.useState("");
    const [city, setCity] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [postalCode, setPostalCode] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [organizer, setOrganizer] = React.useState("");
    const [coOrganizer, setCoOrganizer] = React.useState("");
    const [attendees, setAttendees] = React.useState("");
    const [visibility, setVisibility] = React.useState("");
    const [maxParticipants, setMaxParticipants] = React.useState("");

    // send data to backend in json format
/*    ApiService.createEvent({
        date: date,
        state: state,
        city: city,
        address: address,
        postalCode: postalCode,
        country: country,
        price: price,
        description: description,
        organizer: organizer,
        coOrganizer: coOrganizer,
        attendees: attendees,
        visibility: visibility,
        maxParticipants: maxParticipants
    }).then((response) => {
        console.log(response);
    }
    ).catch((error) => {
        console.log(error);
    }
    )*/


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, state, city, address, postalCode, country, price, description, organizer, coOrganizer, attendees, visibility, maxParticipants);
    }

    return (

        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                        Date
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="date" type="date" placeholder="Date" value={date} onChange={e => setDate(e.target.value)}>
                    </input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                        Etat
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="state" type="text" placeholder="State" value={state} onChange={e => setState(e.target.value)}>
                    </input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                        Ville
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city" type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)}>
                    </input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                        Adresse
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address" type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}>
                    </input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalCode">
                        Code postal
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="postalCode" type="text" placeholder="Postal Code" value={postalCode} onChange={e => setPostalCode(e.target.value)}>
                    </input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                        Pays
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="country" type="text" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)}>
                    </input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Prix
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price" type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)}>
                    </input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description" type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizer">
                        Organisateur
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="organizer" type="text" placeholder="Organizer" value={organizer} onChange={e => setOrganizer(e.target.value)}>
                    </input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coOrganizer">
                        Co-organisateur
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="coOrganizer" type="text" placeholder="Co-organizer" value={coOrganizer} onChange={e => setCoOrganizer(e.target.value)}>
                    </input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attendees">
                        Participants
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="attendees" type="text" placeholder="Attendees" value={attendees} onChange={e => setAttendees(e.target.value)}>
                    </input>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                        Créer
                    </button>
                </div>
            </form>
        </div>
    );
}