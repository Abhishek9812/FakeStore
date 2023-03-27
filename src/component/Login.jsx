import React, { useState } from "react";

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''

    });

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(loginDetails);
    }

    return (
        <div className="signup">
            <div className="myForm">
                <form>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" name="username" className="form-control"  placeholder="Enter Username" />
                    </div>

                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                    </div>

                    <button className="btn btn-primary">Login</button>
                    <p>new user registration?</p>
                </form>
            </div>
        </div>
    )
}

export default Login;