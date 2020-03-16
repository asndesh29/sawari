import React from 'react';
import { Card } from '@blueprintjs/core';
import Details from './details';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  closeEnquiry = () => {
    const { enquiryShow } = this.state;
    this.setState({ enquiryShow: !enquiryShow });
  }

  render() {

    return (
      <div className="product-detail">
        <Card
          style={{ padding: 5 }}
          className="product-card"
        >
          <Details {...this.props} />
        </Card>
      </div>
    );
  }
}
export default ProductDetails;
