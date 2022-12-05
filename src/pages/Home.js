import React from "react";

export default function Home() {
    return (<>
        <div className="w-full">
            <div className="relative bg-purple-700">
                <div className="absolute inset-x-0 bottom-0">
                    <svg
                        viewBox="0 0 224 12"
                        fill="currentColor"
                        className="w-full -mb-1 text-white"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"/>
                    </svg>
                </div>
                <div
                    className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                <span className="relative inline-block px-2">
                                    <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400"/>
                                <span className="relative text-cyan-100"> WeMeet, </span>
                                    votre gestionnaire d'événement dans toute la France !
                                </span>
                        </h2>
                        <p className="mb-6 text-base text-indigo-100 md:text-lg">
                            Vous chercher des événements près de chez vous ? Créer votre propre événement ou rejoigner
                            ceux de vos amis gratuitement ! N'hésitez pas a vous inscrire pour profiter de toutes les
                            fonctionnalité de WeMeet !
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-lg sm:text-center sm:mx-auto">
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Retrouvez nous également en version mobile
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        N'hésitez pas à télécharger notre nouvelle application 'WeMeet' pour rester au courant des nouveaux événements !
                    </p>
                    <hr className="my-8 border-gray-300"/>
                    <div className="flex items-center mb-3 sm:justify-center">
                        <a href="/" className="mr-3 transition duration-300 hover:shadow-lg">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                                className="object-cover object-top w-32 mx-auto"
                                alt=""
                            />
                        </a>
                        <a href="/" className="transition duration-300 hover:shadow-lg">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                                className="object-cover object-top w-32 mx-auto"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Dream Team
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Voici note talentueuse équipe WeMeet
                    </h2>
                </div>
                <div
                    className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                    <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Tarek Houamed</p>
                                <p className="mb-4 text-xs text-gray-800">Product Manager</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://media-exp1.licdn.com/dms/image/C4D03AQHj74LzjxPHoQ/profile-displayphoto-shrink_400_400/0/1625577151864?e=1675900800&v=beta&t=pfkBJfAyDgVRoKS6P0ZoPBAesfC4FDUnufBeZZqAPv4"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Julien Michot</p>
                                <p className="mb-4 text-xs text-gray-800">Scrum Master</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://media-exp1.licdn.com/dms/image/C4E03AQEBV-QaNKUoZg/profile-displayphoto-shrink_400_400/0/1662207116929?e=1675900800&v=beta&t=Y597km2SDUI5qs4wB0BTKzNtVBghyOqFoDFK4UZxPCQ"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Manal Laghmich</p>
                                <p className="mb-4 text-xs text-gray-800">Developper</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://media-exp1.licdn.com/dms/image/C4D03AQE3V9l_2j852A/profile-displayphoto-shrink_400_400/0/1540895983211?e=1675900800&v=beta&t=GsY7SrWUb-0jw4dKiqxnlTXWwQO_yTPNLCzr6mOcltU"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Nouria Ait Kheddach</p>
                                <p className="mb-4 text-xs text-gray-800">Developper</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://media-exp1.licdn.com/dms/image/C4E03AQHSB2VOWFlzrg/profile-displayphoto-shrink_400_400/0/1585691208280?e=1675900800&v=beta&t=7fWnDTvS-wrsgc1UNUAbWC-mt4WpDKsUurLlz4zgQsQ"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Antoine Kozlov</p>
                                <p className="mb-4 text-xs text-gray-800">Developper</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://media-exp1.licdn.com/dms/image/C4D03AQGvl5n9ZiBATw/profile-displayphoto-shrink_400_400/0/1658972996598?e=1675900800&v=beta&t=99u3mneuhEhz1xwZTGQGyxFIIYk9LA6b9sEXF9IBsN4"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Hatim M'rabet El Khomssi</p>
                                <p className="mb-4 text-xs text-gray-800">Developper</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://media-exp1.licdn.com/dms/image/C4D03AQEVmBkpSXU8lA/profile-displayphoto-shrink_400_400/0/1587917622249?e=1675900800&v=beta&t=HdpcutiQJtYIi8H85--fD5b8s88Z5pjVeZqIbKoGVV8"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Antoine Pochet</p>
                                <p className="mb-4 text-xs text-gray-800">Developper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}