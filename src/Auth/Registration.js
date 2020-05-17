import React, { Component } from "react";
import axios from "axios";
import "./Registration.css";

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, username, password, password_confirmation } = this.state;

        axios
            .post(
                "https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer/register",
                {
                    emailid: email,
                    username: username,
                    password: password
                }
            )
            .then(response => {
                this.props.handleSuccessfulRegister(response.data);
            })
            .catch(error => {
                console.log("login error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div className="mylist shadow">
                <form className="py-4" onSubmit={this.handleSubmit}>
                    <div className="form-row justify-content-center">
                        <div className="form-group mx-1">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </div></div>
                    <div className="form-row justify-content-center">
                        <div className="form-group">
                            <input
                                type="username"
                                name="username"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                            />
                        </div></div>
                    <div className="form-row justify-content-center">
                        <div className="form-group ">
                            
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                        </div></div>
                    <div className="form-row justify-content-center">
                        <div className="form-group">
                           
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                value={this.state.password_confirmation}
                                onChange={this.handleChange}
                                required
                            />
                        </div></div>
                    <div className="form-row justify-content-center">
                        <button type="submit" className="btn btn-info my-2 mb-4">Register</button>
                    </div>
                </form>
            </div>




        );
    }
}