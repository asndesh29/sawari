import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import Filter from './components/filter';
import ProductList from './components/productList';

class Index extends React.Component {
  state={};

  render() {
    console.log('this is product details', this.props);
    return (
      <div className="search-product">
        <Navbar {...this.props}/>
        <div className="search-product-content">
          {/* <Filter {...this.props} /> */}
          <ProductList {...this.props} />
        </div>
        <Footer {...this.props}/>
      </div>
    );
  }
}

const mapStaToProps = (state) => state;

export default connect(mapStaToProps, { ...actions })(Index);
