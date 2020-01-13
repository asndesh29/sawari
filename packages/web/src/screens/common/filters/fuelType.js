import React from 'react';

class VehicleType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { car, bike } = this.props;
    return (
      car
        ? (
          <div className="side-menu" style={{ marginTop: 20 }}>
            <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Fuel Type</h3>
            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={hatchback} style={{ width: 60, height: 50 }}/> */}
                <span style={{ color: '#757575'}}>Petrol</span>
              </div>
              <div style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={sedan} style={{ width: 60, height: 50 }}/> */}
                <span style={{ color: '#757575'}}>Diesel</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={muv} style={{ width: 70, height: 40 }}/> */}
                <span style={{ color: '#757575'}}>CNG</span>
              </div>
              <div style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={suv} style={{ width: 100, height: 50 }}/> */}
                <span style={{ color: '#757575'}}>LPG</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={coupe} style={{ width: 60, height: 50 }}/> */}
                <span style={{ color: '#757575' }}>Electric</span>
              </div>
              <div style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={convertible} style={{ width: 60, height: 50 }}/> */}
                <span style={{ color: '#757575'}}>Hybrid</span>
              </div>
            </div>
          </div>
        )
        : (
          <div className="side-menu" style={{ marginTop: 20 }}>
            <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Fuel Type</h3>
            <div style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <div style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
                {/* <img src={hatchback} style={{ width: 60, height: 50 }}/> */}
                <span style={{ color: '#757575'}}>Petrol</span>
              </div>
              <div style={{ width: '48%', padding: 5, marginBottom: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f1f1'}}>
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
