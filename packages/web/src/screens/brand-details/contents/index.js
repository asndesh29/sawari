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
    const { sbId, stypeId } = match.params;
    return (
      <div className="brand-details">
        <div className="brand-details-menu">
          <h2 style={{ marginBottom: 10 }}>{main.initialData.vehicleBrand.find(b => b.id === parseInt(sbId,10)).brandName } </h2>
          <Tabs className="menu-tab" id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
            <Tab className="manu-tab-container" id="car" title={stypeId === '1' ? 'Cars' : 'Bikes'} panel={<Products {...this.props} sbId={sbId} stypeId={stypeId} />} />
            <Tab className="manu-tab-container" id="dealer" title="Dealers" panel={<Dealers {...this.props} sbId={sbId} stypeId={stypeId} />} panelClassName="ember-panel" />
            <Tab className="manu-tab-container" id="serviceCenter" title="ServiceCenter" panel={<ServiceCenter {...this.props} sbId={sbId} stypeId={stypeId}/>} />
          </Tabs>
        </div>
      </div>
    );
  }
}
export default TabNavigator;
