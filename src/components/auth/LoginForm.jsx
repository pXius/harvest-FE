import React, {useState} from 'react';

function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        /* <div className="">
            <div className="">
                <h4 className="" >Login</h4>
                <div>
                    <div className="">
                        <label>Email:</label>
                        <input 
                            type="email"
                            className=""
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button 
                            className="login-button" 
                            onClick={() => onSubmit({email, password})}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div> */

        <div class="login"> 
            <div class="group"> 
                <label for="email" class="label">Email</label> 
                <input id="email" type="text" value={email} className="input" onChange={e => setEmail(e.target.value)}  placeholder="Enter your email"/> 
            </div>
            <div class="group"> 
                <label for="pass" class="label">Password</label> 
                <input id="pass" type="password" value={password} class="input" onChange={e => setPassword(e.target.value)} data-type="password" placeholder="Enter your password"/> 
            </div>
            <div class="group"> 
                <input type="submit" class="button" onClick={() => onSubmit({email, password})} value="Sign In"/> 
            </div>
            <div class="hr"></div>
        </div>

    );
}

export default LoginForm;