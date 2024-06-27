import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../css/signup.css';

function Login(){

    return(
        <>

<main>
    <div className="container-s">
        <div className="header-s">
            <h1>REGISTER</h1>
        </div>
        <div className="content-s">
            <form action="#">
                <div className="form-group-s">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter Your Full Name" />
                </div>
                <div className="form-group-s">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" />
                </div>
                <div className="form-group-s">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter Your Password" />
                </div>
                <div className="form-group-s">
                    <label for="age">Age</label>
                    <input type="number" id="age" name="age" placeholder="Enter Your Age" />
                </div>
                <div className="form-group-s">
                    <label for="Sex">Sex</label>
                    <select name="sex" id="sex">
                        <option value="select">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                </div>
                      
                <div className="form-group-s">
                    <label for="phone">Contact Number</label>
                    <input type="number" id="number" name="number" placeholder="93452*****" />
                </div>
                    <div className="form-group-s">
                        <label for="name">Loca</label>
                        <input type="text" id="name" name="name" placeholder="Enter Your Location" />
                    </div>
                    
                <div className="checkbox-s">
                    <label for="terms">
                        <input type="checkbox" id="terms" name="terms" /> I agree to all the statements in Terms of Service
                    </label>
                </div>
                <div className="button-s">
                    <button type="submit">Sign Up</button>
                </div>
                <div className="social-s">
                    <p>Get Connected With:</p>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                </div>
            </form>
        </div>
        <div className="footer-s">
            <p>Already have an account? <a href="#">Sign In</a></p>
        </div>
    </div>
</main>

        </>
    )
}

export default Login;