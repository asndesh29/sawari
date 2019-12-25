import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card, Elevation, Button, Icon } from '@blueprintjs/core';
import { ENDPOINT, APP_PRIMARY_COLOR } from '../../../config';
import EnquiryForm from './EnquiryForm';

const locateClickHandler = (obj) => {
  window.open(`https://www.google.com/maps/dir/Current+Location/${obj.latitude},${obj.logitude}`);
};

const ProductCard = (obj, cardOnClickHandler, onEnqueryClickHandler) => {
  return (
    <Card
      interactive
      elevation={Elevation.TWO}
      className="product-card"
      style={{ height: 'auto', width: 400, margin: 10, display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      onClick={() => cardOnClickHandler(obj)}
    >
      <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.brandName} style={{ height: 200, width: 300 }} />
      <span style={{ fontWeight: 'bold' }}>{obj.name}</span>
      <span>{`${obj.description}`}</span>
      <div style={{ marginTop: 10, width: '100%' }}>
        <Icon icon="phone" style={{ marginRight: 10, color: 'green' }}/>
        <span>{obj.phoneNo}</span>
        <Button text="Locate" fill intent="success" style={{ marginTop: 10 }} onClick={() => locateClickHandler(obj)} />
        <Button text="Book Now" fill intent="success" onClick={() => onEnqueryClickHandler(obj)} style={{ marginTop: 10 }} />
      </div>
    </Card>
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, showEnquiryForm: false };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  onEnquiryFormToggle = (obj) => {
    console.log('toggle vaue', obj);
    const { updateFormValue, form } = this.props;
    updateFormValue('serviceCenterEnquiry', { ...form.serviceCenterEnquiry, serviceCenterId: obj.id });
    this.setState({ showEnquiryForm: !this.state.showEnquiryForm });
  }

  render() {
    const { main, updateMainValue, sbId, stypeId } = this.props;
    const { showProductDtails } = this.state;
    return (
      <div className="home-product-list">
        {/* {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />} */}
        <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {main.initialData.serviceCenterList ? main.initialData.serviceCenterList.filter(c => ((c.stypeId === parseInt(stypeId, 10)) && c.sbId === parseInt(sbId, 10))).map((obj) => ProductCard(obj, this.cardOnClickHandler, this.onEnquiryFormToggle)) : []}
        </div>
        <EnquiryForm onClose={this.onEnquiryFormToggle} props={this.props} isOpen={this.state.showEnquiryForm} schema='serviceCenterEnquiry' />
      </div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
