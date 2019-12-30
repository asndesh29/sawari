import React from 'react';
import { Card, Elevation, Button } from '@blueprintjs/core';
import { Redirect } from 'react-router-dom';
import selectStructure from './selectorStructure';
import Form from '../../../../components/common/Form';

class Selector extends React.Component {
  state = {};

  buttonClickHandler = (type) => {
    const { updateFormValue } = this.props;
    updateFormValue('multiSearch', { buttonType: type });
  }

  render() {
    console.log('props in selector', this.props);
    const { form, main } = this.props;
    return (
      <div className="home-selector">
        {main.multiSearchResult
        && (
        <Redirect
          to={`/search/${form.multiSearch.buttonType}/${form.multiSearch.searchType}/${form.multiSearch.typeId}/${form.multiSearch.searchType === 'brand' ? form.multiSearch.brandId : form.multiSearch.budgetId }`}
        />
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Card
            interactive
            elevation={Elevation.TWO}
            className="home-selector-card"
            style={{

            }}
          >
            <h1>Find your right vehicle</h1>
            <div className="home-selector-buttons">
              <Button onClick={() => this.buttonClickHandler('new')} autoFocus className={form.multiSearch.buttonType === 'new' ? 'button-focus' : 'home-selector-button'}>New</Button>
              <Button onClick={() => this.buttonClickHandler('used')} className={form.multiSearch.buttonType === 'used' ? 'button-focus' : 'home-selector-button'}>Used</Button>
            </div>
            <form style={{ width: '95%' }}>
              <Form contents={selectStructure(this.props)} {...this.props} schema="multiSearch" />
            </form>
          </Card>
        </div>
      </div>
    );
  }
}
export default Selector;
