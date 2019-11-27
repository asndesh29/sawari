
const arr = ['error', 'name', 'success', 'email'];
console.log('name' === 'name' || 'error' !== 'error');
console.log(arr.filter(data => data !== 'error' || data !== 'name'));
