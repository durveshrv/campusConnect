import React from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import * as userService from "../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/react-toastify.esm";

class Register extends Form {
  state = {
    data: { phoneno:"",username: "", email: "", password: "", password2: "", name: "", gender: "" },
    errors: { phoneno:"",username: "", email: "", password: "", password2: "", name: "", gender: "" },
  };

  schema = {
    name: Joi.string().required().label("Full Name"),
    username: Joi.string().required().label("Username"),
    phoneno: Joi.string().required().label("Phone no"),
    email: Joi.string().required().label("Email ID"),
    password: Joi.string().required().label("Password"),
    password2: Joi.string().required().label("Confirm Password"),
    gender: Joi.string().required().label("Gender")
  };

  doSubmit = async () => {
    console.log("error")
    try {
      const response = await userService.register(this.state.data);
      console.log(response);
      localStorage.setItem("token", response.headers["token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("User Already Registered");
      }
      console.log(ex)
    }
  };

  render() {
    const { data, errors } = this.state;

    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="container-fluid col-lg-4 col-md-8">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            <Input
              value={data.name}
              onChange={this.handleChange}
              label="Name"
              name="name"
              type="text"
              error={errors.name}
            />
            <Input
              name="username"
              value={data.username}
              label="Username"
              type="text"
              onChange={this.handleChange}
              error={errors.username}
            />
            <Input
              value={data.phoneno}
              onChange={this.handleChange}
              label="Phone no"
              name="phoneno"
              type="text"
              error={errors.phoneno}
            />
            <Input
              value={data.email}
              onChange={this.handleChange}
              label="Email ID"
              type="text"
              name="email"
              error={errors.email}
            />
            <Input
              value={data.password}
              onChange={this.handleChange}
              label="Password"
              type="password"
              name="password"
              error={errors.password}
            />
            <Input
              value={data.password2}
              onChange={this.handleChange}
              label="Confirm Password"
              name="password2"
              type="password"
              error={errors.password2}
            />
            <Input
              value={data.gender}
              onChange={this.handleChange}
              label="Gender"
              name="gender"
              type="text"
              error={errors.gender}
            />
            <div className="d-grid gap-2">
              <button className="btn btn-primary" disabled={this.validate()}>
                Register
              </button>
            </div>
          </form> 
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
