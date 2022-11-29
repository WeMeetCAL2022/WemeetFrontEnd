import React from "react";

export default function Navbar() {
    const token = localStorage.getItem('token');

    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }
    
    return(
        <header aria-label="Site Header" className="bg-white shadow ">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg" alt="Workflow"/>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        {token ? (
                        <nav aria-label="Site Nav" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm ">
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/events"
                                    >
                                        Évènements
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/myevents"
                                    >
                                        Mes évènements
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/event/create"
                                    >
                                        Créer un évènement
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="rounded-md bg-gradient-to-l from-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:shadow-xl"
                                        href="/"
                                        onClick={logout}
                                    >
                                        Se déconnecter
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        ) : (
                        <div className="flex items-center gap-4 text-violet">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-gradient-to-l from-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:shadow-xl"
                                    href="/signup"
                                >
                                    S'inscrire
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-violet"
                                        href="/login"
                                    >
                                        Se connecter
                                    </a>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}