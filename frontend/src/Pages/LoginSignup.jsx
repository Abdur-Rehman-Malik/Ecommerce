import React, { useState } from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  const [state, setstate] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Login = async () => {
    console.log("Login", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const Signup = async () => {
    console.log("Signup", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  return (
    <>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state === "Sign Up" ? (
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                type="text"
                placeholder="Your Name"
              />
            ) : (
              <></>
            )}
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Your Email"
            />
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Your Password"
            />
          </div>
          <button
            onClick={() => {
              state === "Login" ? Login() : Signup();
            }}
          >
            Continue
          </button>
          {state === "Sign Up" ? (
            <p className="loginsignup-login">
              Already have an account?
              <span
                onClick={() => {
                  setstate("Login");
                }}
              >
                {" "}
                Login{" "}
              </span>
            </p>
          ) : (
            <p className="loginsignup-login">
              Don't have and account?
              <span
                onClick={() => {
                  setstate("Sign Up");
                }}
              >
                {" "}
                Signup{" "}
              </span>
            </p>
          )}

          <div className="loginsignup-agree">
            <input required type="checkbox" name="" id="" />
            <p>By continuing, i agree to the term of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
