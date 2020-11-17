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
        <div class="login-container">
        <div className="loginNSignup">
                        <h5>ACCOUNT LOGIN</h5>
                        <div className="loginForm">
                                <LoginForm onSubmit={login} />
                                <p> Don't have an account?</p>
                            <div >
                                <RegisterForm onSubmit={register} />
    </div>
                        </div>
                    </div>
                    </div>
    );
}

export default LoginPage;