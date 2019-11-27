'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.post('/auth/login', _login2.default);
  app.post('/auth/userRegistration', _userRegistration2.default);
  app.post('/web/astrologer-registration', _astrologerRegistration2.default);
  app.post('/web/update-astro-profile', _updateAstroProfile2.default);
  app.post('/app/addQuestion', _addQuestionHelper2.default);
  app.post('/app/payment', _stripePaymentHandler2.default);
  app.post('/app/send-contact-us-message', _sendContactUsMessage2.default);
  app.post('/app/update-star-rate', _updateStarRate2.default);
  app.post('/app/delete-message', _deleteMessage2.default);
  app.get('/app/fetch-initial-data', _fetchAppInitialData2.default);
  app.get('/web/fetch-initial-data', _fetchWebInitialData2.default);
  app.get('/web/fetch-ans-qsn-trans-details', _fetchAnsQsnTransDetails2.default);
  app.post('/web/add-mod-question', _addModQuestion2.default);
  app.post('/web/add-astro-answer', _addAstroAnswer2.default);
  app.post('/web/add-mod-answer', _addModAnswer2.default);
  app.get('/web/delete-user', _deleteUser2.default);
  app.get('/web/fetch-report', _fetchReport2.default);
  app.post('/web/upload-image', _uploadImage2.default);
  app.post('/web/save-app-configuration', _saveAppConfiguration2.default);
  app.post('/web/send-notification', _sendNotification2.default);
  app.post('/web/add-note', _addNoteHandler2.default);
  app.post('/web/save-vedic-sign', _saveVedicSign2.default);
  app.post('/web/question-calrify-save', _saveClarifyQuestion2.default);
  app.post('/web/add-clarify-answer', _addClarifyAnswer2.default);
};

var _login = require('./request-handler/login');

var _login2 = _interopRequireDefault(_login);

var _userRegistration = require('./request-handler/userRegistration');

var _userRegistration2 = _interopRequireDefault(_userRegistration);

var _astrologerRegistration = require('./request-handler/astrologerRegistration');

var _astrologerRegistration2 = _interopRequireDefault(_astrologerRegistration);

var _addQuestionHelper = require('./request-handler/addQuestionHelper');

var _addQuestionHelper2 = _interopRequireDefault(_addQuestionHelper);

var _fetchAppInitialData = require('./request-handler/fetchAppInitialData');

var _fetchAppInitialData2 = _interopRequireDefault(_fetchAppInitialData);

var _stripePaymentHandler = require('../api/stripePaymentHandler');

var _stripePaymentHandler2 = _interopRequireDefault(_stripePaymentHandler);

var _fetchWebInitialData = require('./request-handler/fetchWebInitialData');

var _fetchWebInitialData2 = _interopRequireDefault(_fetchWebInitialData);

var _fetchAnsQsnTransDetails = require('./request-handler/fetchAnsQsnTransDetails');

var _fetchAnsQsnTransDetails2 = _interopRequireDefault(_fetchAnsQsnTransDetails);

var _addModQuestion = require('./request-handler/addModQuestion');

var _addModQuestion2 = _interopRequireDefault(_addModQuestion);

var _addAstroAnswer = require('./request-handler/addAstroAnswer');

var _addAstroAnswer2 = _interopRequireDefault(_addAstroAnswer);

var _addModAnswer = require('./request-handler/addModAnswer');

var _addModAnswer2 = _interopRequireDefault(_addModAnswer);

var _updateAstroProfile = require('./request-handler/updateAstroProfile');

var _updateAstroProfile2 = _interopRequireDefault(_updateAstroProfile);

var _deleteUser = require('./request-handler/deleteUser');

var _deleteUser2 = _interopRequireDefault(_deleteUser);

var _fetchReport = require('./request-handler/fetchReport');

var _fetchReport2 = _interopRequireDefault(_fetchReport);

var _uploadImage = require('./request-handler/uploadImage');

var _uploadImage2 = _interopRequireDefault(_uploadImage);

var _saveAppConfiguration = require('./request-handler/saveAppConfiguration');

var _saveAppConfiguration2 = _interopRequireDefault(_saveAppConfiguration);

var _sendContactUsMessage = require('./request-handler/sendContactUsMessage');

var _sendContactUsMessage2 = _interopRequireDefault(_sendContactUsMessage);

var _updateStarRate = require('./request-handler/updateStarRate');

var _updateStarRate2 = _interopRequireDefault(_updateStarRate);

var _deleteMessage = require('./request-handler/deleteMessage');

var _deleteMessage2 = _interopRequireDefault(_deleteMessage);

var _sendNotification = require('./request-handler/sendNotification');

var _sendNotification2 = _interopRequireDefault(_sendNotification);

var _addNoteHandler = require('./request-handler/addNoteHandler');

var _addNoteHandler2 = _interopRequireDefault(_addNoteHandler);

var _saveVedicSign = require('./request-handler/saveVedicSign');

var _saveVedicSign2 = _interopRequireDefault(_saveVedicSign);

var _saveClarifyQuestion = require('./request-handler/saveClarifyQuestion');

var _saveClarifyQuestion2 = _interopRequireDefault(_saveClarifyQuestion);

var _addClarifyAnswer = require('./request-handler/addClarifyAnswer');

var _addClarifyAnswer2 = _interopRequireDefault(_addClarifyAnswer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }