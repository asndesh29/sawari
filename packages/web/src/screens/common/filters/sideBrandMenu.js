/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ENDPOINT } from '../../../config';

const AvailableBrand = ({ vehicleBrand, header, updateMainValue, main }) => {
  // console.log('available brand', vehicleBrand);
  return (
    <div className="side-menu-car-container">
      <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>{header}</h3>
      {vehicleBrand.map((brand) => {
        return (
          <div className="side-menu-car-element" onClick={() => updateMainValue('filter', { ...main.filter, sbId: brand.id })}>
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
    // console.log('props in side manu', this.props);
    const { main, car, bike, showroomType, serviceCenterType , updateMainValue} = this.props;
    return (
      <div className="side-menu">
        <div className="side-manu-car">
          {(car && main.initialData.vehicleBrand) && <AvailableBrand header="Available Car Brands" main={main} updateMainValue={updateMainValue} vehicleBrand={main.initialData.vehicleBrand.filter(b => b.stypeId === 1)} />}
          {(bike && main.initialData.vehicleBrand) && <AvailableBrand header="Available Bike Brands" main={main} updateMainValue={updateMainValue} vehicleBrand={main.initialData.vehicleBrand.filter(b => b.stypeId === 2)} />}
        </div>
      </div>
    );
  }
}
export default SideMenu;
