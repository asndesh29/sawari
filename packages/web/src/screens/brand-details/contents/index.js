import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import Products from './products/index';
import Dealers from './dealers/index';
import ServiceCenter from './service-centers';

class TabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTabId: 'car' };
  }

  handleTabChange = (id) => {
    console.log('tab id', id);
    this.setState({ selectedTabId: id });
  }

  render() {
    console.log('props in tab navigator', this.props);
    const { selectedTabId } = this.state;
    const { match, main } = this.props;
    const { brandName } = match.params;
    const brand = main.initialData.vehicleBrand.find((b) => `${b.brandName.replace(/\s/g, '')}-${b.id}`.toLocaleLowerCase() === brandName);
    return (
      <div className="brand-details">
        <div className="brand-details-menu">
          <h2 style={{ marginBottom: 10 }}>{brand.brandName}</h2>
          <Tabs className="menu-tab" id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
            <Tab className="manu-tab-container" id="car" title={`${brand.stypeId === 1 ? 'Cars' : 'Bikes'}`} panel={<Products {...this.props} />} />
            <Tab className="manu-tab-container" id="dealer" title="Dealers" panel={<Dealers {...this.props} />} />
            <Tab className="manu-tab-container" id="serviceCenter" title="ServiceCenter" panel={<ServiceCenter {...this.props} />} />
          </Tabs>
        </div>
      </div>
    );
  }
}
export default TabNavigator;
