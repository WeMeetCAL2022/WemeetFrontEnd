import React from "react";
import ModifyEvent from "../components/ModifyEvent";

export default function EditEventPage() {
    return (
        <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-8">
                Modifier l'
                <span className="text-purple-600">event</span>
            </h1>
            <ModifyEvent/>
        </div>
    )
}