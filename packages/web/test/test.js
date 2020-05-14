
const obj = {'New Cars': [{},{}] }

console.log(Object.keys(obj)[0]);
console.log(Object.values(obj)[0]);

function menuStructure() {
  return [
    {'New Cars': [
      {name: 'Popular cars'},
      { name: 'latest cars'},
      { name: 'dealers'}
    ]},
    {
      'Used Car':[
        {name: 'Used car'},
        { name: 'used bike'},
      ]},
  ];
}

function menuItem(obj) {
  const keys = Object.keys(obj);
  // console.log(keys);
}

function contentItem(arr) {
}

function index() {
menuStructure().map(menuItem);
}

index();
