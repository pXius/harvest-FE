import React from "react";
import Auth from "../../services/Auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

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
        /* <div class="login-container">
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
                    </div> */

        <div className="row">
            <div class="login-container">
                <div class="card">
                    <div class="login-box">
                        <div class="login-snip"> 
                            <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
                            <label for="tab-1" class="tab">Login</label> 
                            <input id="tab-2" type="radio" name="tab" class="sign-up"/>
                            <label for="tab-2" class="tab">Sign Up</label>
                            <div class="login-space">
                                       
                                <LoginForm onSubmit={login} />  
                                
                                   
                                <RegisterForm onSubmit={register} />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;