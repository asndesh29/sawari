'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _addBidhaUser = require('../../api/addBidhaUser');

var _addBidhaUser2 = _interopRequireDefault(_addBidhaUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storage = _multer2.default.diskStorage({
  destination: (request, file, cb) => cb(null, _path2.default.join(__dirname, '..', '..', 'public', 'images')),
  filename: (request, file, cb) => cb(null, `${file.fieldname}-${Date.now()}${_path2.default.extname(file.originalname)}`)
});

const checkFileType = (file, cb) => {
  // check file type
  const fileType = /jpeg|jpg|gif|png/;
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

exports.default = async (req, res) => {
  try {
    upload(req, res, async err => {
      if (err) {
        res.statusCode = 500;
        res.send(err.message);
      }
      if (req.file) {
        const updateRes = await (0, _addBidhaUser2.default)(_extends({}, req.body, { image: req.file.filename }));
        if (updateRes) {
          res.statusCode = 200;
          res.send(JSON.stringify(updateRes));
        } else {
          throw new Error('User validation faild');
        }
      } else {
        const updateRes = await (0, _addBidhaUser2.default)(_extends({}, req.body));
        if (updateRes) {
          res.statusCode = 200;
          res.send(JSON.stringify(updateRes));
        } else {
          throw new Error('User validation faild');
        }
      }
    });
  } catch (e) {
    res.statusCode = 400;
    res.send(JSON.stringify(e));
  }
};