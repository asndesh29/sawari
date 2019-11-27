import postponeQuestion from '../../api/postponeQuestion';

export default async (req, res) => {
  // console.log(' postpone question requesiton handler called', req.body);
  try {
    const result = await postponeQuestion(req.body);
    if (result) {
      res.statusCode = 200;
      res.send(JSON.stringify(result));
    }
  } catch (e) {
    res.statusCode = 201;
    res.send(JSON.stringify(e.message));
  }
};
