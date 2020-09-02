import React from 'react';
import { Tab, Tabs, Switch } from '@blueprintjs/core';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Specification from './Specification';
import Overview from './overview';
import Review from './Review';
// import Offers from './offers';
import Compare from './Compare';
import Varient from './variants';
import SocialMediaShare from '../../../common/socialMediaShare';
import EnquiryForm from '../EnquiryForm';

const contentType = { 1: 'cars', 2: 'bikes' };

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expandAll: false, compareProduct: null, enquiryShow: false, tabId: 'Variant', currentProductDetails: null, variantId: null };
  }

  async componentWillMount() {
    const { match, main } = this.props;
    const { proId } = match.params;
    const currentProductDetails = main.initialData.vehicleModel.find((vm) => `${vm.name.replace(/\s/g, '')}-${vm.id}`.toLocaleLowerCase() === proId);
    // console.log('Current Product Details', currentProductDetails);
    this.setState({ currentProductDetails, variantId: currentProductDetails.varients[0].id });
  }

  closeEnquiry = () => {
    const { enquiryShow, currentProductDetails, variantId } = this.state;
    const { updateFormValue } = this.props;
    updateFormValue('addEnquiry', { pId: variantId });
    console.log('current product details', currentProductDetails, variantId);
    this.setState({ enquiryShow: !enquiryShow });
  }

  handleTabChange = (id) => {
    this.setState({ tabId: id });
  }

  changeVariant = (vid) => {
    this.setState({ variantId: vid });
  }

  compareButtonHandler = (obj, stypeId) => {
    this.setState({ compareProduct: obj, stypeId });
    // console.log('Compare Button click', obj, stypeId);
  }

  render() {
    const { tabId, currentProductDetails, enquiryShow, variantId, compareProduct, stypeId, expandAll } = this.state;
    // console.log('state value in show details page', this.props, variantId);
    const { match } = this.props;
    return (
      currentProductDetails ? (
        <div className="product-detail">
          {/* <SocialMediaShare url={`https://sawarikinbech.com/#/news-details/${match.params.newsSlug}`} /> */}
          {compareProduct && <Redirect to={`/compare/${contentType[stypeId]}/${compareProduct.name.replace(/\s/g, '')}-${compareProduct.id}`.toLocaleLowerCase()} />}
          <Overview {...this.props} compareButtonHandler={this.compareButtonHandler} showEnquiryForm={this.closeEnquiry} currentProductDetails={currentProductDetails} variantId={variantId} />
          <EnquiryForm isOpen={enquiryShow} onClose={this.closeEnquiry} props={{ ...this.props }} currentProductDetails={currentProductDetails} />
          <div className="product-detail-menu">
            <h3>Additional Information</h3>
            <Tabs
              className="product-menu-tabs"
              id="TabsExample"
              onChange={this.handleTabChange}
              selectedTabId={tabId}
            >
              <Tab
                panelClassName="panel-container"
                className="tab-heading"
                id="Variant"
                title="Variant"
                panel={<Varient handleTabChange={this.handleTabChange} {...this.props} changeVariant={this.changeVariant} currentProductDetails={currentProductDetails} variantId={variantId} />}
              />
              <Tab
                panelClassName="panel-container"
                className="tab-heading"
                id="Specification"
                title="Specification"
                panel={<Specification expandAll={expandAll} {...this.props} currentProductDetails={currentProductDetails} variantId={variantId} />}
              />
              <Tab
                panelClassName="panel-container"
                className="tab-heading"
                id="Compare"
                title="Compare"
                panel={<Compare {...this.props} currentProductDetails={currentProductDetails} variantId={variantId} />}
              />
              <Tab
                panelClassName="panel-container"
                className="tab-heading"
                id="Review"
                title="Review"
                panel={<Review {...this.props} currentProductDetails={currentProductDetails} variantId={variantId} />}
              />
              <Tab
                panelClassName="panel-container"
                className="tab-heading"
                id="Offers"
                title="Offers"
              // panel={<Offers {...this.props} currentProductDetails={currentProductDetails} variantId={variantId} />}
              />
              {/* <Tabs.Expander /> */}

            </Tabs>
            {/* <div></div> */}

          </div>
        </div>
      ) : null
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  fetchProductDetail: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchInitialData: PropTypes.func.isRequired,
};
