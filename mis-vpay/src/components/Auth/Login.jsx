import React, { useEffect, useState } from "react";
import "../Assets/css/Auth/Login.css";
import leftimage from "../Assets/images/utilogin.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user_details, setUserDetails]= useState([]);
  const [p_emp_id, setEmpID] = useState(" ");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/api/v1/login_details", {
      method: "POST",
      body: JSON.stringify({ p_emp_id, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserDetails([...user_details, data]);
        setEmpID("");
        setPassword("");
        navigate("/Home");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  
useEffect(()=> {
    fetch   ("http://127.0.0.1:3000/api/v1/login_details", {  p_emp_id, password })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/Home";
        }
      })
      .catch((error) => {
        console.error(error);
    });
},[]) 


  return (
    <>
      <div className="container-fluid" id="main-container">
        <div className="col-md-12" id="main-login">
          <div className="col-md-6">
            <img src={leftimage} alt="images" className="main-image" />
          </div>
          <div className="col-md-6" id="second-card">
            <div>
              <div className="text-center">
                <h2 id="login-heading">LOGIN</h2>
                <p className="login-p">Please enter your details</p>
              </div>
              <div className="main-form">
                <form>
                  <div className="mb-3">
                    <label className="form-label" id="label-text">
                      Employee ID <span className="required-span">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Please Enter your valid Employee ID"
                      value={p_emp_id}
                      onChange={(e)=>{setEmpID(e.target.value)}}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" id="label-text">
                      Password <span className="required-span">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="exampleInputPassword1"
                      placeholder="Please Enter your Password"
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Show Password</label>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary"
                      id="btn-login"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="query">
                <p className="query-p">
                  For any query, Please write to :{" "}
                  <span>mis.analytics@uti.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
