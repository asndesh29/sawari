import searchUser from '../../api/seachUser';

export default async (req, res) => {
  // console.log('searh user requesiton handler called', req.body);
  try {
    const result = await searchUser(req.body);
    if (result) {
      res.statusCode = 200;
      res.send(JSON.stringify(result));
    }
  } catch (e) {
    res.statusCode = 500;
    res.send(JSON.stringify(e));
  }
};
