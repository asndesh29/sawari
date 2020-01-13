import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import DealerCard from './dealerCard';
import Provices from '../../../common/filters/province';
import City from '../../../common/filters/cities';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  render() {
    const { main, updateMainValue, sbId, stypeId } = this.props;
    const { showProductDtails } = this.state;
    return (
      <div className="main-brand-product">
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        <div className="side-menu">
          <Provices {...this.props} />
          <City {...this.props} />
        </div>
        <div className="brand-product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {main.initialData.dealerList ? main.initialData.dealerList.filter(c => ((c.stypeId === parseInt(stypeId, 10)) && c.sbId === parseInt(sbId, 10))).map((obj) => DealerCard(obj, this.cardOnClickHandler, this.onEnquiryFormToggle)) : []}
        </div>
      </div>
    );
  }
}

export default Index;
Index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
