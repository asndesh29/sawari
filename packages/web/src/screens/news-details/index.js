import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import ProductDetails from './components/details';
import SideMenuBrand from '../common/filters/sideBrandMenu';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      brand: null
    };
  }

  async componentWillMount() {
    const { fetchInitialData } = this.props;
    this.setState({
      loading: true
    });
    await fetchInitialData();
    this.setState({
      loading: false
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  brandClickHandler = (brand) => {
    this.setState({ brand });
  }

  render() {
    const { match, main } = this.props;
    const { loading, brand } = this.state;
    const currentNews = !loading ? main.initialData.News.find(n => n.slug === match.params.newsSlug) : null;
    return (<div className="main_product_details news-single-page" > {brand && < Redirect push to={
      `/${brand.stypeId === 1 ? 'car' : 'bike'}/brand/${brand.brandName.replace(/\s/g, '')}-${brand.id}`.toLocaleLowerCase()} />} <div className="page_nav" > <Navbar {...this.props} /> </div>< div className="page-header" >
        <div className="inner" style={{ minHeight: "250px", maxHeight: "250px" }} >
          <div className="container">
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="main-product-details-sidebar" style={{ padding: '0 30px' }} >
          <div className="row">
            <div className="col-md-9">
              {currentNews ? < ProductDetails {...this.props} news={currentNews} /> : <Spinner size={20} intent="success" />}
            </div>
            <div className="col-md-3" >
              <SideMenuBrand {...this.props} car bike brandClickHandler={this.brandClickHandler} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="similar-news">
          <h2>Similar News</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="sn-box">
                <img src="https://i.picsum.photos/id/885/536/354.jpg?hmac=nb-YS7sUHLHyomxpcq5fGN5pLtS_DE1-348TrXS3wL4" className="img-fluid" style={{ width: "100%" }} />
                <div className="text">
                  <h3>Category</h3>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sn-box">
                <img src="https://i.picsum.photos/id/885/536/354.jpg?hmac=nb-YS7sUHLHyomxpcq5fGN5pLtS_DE1-348TrXS3wL4" className="img-fluid" style={{ width: "100%" }} />
                <div className="text">
                  <h3>Category</h3>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sn-box">
                <img src="https://i.picsum.photos/id/885/536/354.jpg?hmac=nb-YS7sUHLHyomxpcq5fGN5pLtS_DE1-348TrXS3wL4" className="img-fluid" style={{ width: "100%" }} />
                <div className="text">
                  <h3>Category</h3>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
                </div>
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
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};