/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import hatchback from '../../../assets/hatchback.png';
import sedan from '../../../assets/sedan.png';
import muv from '../../../assets/muv.png';
import suv from '../../../assets/suv.png';
import luxury from '../../../assets/luxury.png';
import pickupTruck from '../../../assets/pickup-truck.png';
import minivans from '../../../assets/minivans.png';
import sports from '../../../assets/sport.png';
import street from '../../../assets/street.png';
import cruiser from '../../../assets/cruiser-new.png';
import scooter from '../../../assets/scooter.png';

class VehicleType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  bodyTypeSelectHandler = (type) => {
    const { main, updateMainValue } = this.props;
    updateMainValue('filter', { priceRange: main.filter.priceRange, bodyType: type });
  }

  render() {
    const { car, main } = this.props;
    return (
      car
        ? (
          <div className="side-menu" style={{ marginTop: 20 }}>
            <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Vehicle Type</h3>
            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div onClick={() => this.bodyTypeSelectHandler('Hatchback')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={hatchback} style={{ width: 60, height: 50 }} />
                <span style={{ color: main.filter.bodyType === 'Hatchback' ? '#ff4202' : '#757575' }}>Hatchback</span>
              </div>
              <div onClick={() => this.bodyTypeSelectHandler('Sedan')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={sedan} style={{ width: 60, height: 50 }}/>
                <span style={{ color: main.filter.bodyType === 'Sedan' ? '#ff4202' : '#757575'}}>Sedan</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div onClick={() => this.bodyTypeSelectHandler('MUV')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={muv} style={{ width: 60, height: 50 }}/>
                <span style={{ color: main.filter.bodyType === 'MUV' ? '#ff4202' : '#757575'}}>MUV</span>
              </div>
              <div onClick={() => this.bodyTypeSelectHandler('SUV')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={suv} style={{ width: 60, height: 50 }}/>
                <span style={{ color: main.filter.bodyType === 'SUV' ? '#ff4202' : '#757575'}}>SUV</span>
              </div>
            </div>

            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div onClick={() => this.bodyTypeSelectHandler('Luxury')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={luxury} style={{ width: 60, height: 50 }}/>
                <span style={{ color: main.filter.bodyType === 'Luxury' ? '#ff4202' : '#757575'}}>Luxury</span>
              </div>
              <div onClick={() => this.bodyTypeSelectHandler('Minivans')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={minivans} style={{ width: 60, height: 50 }}/>
                <span style={{ color: main.filter.bodyType === 'Minivans' ? '#ff4202' : '#757575'}}>Minivans</span>
              </div>
            </div>

            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div onClick={() => this.bodyTypeSelectHandler('Pick-Up')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={pickupTruck} style={{ width: 60, height: 50 }}/>
                <span style={{ color: main.filter.bodyType === 'Pick-Up' ? '#ff4202' : '#757575' }}>Pickup Truck</span>
              </div>
            </div>
          </div>
        )
        : (
          <div className="side-menu" style={{ marginTop: 20 }}>
            <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Vehicle Type</h3>
            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div onClick={() => this.bodyTypeSelectHandler('Scooter')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={scooter} style={{ width: 60, height: 50 }} />
                <span style={{ color: main.filter.bodyType === 'Scooter' ? '#ff4202' : '#757575' }}>Scooter</span>
              </div>
              <div onClick={() => this.bodyTypeSelectHandler('Street')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={street} style={{ width: 60, height: 50 }} />
                <span style={{ color: main.filter.bodyType === 'Street' ? '#ff4202' : '#757575' }}>Street</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div onClick={() => this.bodyTypeSelectHandler('Cruiser')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={cruiser} style={{ width: 60, height: 50 }} />
                <span style={{ color: main.filter.bodyType === 'Cruiser' ? '#ff4202' : '#757575' }}>Cruiser</span>
              </div>
              <div onClick={() => this.bodyTypeSelectHandler('Sports')} style={{ cursor: 'pointer', width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                <img src={sports} style={{ width: 60, height: 50 }} />
                <span style={{ color: main.filter.bodyType === 'Sports' ? '#ff4202' : '#757575' }}>Sports</span>
              </div>
            </div>
          </div>
        )
    );
  }
}
export default VehicleType;
