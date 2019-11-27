import deleteMessage from '../../api/deleteMessage';

export default async (req, res) => {
  // console.log('delete message request handler called', req.body);
  try {
    const result = await deleteMessage(req.body);
    if (result) {
      res.statusCode = 200;
      res.send('Successfully deleted');
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('Faild to delete');
  }
};
