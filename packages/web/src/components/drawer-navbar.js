import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import {IoMdArrowDropdown} from 'react-icons/io';
import { MdMotorcycle } from 'react-icons/md';
import {AiOutlineHome, AiOutlineCar, AiOutlineKey } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Drawer } from '@blueprintjs/core';
import Logo from '../assets/logo.jpeg';
import menuStructure from '../screens/home/components/navbar/menu-bar/menuStructure';

const menuIcons = {
  // Home: <AiOutlineHome size={20} color="black" style={{ marginRight: 5 }} />,
  // 'New Cars': <AiOutlineCar size={20} color="black" style={{ marginRight: 5 }} />,
  // 'Used Car': <AiOutlineKey size={20} color="black" style={{ marginRight: 5}} />,
  // 'New Bikes & Scooters': <MdMotorcycle size={20} color="black" style={{ marginRight: 5}} />
};

const collapsibleElement = (key) => {
  console.log('collapsible element', key);
  return (
    <div className="collapse-element">
      <div>
        {menuIcons[key]}
        {key}
      </div>
      <IoMdArrowDropdown color="black" />
    </div>
  );
};

const CollapsibleContent = ({ routes }) => {
  // console.log('collapsible data', routes);
  return (
    <div className="collapse-element-content">
      {routes.map((r) => (
        <div className="individual-element">
          <Link className="link-style" to={r.route}>{r.name}</Link>
        </div>
      ))}
    </div>
  );
};

const DropMenu = () => {
  return (
    <div className="drawer-menu-element-content">
      <div className="drawer-header">
        <img src={Logo} />
      </div>
      <div className="collapse-element">
        <div>
          {menuIcons.Home}
          <Link to="/" className="link-style">Home</Link>
        </div>
      </div>
      {menuStructure().map((m) => (
        <Collapsible transitionTime={200} trigger={collapsibleElement(Object.keys(m)[0])}>
          <CollapsibleContent routes={Object.values(m)[0]} />
        </Collapsible>
      ))}
    </div>
  );
};

class SmallScreenMenu extends React.Component {
  state={};

  render() {
    const { open, togglerHandler } = this.props;
    console.log(this.props);
    return (
      <Drawer
        className="drawer-menu"
        usePortal
        isOpen={open}
        onClose={togglerHandler}
        size="80%"
        position="left"
        lazy
      >
        <DropMenu />
      </Drawer>
    );
  }
}

SmallScreenMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  togglerHandler: PropTypes.func.isRequired,
};

export default SmallScreenMenu;
