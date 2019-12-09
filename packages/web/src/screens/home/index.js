import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './components/navbar';
import Selector from './components/selector';
import Slider from './components/slider';
import ProductList from './components/product-list';
import Footer from './components/footer';
import * as actions from '../../actions';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialData: false,
    };
  }

  async componentWillMount() {
    const { fetchInitialData } = this.props;
    await fetchInitialData();
    this.setState({ initialData: true });
  }

  render() {
    return (
      <div className="main_container">
        <Navbar {...this.props} />
        <div className="home-selector-slider">
          <Selector {...this.props}/>
          <Slider {...this.props}/>
        </div>
        <ProductList {...this.props} />
        <Footer {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { ...actions })(Index);
