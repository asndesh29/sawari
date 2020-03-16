import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@blueprintjs/core';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from '../home/components/footer';
import Enquiry from './components/enquiry';
import Product from './components/propduct';
import AddProduct from './components/addVarient';
import AddBrand from './components/addBrand';
import Dealer from './components/dealers';
import ServiceCenter from './components/service-center';
import DealerEnquiry from './components/dealerEnquiry';
import ServiceCenterEnquiry from './components/serviceCenterEnquiry';
import AddModel from './components/addModel';
import UsedProduct from './components/usedProduct';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initialData: false };
  }

  async componentWillMount() {
    const { fetchAdminData } = this.props;
    await fetchAdminData();
    this.setState({ initialData: true });
  }

  adminContentRenderHelper = () => {
    const { main } = this.props;
    switch (main.currentAdminContent) {
      case 'enquiry':
        return <Enquiry {...this.props} />;
      case 'product':
        return <Product {...this.props} />;
      case 'addProduct':
        return <AddProduct {...this.props} />;
      case 'addBrand':
        return <AddBrand  {...this.props} />;
      case 'dealer':
        return <Dealer {...this.props} />;
      case 'serviceCenter':
        return <ServiceCenter {...this.props} />;
      case 'dealerEnquiry':
        return <DealerEnquiry { ...this.props} />;
      case 'serviceCenterEnquiry':
        return <ServiceCenterEnquiry {...this.props} />;
      case 'addModel':
        return <AddModel {...this.props} />;
      case 'usedProduct':
        return <UsedProduct {...this.props} />;
      default:
        return <AddProduct {...this.props} />;
    }
  }

  render() {
    console.log('props in admin', this.props);
    const { initialData } = this.state;
    return (
      <div className="admin_container">
        <div className="navbar">
          <Navbar {...this.props} />
        </div>
        <div className="admin_content">
          <div className="sidebar">
            <Sidebar {...this.props} />
          </div>
          <div className="content">
            {initialData ? this.adminContentRenderHelper() : <Spinner intent="primary" size={30} />}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Index;

Index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
