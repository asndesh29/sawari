import login from './request-handler/login';
import logout from './request-handler/logout';
import fetchInitialWebData from './request-handler/fetchInitialWebData';
import addBrand from './request-handler/addBrand';
import fetchAdminData from './request-handler/fetchAdminData';
import deleteBrand from './request-handler/deleteBrand';
import addProduct from './request-handler/addProduct';
import deleteProduct from './request-handler/deleteProduct';
import addEnquiry from './request-handler/addEnquiry';
import fetchProductDetails from './request-handler/fetchProDuctDetails';
import multiSearch from './request-handler/multiSearch';
import addDealer from './request-handler/addDealer';
import deleteDealer from './request-handler/deleteDealer';
import addServiceCenter from './request-handler/addServiceCenter';
import deleteServiceCenter from './request-handler/deleteServiceCenter';
import uploadFile from './request-handler/uploadFile';
import SellVehicle from './request-handler/addVehicle';
import addDealerEnquiry from './request-handler/addDealerEnquiry';
import addServceCenterEnquiry from './request-handler/addServiceCenterEnquiry';
import addModel from './request-handler/addModel';
import deleteModel from './request-handler/deleteModel';

export default function (app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.post('/auth/login', login);
  app.post('/auth/logout', logout);
  app.post('/web/add-brand', addBrand);
  app.post('/web/add-model', addModel);
  app.post('/web/add-product', addProduct);
  app.get('/web/fetch-initial-data', fetchInitialWebData);
  app.get('/web/fetch-admin-data', fetchAdminData);
  app.get('/web/delete-brand', deleteBrand);
  app.get('/web/delete-model', deleteModel);
  app.get('/web/delete-product', deleteProduct);
  app.get('/web/delete-dealer', deleteDealer);
  app.get('/web/delete-service-center', deleteServiceCenter);
  app.post('/web/add-enquiry', addEnquiry);
  app.get('/web/fetch-product-details', fetchProductDetails);
  app.post('/web/multi-search', multiSearch);
  app.post('/web/add-dealer', addDealer);
  app.post('/web/add-service-center', addServiceCenter);
  app.post('/web/upload-file', uploadFile);
  app.post('/web/add-vehicle', SellVehicle);
  app.post('/web/add-dealer-enquiry', addDealerEnquiry);
  app.post('/web/add-service-center-enquiry', addServceCenterEnquiry);
}
