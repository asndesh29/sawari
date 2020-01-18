import React from 'react';
import { ENDPOINT } from '../../../config';

const AvailableBrand = ({ vehicleBrand, header }) => {
  console.log('available brand', vehicleBrand);
  return (
    <div className="side-menu-car-container">
      <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>{header}</h3>
      {vehicleBrand.map(brand => {
        return (
          <div className="side-menu-car-element">
            <img src={`${ENDPOINT}/brand_image/${brand.brandImageUrl}`} alt={brand.brandName} />
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
    const { main, car, bike, showroomType, serviceCenterType } = this.props;
    return (
      <div className="side-menu">
        <div className="side-manu-car">
          {(car || showroomType || serviceCenterType) && main.initialData.vehicleBrand && <AvailableBrand header="Available Car Brands" vehicleBrand={main.initialData.vehicleBrand.filter(b => b.stypeId === 1)} />}
          {(bike || showroomType || serviceCenterType) && main.initialData.vehicleBrand && <AvailableBrand header="Available Bike Brands" vehicleBrand={main.initialData.vehicleBrand.filter(b => b.stypeId === 2)} />}
        </div>
      </div>
    );
  }
}
export default SideMenu;
