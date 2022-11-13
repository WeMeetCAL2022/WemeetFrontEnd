import {Link} from 'react-router-dom';
import React from "react";

export default function Header({
                                   heading,
                                   paragraph,
                                   linkName,
                                   linkUrl="/SignUp"
                               }){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img className="h-20 w-20 sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg" alt="Workflow"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                {paragraph} {' '}
                <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}