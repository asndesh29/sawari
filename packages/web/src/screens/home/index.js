import React, { Component } from 'react';
import Navbar from './components/navbar';
import Selector from './components/selector';
import Slider from './components/slider';
import ProductList from './components/product-list';
import Footer from './components/footer';

class Index extends Component {
  state = {}

  render() {
    return (
      <div className="main_container">
        <Navbar />
        <div className="home-selector-slider">
          <Selector />
          <Slider />
        </div>
        <ProductList />
        <Footer />
      </div>
    );
  }
}
export default Index;
