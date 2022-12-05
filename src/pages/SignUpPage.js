import React from "react";
import Register from "../components/Register";
import Header from "../components/Header";

export default function SignUpPage() {
    return(
        <div className="shadow-xl rounded-md p-8 my-8">

            <Header
                heading="Créez votre compte"
                paragraph="Déjà un compte ?"
                linkName="Connectez-vous !"
                linkUrl="/Login"
            />

            <Register/>
        </div>
    )
}