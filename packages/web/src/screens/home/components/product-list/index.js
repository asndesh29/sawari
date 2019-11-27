import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';

const data = [
  { name: 'product1', price: 10000, imageUrl: 'http://2.bp.blogspot.com/-1dyAYLa4Qo0/U8eZBQgD2PI/AAAAAAAAR2Y/xjdgzoWA35g/s1600/Best+Super+Car+Lamborghini.jpg' },
  { name: 'product2', price: 200000, imageUrl: 'http://2.bp.blogspot.com/-ynrCMjM8x-s/U8eZBAO9m3I/AAAAAAAAR2U/6ANd6ty4b-c/s1600/Car+HD+Wallpaper.jpg' },
  { name: 'product3', price: 100000, imageUrl: 'http://1.bp.blogspot.com/--NTeiBguKZw/U8eY_zTt4XI/AAAAAAAAR2M/yGoSe_Pqn3k/s1600/Fastes+Car++in+Th+World+2013.jpg' },
  { name: 'product4', price: 1003289028, imageUrl: 'http://1.bp.blogspot.com/-KUD91tRjAcs/U8eZDXn7LyI/AAAAAAAAR2k/sLnjHugD1CE/s1600/Maximum+Speed+HD+Widescreen+Wallpaper+2014.jpg' },
  { name: 'product1', price: 10000, imageUrl: 'http://2.bp.blogspot.com/-1dyAYLa4Qo0/U8eZBQgD2PI/AAAAAAAAR2Y/xjdgzoWA35g/s1600/Best+Super+Car+Lamborghini.jpg' },
  { name: 'product2', price: 200000, imageUrl: 'http://2.bp.blogspot.com/-ynrCMjM8x-s/U8eZBAO9m3I/AAAAAAAAR2U/6ANd6ty4b-c/s1600/Car+HD+Wallpaper.jpg' },
  { name: 'product3', price: 100000, imageUrl: 'http://1.bp.blogspot.com/--NTeiBguKZw/U8eY_zTt4XI/AAAAAAAAR2M/yGoSe_Pqn3k/s1600/Fastes+Car++in+Th+World+2013.jpg' },
  { name: 'product4', price: 1003289028, imageUrl: 'http://1.bp.blogspot.com/-KUD91tRjAcs/U8eZDXn7LyI/AAAAAAAAR2k/sLnjHugD1CE/s1600/Maximum+Speed+HD+Widescreen+Wallpaper+2014.jpg' },
];

const ProductCard = (obj) => {
  return (
    <Card
      interactive
      elevation={Elevation.TWO}
      className="product-card"
    >
      <img src={obj.imageUrl} alt={obj.name} />
      <span>{obj.name}</span>
    </Card>
  );
};

export default () => {
  return (
    <div className="home-product-list">
      <div className="product-list-header">
        <h1>Top Products</h1>
      </div>
      <div className="product-list">
        {data.map((obj) => ProductCard(obj))}
      </div>
    </div>
  );
};
