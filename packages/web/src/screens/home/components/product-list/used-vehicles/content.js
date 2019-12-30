import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Redirect, Link } from 'react-router-dom';
import { Card, Tabs, Tab } from '@blueprintjs/core';
import { ENDPOINT } from '../../../../../config';

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
    <Card style={{ height: 'auto', width: 'auto', margin: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center' }}>
      <img src={obj.image} style={{ height: 100, width: 100, borderRadius: '100%'}} />
      <span style={{ color: '#757575', fontSize: 10, marginTop: 5 }}>Used vehicle in</span>
      <span style={{ fontSize: 15, fontWeight: 'bold'}}>{obj.name}</span>
    </Card>
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, selectedTabId: 'Cars', selectedCity: null };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  handleTabChange = (id) => {
    console.log('tab id', id);
    this.setState({ selectedTabId: id });
  }

  render() {
    const { main, updateMainValue } = this.props;
    const { showProductDtails, selectedTabId } = this.state;
    return (
      <div style={{ background: 'white', width: '90%' }}>
        {/* <div style={{ height: 1, width: '100%', background: '#f1f1f1', margin: 0, marginTop: -22 }} /> */}
        <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 20 }}>
          <div elevation={0} style={{ display: 'flex', flexWrap: 'wrap'}}>
            {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
            {provinceList.map(p => ProvinceDesign(p))}
          </div>
        </div>
        <div style={{ height: 190, width: 5, background: '#f1f1f1',marginLeft: 40, marginTop:  10, marginRight: 30, margin: 0 }}/>
        <div style={{ marginLeft: 20, width: 300, flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <spa style={{ fontSize: 20 }}>
            I am looking to buy a second
          </spa>
          <span style={{ fontSize: 20 }}>hand vehicle in</span>
          <div style={{ marginBottom: 10, marginTop: 10, width: '100%' }}>
            <Select
              styles={{container: (provided, state) => ({
                ...provided,
                color: 'black',
              })}}
              options={this.props.main.initialData.cities ? this.props.main.initialData.cities.map(c => ({ value: c, label: c })) : []}
              isSearchable
              placeholder="Select city"
              onChange={e => this.setState({ selectedCity: e.value })}
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
  updateMainValue: PropTypes.func.isRequired,
};
