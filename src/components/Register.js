import React from "react";
import {signupFields} from "../constants/FormFields";
import ApiService from "../service/api.service";


const field = signupFields;
let fieldsState = {};
field.forEach((item) => {
    fieldsState[item.id] = ""
});

export default function Register() {
    const [fields, setFields] = React.useState(fieldsState);
    const [error, setError] = React.useState();
    const [passwordError, setPasswordError] = React.useState();
    const handleChange = (event) => {
        setFields({...fields, [event.target.id]: event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const password = fields['password'];
        const confimPassword = fields['confirm-password'];
        setPasswordError(null)
        if(password.length < 6) {
            setPasswordError('Le mot de passe doit contenir 6 caractères')
        }
        if (password !== confimPassword) {
            setPasswordError('Les mots de passes ne sont pas identiques')
        } else {
            const f = JSON.stringify({
                firstName: fields['firstName'],
                lastName: fields['lastName'],
                email: fields['email'],
                city: fields['city'],
                password: fields['password']
            })
            ApiService.signup(JSON.parse(f)).then(r => {
                window.location.href = "/login";
            }).catch(e => {
                setError('Erreur lors de la création du compte')
            })
        }
    }

    return (
        <>
            <div>
                {error && <div role="alert" className="mt-8">
                    <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                        Erreur
                    </div>
                    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        <p> {error} </p>
                    </div>
                </div>
                }
                <form className="mt-8 space-y-3">
                    <div className="space-y-px ">
                        {field.map((item) => {
                                return (
                                    <div key={item.id}>

                                        <div className="flex mt-4 justify-center">
                                            <input
                                                id={item.id}
                                                name={item.id}
                                                type={item.type}
                                                autoComplete={item.id}
                                                placeholder={item.placeholder}
                                                required
                                                className={(item.id === 'password' || item.id === 'confirm-password') && passwordError ?
                                                    "border-red-300 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" :
                                                    "border-grey-300 appearance-none  block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}
                                                onChange={handleChange}
                                            />


                                        </div>
                                        {(item.id === 'confirm-password' && passwordError) &&
                                            <p className="mt-4 text-red-600">Les mots de passes ne correspondent pas</p>}

                                    </div>

                                )
                            }
                        )
                        }
                        <div className="flex justify-center pt-4">
                            <button
                                className={"bg-gradient-to-l from-purple-600 to-indigo-600 w-full hover:bg-purple-700 text-white  font-bold py-2 px-2 rounded"}
                                onClick={handleSubmit}>S'incrire
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}