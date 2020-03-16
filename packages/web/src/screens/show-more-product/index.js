import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const { fetchInitialData, updateMainValue, match } = this.props;
    const { params } = match;
    fetchInitialData();
    updateMainValue('filter', { priceRange: [0, 200] });
    if (params.searchType === 'budget') {
      const tempPriceArr = params.tempId.split('-');
      const minMaxPriceRange = [parseInt(tempPriceArr[0], 10), parseInt(tempPriceArr[1], 10)];
      updateMainValue('filter', { priceRange: minMaxPriceRange });
    }
    updateMainValue('multiSearchResult', null);
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
          <ProductList
            {...this.props}
            categoryType
            contentType={contentType}
            showroomType={showroomType}
            serviceCenterType={serviceCenterType}
            placeId={placeId}
            usedVehicleType={usedVehicleType}
          />
        </div>
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStaToProps = (state) => state;

export default connect(mapStaToProps, { ...actions })(Index);
Index.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchInitialData: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.objectOf(PropTypes.any).isRequired,
};
