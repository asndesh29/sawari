import React from 'react';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

const provinceList = [
  {id: 1, name: 'Province 1', image: `${ENDPOINT}/province_image/province1.jpeg` },
  {id: 2, name: 'Province 2', image: `${ENDPOINT}/province_image/province2.jpg` },
  {id: 3, name: 'Province 3', image: `${ENDPOINT}/province_image/province3.jpg` },
  {id: 4, name: 'Province 4', image: `${ENDPOINT}/province_image/province4.jpeg` },
  {id: 5, name: 'Province 5', image: `${ENDPOINT}/province_image/province5.jpeg` },
  {id: 6, name: 'Province 6', image: `${ENDPOINT}/province_image/province6.jpg` },
  {id: 7, name: 'Province 7', image: `${ENDPOINT}/province_image/province6.jpg` },
];

const ProvinceDesign = (obj) => {
  return (
    <Card style={{ height: 'auto', width: 'auto', margin: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
      <img src={obj.image} style={{ height: 50, width: 50, borderRadius: '100%'}} />
      <span style={{ color: '#757575', fontSize: 10, marginTop: 5 }}>Dealers in</span>
      <span style={{ fontSize: 15, fontWeight: 'bold'}}>{obj.name}</span>
    </Card>
  );
};

class Province extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="side-menu">
        <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Province</h3>
        <div style={{ display: 'flex'}}>
          <div>
            {ProvinceDesign(provinceList[0])}
          </div>
          <div>
            {ProvinceDesign(provinceList[1])}
          </div>
          <div>
            {ProvinceDesign(provinceList[2])}
          </div>
        </div>
        <div style={{ display: 'flex'}}>
          <div>
            {ProvinceDesign(provinceList[3])}
          </div>
          <div>
            {ProvinceDesign(provinceList[4])}
          </div>
          <div>
            {ProvinceDesign(provinceList[5])}
          </div>
        </div>
        {ProvinceDesign(provinceList[6])}
      </div>
    );
  }
}
export default Province;
