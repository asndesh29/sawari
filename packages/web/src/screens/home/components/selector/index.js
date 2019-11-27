import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import selectStructure from './selectorStructure';
import Form from '../../../../components/common/Form';

class Selector extends React.Component {
  state={};

  render() {
    return(
      <div className="home-selector">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card
        interactive
        elevation={Elevation.TWO}
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          margin: 5,
          background: '#ffdf00'
        }}
      >
        <form style={{ width: '100%' }}>
          <Form contents={selectStructure()} {...this.props} schema="login" />
        </form>
      </Card>
    </div>
    </div>
    )
  }
}
export default Selector;
