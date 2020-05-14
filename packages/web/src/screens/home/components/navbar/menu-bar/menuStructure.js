export default () => {
  return (
    [
      { 'New Cars': [
        { id: 10, route: '/popular/cars', name: 'Popular Cars' },
        { id: 11, route: '/latest/cars', name: 'Latest Cars' },
        { id: 12, route: '/upcoming/cars', name: 'Upcoming Cars' },
        { id: 13, route: '/discount-offers/cars', name: 'Discount & Offers' },
        { id: 14, route: '/compare/cars', name: 'Compare Cars' },
        { id: 15, route: '/showrooms/cars', name: 'Showrooms(Dealers)' },
        { id: 16, route: '/service-center/cars', name: 'Service Centers' },
      ],
      },
      {
        'Used Car': [
          // {
          //   id: 20, route: '/popular/car', name: 'Cars In Your City',
          // },
          {
            id: 21, route: '/used/cars', name: 'Search Used Cars',
          },
          {
            id: 22, route: '/sell-vehicle', name: 'Sell Used Cars',
          },
          {
            id: 23, route: '/used/showrooms/cars', name: 'Used Car Dealers',
          },
        ],
      },
      {
        'New Bikes & Scooters': [
          { id: 30, route: '/popular/bikes', name: 'Popular Bikes & Scooters' },
          { id: 31, route: '/latest/bikes', name: 'Latest Bikes & Scooters' },
          { id: 32, route: '/upcoming/bikes', name: 'Upcoming Bikes & Scooters' },
          { id: 33, route: '/discount-offers/bikes', name: 'Discount & Offers' },
          { id: 34, route: '/compare/bikes', name: 'Compare Bikes & Scooters' },
          { id: 35, route: '/showrooms/bikes', name: 'Showrooms(Dealers)' },
          { id: 36, route: '/service-center/bikes', name: 'Service Centers' },
        ],
      },
      {
        'Used Bike & Scooters': [
          // { id: 50, route: '/used/bikes', name: 'Bikes & Scooters in your City' },
          { id: 51, route: '/used/bikes', name: 'Search Used Bikes & Scooters' },
          { id: 52, route: '/sell-vehicle', name: 'Sell Used Bikes & Scooters' },
          { id: 53, route: '/used/showrooms/bikes', name: 'Used Bikes & Scooters Dealers' },
        ],
      },
      {
        Compare: [
          { id: 60, route: '/compare/cars', name: 'Cars' },
          { id: 61, route: '/compare/bikes', name: 'Bikes & Scooter' },
        ],
      },
      {
        'News & Reviews': [
          { id: 70, route: '/more/videos', name: 'Video Review' },
          { id: 80, route: '/more/news', name: 'User Review' },
        ],
      },
      {
        More: [
          { id: 80, route: '/popular/car', name: 'Emi Calculator' },
        ],
      },
    ]
  );
};
