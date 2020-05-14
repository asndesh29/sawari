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
    this.state = { loading: false, brand: null };
  }

  async componentWillMount() {
    const { fetchInitialData } = this.props;
    this.setState({ loading: true });
    await fetchInitialData();
    this.setState({ loading: false });
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
    return (
      <div className="main_product_details">
        {brand && <Redirect push to={`/${brand.stypeId === 1 ? 'car' : 'bike'}/brand/${brand.brandName.replace(/\s/g, '')}-${brand.id}`.toLocaleLowerCase()} />}
        <Navbar {...this.props} />
        <div className="main-product-details-sidebar">
          {currentNews ? <ProductDetails {...this.props} news={currentNews} /> : <Spinner size={20} intent="success" />}
          <SideMenuBrand {...this.props} car bike brandClickHandler={this.brandClickHandler} />
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
