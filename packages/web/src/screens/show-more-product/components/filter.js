import React from 'react';
import SideBrandMenu from '../../common/filters/sideBrandMenu';
import PriceRange from '../../common/filters/priceRange';
import VehicleType from '../../common/filters/vehicleType';
import FuelType from '../../common/filters/fuelType';
import Province from '../../common/filters/province';
import City from '../../common/filters/cities';

const content = { cars: 'car', bikes: 'bike', scooters: 'bike' };

export default (props) => {
  const { match } = props;
  console.log('props in filter', props);
  const { url, path, params } = match;
  const isCar = params.usedVehicleType === 'cars';
  switch (url) {
    case '/more/cars':
    case '/popular/cars':
    case '/latest/cars':
    case '/upcoming/cars':
    case '/discount-offers/cars':
      return (
        <div className="search-filter">
          <SideBrandMenu {...props} car />
          <PriceRange {...props} />
          <VehicleType {...props} car />
          <FuelType {...props} car />
        </div>
      );
    case '/more/bikes':
    case '/more/scooters':
    case '/popular/bikes':
    case '/latest/bikes':
    case '/upcoming/bikes':
    case '/discount-offers/bikes':
      return (
        <div className="search-filter">
          <SideBrandMenu {...props} bike />
          <PriceRange {...props} />
          <VehicleType {...props} bike/>
          <FuelType {...props} bike />
        </div>
      );
    case '/showrooms/cars':
    case '/service-center/cars':
      return (
        <div className="search-filter">
          <SideBrandMenu {...props} car />
          <Province {...props} />
          <City {...props} />
        </div>
      );
    case '/showrooms/bikes':
    case '/service-center/bikes':
      return (
        <div className="search-filter">
          <SideBrandMenu {...props} bike />
          <Province {...props} />
          <City {...props} />
        </div>
      );
    default:
      switch (path) {
        case '/used/province/:placeId/:usedVehicleType':
          return (
            <div className="search-filter">
              <SideBrandMenu {...props} car={isCar} />
              <SideBrandMenu {...props} bike={!isCar} />
              <City {...props} />
            </div>
          );
        case '/used/city/:cityId/:usedVehicleType':
          return (
            <div className="search-filter">
              <SideBrandMenu {...props} car={isCar} />
              <SideBrandMenu {...props} bike={!isCar} />
            </div>
          );
        case '/used/:usedVehicleType':
        case '/used/showrooms/:usedVehicleType':
          return (
            <div className="search-filter">
              <SideBrandMenu {...props} car={isCar} />
              <SideBrandMenu {...props} bike={!isCar} />
              <Province {...props} />
              <City {...props} />
            </div>
          );
        default:
          return null;
      }
  }
};
