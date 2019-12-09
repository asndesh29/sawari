import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import loginStructure from './loginStructure';
import { Form } from '../../../components/common';

class Login extends Component {
  state={};

  render() {
    console.log(this.props.form.login , this.props);
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card
          interactive
          elevation={Elevation.TWO}
          style={{
            width: 400,
            marginTop: 100,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* <img src={require('../../../assets/finalLogo.jpg')} height={200} width={200} /> eslint-disable-line */}
          <h2>Welcome to admin panel</h2>
          <p> Enter your log in details</p>
          <hr />
          <form style={{ width: '100%' }}>
            <Form contents={loginStructure()} {...this.props} schema="login" />
          </form>
        </Card>
      </div>
    );
  }
}
export default Login;
