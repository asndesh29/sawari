import React from 'react';
import PropTypes from 'prop-types';
import OfferDetailCard from '../../../../common/offerCard';

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { main, currentProductDetails } = this.props;
    const offerdetails = main.initialData.DiscountOffer.find(off => off.variantId === currentProductDetails.varients[0].id);
    return (
      <div className="offer-container">
        {offerdetails && <OfferDetailCard obj={offerdetails} />}
      </div>
    );
  }
}
export default Offer;

Offer.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  currentProductDetails: PropTypes.objectOf(PropTypes.any).isRequired,
};
