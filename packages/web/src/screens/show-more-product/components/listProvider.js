import CarAndBikeCard from './carAndBikeCard';
import DealerCard from './dealerCard';
import UsedCarAndBikeCard from './usedCarAndBikeCard';
import NewsCard from '../../home/components/product-list/news/newsCard';
import videoCard from '../../home/components/product-list/videos/videoCard';

const newsData = [
  { id: 1, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1578049270316.jpg'},
  { id: 2, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1578049270316.jpg'},
  { id: 3, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1578049270316.jpg'},
  { id: 4, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1578049270316.jpg'},
  { id: 4, header: 'Five Most Fuel Efficient Petrol Cars We Tested In 2019', content: 'Two of the five cars on our list use an auto...', date: 'Dec 28, 2019', image: 'image-1578049270316.jpg'},
];

const priceRangeHandler = (obj) => {
  const { varients } = obj;
  const minPrice = Math.min(...varients.map((v) => v.exShowRoomPrice));
  const maxPrice = Math.max(...varients.map((v) => v.exShowRoomPrice));
  // console.log(minPrice, maxPrice);
  return [minPrice, maxPrice];
};

const filterHandler = (props, arr) => {
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

const serviceCenterShowroomFilterHandler = (props, arr) => {
  const { main } = props;
  let filterArr;

  if (main.filter.province) {
    filterArr = arr.filter(b => b.province === main.filter.province);
  }

  if (main.filter.city) {
    if (filterArr) {
      filterArr = filterArr.filter(b => b.city === main.filter.city);
    } else {
      filterArr = arr.filter(b => b.city === main.filter.city);
    }
  }

  if (main.filter.sbId) {
    if (filterArr) {
      filterArr = filterArr.filter((b) => b.sbId === main.filter.sbId);
    } else {
      filterArr = arr.filter(b => b.sbId === main.filter.sbId);
    }
  }
  return filterArr || arr;
};

const usedVehicleFilter = (props, arr) => {
  console.log('usedfilter called', arr);
  const { match, main } = props;
  const { params, url } = match;
  const vehicleType = { cars: 1, bikes: 2, scooters: 3 };
  const { placeId, usedVehicleType, cityId } = params;
  let filterArr = arr.filter((uv) => uv.stypeId === vehicleType[usedVehicleType]);
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
  console.log('return by used filter', filterArr);
  return filterArr;
};

const discountOfferFilter = (props, arr) => {
  const { main } = props;
  const filterArr = arr.filter(m => m.varients.find(v => main.initialData.DiscountOffer.find(d => d.variantId === v.id)));
  return filterHandler(props, filterArr);
};

export default (props, cardOnClickHandler) => {
  const { match, main } = props;
  const { url, path, params } = match;
  console.log('props in list provider', props);
  switch (url) {
    case '/more/cars':
      return filterHandler(props, main.initialData.vehicleModel.filter((obj) => obj.stypeId === 1)).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/popular/cars':
      return filterHandler(props, main.initialData.vehicleModel.filter((obj) => obj.stypeId === 1 && obj.category === 'Popular')).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/latest/cars':
      return filterHandler(props, main.initialData.vehicleModel.filter((obj) => obj.stypeId === 1 && obj.category === 'Latest')).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/discount-offers/cars':
      return discountOfferFilter(props, main.initialData.vehicleModel.filter((obj) => obj.stypeId === 1)).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/upcoming/cars':
      return filterHandler(props, main.initialData.vehicleModel.filter((obj) => obj.stypeId === 1 && obj.category === 'Upcoming')).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/showrooms/cars':
      return serviceCenterShowroomFilterHandler(props, main.initialData.dealerList.filter((obj) => obj.stypeId === 1)).map((d) => DealerCard(d));
    case '/used/showrooms/cars':
      return serviceCenterShowroomFilterHandler(props, main.initialData.dealerList.filter((obj) => obj.stypeId === 1 && (obj.type === 'used' || obj.type === 'both'))).map((d) => DealerCard(d));
    case '/service-center/cars':
      return serviceCenterShowroomFilterHandler(props, main.initialData.serviceCenterList.filter((obj) => obj.stypeId === 1)).map((d) => DealerCard(d));
    case '/more/bikes':
      return filterHandler(props, main.initialData.vehicleModel.filter((m) => m.varients.find((v) => v.bodyType !== 'Scooter') && m.stypeId === 2)).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/popular/bikes':
      return filterHandler(props, main.initialData.vehicleModel.filter((obj) => obj.stypeId === 2 && obj.category === 'Popular')).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/latest/bikes':
      return filterHandler(props, main.initialData.vehicleModel.filter((obj) => obj.stypeId === 2 && obj.category === 'Latest')).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/upcoming/bikes':
      return filterHandler(props, main.initialData.vehicleModel.filter((obj) => obj.stypeId === 2 && obj.category === 'Upcoming')).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/discount-offers/bikes':
      return discountOfferFilter(props, main.initialData.vehicleModel.filter((obj) => obj.stypeId === 2)).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/showrooms/bikes':
      return serviceCenterShowroomFilterHandler(props, main.initialData.dealerList.filter((obj) => obj.stypeId === 2)).map((d) => DealerCard(d));
    case '/used/showrooms/bikes':
      return serviceCenterShowroomFilterHandler(props, main.initialData.dealerList.filter((obj) => obj.stypeId === 2 && (obj.type === 'used' || obj.type === 'both'))).map((d) => DealerCard(d));
    case '/service-center/bikes':
      return serviceCenterShowroomFilterHandler(props, main.initialData.serviceCenterList.filter((obj) => obj.stypeId === 2)).map((d) => DealerCard(d));
    case '/more/scooters':
      return filterHandler(props, main.initialData.vehicleModel.filter((m) => m.varients.find((v) => v.bodyType === 'Scooter') && m.stypeId === 2)).map((obj) => CarAndBikeCard(obj, cardOnClickHandler));
    case '/more/news':
      return newsData.map((obj) => NewsCard(obj, cardOnClickHandler));
    case '/more/videos':
      return newsData.map((obj) => videoCard(obj, cardOnClickHandler));
    default:
      switch (path) {
        case '/used/province/:placeId/:usedVehicleType':
        case '/used/city/:cityId/:usedVehicleType':
        case '/used/:usedVehicleType':
          return usedVehicleFilter(props, main.initialData.usedVehicle).map((uv) => UsedCarAndBikeCard(uv, cardOnClickHandler));
        default:
          return [];
      }
  }
};
