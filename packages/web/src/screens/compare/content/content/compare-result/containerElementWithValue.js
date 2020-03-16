/* eslint-disable no-nested-ternary */
import React from 'react';
import { Icon } from '@blueprintjs/core';

const checkCommon = (key, arr, hideCommon) => {
  const keyValue = arr[0][key];
  const hasCommon = arr.find((a) => a[key] !== keyValue);
  if (hideCommon) {
    return hasCommon;
  }
  return true;
};

export default (label, key, arr, productList, triggerLabel, hideCommon) => {
  const lengthOfArray = arr.length;
  const widthOfDiv = (100 - 10) / lengthOfArray;
  // console.log('widthOfDiv', widthOfDiv);
  // console.log('container element with value', arr, key, checkCommon(key, arr));
  return (
    checkCommon(key, arr, hideCommon)
      ? (
        <div className="container-element">
          <div
            className="container-element-label"
          >
            <span style={{ color: '#9a9a9a', padding: 5 }}>{label}</span>
          </div>
          {arr.map((obj, idx, arr) => (
            <div
              className="container-element-value"
              style={{ width: `${widthOfDiv}%`}}
            >
              {(triggerLabel === 'Key Features'
                || triggerLabel === 'Interior'
                || triggerLabel === 'Exterior'
                || triggerLabel === 'Safety'
                || triggerLabel === 'Entertainment & Communication'
                || triggerLabel === 'Comfort & Convenience'
              )
                ? (obj[key]
                  ? <Icon icon="tick" color="green" style={{ marginLeft: 10 }} />
                  : <Icon icon="cross" color="red" style={{ marginLeft: 10 }} />)
                : <span style={{ padding: 5 }}>{obj[key]}</span>}
            </div>
          ))}
        </div>
      ) : null
  );
};
