import React, { useState } from "react";

const SignUp = () => {

    const [userDetails, setUserDetails] = useState({
        username: '',
        phone: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserDetails({ ...userDetails, [name] : value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userDetails);
    }

    return (
        <div className="signup">
            <div className="myForm">
                <form>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" name="username" className="form-control" onChange={(event) => handleChange(event)} placeholder="Enter Username" />
                    </div>

                    <div className="form-group">
                        <label >Phone</label>
                        <input type="text" name="phone" className="form-control" onChange={(event) => handleChange(event)} placeholder="Enter Phone" />
                    </div>

                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" name="email" className="form-control" onChange={(event) => handleChange(event)} aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" name="password" className="form-control" onChange={(event) => handleChange(event)} id="exampleInputPassword1" placeholder="Enter Password" />
                    </div>

                    <button onClick={(e) => handleSubmit(e)} className="btn btn-primary">SignUP</button>
                    <p>already have an account?</p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;