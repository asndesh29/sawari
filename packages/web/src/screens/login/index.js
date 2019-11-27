import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dialog, Spinner } from '@blueprintjs/core';
import Login from './auth';
import * as actions from '../../actions';
import Admin from '../admin';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderScreenHelper = () => {
    const sessionUserType = sessionStorage.getItem('USER_TYPE'); //eslint-disable-line
    const { main } = this.props;
    switch (sessionUserType || main.screen) {
      case 'super':
        return <Admin {...this.props} type="super" />;
      case 'admin':
        return <Admin {...this.props} type="admin" />;
      default:
        return <Login {...this.props} />;
    }
  }

  render() {
    const { main, updateMainValue } = this.props;
    return (
      <div style={{ flex: 1 }}>
        {this.renderScreenHelper()}
        <Dialog isOpen={main.showSignout} canOutsideClickClose onClose={() => updateMainValue('showSignout', false)}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {main.signOutLoading && <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}><span>Signing out...</span><Spinner size={15} intent="primary" /></div>}
            {main.signOutError && <span style={{ color: 'red' }}>{main.signOutError}</span>}
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateProps = state => state;

export default connect(mapStateProps, { ...actions })(index);

index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};

