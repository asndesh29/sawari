import React from 'react';
import SideBrandMenu from '../../common/filters/sideBrandMenu';
import PriceRange from '../../common/filters/priceRange';
import VehicleType from '../../common/filters/vehicleType';
import FuelType from '../../common/filters/fuelType';
import Province from '../../common/filters/province';
import City from '../../common/filters/cities';

const content = {cars: 'car', bikes: 'bike', scooters: 'bike' };

export default (props) => {
  const { contentType, serviceCenterType, showroomType, placeId, usedVehicleType } = props;
  const car = content[contentType] === 'car';
  const bike = content[contentType] === 'bike';
  console.log('props in filter', props);
  return (
    <div className="search-filter">
      <SideBrandMenu {...props} car={car} bike={bike} showroomType serviceCenterType />
      {contentType && <PriceRange {...props} /> }
      {contentType === 'cars' && <VehicleType {...props} />}
      {(car || bike) && <FuelType {...props} car={car} bike={bike} />}
      {(serviceCenterType || showroomType || placeId || usedVehicleType) && <Province {...props} />}
      {(serviceCenterType || showroomType || placeId || usedVehicleType) && <City {...props} />}
    </div>
  );
};
