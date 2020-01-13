import React from 'react';
import hatchback from '../../../assets/hatchback.png';
import sedan from '../../../assets/sedan.png';
import muv from '../../../assets/muv.png';
import suv from '../../../assets/suv.png';
import coupe from '../../../assets/coupe.png';
import convertible from '../../../assets/convertible.png';

class VehicleType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="side-menu" style={{ marginTop: 20 }}>
        <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Vehicle Type</h3>
        <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
          <div style={{ width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
            <img src={hatchback} style={{ width: 60, height: 50 }}/>
            <span style={{ color: '#757575'}}>Hatchback</span>
          </div>
          <div style={{ width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
            <img src={sedan} style={{ width: 60, height: 50 }}/>
            <span style={{ color: '#757575'}}>Hatchback</span>
          </div>
        </div>
        <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
          <div style={{ width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
            <img src={muv} style={{ width: 70, height: 40 }}/>
            <span style={{ color: '#757575'}}>MUV</span>
          </div>
          <div style={{ width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
            <img src={suv} style={{ width: 100, height: 50 }}/>
            <span style={{ color: '#757575'}}>SUV</span>
          </div>
        </div>
        <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
          <div style={{ width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
            <img src={coupe} style={{ width: 60, height: 50 }}/>
            <span style={{ color: '#757575' }}>Coupe</span>
          </div>
          <div style={{ width: '48%', marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
            <img src={convertible} style={{ width: 60, height: 50 }}/>
            <span style={{ color: '#757575'}}>Convertible</span>
          </div>
        </div>
      </div>
    );
  }
}
export default VehicleType;
