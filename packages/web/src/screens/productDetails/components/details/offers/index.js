import React from 'react';
import OfferDetailCard from './offerDetailCard';

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { main, currentProductDetails } = this.props;
    const offerdetails = main.initialData.DiscountOffer.find(off => off.variantId === currentProductDetails.varients[0].id);
    return (
      <div>
        {offerdetails && <OfferDetailCard obj={offerdetails} />}
      </div>
    );
  }
}
export default Offer;
