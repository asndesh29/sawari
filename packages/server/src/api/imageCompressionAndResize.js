var sharp = require('sharp');
// import imageRef from '../public/images/image.jpg';

sharp('image.jpg')
  .resize(456, 304).jpeg({ quality: 50 })
  .toFile('output.jpeg')
  .then(() => {
    // output.png is a 200 pixels wide and 300 pixels high image
    // containing a nearest-neighbour scaled version
    // contained within the north-east corner of a semi-transparent white canvas
  });
