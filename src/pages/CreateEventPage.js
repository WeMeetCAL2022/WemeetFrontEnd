import React from "react";
import CreateEvent from "../components/CreateEvent";



export default function CreateEventPage() {
    return (
        <div className="flex flex-col flex-wrap my-8">

            <h1 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
                Creez votre event
                <span className="block text-purple-600">en quelques clics</span>
            </h1>
            <CreateEvent/>
        </div>
    )
}