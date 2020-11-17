import React from "react";
import Auth from "../../services/Auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

//Styling 
import loginPage from "..//../css/Components/loginPage.css";

function LoginPage() {
    const login = async (loginData) => {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }

    const register = async (registrationData) => {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
    }

    return (
        <div className="wrapper">
                        <div className="loginForm">
                                <LoginForm onSubmit={login} />
                           {/* <div className="col-12 mt-4">
                                <RegisterForm onSubmit={register} />
    </div>*/}
                        </div>
                    </div>
    );
}

export default LoginPage;