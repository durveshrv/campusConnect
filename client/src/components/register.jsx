import React from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import * as userService from "../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/react-toastify.esm";
import bg from "../assets/img/bg.jpeg";
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
      <div style={{backgroundImage: `url(${bg})`, height: '100vh'}}>
      <React.Fragment>
        <ToastContainer />
        <div>
          <h1 className="text-center text-light py-3">Register</h1>
          <section className="container my-2 bg-dark w-100 text-light p-2">
          <form className="row g-3 p-3" onSubmit={this.handleSubmit}>
          <div className="col-md-6">
            <Input
              value={data.name}
              onChange={this.handleChange}
              label="Name"
              name="name"
              type="text"
              error={errors.name}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="username"
              value={data.username}
              label="Username"
              type="text"
              onChange={this.handleChange}
              error={errors.username}
            />
          </div>
          <div className="col-md-6">
            <Input
              value={data.phoneno}
              onChange={this.handleChange}
              label="Phone no"
              name="phoneno"
              type="text"
              error={errors.phoneno}
            />
          </div>
          <div className="col-md-6">
            <Input
              value={data.email}
              onChange={this.handleChange}
              label="Email ID"
              type="text"
              name="email"
              error={errors.email}
            />
          </div>
          <div className="col-md-6">
            <Input
              value={data.password}
              onChange={this.handleChange}
              label="Password"
              type="password"
              name="password"
              error={errors.password}
            />
          </div>
          <div className="col-md-6">
            <Input
              value={data.password2}
              onChange={this.handleChange}
              label="Confirm Password"
              name="password2"
              type="password"
              error={errors.password2}
            />
          </div>
          <div className="col-md-6">
            <Input
              value={data.gender}
              onChange={this.handleChange}
              label="Gender"
              name="gender"
              type="text"
              error={errors.gender}
            />
          </div> 
            <div className="col-12 mt-3">
              <button className="btn btn-primary w-100" disabled={this.validate()}>
                Register
              </button>
            </div>
          </form> 
          </section>
        </div>
      </React.Fragment>
      </div>
    );
  }
}

export default Register;
