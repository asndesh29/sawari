import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (request, file, cb) => cb(null, path.join(__dirname, '..', '..', '..', '..', 'web', 'src', 'files')),
  filename: (request, file, cb) => cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`),
});

const checkFileType = (file, cb) => {
// check file type
  const fileType = /jpeg|jpg|gif/;
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

export default (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.statusCode = 500;
      res.send(err.message);
      // console.log('error while uploading file', err.message);
    } else {
      res.statusCode = 200;
      const resultRes = `files/${req.file.filename}`;
      res.send(resultRes);
    }
  });
};
