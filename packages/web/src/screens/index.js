import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Home from './home';
import ProductDetails from './productDetails';
import SearchProducts from './searchProducts';

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
        </div>
      </Router>
    );
  }
}
export default index;
