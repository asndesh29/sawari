/* eslint-disable react/no-deprecated */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import ProductDetails from './components/productDetails';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { fetchInitialData } = this.props;
    fetchInitialData();
  }

  render() {
    // console.log('Used Product details', this.props);
    const { main } = this.props;
    return (
      <div className="main_product_details">
        <Navbar {...this.props} />
        <div className="main-product-details-sidebar" style={{ marginTop: 10 }}>
          {main.initialData.usedVehicle && <ProductDetails {...this.props} /> }
        </div>
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStaToProps = (state) => state;

export default connect(mapStaToProps, { ...actions })(Index);

Index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchInitialData: PropTypes.func.isRequired,
};
