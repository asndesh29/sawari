import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import * as actions from '../../actions';
import Content from './content';

class Compare extends React.Component {
  state={};

  render() {
    return (
      <div className="compare-product">
        <Navbar {...this.props} />
        <Content {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { ...actions })(Compare);
