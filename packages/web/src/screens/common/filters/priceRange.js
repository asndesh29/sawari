import React from 'react';
import PropTypes from 'prop-types';
import { RangeSlider } from '@blueprintjs/core';

class PriceRange extends React.Component {

  handleValueChange = (value) => {
    // console.log('value in price chage', value);
    const { updateMainValue, main } = this.props;
    updateMainValue('filter', { ...main.filter, priceRange: value });
  }

  render() {
    const { main } = this.props;
    return (
      <div className="side-menu" style={{ border: '1px solid #f1f1f1'}}>
        <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Price Range(Lakh)</h3>
        <div style={{padding: 10 }}>
          <RangeSlider
            min={0}
            max={200}
            stepSize={2}
            labelStepSize={50}
            onChange={this.handleValueChange}
            value={main.filter.priceRange}
            labelRenderer={(v) => `${v}L`}
          />
        </div>
      </div>
    );
  }
}
export default PriceRange;
PriceRange.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
