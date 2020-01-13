import React from 'react';
import { Button, Colors } from '@blueprintjs/core';
import { APP_PRIMARY_COLOR } from '../../../../config';

class Index extends React.Component {
  state={};

  render() {
    const { updateMainValue, main } = this.props;
    return (
      <div className="sidebar_content">
        <Button
          text=" Product Enquiry"
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === 'enquiry' ? 'blue' : 'yellow' }}
          onClick={() => updateMainValue('currentAdminContent', 'enquiry')}
        />
        <Button
          text="Dealer Enquiry"
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === 'dealerEnquiry' ? 'blue' : 'yellow' }}
          onClick={() => updateMainValue('currentAdminContent', 'dealerEnquiry')} />
        <Button
          text="Service Center Enquiry"
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === 'serviceCenterEnquiry' ? 'blue' : 'yellow' }}
          onClick={() => updateMainValue('currentAdminContent', 'serviceCenterEnquiry')} />
        <Button
          text="Brand"
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === 'addBrand' ? 'blue' : 'yellow'}}
          onClick={() => updateMainValue('currentAdminContent', 'addBrand')}
        />
        <Button
          text="Model"
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === 'addModel' ? 'blue' : 'yellow'}}
          onClick={() => updateMainValue('currentAdminContent', 'addModel')}
        />
        <Button
          text="Varient"
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
