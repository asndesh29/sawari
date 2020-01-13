import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from '@blueprintjs/core';
import * as actions from '../../actions';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import BrandDetails from './contents';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false };
  }

  async componentWillMount() {
    console.log('props in brand details', this.props);
    const { fetchInitialData } = this.props;
    await fetchInitialData();
    this.setState({ showDetails: true });
  }

  render() {
    console.log('props in brand', this.props);
    const { showDetails } = this.state;
    return (
      showDetails
        ? (
          <div className="main_product_details">
            <Navbar {...this.props}/>
            <BrandDetails {...this.props} />
            <Footer {...this.props}/>
          </div>
        )
        : <Spinner />
    );
  }
}

const mapStaToProps = (state) => state;

export default connect(mapStaToProps, { ...actions })(Index);
