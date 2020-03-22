import React from 'react';
import UserSwitcher from './userSwitcher';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar_content">
        <UserSwitcher {...this.props} />
      </div>
    );
  }
}
export default Index;
