import React from 'react';
import { Icon } from '@blueprintjs/core';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-registration">
        <Icon icon="user" iconSize={25} />
        <span>Login/Register</span>
      </div>
    );
  }
}
export default Index;
