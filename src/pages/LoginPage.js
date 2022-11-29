import React from "react";
import Login from "../components/Login";
import Header from "../components/Header";

export default function LoginPage({setToken}) {
    return(
    <>
        <div className="shadow-xl rounded-md p-8">
        <Header
            heading="Connectez-vous à votre compte"
            paragraph="Pas de compte ?"
            linkName="Inscrivez-vous !"
            linkUrl="/SignUp"
        />
    <Login setToken={{setToken}}/>
        </div>
    </>
)
}