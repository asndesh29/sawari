/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Redirect, Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../../../../config';

const provinceList = [
  { id: 1, name: 'Province 1', image: `${ENDPOINT}/province_image/province1.png`, route: '/used/province/province-1' },
  { id: 2, name: 'Province 2', image: `${ENDPOINT}/province_image/province2.png`, route: '/used/province/province-2' },
  { id: 3, name: 'Province 3', image: `${ENDPOINT}/province_image/province3.png`, route: '/used/province/province-3' },
  { id: 4, name: 'Province 4', image: `${ENDPOINT}/province_image/province4.png`, route: '/used/province/province-4' },
  { id: 5, name: 'Province 5', image: `${ENDPOINT}/province_image/province5.png`, route: '/used/province/province-5' },
  { id: 6, name: 'Province 6', image: `${ENDPOINT}/province_image/province6.png`, route: '/used/province/province-6' },
  { id: 7, name: 'Province 7', image: `${ENDPOINT}/province_image/province7.png`, route: '/used/province/province-7' },
];

const ProvinceDesign = (obj, selectedTabId) => {
  return (
    <Link to={`${obj.route}/${selectedTabId}`} style={{ textDecoration: 'none' }}>
      <Card style={{ height: 'auto', width: 'auto', margin: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <img src={obj.image} style={{ height: 100, width: 100, borderRadius: '100%'}} />
        <span style={{ color: '#757575', fontSize: 10, marginTop: 5 }}>Used vehicle in</span>
        <span style={{ fontSize: 15, fontWeight: 'bold' }}>{obj.name}</span>
      </Card>
    </Link>
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, selectedCity: null };
  }

  render() {
    const { main, selectedTabId } = this.props;
    const { showProductDtails, selectedCity } = this.state;
    return (
      <div className="used-content">
        <div className="provice-distric">
          <div className="province-container">
            <div className="province-content">
              {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
              {selectedCity && <Redirect to={`/used/city/${selectedCity}/${selectedTabId}`.toLocaleLowerCase()} />}
              {provinceList.map(p => ProvinceDesign(p, selectedTabId))}
            </div>
          </div>
          <div className="distric-container">
            <spa style={{ fontSize: 20 }}>
              I am looking to buy a second
            </spa>
            <span style={{ fontSize: 20 }}>hand vehicle in</span>
            <div style={{ marginBottom: 10, marginTop: 10, width: '100%' }}>
              <Select
                styles={{ container: (provided) => ({
                  ...provided,
                  color: 'black',
                })}}
                options={main.initialData.cities ? main.initialData.cities.map(c => ({ value: c, label: c })) : []}
                isSearchable
                placeholder="Select city"
                onChange={(e) => this.setState({ selectedCity: e.value })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
