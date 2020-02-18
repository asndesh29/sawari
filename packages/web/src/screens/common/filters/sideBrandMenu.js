/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { ENDPOINT } from '../../../config';

const AvailableBrand = ({ vehicleBrand, header, onClick }) => {
  // console.log('available brand', vehicleBrand);
  return (
    <div className="side-menu-car-container">
      <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>{header}</h3>
      {vehicleBrand.map((brand) => {
        return (
          <div className="side-menu-car-element" onClick={() => onClick(brand)}>
            <img src={`${ENDPOINT}/brand_image/${brand.brandImageUrl}`} alt={brand.brandName} />
            <span>{brand.brandName}</span>
          </div>
        );
      })}
    </div>
  );
};

AvailableBrand.propTypes = {
  vehicleBrand: PropTypes.arrayOf(PropTypes.any).isRequired,
  header: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  barndOnClick = (brand) => {
    const { main, updateMainValue, brandClickHandler } = this.props;
    if (brandClickHandler) {
      brandClickHandler(brand);
    } else {
      updateMainValue('filter', { ...main.filter, sbId: brand.id });
    }
  }

  render() {
    console.log('props in side manu', this.props);
    const { main, car, bike, updateMainValue } = this.props;
    return (
      <div className="side-menu">
        <div className="side-manu-car">
          {(car && main.initialData.vehicleBrand) && <AvailableBrand onClick={this.barndOnClick} header="Available Car Brands" main={main} updateMainValue={updateMainValue} vehicleBrand={main.initialData.vehicleBrand.filter(b => b.stypeId === 1)} />}
          {(bike && main.initialData.vehicleBrand) && <AvailableBrand onClick={this.barndOnClick} header="Available Bike Brands" main={main} updateMainValue={updateMainValue} vehicleBrand={main.initialData.vehicleBrand.filter(b => b.stypeId === 2)} />}
        </div>
      </div>
    );
  }
}
export default SideMenu;
SideMenu.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  car: PropTypes.bool.isRequired,
  bike: PropTypes.bool.isRequired,
  updateMainValue: PropTypes.func.isRequired,
  brandClickHandler: PropTypes.func.isRequired,
};
