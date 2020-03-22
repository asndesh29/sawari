import validateToken from '../../auth/validateToken';
import deleteSellVehicle from '../../api/deleteSellvehicle';

export default async (req, res) => {
  const { token, id } = req.query;
  try {
    console.log('delete sell vehicle called', req.query);
    await validateToken(token);
    const response = await deleteSellVehicle(parseInt(id, 10));
    if (response) {
      res.statusCode = 200;
      res.send('response');
    }
  } catch (e) {
    console.log('Error in sell vehicle', e);
    res.statusCode = 500;
    res.send('faild to delete');
  }
};
