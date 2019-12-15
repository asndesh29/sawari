import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';

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
        gotKey: true,
      });
    }
  }

  findMentor = () => {
    this.setState({
      search: 'no-key',
      gotKey: true,
    });
  }

  render() {
    const { search, gotKey } = this.state;
    return (
      <div className="search-box-container">
        {gotKey && <Redirect push to={`/search/key=${search}`} />}
        <div className="search-form">
          <input
            value={search}
            onChange={this.searchChange}
            placeholder="Type your query"
          />
          <div className="search-button" style={{  }}>
            <Icon icon="search" onClick={this.submitSearch} color="black" />
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
