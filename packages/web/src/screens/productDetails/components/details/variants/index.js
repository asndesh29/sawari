import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import VariantCard from './variatCard';

const contentType = { 1: 'cars', 2: 'bikes' };

class Variant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeCompare: false };
  }

  compareChangeHandler = (e, vId) => {
    console.log('Change value', e.target.value, vId);
    this.setState({ [vId]: !this.state[vId] });
  }

  render() {
    const { currentProductDetails, changeVariant } = this.props;
    const { activeCompare } = this.state;
    const allActiveCompare = Object.keys(this.state).filter((vid) => vid !== 'activeCompare').filter((v) => this.state[v]).map((v) => parseInt(v, 10));
    console.log('All Active Compare', allActiveCompare, this.state);
    const urlString = allActiveCompare.reduce((url, id) => {
      url = `${url}/${currentProductDetails.varients.find((v) => v.id === id).name.replace(/\s/g, '')}-${id}`.toLocaleLowerCase();
      return url;
    }, '');
    console.log('String Url', urlString);
    return (
      <div style={{ paddingTop: 5 }}>
        {activeCompare && <Redirect to={`/compare/${contentType[currentProductDetails.stypeId]}${urlString}`} />}
        {currentProductDetails.varients.map((obj) => <VariantCard changeVariant={changeVariant} obj={obj} state={this.state} compareChangeHandler={this.compareChangeHandler} />)}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {allActiveCompare.length > 0 && <Button onClick={() => this.setState({ activeCompare: true })} text="Compare Now" style={{ padding: 10, fontSize: 15, background: '#ff4202', color: 'white' }} />}
        </div>
      </div>
    );
  }
}
export default Variant;
Variant.propTypes = {
  currentProductDetails: PropTypes.objectOf(PropTypes.any).isRequired,
};
