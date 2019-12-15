import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import SellForm from './components/sellVehicleForm';
import * as actions from '../../actions';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="search-product">
        <Navbar {...this.props}/>
        <div className="search-product-content">
          <SellForm props={this.props} />
        </div>
        <Footer {...this.props}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { ...actions })(Index);
