import React from 'react';
import { Button } from '@blueprintjs/core';
import { APP_PRIMARY_COLOR } from '../../../../config';

class Index extends React.Component {
  state={};

  render() {
    const { updateMainValue, main } = this.props;
    return (
      <div className="sidebar_content">
        <Button
          text="Enquiry"
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === 'enquiry' ? 'blue' : 'yellow'}}
          onClick={() => updateMainValue('currentAdminContent', 'enquiry')}
        />
        <Button
          text="Brand"
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === 'addBrand' ? 'blue' : 'yellow'}}
          onClick={() => updateMainValue('currentAdminContent', 'addBrand')}
        />
        <Button
          text="Product"
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === 'addProduct' ? 'blue' : 'yellow'}}
          onClick={() => updateMainValue('currentAdminContent', 'addProduct')} />
        <Button
          text="Dealer"
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === 'dealer' ? 'blue' : 'yellow' }}
          onClick={() => updateMainValue('currentAdminContent', 'dealer')} />
        <Button
          text="Service Center"
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === 'serviceCenter' ? 'blue' : 'yellow' }}
          onClick={() => updateMainValue('currentAdminContent', 'serviceCenter')} />
      </div>
    );
  }
}
export default Index;
