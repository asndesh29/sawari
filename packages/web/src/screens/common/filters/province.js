/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

const provinceList = [
  { id: 1, name: 'Province-1', image: `${ENDPOINT}/province_image/province1.png` },
  { id: 2, name: 'Province-2', image: `${ENDPOINT}/province_image/province2.png` },
  { id: 3, name: 'Province-3', image: `${ENDPOINT}/province_image/province3.png` },
  { id: 4, name: 'Province-4', image: `${ENDPOINT}/province_image/province4.png` },
  { id: 5, name: 'Province-5', image: `${ENDPOINT}/province_image/province5.png` },
  { id: 6, name: 'Province-6', image: `${ENDPOINT}/province_image/province6.png` },
  { id: 7, name: 'Province-7', image: `${ENDPOINT}/province_image/province7.png` },
];

const ProvinceDesign = (obj, provinceSelectHandler, main) => {
  return (
    <Card onClick={() => provinceSelectHandler(obj.name)} style={{ cursor: 'pointer', height: 'auto', width: 'auto', margin: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
      <img src={obj.image} style={{ height: 50, width: 50, borderRadius: '100%'}} />
      <span style={{ color: '#757575', fontSize: 10, marginTop: 5 }}>Dealers in</span>
      <span style={{ fontSize: 15, fontWeight: 'bold', color: main.filter.province === obj.name ? '#ff4202' : 'black' }}>{obj.name}</span>
    </Card>
  );
};

class Province extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  provinceSelectHandler = (type) => {
    const { main, updateMainValue } = this.props;
    updateMainValue('filter', {priceRange: main.filter.priceRange, province: type });
  }

  render() {
    const { main } = this.props;
    return (
      <div className="side-menu">
        <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Province</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            {ProvinceDesign(provinceList[0], this.provinceSelectHandler, main)}
          </div>
          <div>
            {ProvinceDesign(provinceList[1], this.provinceSelectHandler, main)}
          </div>
          <div>
            {ProvinceDesign(provinceList[2], this.provinceSelectHandler, main)}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            {ProvinceDesign(provinceList[3], this.provinceSelectHandler, main)}
          </div>
          <div>
            {ProvinceDesign(provinceList[4], this.provinceSelectHandler, main)}
          </div>
          <div>
            {ProvinceDesign(provinceList[5], this.provinceSelectHandler, main)}
          </div>
        </div>
        {ProvinceDesign(provinceList[6], this.provinceSelectHandler, main)}
      </div>
    );
  }
}
export default Province;
