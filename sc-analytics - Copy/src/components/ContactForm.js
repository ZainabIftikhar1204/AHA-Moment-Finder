import React, { Component } from "react";
import "./ContactUs.css";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      err_msg: "",
    };
  }
  onChangeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    let error = "";
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.subject === "" ||
      this.state.message === ""
    ) {
      error = (
        <strong style={{ color: "red" }}> No fields should be empty!</strong>
      );
    } else {
      alert("Form Submitted!");
      this.setState({
        username: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      event.target.reset();
    }
    this.setState({ err_msg: error });
  };
  render() {
    return (
      <form className="MyForm" onSubmit={this.onSubmitHandler}>
        <h2>GET IN TOUCH</h2>
        <div style={{ float: "left", marginLeft: "220px" }}>
          <input
            type="text"
            placeholder="Your Name"
            name="username"
            onChange={this.onChangeHandler}
            className="textField"
          ></input>
        </div>
        <div style={{ float: "right", marginRight: "220px" }}>
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            onChange={this.onChangeHandler}
            className="textField"
          ></input>
        </div>
        <br />
        <br />
        <div style={{ float: "left", marginLeft: "220px" }}>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={this.onChangeHandler}
            className="textField"
          ></input>
        </div>
        <div style={{ float: "right", marginRight: "220px" }}>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={this.onChangeHandler}
            className="textField"
          ></input>
        </div>
        <div>
          <textArea
            type="text"
            value="this.state.message"
            placeholder="Your Message"
            name="message"
            onChange={this.onChangeHandler}
            className="textArea"
          ></textArea>
        </div>
        <br />
        <button type="submit" className="submitButton">
          SEND MESSAGE
        </button>
        {this.state.err_msg}
      </form>
    );
  }
}
