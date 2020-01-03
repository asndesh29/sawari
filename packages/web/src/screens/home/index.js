import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './components/navbar';
import Selector from './components/selector';
import Slider from './components/slider';
import TopCarBrand from './components/product-list/topCarBrand';
import TopBikeBrand from './components/product-list/topBikeBrand';
import Footer from './components/footer';
import * as actions from '../../actions';
import MostPopularCar from './components/product-list/mostPopularCar';
import NewCar from './components/product-list/newCar';
import MostPopularBike from './components/product-list/mostPopularBike';
import NewBikes from './components/product-list/newBikes';
import UsedCar from './components/product-list/usedCar';
import UsedBike from './components/product-list/usedBikes';
import Cars from './components/product-list/cars';
import Bikes from './components/product-list/bikes';
import BikeBrands from './components/product-list/bike-brands';
import Scooters from './components/product-list/scooters';
import UsedVehical from './components/product-list/used-vehicles';
import CarComparison from './components/product-list/car-comparison';
import BikeAndScooterComparisons from './components/product-list/bike&scooterComparision';
import News from './components/product-list/news';
import Videos from './components/product-list/videos';

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
    console.log(this.props);
    return (
      <div className="main_container">
        <Navbar {...this.props} />
        <div className="home-selector-slider">
          <Selector {...this.props}/>
          <Slider {...this.props}/>
        </div>
        <TopCarBrand {...this.props} />
        <BikeBrands {...this.props} />
        <Cars {...this.props} />
        <Bikes {...this.props} />
        <Scooters {...this.props} />
        <UsedVehical {...this.props} />
        <CarComparison {...this.props} withScroll />
        <BikeAndScooterComparisons {...this.props} />
        <News {...this.props} />
        <Videos {...this.props} />
        <Footer {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { ...actions })(Index);
