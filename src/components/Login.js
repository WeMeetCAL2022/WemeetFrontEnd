import React from "react";
import {loginFields} from "../constants/FormFields";
import ApiService from "../service/api.service";


const field = loginFields;
let fieldsState = {};
field.forEach((item) => {fieldsState[item.id] = ""});
console.log(fieldsState);

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}


async function loginUser(credentials) {
return ApiService.login(JSON.parse(credentials)).then(r =>{
        return {data:r.data, status:r.status}});

}

function RedirectToHome() {
    window.location.href = "/home";
}

export default function Login() {
    const [fields, setFields] = React.useState(fieldsState);
    const handleChange = (event) => {
        setFields({...fields, [event.target.id]: event.target.value});
    }
    const handleSubmit = async e => {
        e.preventDefault();
        let json = JSON.stringify(fields);
        console.log(json);
        const login = await loginUser(json);
        console.log(login.data);
        if (login.status === 200) {
            setToken(login.data);
            RedirectToHome();
        }
    }
    return (
        <form className="mt-8 space-y-3" >
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
                                    className="appearance-none  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    )
                }


                )}
                <div className="flex justify-center pt-4">
                <button className={"bg-purple-500 w-full hover:bg-purple-700 text-white  font-bold py-2 px-2 rounded"}  onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </form>
    );

}