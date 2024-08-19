
import { useState } from "react";
import viteLogo from "/vite.svg";
import LoginForm from "./Components/loginForm";
import CreateAccount from "./Components/createAccount";

function login() {
    return (
        <>
            <LoginForm></LoginForm>
            <CreateAccount></CreateAccount>
        </>
    );
}

export default login;
