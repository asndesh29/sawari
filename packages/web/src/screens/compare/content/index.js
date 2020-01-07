import React from 'react';
import { Spinner } from '@blueprintjs/core';
import HeaderBody from './header';
import ContentBody from './content';

class Index extends React.Component {
  state={ renderContent: false };

  async componentWillMount() {
    const { fetchInitialData } = this.props;
    await fetchInitialData();
    this.setState({ renderContent: true });
  }

  render() {
    const { renderContent } = this.state;
    return (
      renderContent ? (
        <div className="compare-body">
          <HeaderBody {...this.props} />
          <ContentBody {...this.props} />
        </div>
      ) : <Spinner />
    );
  }
}
export default Index;
