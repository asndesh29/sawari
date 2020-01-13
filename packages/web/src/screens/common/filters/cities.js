import React from 'react';
import Select from 'react-select';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedCity: null };
  }

  render() {
    const { main } = this.props;
    return (
      <div className="side-menu">
        <h3 style={{ background: 'black', color: 'white', padding: 5, margin: 0, marginBottom: 10 }}>City</h3>
        <div style={{ marginBottom: 10, marginTop: 10, width: '100%' }}>
          <Select
            styles={{container: (provided, state) => ({
              ...provided,
              color: 'black',
            })}}
            options={main.initialData.cities ? main.initialData.cities.map(c => ({ value: c, label: c })) : []}
            isSearchable
            placeholder="Select city"
            onChange={e => this.setState({ selectedCity: e.value })}
          />
        </div>
      </div>
    );
  }
}
export default City;
