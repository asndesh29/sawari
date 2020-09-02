import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@blueprintjs/core';
import menuStructure from './menuStructure';
import menuItemWithSubmenu from './menuItemWithSubMenu';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: null };
  }

  toggleMenu = (menuId) => {
    this.setState({ showMenu: menuId });
  }

  toggleEmiCalculator = () => {
    console.log('toggle emi calc called', this.props);
    const { updateMainValue } = this.props;
    updateMainValue('emiCalculator', true);
  }

  render() {
    const { showMenu } = this.state;
    console.log('state value', this.state);
    return (
      <div className="nav-menu">
        <div className="nav-menu">
          {/* <Icon icon="home" /> */}
          <Link to="/" style={{ textDecoration: 'none', margin: 0 }}>
            <span style={{ marginLeft: 5 }}>Home</span>
          </Link>
        </div>
        {/* <Divider style={{ background: 'white', marginBottom: 0, marginLeft: 10, marginRight: 10 }} /> */}
        {menuStructure(this.toggleEmiCalculator).map(m => menuItemWithSubmenu(m, showMenu, this.toggleMenu))}
        {/* <div className="menu-item">
          <Link to="/sell-vehicle">
            <span>Sell</span>
          </Link>
        </div> */}
      </div>
    );
  }
}
export default MenuBar;
