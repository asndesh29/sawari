/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Card, Checkbox } from '@blueprintjs/core';

export default ({ obj, state, compareChangeHandler, changeVariant, handleTabChange }) => {
  console.log('variant details card', obj, state);
  return (
    <Card
      style={{ height: 'auto', display: 'flex', marginBottom: '20px', boxShadow: '0 2px 8px #ccc' }}
    // onClick={() => changeVariant(obj.id)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span
            style={{ fontSize: 20, cursor: 'pointer' }}
            onClick={() => {
              changeVariant(obj.id);
              handleTabChange('Specification');
            }}
          >
            {obj.name}
          </span>
          <span style={{ color: '#757575' }}>{`${obj.fuelType} ${obj.bodyType}`}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>{`Ex-Showroom Price: ${obj.exShowRoomPrice}/-`}</span>
          <span>{`On Road Price: ${obj.onRoadPrice}/-`}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Checkbox
            onChange={(e) => compareChangeHandler(e, obj.id)} />
          <span style={{ fontSize: 10, color: '#757575', margin: 0 }}>Compare</span>
        </div>
      </div>
    </Card>
  );
};
