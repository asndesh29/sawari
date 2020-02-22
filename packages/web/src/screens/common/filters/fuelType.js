/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

class VehicleType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fuelTypeSelectHandler = (type) => {
    const { main, updateMainValue } = this.props;
    updateMainValue('filter', { priceRange: main.filter.priceRange, fuelType: type });
  }

  render() {
    const { car } = this.props;
    return (
      car
        ? (
          <div className="side-menu" style={{ marginTop: 20 }}>
            <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Fuel Type</h3>
            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div onClick={() => this.fuelTypeSelectHandler('Petrol')} style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={hatchback} style={{ width: 60, height: 50 }}/> */}
                <span style={{ color: '#757575'}}>Petrol</span>
              </div>
              <div onClick={() => this.fuelTypeSelectHandler('Diesel')} style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={sedan} style={{ width: 60, height: 50 }}/> */}
                <span style={{ color: '#757575'}}>Diesel</span>
              </div>
            </div>

            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div onClick={() => this.fuelTypeSelectHandler('Electric')} style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={coupe} style={{ width: 60, height: 50 }}/> */}
                <span style={{ color: '#757575' }}>Electric</span>
              </div>

            </div>
          </div>
        )
        : (
          <div className="side-menu" style={{ marginTop: 20 }}>
            <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Fuel Type</h3>
            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div onClick={() => this.fuelTypeSelectHandler('Petrol')} style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={hatchback} style={{ width: 60, height: 50 }}/> */}
                <span style={{ color: '#757575'}}>Petrol</span>
              </div>
              <div onClick={() => this.fuelTypeSelectHandler('Electric')} style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={sedan} style={{ width: 60, height: 50 }}/> */}
                <span style={{ color: '#757575'}}>Electric</span>
              </div>
            </div>
          </div>
        )
    );
  }
}
export default VehicleType;
VehicleType.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
