import React from 'react';
import Auth from '../../services/Auth';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

//Styling
import '..//../css/Components/LoginNew.css';

function LoginPage() {
  const login = async loginData => {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert('Invalid credentials');
    }
  };

  const register = async registrationData => {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  };

  return (
    /* <div className="login-container">
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
      <div className="login-container">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
              <label htmlFor="tab-1" className="tab">
                Login
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label for="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-space">
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
