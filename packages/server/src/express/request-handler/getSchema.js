import getSchema from '../../api/getSchema';

export default async (req, res) => {
  const { schema } = req.query;
  try {
    const response = await getSchema(schema);
    if (response) {
      res.statusCode = 200;
      res.send(response);
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('faild to delete');
  }
};
