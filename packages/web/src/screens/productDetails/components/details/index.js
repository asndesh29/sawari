import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import Specification from './Specification';
import Overview from './overview';
import Review from './Review';
import Offers from './Offers';
import Compare from './Compare';
import Varient from './Varient';
import SocialMediaShare from '../../../common/socialMediaShare';
import EnquiryForm from '../EnquiryForm';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enquiryShow: false, showDetail: false, tabId: 'Specification' };
  }

  async componentWillMount() {
    const { fetchProductDetail, match, main } = this.props;
    const { proId } = match.params;
    if (!main.currentCarDetail) {
      await fetchProductDetail(proId);
      this.setState({ showDetail: true });
    } else {
      this.setState({ showDetail: true });
    }
  }

  closeEnquiry = () => {
    const { enquiryShow } = this.state;
    this.setState({ enquiryShow: !enquiryShow });
  }

  handleTabChange = (id) => {
    this.setState({ tabId: id });
  }

  render() {
    const { tabId, showDetail, enquiryShow } = this.state;
    console.log('state value in show details page', this.props);
    return (
      showDetail ? (
        <div className="product-detail">
          <SocialMediaShare url="http://159.89.150.216:3000/" />
          <Overview {...this.props}  showEnquiryForm={this.closeEnquiry} />
          <EnquiryForm isOpen={enquiryShow} onClose={this.closeEnquiry} props={{...this.props}} />
          <div className="product-detail-menu">
            <Tabs className="product-menu-tabs" id="TabsExample" onChange={this.handleTabChange} selectedTabId={tabId}>
              {/* <Tab panelClassName="panel-container" style={{ fontSize: 15, fontWeight: 'bold', color: 'white', background: 'black' }} id="Overview" title="Overview" panel={<Overview {...this.props} />} /> */}
              <Tab panelClassName="panel-container" style={{ fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'end' }} id="Specification" title="Specification" panel={<Specification {...this.props} />} />
              <Tab panelClassName="panel-container" style={{ fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'end' }} id="Compare" title="Compare" panel={<Compare {...this.props} />} />
              <Tab panelClassName="panel-container" style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }} id="Review" title="Review" panel={<Review {...this.props} />} />
              <Tab panelClassName="panel-container" style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }} id="Offers" title="Offers" panel={<Offers {...this.props} />} />
              <Tab panelClassName="panel-container" style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }} id="Varient" title="Varient" panel={<Varient {...this.props} />} />
            </Tabs>
          </div>
        </div>
      ) : null
    );
  }
}
export default ProductDetails;
