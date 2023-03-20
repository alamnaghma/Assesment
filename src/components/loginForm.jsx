import React from "react";
import { Link } from "react-router-dom";
import Form from "../common/form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../services/authService";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      await login(this.state.data.username, this.state.data.password);
      const { data: jwt } = await login(
        this.state.data.username,
        this.state.data.password
      );
      localStorage.setItem("token", jwt);
      this.props.history.push("/homePage");
      toast.success("successfully loggedIn");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = "username or password is incorrect";
        this.setState({ errors: errors });
      }
    }
  };

  render() {
    return (
      <div className="mt-5">
        <ToastContainer />
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
          <p className="mt-2">
            Don't have an account?{" "}
            <span>
              {" "}
              <Link to="/registerForm" style={{ fontSize: 20 }}>
                {" "}
                Sign up{" "}
              </Link>
            </span>{" "}
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
