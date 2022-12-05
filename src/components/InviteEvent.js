import React from "react";
import ApiService from "../service/api.service";

export default function InviteEvent(props) {

    const [showModal, setShowModal] = React.useState(false);
    const [email, setEmail] = React.useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const {event} = props;
    let listParticipants;
    if (event.participants !== undefined) {
        listParticipants = event.participants;
    }

    return (
        <>
            <div className="py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 text-center">

                <button
                    className="rounded-md bg-gradient-to-l from-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:shadow-xl"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Inviter une personne
                </button>

                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div
                                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div
                                        className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Inviter une personne
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span
                                                className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                              ×
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <input
                                            id="email"
                                            type="email"
                                            onChange={handleChange}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </input>
                                    </div>
                                    <div
                                        className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Fermer
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => ApiService.inviteByEmail(event.id, {email}.email)}
                                        >
                                            Inviter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}

                <div className="max-w-screen-lg sm:mx-auto">
                    {listParticipants !== undefined ?
                        <h1 className="text-xl sm:text-xl font-bold text-slate-800 text-center my-8">
                            Aucune personne présente dans l'
                            <span className="text-purple-600">event</span>
                        </h1> :
                        <div
                            className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
                            <div className="mb-4 lg:mb-0">
                                <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                                    Nom prénom
                                </h5>
                            </div>
                            <div className="flex justify-start w-56 lg:justify-end">
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    Supprimer
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path
                                            d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>}
                </div>
            </div>
        </>
    )


}