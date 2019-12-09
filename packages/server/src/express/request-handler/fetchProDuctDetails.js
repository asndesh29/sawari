import fetchProductDetails from '../../api/fetchProductDetails';

export default async (req, res) => {
  const { id } = req.query;
  try {
    const mainRes = await fetchProductDetails(id);
    res.statusCode = 200;
    res.send(JSON.stringify(mainRes));
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.send('Error to fetch product details');
  }
};
