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
          {
            id: 20, route: '/popular/car', name: 'Cars In Your City',
          },
          {
            id: 21, route: '/popular/car', name: 'Search Used Cars',
          },
          {
            id: 22, route: '/popular/car', name: 'Sell Used Cars',
          },
          {
            id: 23, route: '/popular/car', name: 'Used Car Dealers',
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
      // {
      //   'New Scooters': [
      //     { id: 40, route: '/popular/car', name: 'Popular Scooters' },
      //     { id: 41, route: '/popular/car', name: 'Latest Scooters' },
      //     { id: 42, route: '/popular/car', name: 'Upcoming Scooters' },
      //     { id: 43, route: '/popular/car', name: 'Discount & Offers' },
      //     { id: 44, route: '/popular/car', name: 'Compare Scooters' },
      //     { id: 45, route: '/popular/car', name: 'Showroom(Dearlers)' },
      //     { id: 46, route: '/popular/car', name: 'Service Centers' },
      //   ],
      // },
      {
        'Used Bike & Scooters': [
          { id: 50, route: '/popular/car', name: 'Bikes & Scooters in your City' },
          { id: 51, route: '/popular/car', name: 'Search Used Bikes & Scooters' },
          { id: 52, route: '/popular/car', name: 'Sell Used Bikes & Scooters' },
          { id: 53, route: '/popular/car', name: 'Used Bikes & Scooters Dealers' },
        ],
      },
      {
        Compare: [
          { id: 60, route: '/compare/cars', name: 'Cars' },
          { id: 61, route: '/compare/bikes-scooters', name: 'Bikes & Scooter' },
        ],
      },
      {
        'News & Reviews': [
          { id: 70, route: '/popular/car', name: 'Video Review' },
          { id: 80, route: '/popular/car', name: 'User Review' },
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
