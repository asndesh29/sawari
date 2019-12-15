import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import Products from './products';
import Dealers from './dealers';
import ServiceCenter from './serviceCenters';

class TabNavigator extends React.Component {
  state={selectedTabId: 'car'};

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
      <div style={{ width: '90%', minHeight: '90vh', justifyContent: 'flex-start' }}>
        <div style={{ width: '100%', marginTop: 30 }}>
          <h2 style={{ marginBottom: 20 }}>{main.initialData.vehicleBrand.find(b => b.id === parseInt(sbId,10)).brandName } </h2>
          <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
            <Tab style={{ fontSize: 20 }} id="car" title="Cars" panel={<Products {...this.props} sbId={sbId} stypeId={stypeId} />} />
            <Tab style={{ fontSize: 20 }}  id="dealer" title="Dealers" panel={<Dealers {...this.props} sbId={sbId} stypeId={stypeId} />} panelClassName="ember-panel" />
            <Tab style={{ fontSize: 20 }}  id="serviceCenter" title="ServiceCenter" panel={<ServiceCenter {...this.props} sbId={sbId} stypeId={stypeId}/>} />
          </Tabs>
        </div>
      </div>
    );
  }
}
export default TabNavigator;
