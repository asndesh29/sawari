import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import ProductDetails from './components/productDetails';

class Index extends React.Component {
  state={};

  render() {
    console.log('this is product details', this.props);
    return (
      <div className="main_product_details">
        <Navbar {...this.props}/>
        <ProductDetails {...this.props} />
        <Footer {...this.props}/>
      </div>
    );
  }
}

const mapStaToProps = (state) => state;

export default connect(mapStaToProps, { ...actions })(Index);
