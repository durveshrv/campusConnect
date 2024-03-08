import React from "react";
import { Link, Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import "../App.css";
import Input from "../components/common/input";
import Form from "./common/form";
import { login } from "../services/authService";
import bg from "../assets/img/bg.jpeg";

class Log extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {
      email: "",
      passowrd: "",
    },
  };
  schema = {
    email: Joi.string().required().label("Email ID"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.email, data.password);
      localStorage.setItem("token", jwt);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/users/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("Invalid Email Or Password");
      }
    }
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    const { data, errors } = this.state;
    return (
      <div style={{backgroundImage: `url(${bg})`, height: '100vh'}}>
        <div className="container-fluid text-light py-3">
          <header className="text-center">
            <h1 className="display-6">Login</h1>
          </header>
        </div>
        <div className="container my-2 bg-dark w-25 text-light p-2 mx-auto d-flex justify-content-center">
          <form onSubmit={this.handleSubmit} className="flex flex-col items-center">
            <Input
              name="email"
              value={data.email}
              label="Email ID"
              onChange={this.handleChange}
              error={errors.email}
              // Increase the width of Input component
              className="w-full mb-3"
            />
            <Input
              name="password"
              value={data.password}
              label="Password"
              onChange={this.handleChange}
              error={errors.password}
              type="password"
              // Increase the width of Input component
              className="w-full mb-3"
            />
            <div className="text-center">
              <button
                className="btn btn-primary w-100 mb-3"
                disabled={this.validate()}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="container col-lg-3 col-md-6 bg-dark text-light border rounder mt-1 p-3 text-center">
          New User? <Link to="/users/register">Register Here</Link>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Log;
