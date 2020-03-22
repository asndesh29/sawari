import React from 'react';
import { connect } from 'react-redux';
import SearchBox from 'react-search-box';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';

const type = { 1: 'car', 2: 'bike' };

class SearchElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      gotKey: false,
    };
  }

  searchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  }

  submitSearch = (e) => {
    e.preventDefault();
    const { search } = this.state;
    if (search.replace(/\s/g, '').length !== 0) {
      this.setState({
        gotKey: search,
      });
    }
  }

  brandLinkProvider = (obj) => {
    return `/${type[obj.stypeId]}/brand/${obj.brandName.replace(/\s/g, '')}-${obj.id}`.toLocaleLowerCase();
  }

  modelLinkPropvider = (obj) => {
    return `/details/${obj.name.replace(/\s/g, '')}-${obj.id}`.toLocaleLowerCase();
  }

  render() {
    const { search, gotKey } = this.state;
    const { main } = this.props;
    console.log('state value', this.state);
    const brandList = main.initialData.vehicleBrand ? main.initialData.vehicleBrand.map(b => ({ value: b.brandName, key: this.brandLinkProvider(b), stypeId: b.stypeId, type: 'brand' })) : [];
    const varientList = main.initialData.vehicleModel ? main.initialData.vehicleModel.map(m => ({ value: m.name, key: this.modelLinkPropvider(m) })) : [];
    const data = [...brandList, ...varientList];
    return (
      <div className="search-box-container">
        {gotKey && <Redirect push to={`${search}`} />}
        <div className="search-form">
          <div style={{ width: '100%', zIndex: 10, color: 'black', maxHeight: 100 }}>
            <SearchBox
              data={data}
              placeholder="Search Cars or Brands eg. Swift or Maruti"
              // onChange={(value) => this.setState({ search: value })}
              onSelect={(v) => this.setState({ search: v.key })}
            />
          </div>
          <div className="search-button">
            <Icon icon="search" onClick={this.submitSearch} color="white" />
          </div>
        </div>
      </div>
    );
  }
}

SearchElement.propTypes = {
  account: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(SearchElement);
