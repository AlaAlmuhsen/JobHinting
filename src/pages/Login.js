import React, { useState } from "react";
import useFetch from "../customhooks/useFetch";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { data: u } = useFetch("http://localhost:5000/users");
  const { data: c } = useFetch("http://localhost:5000/company");

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();
  function handleInputEmail(e) {
    setInputEmail(e.target.value);
  }
  function handleInputPassword(e) {
    setInputPassword(e.target.value);
  }
  return (
    // <div className="login-container">
    //     <form onSubmit={onSubmit}>
        // <input
        //     type="email"
        //     required
        //     onInput={handleInputEmail}
        //     value={inputEmail}
        // />
        // <input
        //     type="password"
        //     required
        //     onInput={handleInputPassword}
        //     value={inputPassword}
        // />
    //     <input type="submit" />
    // </form>
    // </div>
    <>
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid"
                        alt="Sample image"
                    />
                </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={onSubmit}>
                            <div className="form-outline mb-4">
                                <label className="form-label" >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    required
                                    onInput={handleInputEmail}
                                    value={inputEmail}
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    onInput={handleInputPassword}
                                    value={inputPassword}
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form2Example3"
                                    />
                                <label className="form-check-label">
                                    Remember me
                                </label>
                            </div>
                                <a href="#!" className="text-body">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button 
                                    type="submit"
                                    className="btn  btn-lg login-btn"
                                >
                                Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
  function onSubmit(e) {
    e.preventDefault();
    let userinfo = u.filter((userData) => {
      return (
        inputEmail === userData.email && inputPassword === userData.password
      );
    });
    let companyinfo = c.filter((companyData) => {
      return (
        inputEmail === companyData.email &&
        inputPassword === companyData.password
      );
    });
    localStorage.clear();
    sessionStorage.clear();
    if (userinfo.length === 1) {
      localStorage.setItem("userData", JSON.stringify(userinfo));
      sessionStorage.setItem("userActive", true);
      navigate("/");
    } else if (companyinfo.length === 1) {
      localStorage.setItem("companyData", JSON.stringify(companyinfo));
      sessionStorage.setItem("companyActive", true);
      navigate("/dashboard");
    }
  }
};

export default Login;
