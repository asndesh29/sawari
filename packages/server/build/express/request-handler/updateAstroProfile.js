'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _udpateAstroProfile = require('../../api/udpateAstroProfile');

var _udpateAstroProfile2 = _interopRequireDefault(_udpateAstroProfile);

var _validateToken = require('../../auth/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

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
      } else {
        const { token } = req.body;
        const user = (0, _validateToken2.default)(token);
        if (user) {
          if (req.file) {
            delete req.body.token;
            const updateRes = await (0, _udpateAstroProfile2.default)(_extends({}, req.body, { image: req.file.filename, userId: user.id }), user);
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
  } catch (e) {
    res.statusCode = 400;
    res.send(JSON.stringify(e));
  }
};