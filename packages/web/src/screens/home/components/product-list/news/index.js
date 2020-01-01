import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Card, Elevation, Button } from '@blueprintjs/core';
import HorizontalScrollView from 'react-horizontal-scrolling-menu';
import { ENDPOINT } from '../../../../../config';

const newsData = [
  {id: 1, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1576386219122.png'},
  {id: 2, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1576386219122.png'},
  {id: 3, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1576386219122.png'},
  {id: 4, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1576386219122.png'},
  {id: 4, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1576386219122.png'},
];

const ProductCard = (obj, cardOnClickHandler) => {
  return (
    <Card
      // interactive
      className="product-card"
      style={{ height: 'auto', width: 500, margin: 5, padding: 5 }}
      onClick={() => cardOnClickHandler(obj)}
    >
      <div style={{ display: 'flex' }}>
        <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.brandName} style={{ height: 200, width: 200 }} onClick={() => cardOnClickHandler(obj)} />
        <div style={{ marginTop: 20, marginLeft: 10, }}>
          <span style={{fontSize: 20}}>{obj.header}</span>
          <br />
          <span style={{ color: '#757575', fontSize: 10 }}>{obj.date}</span>
          <br />
          <br />
          <span style={{ color: '#757575'}}>{obj.content}</span>
        </div>
      </div>
      <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
        <Link to="/"><span style={{ fontWeight: 'bold'}}>More...</span></Link>
      </div>
    </Card>
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, stypeId: null };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id, stypeId: obj.stypeId });
  }

  render() {
    const { main, updateMainValue } = this.props;
    const { showProductDtails, stypeId } = this.state;
    return (
      <Card elevation={0} className="home-product-list">
        {showProductDtails && <Redirect to={`/brand/${stypeId}/${showProductDtails}`} />}
        <div className="product-list-header">
          <h2>News</h2>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {main.initialData.vehicleBrand ? newsData.map((obj) => ProductCard(obj, this.cardOnClickHandler)) : []}
        </div>
        <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
          <Link to="/"><span style={{ fontWeight: 'bold'}}>More News</span></Link>
        </div>
      </Card>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
