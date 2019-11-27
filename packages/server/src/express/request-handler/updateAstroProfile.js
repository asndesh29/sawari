import path from 'path';
import multer from 'multer';
import updateUserProfile from '../../api/udpateAstroProfile';
import validateToken from '../../auth/validateToken';

const storage = multer.diskStorage({
  destination: (request, file, cb) => cb(null, path.join(__dirname, '..', '..', 'public', 'images')),
  filename: (request, file, cb) => cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`),
});

const checkFileType = (file, cb) => {
// check file type
  const fileType = /jpeg|jpg|gif|png/;
  // check ext
  const extname = fileType.test(path.extname(file.originalname).toLocaleLowerCase());
  // check mime type
  const mimetype = fileType.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  }
  return cb({ Error: 'No file slected', message: 'No File selected' });
};

const upload = multer({
  storage,
  limits: { fileSize: 10000000 },
  fileFilter: (req, file, cb) => checkFileType(file, cb),
}).single('image');

export default async (req, res) => {
  // console.log('update profile req', req.body);
  try {
    const { token } = req.body;
    if (token) {
      // console.log('no image file');
      const { token } = req.body;
      const user = validateToken(token);
      if (user) {
        delete req.body.token;
        const updateRes = await updateUserProfile({ ...req.body }, user);
        if (updateRes) {
          res.statusCode = 200;
          res.send(JSON.stringify(updateRes));
        } else {
          throw new Error('User validation faild');
        }
      }
    } else {
      // console.log('has image file');
      upload(req, res, async (err) => {
        if (err) {
          res.statusCode = 500;
          // console.log('imageupdload error', err);
          res.send(err.message);
        } else {
          const { token } = req.body;
          const user = validateToken(token);
          if (user) {
            if (req.file) {
              delete req.body.token;
              const updateRes = await updateUserProfile({ ...req.body, image: req.file.filename }, user);
              if (updateRes) {
                res.statusCode = 200;
                res.send(JSON.stringify(updateRes));
              } else {
                throw new Error('User validation faild');
              }
            } else {
              res.statusCode = 500;
              res.send('Image upload faild');
            }
          } else {
            res.statusCode = 500;
            res.send('Invalid User');
          }
        }
      });
    }
  } catch (e) {
    console.error(e);
    res.statusCode = 400;
    res.send(JSON.stringify(e));
  }
};
