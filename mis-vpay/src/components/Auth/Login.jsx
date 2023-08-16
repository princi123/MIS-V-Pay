import React from "react";
import "../Assets/css/Auth/Login.css";
import leftimage from "../Assets/images/utilogin.png";
import { Link } from "react-router-dom";


const Login = () => {

    return (
        <>
            <div className="container-fluid" id="main-container">
                <div className="col-md-12" id="main-login">
                    <div className="col-md-6">
                        <img src={leftimage} alt="images" className="main-image" />
                    </div>
                    <div className="col-md-6" id="second-card">
                        <div >
                            <div className="text-center">
                                <h2 id="login-heading">LOGIN</h2>
                                <p className="login-p" >Please enter your details</p>
                            </div>
                            <div className="main-form">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label" id="label-text">Employee ID <span className="required-span">*</span></label>
                                        <input type="email" className="form-control " placeholder="Please Enter your valid Employee ID" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" id="label-text">Password <span className="required-span">*</span></label>
                                        <input type="password" className="form-control " id="exampleInputPassword1" placeholder="Please Enter your Password" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label" >Show Password</label>
                                    </div>
                                    <div className="text-center">
                                        <Link  to="/Home" className="btn btn-primary" id="btn-login">Login</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="query">
                                <p className="query-p">For any query, Please write to : <span>mis.analytics@uti.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Login;