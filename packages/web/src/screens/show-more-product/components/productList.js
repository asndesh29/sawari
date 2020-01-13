import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import CarAndBikeCard from './carAndBikeCard';
import NewsCard from '../../home/components/product-list/news/newsCard';
import videoCard from '../../home/components/product-list/videos/videoCard';
import DealerCard from './dealerCard';
import UsedCarAndBikeCard from './usedCarAndBikeCard';

const newsData = [
  { id: 1, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1578049270316.jpg'},
  { id: 2, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1578049270316.jpg'},
  { id: 3, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1578049270316.jpg'},
  { id: 4, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1578049270316.jpg'},
  { id: 4, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1578049270316.jpg'},
];

const content = { cars: 1, bikes: 2, scooters: 2 };

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: null, searchResult: null };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  render() {
    const { main, contentType, showroomType, serviceCenterType, placeId, usedVehicleType } = this.props;
    const { showProductDtails, searchResult } = this.state;
    return (
      <div className="search-product-list">
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        <div className="product-list">
          {main.initialData.vehicleBrandProduct && (contentType === 'cars' || contentType === 'bikes')
            ? main.initialData.vehicleBrandProduct.filter((obj) => obj.stypeId === content[contentType]).map((obj) => CarAndBikeCard(obj, this.cardOnClickHandler))
            : []}
          { contentType === 'news' ? newsData.map((obj) => NewsCard(obj, this.cardOnClickHandler)) : []}
          { contentType === 'videos' ? newsData.map((obj) => videoCard(obj, this.cardOnClickHandler)) : [] }
          { showroomType && main.initialData.dealerList && main.initialData.dealerList.map((d) => DealerCard(d)) }
          { serviceCenterType && main.initialData.dealerList && main.initialData.dealerList.map((d) => DealerCard(d)) }
          { placeId && usedVehicleType && main.initialData.usedVehicle && main.initialData.usedVehicle.map((uv) => UsedCarAndBikeCard(uv, this.cardOnClickHandler))}
        </div>
      </div>
    );
  }
}
export default ProductList;
ProductList.propTypes = {
  updateMainValue: PropTypes.func.isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  contentType: PropTypes.string.isRequired,
};
