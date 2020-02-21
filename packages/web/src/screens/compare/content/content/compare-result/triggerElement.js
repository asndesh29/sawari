/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Icon } from '@blueprintjs/core';

export default (label, productList, collapseObj, collapseOpenHandler, collapseColoseHandler) => {
  // console.log('TRIGGER ELEMENT', label, productList);
  const length = productList.length;
  const widthOfDiv = (100 - 10) / length;
  return (
    label === 'Overview'
      ? (
        <div
          className="specification-collapse-element"
          onClick={() => {
            if (collapseObj[label]) {
              collapseColoseHandler(label);
            } else {
              collapseOpenHandler(label)
            }
          }
          }
        >
          <div style={{ width: '100%', height: '100%', background: '#f1f1f1', display: 'flex' }}>
            <div style={{ width: '10%', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginLeft: 10, fontSize: 20 }}>{label}</span>
            </div>
            {productList.map((obj, idx, arr) => (
              <div style={{ width: `${widthOfDiv}%`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', height: '100%', borderLeft: '1px solid #f1f1f1' }}>
                <span style={{ padding: 5, fontSize: 20 }}>{obj.name}</span>
                {(arr.length === idx + 1) && <Icon icon="chevron-down" />}
              </div>
            ))}
          </div>
        </div>
      )
      : (
        <div
          className="specification-collapse-element"
          onClick={() => {
            if (collapseObj[label]) {
              collapseColoseHandler(label);
            } else {
              collapseOpenHandler(label);
            }
          }
          }
        >
          <span style={{ marginLeft: 10, fontSize: 20 }}>{label}</span>
          <Icon icon="chevron-down" iconSize={15} color="black" />
        </div>
      )
  );
};
