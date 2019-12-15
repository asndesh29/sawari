import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import BrandDetails from './components';

class Index extends React.Component {
  state={};

  render() {
    console.log('props in brand', this.props);
    return (
      <div className="main_product_details">
        <Navbar {...this.props}/>
        <BrandDetails {...this.props} />
        <Footer {...this.props}/>
      </div>
    );
  }
}

const mapStaToProps = (state) => state;

export default connect(mapStaToProps, { ...actions })(Index);
