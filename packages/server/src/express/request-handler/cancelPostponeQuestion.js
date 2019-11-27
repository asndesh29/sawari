import cancelPostponeQuestion from '../../api/cancelPostponeQuestion';

export default async (req, res) => {
  // console.log('cancel postpone requesiton handler called', req.body);
  try {
    const result = await cancelPostponeQuestion(req.body);
    if (result) {
      res.statusCode = 200;
      res.send(JSON.stringify(result));
    }
  } catch (e) {
    res.statusCode = 500;
    res.send(JSON.stringify(e));
  }
};
