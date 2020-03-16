import React from 'react';
import { IoIosMenu } from 'react-icons/io'
import DrawerMenu from '../../../../../components/drawer-navbar';

class Index extends React.Component {
  state={open: false };

  togglerHandler = () => {
    console.log('toggle handler clicked');
    this.setState({ open: !this.state.open});
  }

  render() {
    return (
      <div>
        <IoIosMenu onClick={this.togglerHandler} color="#ff0242" size={30} />
        <DrawerMenu open={this.state.open} togglerHandler={this.togglerHandler} />
      </div>
    );
  }
}
export default Index;
