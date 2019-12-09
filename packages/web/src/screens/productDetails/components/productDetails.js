import React from 'react';
import { Card, Elevation, Button } from '@blueprintjs/core';
import EnquiryForm from './EnquiryForm';
import Details from './details';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enquiryShow: false, showDetail: false };
  }

  async componentWillMount() {
    const { fetchProductDetail, match, main } = this.props;
    const { proId } = match.params;
    if (!main.currentCarDetail) {
      await fetchProductDetail(proId);
      this.setState({ showDetail: true });
    } else {
      this.setState({ showDetail: true })
    }
  }

  closeEnquiry = () => {
    const { enquiryShow } = this.state;
    this.setState({ enquiryShow: !enquiryShow });
  }


  render() {
    const { enquiryShow } = this.state;
    const { showDetail } = this.state;
    return (
      <div className="product-detail">
        <Card
          interactive
          elevation={Elevation.TWO}
          className="product-card"
        >
        {showDetail &&  <Details {...this.props} />}
          <div className="query_button">
            <Button fill intent="primary" onClick={this.closeEnquiry}>Enquiry</Button>
          </div>
        </Card>
        <EnquiryForm isOpen={enquiryShow} onClose={this.closeEnquiry} props={this.props} />
      </div>
    );
  }
}
export default ProductDetails;
