import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import VideoCard from './videoCard';

const newsData = [
  {id: 1, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1576386219122.png'},
  {id: 2, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1576386219122.png'},
  {id: 3, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1576386219122.png'},
  {id: 4, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1576386219122.png'},
  // {id: 4, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1576386219122.png'},
];

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
          <h2>Videos</h2>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {main.initialData.vehicleBrand ? newsData.map((obj) => VideoCard(obj, this.cardOnClickHandler)) : []}
        </div>
        <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
          <Link to="/more/videos"><span style={{ fontWeight: 'bold' }}>More Videos</span></Link>
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
