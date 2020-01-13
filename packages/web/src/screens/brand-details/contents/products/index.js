import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ProductCard from './productCard';
import SideMenu from '../../../common/filters/sideBrandMenu';
import PriceRange from '../../../common/filters/priceRange';
import VehicleType from '../../../common/filters/vehicleType';
import FuelType from '../../../common/filters/fuelType';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  render() {
    const { main, updateMainValue, sbId, stypeId } = this.props;
    const { showProductDtails } = this.state;
    return (
      <div className="main-brand-product">
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        <div className="side-menu">
          <SideMenu {...this.props} car/>
          <PriceRange {...this.props} />
          <VehicleType {...this.props} />
          <FuelType {...this.props} />
        </div>
        <div className="brand-product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {main.initialData.vehicleBrandProduct ? main.initialData.vehicleBrandProduct.filter(c => ((c.stypeId === parseInt(stypeId, 10)) && c.sbId === parseInt(sbId, 10))).map((obj) => ProductCard(obj, this.cardOnClickHandler)) : []}
        </div>
      </div>
    );
  }
}

export default Index;
Index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
