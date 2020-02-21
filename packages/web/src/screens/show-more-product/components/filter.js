import React from 'react';
import PropTypes from 'prop-types';
import SideBrandMenu from '../../common/filters/sideBrandMenu';
import PriceRange from '../../common/filters/priceRange';
import VehicleType from '../../common/filters/vehicleType';
import FuelType from '../../common/filters/fuelType';
import Province from '../../common/filters/province';
import City from '../../common/filters/cities';

const content = { cars: 'car', bikes: 'bike', scooters: 'bike' };

const filter = (props) => {
  const { match } = props;
  // console.log('props in filter', props);
  const { url, path, params } = match;
  const { buttonType, searchType, typeId, tempId } = params;
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
              <PriceRange {...props} />
              <Province {...props} />
              <City {...props} />
            </div>
          );
        case '/search/:buttonType/:searchType/:typeId/:tempId':
          if (buttonType === 'new') {
            return (
              <div className="search-filter">
                {searchType === 'budget' && <SideBrandMenu {...props} car={typeId === 'car'} bike={typeId === 'bike'} />}
                <PriceRange {...props} car={typeId === 'car'} bike={typeId === 'bike'} />
                <VehicleType {...props} car={typeId === 'car'} bike={typeId === 'bike'} />
                <FuelType {...props} car={typeId === 'car'} bike={typeId === 'bike'} />
              </div>
            );
          }
          return (
            <div className="search-filter">
              {searchType === 'budget' && <SideBrandMenu {...props} car={typeId === 'car'} bike={typeId === 'bike'} />}
              <PriceRange {...props} car={typeId === 'car'} bike={typeId === 'bike'} />
              <Province {...props} />
              <City {...props} />
            </div>
          );
        default:
          return null;
      }
  }
};
export default filter;
filter.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
