import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Home from './home';
import ProductDetails from './productDetails';
import SearchProducts from './searchProducts';
import BrandDetails from './brand-details';
import SellVehicle from './sell-vehicle';
import UsedVehicallDetails from './usedVehicleDetails';
import Compare from './compare';
import ShowMore from './show-more-product';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/details/:proId" component={ProductDetails} />
          <Route path="/search/:buttonType/:searchType/:typeId/:tempId" component={SearchProducts} />
          <Route path="/brand/:stypeId/:sbId" component={BrandDetails} />
          <Route path="/sell-vehicle" component={SellVehicle} />
          <Route path="/used-vehicle/details/:usedVehicleId" component={UsedVehicallDetails} />
          <Route exact path="/compare/:typeId" component={Compare} />
          <Route exact path="/compare/:typeId/:pId1/:pId2" component={Compare} />
          <Route exact path="/compare/:typeId/:pId1/:pId2/pId3" component={Compare} />
          <Route exact path="/compare/:typeId/:pId1/:pId2/:pId3/:pId4" component={Compare} />
          <Route exact path="/more/:contentType" component={ShowMore} />
          <Route exact path="/popular/:categoryType" component={ShowMore} />
          <Route exact path="/latest/:categoryType" component={ShowMore} />
          <Route exact path="/upcoming/:categoryType" component={ShowMore} />
          <Route exact path="/discount-offers/:contentType" component={ShowMore} />
          <Route exact path="/showrooms/:showroomType" component={ShowMore} />
          <Route exact path="/service-center/:serviceCenterType" component={ShowMore} />
          <Route exact path="/used/province/:placeId/:usedVehicleType" component={ShowMore} />
          <Route exact path="/used/city/:cityId/:usedVehicleType" component={ShowMore} />
          <Route exact path="/used/:usedVehicleType" component={ShowMore} />
          <Route exact path="/used/showrooms/:usedVehicleType" component={ShowMore} />
          <Route exact path="/car/brand/:brandName" component={BrandDetails} />
          <Route exact path="/bike/brand/:brandName" component={BrandDetails} />
        </div>
      </Router>
    );
  }
}
export default index;
