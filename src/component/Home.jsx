import React, { useState } from "react";

const Home = () => {
    return (
        <div className="home">
            <div className="myForm">
                <form>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" className="form-control"  placeholder="Enter Username" />
                    </div>

                    <div className="form-group">
                        <label >Phone</label>
                        <input type="text" className="form-control"  placeholder="Enter Phone" />
                    </div>

                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home;