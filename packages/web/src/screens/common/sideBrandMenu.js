import React from 'react';
import { ENDPOINT } from '../../config';

const AvailableBrand = ({ vehicleBrand, header }) => {
  console.log('available brand', vehicleBrand);
  return (
    <div className="side-menu-car-container">
      <h3>{header}</h3>
      {vehicleBrand.map(brand => {
        return (
          <div className="side-menu-car-element">
            <img src={`${ENDPOINT}/images/${brand.brandImageUrl}`} alt={brand.brandName} />
            <span>{brand.brandName}</span>
          </div>
        );
      })}
    </div>
  );
};

class SideMenu extends React.Component {
  state = {};

  render() {
    console.log('props in side manu', this.props);
    const { main } = this.props;
    return (
      <div className="side-menu">
        <div className="side-manu-car">
          {main.initialData.vehicleBrand && <AvailableBrand header="Available Car Brands" vehicleBrand={main.initialData.vehicleBrand.filter(b => b.stypeId === 1)} />}
          {main.initialData.vehicleBrand && <AvailableBrand header="Available Bike Brands" vehicleBrand={main.initialData.vehicleBrand.filter(b => b.stypeId === 2)} />}
        </div>
      </div>
    );
  }
}
export default SideMenu;
