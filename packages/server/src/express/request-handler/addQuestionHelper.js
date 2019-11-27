import { addQuestion } from '../../api';

export default async (req, res) => {
  // console.log('addquestion helper called', req.body);
  const result = await addQuestion(req.body);
  // console.log('add question response', result);
  if (result) {
    res.statusCode = 200;
    res.send(JSON.stringify(result));
  }
};
