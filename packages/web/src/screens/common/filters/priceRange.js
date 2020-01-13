import React from 'react';
import { RangeSlider } from '@blueprintjs/core';

class PriceRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { range: [36, 72] };
  }

  handleValueChange = (value) => {
    // console.log('value in price chage',value);
    this.setState({ range: value });
  }

  render() {
    const { range } = this.state;
    return (
      <div className="side-menu" style={{ border: '1px solid #f1f1f1'}}>
        <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>Price Range(Lakh)</h3>
        <div style={{ padding: 10 }}>
          <RangeSlider
            min={0}
            max={100}
            stepSize={2}
            labelStepSize={20}
            onChange={this.handleValueChange}
            value={range}
            labelRenderer={(v) => `${v} L`}

          />
        </div>
      </div>
    );
  }
}
export default PriceRange;
