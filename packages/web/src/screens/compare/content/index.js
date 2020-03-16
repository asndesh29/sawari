/* eslint-disable react/no-deprecated */
import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@blueprintjs/core';
import HeaderBody from './header';
import ContentBody from './content';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderContent: false };
  }

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
Index.propTypes = {
  fetchInitialData: PropTypes.func.isRequired,
};
