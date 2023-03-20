import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as userServices from "../services/userServices";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      role: "",
      mobile: "",
      dob: "",
      sportID: "",
      machineID: "",
      yearsOfExperience: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    role: Joi.string().required().min(5).label("Role"),
    mobile: Joi.string().required().min(9).label("Mobile"),
    dob: Joi.string().required().min(5).label("DOB"),
    sportID: Joi.number().required().min(1).label("SportID"),
    machineID: Joi.string().required().min(1).label("MachineID"),
    yearsOfExperience: Joi.number()
      .required()
      .min(1)
      .label("Years Of Experience"),
  };

  doSubmit = async () => {
    try {
      await userServices.register(this.state.data);
      toast.success("successfully registered!!");
    } catch (ex) {
      if (ex.respose && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = "user already registered";
        this.setState({ errors: errors });
      }
    }
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("role", "Role")}
          {this.renderInput("mobile", "Mobile")}
          {this.renderInput("dob", "DOB", "text", "YYYY-MM-DD")}
          {this.renderInput("sportID", "SportID")}
          {this.renderInput("machineID", "MachineID")}
          {this.renderInput("yearsOfExperience", "Years Of Experience")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
