/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Icon } from '@blueprintjs/core';

const showAllClickHandler = (props) => {
  const { updateMainValue, main } = props;
  updateMainValue('filter', { priceRange: main.filter.priceRange });
};

export default (props) => {
  return (
    <div className="side-menu" style={{ marginTop: 20, marginBottom: 10, justifyContent: 'space-between', display: 'flex' }}>
      <Icon icon="filter" />
      <span
        onClick={() => showAllClickHandler(props)}
        style={{color: Object.keys(props.main.filter).length > 1 ? 'black' : '#ff4202', cursor: 'pointer'}}>
        Show All
      </span>
    </div>
  );
};
