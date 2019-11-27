import updateStarRate from '../../api/updateStarRate';

export default async (req, res) => {
  // console.log('update star rating called', req.body);
  try {
    const result = await updateStarRate(req.body);
    if (result) {
      res.statusCode = 200;
      res.send('successfully updated');
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('Faild to Star update');
  }
};
