'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storage = _multer2.default.diskStorage({
  destination: (request, file, cb) => cb(null, _path2.default.join(__dirname, '..', '..', '..', '..', 'web', 'src', 'files')),
  filename: (request, file, cb) => cb(null, `${file.fieldname}-${Date.now()}${_path2.default.extname(file.originalname)}`)
});

const checkFileType = (file, cb) => {
  // check file type
  const fileType = /jpeg|jpg|gif/;
  // check ext
  const extname = fileType.test(_path2.default.extname(file.originalname).toLocaleLowerCase());
  // check mime type
  const mimetype = fileType.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  }
  return cb({ Error: 'No file slected', message: 'No File selected' });
};

const upload = (0, _multer2.default)({
  storage,
  limits: { fileSize: 10000000 },
  fileFilter: (req, file, cb) => checkFileType(file, cb)
}).single('image');

exports.default = (req, res) => {
  upload(req, res, err => {
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