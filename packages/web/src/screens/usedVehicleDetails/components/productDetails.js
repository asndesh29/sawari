import React from 'react';
import { Card, Elevation, Button } from '@blueprintjs/core';
import Details from './details';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enquiryShow: false, showDetail: false };
  }

  // async componentWillMount() {
  //   const { fetchProductDetail, match, main } = this.props;
  //   const { proId } = match.params;
  //   if (!main.currentCarDetail) {
  //     await fetchProductDetail(proId);
  //     this.setState({ showDetail: true });
  //   } else {
  //     this.setState({ showDetail: true })
  //   }
  // }

  closeEnquiry = () => {
    const { enquiryShow } = this.state;
    this.setState({ enquiryShow: !enquiryShow });
  }

  render() {
    const { enquiryShow } = this.state;
    const { showDetail } = this.state;
    return (
      <div className="product-detail" style={{ width: '70%' }}>
        <Card
          // elevation={Elevation.TWO}
          className="product-card"
        >
          <Details {...this.props} />
        </Card>
      </div>
    );
  }
}
export default ProductDetails;
