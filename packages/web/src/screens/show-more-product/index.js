import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import ProductList from './components/productList';
import Filter from './components/filter';

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
    console.log('this is product details', this.props);
    const { match } = this.props;
    const { contentType, showroomType, serviceCenterType, placeId, usedVehicleType, categoryType } = match.params;
    return (
      <div className="search-product">
        <Navbar {...this.props} />
        <div className="search-product-content">
          <Filter {...this.props} />
          <ProductList {...this.props} categoryType contentType={contentType} showroomType={showroomType} serviceCenterType={serviceCenterType} placeId={placeId} usedVehicleType={usedVehicleType} />
        </div>
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStaToProps = (state) => state;

export default connect(mapStaToProps, { ...actions })(Index);
