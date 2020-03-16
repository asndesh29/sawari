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
          <div className="overview-with-name">
            <div className="overview">
              <span style={{ marginLeft: 10, fontSize: 20 }}>{label}</span>
            </div>
            {productList.map((obj, idx, arr) => (
              <div
                className="name"
                style={{ width: `${widthOfDiv}%` }}
              >
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
