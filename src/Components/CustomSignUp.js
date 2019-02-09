import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

export default class CustomSignUp extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone_number: '',
    authenticationCode: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, phone_number },
      });
      console.log('sign up successfully');
    } catch (err) {
      console.log('error sign up: ', err);
    }
  };
  confirmSignUp = async () => {
    const { username, authenticationCode } = this.state;
    try {
      await Auth.confirmSignUp({
        username,
        authenticationCode,
      });
      console.log('confirm sign up successfully');
    } catch (err) {
      console.log('error confirm sign up: ', err);
    }
  };

  render() {
    return <div>...</div>;
  }
}
