import addVehicle from '../../api/addSellVehicle';

export default async (req, res) => {
  console.log('req called');
  try {
    const record = req.body;
    const mainres = await addVehicle(record);
    res.statusCode = 200;
    res.send(JSON.stringify(mainres));
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.send('Sellvehicle insertion faild');
  }
};
