import React from 'react';
import { Button } from '@blueprintjs/core';
import AddNews from './AddNews';
import NewsList from './NewsList';
import { APP_PRIMARY_COLOR } from '../../../../config';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newsList: true };
  }

  changeScreen = () => {
    this.setState({ newsList: !this.state.newsList });
  }

  render() {
    const { newsList } = this.state;
    return (
      <div style={{ width: '100%', padding: 10, color: 'black', display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%', background: APP_PRIMARY_COLOR, height: 50, display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
          <Button intent="success" text={newsList ? 'Add News' : 'News List'} onClick={this.changeScreen} />
        </div>
        {newsList ? <NewsList {...this.props} changeScreen={this.changeScreen} /> : <AddNews {...this.props} changeScreen={this.changeScreen} /> }
      </div>
    );
  }
}
export default Index;
