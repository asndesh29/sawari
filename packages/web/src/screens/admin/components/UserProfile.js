import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover, Position, PopoverInteractionKind, Menu, MenuItem, MenuDivider, Classes, Icon } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleInteraction = (state) => {
    this.setState({ isOpen: state });
  }

  // findType = () => {
  //   const { main } = this.props;
  //   switch (main.currentUserDetails.type) {
  //     case 'moderator':
  //       return 'm.';
  //     case 'astrologer':
  //       return 'a.';
  //     case 'super':
  //       return 's.';
  //     case 'admin':
  //       return 's.';
  //     default:
  //       return null;
  //   }
  // }

  popOverContent = ( signOut) => {
    return (
      <Menu className={Classes.ELEVATION_1}>
        {/* <MenuItem text={`ID: ${this.findType()}${id}`} />
        <MenuItem text={`Name: ${userName}`} />
        <MenuItem text={`Email: ${email}`} />
        <MenuDivider /> */}
        {/* <MenuItem icon="cog" text="Profile settings" onClick={() => updateMainValue('currentAdminContent', 'profileSetting')} /> */}
        <MenuItem icon="log-out" text="Sign Out" onClick={() => signOut()} />
      </Menu>
    );
  }

  render() {
    // console.log('props in userprofile', this.props);
    const { main, updateMainValue, signOut } = this.props;
    const { isOpen } = this.state;
    // const { name, email, id } = main.currentUserDetails;
    return (
      <div style={{ display: 'flex', margin: 5, marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#FFF', flexDirection: 'column', marginRight: 20, height: 80, overflow: 'hidden' }}>
        <Popover
          content={this.popOverContent(signOut)}
          interactionKind={PopoverInteractionKind.CLICK}
          isOpen={isOpen}
          onInteraction={state => this.handleInteraction(state)}
          position={Position.BOTTOM}
        >
          <Icon icon="user"
            style={{ borderRadius: '70px', cursor: 'pointer' }}
            iconSize={70}
          />
        </Popover>
      </div>
    );
  }
}

export default UserProfile;
UserProfile.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};
