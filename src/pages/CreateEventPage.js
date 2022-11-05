import React from "react";
import CreateEvent from "../components/CreateEvent";



export default function CreateEventPage() {
    return (
        <>

            <h1 className="text-3xl font-extrabold  text-gray-900 sm:text-4xl">
                <span className="block">Creez votre event</span>
                <span className="block text-purple-600">en quelques clics</span>
            </h1>
            <CreateEvent/>
        </>
    )
}