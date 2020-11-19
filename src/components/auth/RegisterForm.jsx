import React, { useState } from 'react';

function RegisterForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    /* <div className="">
            <div className="">
                <h4 className="">Sign up instead</h4>
                <div>
                    <div className="">
                        <label>Name:</label>
                        <input 
                            type="text"
                            className=""
                            value={name}
                            onChange={ e => setName(e.target.value) }
                            placeholder="Name"/>
                    </div>

                    <div className="">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value) }
                            className=""
                            placeholder="Email"/>
                    </div>

                    <div className="">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="">
                        <button 
                            className="login-button"
                            onClick={e => onSubmit({name, email, password})}>
                            Create account
                        </button>
                    </div>

                </div>
            </div>
        </div> */

    <div class="sign-up-form">
      <div class="group">
        <label for="user" class="label">
          Username
        </label>
        <input
          id="user"
          type="text"
          class="input"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Create your Username"
        />
      </div>
      <div class="group">
        <label for="email" class="label">
          Email Address
        </label>
        <input
          id="email"
          type="text"
          class="input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />
      </div>
      <div class="group">
        <label for="pass" class="label">
          Password
        </label>
        <input
          id="pass"
          type="password"
          class="input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          data-type="password"
          placeholder="Create your password"
        />
      </div>
      <div class="group">
        <input
          type="submit"
          class="button"
          onClick={e => onSubmit({ name, email, password })}
          value="Sign Up"
        />
      </div>
      <div class="hr"></div>
      <div class="foot">
        {' '}
        <label for="tab-1">Already Member?</label>{' '}
      </div>
    </div>
  );
}

export default RegisterForm;
