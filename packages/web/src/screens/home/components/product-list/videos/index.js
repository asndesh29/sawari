import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import VideoCard from './videoCard';

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
      <div className="home-product-list videos">
        {showProductDtails && <Redirect to={`/brand/${stypeId}/${showProductDtails}`} />}
        <div className="product-list-header">
          <h2>Videos</h2>
        </div>
        <div className="row">
          {main.initialData.Videos ? main.initialData.Videos.slice(0, 3).map((obj) => (
            <div className="col-md-4"> {VideoCard(obj, this.cardOnClickHandler)}</div>
          )) : []}
        </div>
        <div className="link" style={{ marginTop: '50px' }}>
          <Link to="/more/videos" className="more"><span style={{ fontWeight: 'bold' }}>More Videos</span></Link>
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
