import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import ProductDetails from './components/details';
import SideMenuBrand from '../common/filters/sideBrandMenu';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: null };
  }

  componentWillMount() {
    const { fetchInitialData } = this.props;
    window.scrollTo(0, 0);
    fetchInitialData();
  }

  brandClickHandler = (brand) => {
    this.setState({ brand });
  }

  render() {
    // console.log('this is product details', this.props);
    const { main } = this.props;
    const { brand } = this.state;

    return (
      <div>
        <div className="page_nav">
          <Navbar {...this.props} />
        </div>
        <div className="page-header product-detail-page">
          <div className="inner" style={{ minHeight: "250px", maxHeight: "250px" }}>
          </div>
        </div>
        <div className="page-content">
          <div className="main_product_details">
            {brand && <Redirect to={`/${brand.stypeId === 1 ? 'car' : 'bike'}/brand/${brand.brandName.replace(/\s/g, '')}-${brand.id}`.toLocaleLowerCase()} />}
            <div className="main-product-details-sidebar" style={{ padding: '0 15px' }}>
              <div className="row">
                <div className="col-md-9">
                  {main.initialData.vehicleModel && <ProductDetails {...this.props} />}
                </div>
                <div className="col-md-3">
                  <SideMenuBrand {...this.props} car bike brandClickHandler={this.brandClickHandler} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer {...this.props} />
      </div>

    );
  }
}

const mapStaToProps = (state) => state;

export default connect(mapStaToProps, { ...actions })(Index);
Index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchInitialData: PropTypes.func.isRequired,
};
