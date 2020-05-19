import React from 'react';
import { Tabs, Tab } from '@blueprintjs/core';
import NavBar from '../home/components/navbar';


class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabId: 'ng'};
  }

  handleTabChange = (tabId) => {
    this.setState({ tabId: tabId });
  }

  render() {
    return (
      <div>
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={this.state.tabId}>
          <Tab id="ng" title="Angular" panel={<div>Angular</div>} />
          <Tab id="mb" title="Ember" panel={<div>Ember</div>} />
          <Tab id="rx" title="React" panel={<div>React</div>} />
          <Tab id="bb" title="Backbone" panel={<div>Backbone</div>} />
        </Tabs>
      </div>
    );
  }
};
export default ContactUs;
