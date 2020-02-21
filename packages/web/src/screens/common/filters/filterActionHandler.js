
export const priceRangeHandler = (obj) => {
  const { varients } = obj;
  const minPrice = Math.min(...varients.map((v) => v.exShowRoomPrice));
  const maxPrice = Math.max(...varients.map((v) => v.exShowRoomPrice));
  // console.log(minPrice, maxPrice);
  return [minPrice, maxPrice];
};

export const filterHandler = (props, arr) => {
  const { main } = props;
  let filterArr;
  if (main.filter.priceRange) {
    filterArr = arr.filter((m) => ((main.filter.priceRange[0] * 100000) <= priceRangeHandler(m)[0] && (main.filter.priceRange[1] * 100000) >= priceRangeHandler(m)[1]));
  }

  if (main.filter.sbId) {
    filterArr = filterArr.filter((b) => b.sbId === main.filter.sbId);
  }

  if (main.filter.bodyType) {
    filterArr = filterArr.filter((m) => m.varients.find((v) => v.bodyType === main.filter.bodyType));
  }

  if (main.filter.fuelType) {
    filterArr = filterArr.filter((m) => m.varients.find((v) => v.fuelType === main.filter.fuelType));
  }

  return filterArr || arr;
};

export const serviceCenterShowroomFilterHandler = (props, arr) => {
  const { main } = props;
  let filterArr;

  if (main.filter.province) {
    filterArr = arr.filter((b) => b.province === main.filter.province);
  }

  if (main.filter.city) {
    if (filterArr) {
      filterArr = filterArr.filter((b) => b.city === main.filter.city);
    } else {
      filterArr = arr.filter((b) => b.city === main.filter.city);
    }
  }

  if (main.filter.sbId) {
    if (filterArr) {
      filterArr = filterArr.filter((b) => b.sbId === main.filter.sbId);
    } else {
      filterArr = arr.filter((b) => b.sbId === main.filter.sbId);
    }
  }
  return filterArr || arr;
};

export const usedVehicleFilter = (props, arr) => {
  // console.log('usedfilter called', arr, props);
  const { match, main } = props;
  const { params, url } = match;
  const vehicleType = { cars: 1, bikes: 2, scooters: 3, car: 1, bike: 2 };
  const { placeId, usedVehicleType, cityId, buttonType, typeId } = params;
  let filterArr = [];
  if (buttonType === 'used') {
    filterArr = arr.filter((uv) => uv.stypeId === vehicleType[typeId]);
  }
  if (usedVehicleType) {
    filterArr = arr.filter((uv) => uv.stypeId === vehicleType[usedVehicleType]);
  }

  if (cityId) {
    filterArr = filterArr.filter((uv) => `${uv.city}`.toLocaleLowerCase() === params.cityId.toLocaleLowerCase());
  }
  if (placeId) {
    filterArr = filterArr.filter((uv) => `${uv.province}`.toLocaleLowerCase() === placeId);
  }

  if (main.filter.sbId) {
    filterArr = filterArr.filter((uv) => uv.sbId === main.filter.sbId);
  }
  if (main.filter.city) {
    filterArr = filterArr.filter((uv) => uv.city === main.filter.city);
  }
  if (main.filter.province) {
    filterArr = filterArr.filter((uv) => uv.province === main.filter.province);
  }

  if (main.filter.priceRange) {
    filterArr = filterArr.filter(uv => uv.expectedPrice >= (main.filter.priceRange[0] * 100000) && (uv.expectedPrice) <= (main.filter.priceRange[1] * 100000));
  }
  // console.log('return by used filter', filterArr);
  return filterArr;
};

export const discountOfferFilter = (props, arr) => {
  const { main } = props;
  const filterArr = arr.filter(m => m.varients.find(v => main.initialData.DiscountOffer.find(d => d.variantId === v.id)));
  return filterHandler(props, filterArr);
};
