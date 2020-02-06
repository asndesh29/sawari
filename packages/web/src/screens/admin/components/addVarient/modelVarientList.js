import React from 'react';
import { Button, Popover, Dialog, Intent, Spinner } from '@blueprintjs/core';
import Table from '../../../../components/common/Table';
import { ENDPOINT } from '../../../../config';
import AddBrandProductForm from './addModelVarientForm';

const arrSchema = [
  'ServiceTypeBrandModelVarient',
  'CarVarientOverview',
  'CarVarientKeySpecification',
  'CarVarientEngineTransmission',
  'CarVarientFuelPerformance',
  'CarVarientSuspensionSteeringBreak',
  'CarVarientDimentionCapacity',
  'CarVarientKeyFeatures',
  'CarVarientComfortConvenience',
  'CarVarientInterior',
  'CarVarientExterior',
  'CarVarientSafty',
  'CarVarientEntertainmentCommunication',
  'DiscountOffer',
];

const arrBike = [
  'ServiceTypeBrandModelVarient',
  'BikeVarientOverview',
  'BikeVarientKeySpecification',
  'BikeVarientEngineTransmission',
  'BikeVarientMileagePerformance',
  'BikeVarientChassisSuspension',
  'BikeVarientDimensionCapacity',
  'BikeVarientElectricals',
  'BikeVarientTyresBrakes',
  'BikeVarientKeyFeaturs',
  'BikeVarientFeatursSafety',
];

const PopUp = (props) => {
  const { isOpen, handleClose, title, children } = props;
  return (
    <Dialog
      isOpen={isOpen}
      title={title}
      canEscapeKeyClose
      canOutsideClickClose
      onClose={handleClose}
      {...props}
    >
      {children}
    </Dialog>
  );
};

class BrandList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdate: false,
      showDelete: false,
      loading: null,
      success: null,
      error: null,
    };
  }

  toggleAddBrandForm = () => {
    this.setState({ showUpdate: !this.state.showUpdate });
  }

  toggleDelete = () => {
    this.setState({ showDelete: !this.state.showDelete });
  }

  updateBrand = (id) => {
    const { updateMainValue, form, main, updateFormValue } = this.props;
    // console.log('update brand called', id);
    updateMainValue('varientId', id);
    if (parseInt(form.ServiceTypeBrandModelVarient.stypeId, 10) === 1) {
      arrSchema.forEach((schema, idx) => {
        let findObj;
        if (idx === 0) {
          findObj = main.initialAdminData.vehicleVarientList.find(v => v.id === id);
          if (findObj) {
            updateFormValue(schema, { ...form[arrSchema[0]], ...findObj });
          } else {
            updateFormValue(schema, { ...form[schema], id: undefined });
          }

        } else if (idx <= 6 && idx !== 0) {
          findObj = main.initialAdminData.vehicleVarientList.find(v => v.id === id);
          if (findObj) {
            updateFormValue(schema, { ...form[schema], ...findObj });
          } else {
            updateFormValue(schema, { ...form[schema], id: undefined });
          }
        } else {
          if (idx === 13) {
            findObj = main.initialAdminData[schema].find(v => v.variantId === id);
          } else {
            findObj = main.initialAdminData[schema].find(v => v.varientId === id);
          }

          if (findObj) {
            const keys = Object.keys(findObj);
            const values = Object.values(findObj);
            const stringValues = values.map((v, idx) => keys[idx] !== 'id' ? `${v}` : v);
            const mainValue = stringValues.reduce((obj, n, indx) => {
              obj[keys[indx]] = n;
              return obj;
            }, {});
            updateFormValue(schema, { ...form[schema], ...mainValue });
          } else {
            updateFormValue(schema, { ...form[schema], id: undefined });
          }
        }
      });
    } else {
      console.log('inside bike update');
      arrBike.forEach((schema, idx) => {
        let findObj;
        if (idx === 0) {
          findObj = main.initialAdminData.vehicleVarientList.find(v => v.id === id);
          if (findObj) {
            updateFormValue(schema, { ...form[schema], ...findObj });
          } else {
            updateFormValue(schema, { ...form[schema], id: undefined });
          }
        } else if (idx <= 8) {
          console.log('integer value bale', schema);
          findObj = main.initialAdminData[schema].find(v => v.varientId === id);
          if (findObj) {
            updateFormValue(schema, { ...form[schema], ...findObj });
          } else {
            updateFormValue(schema, { ...form[schema], id: undefined });
          }
        } else {
          const findObj = main.initialAdminData[schema].find(v => v.varientId === id);
          if (findObj) {
            const keys = Object.keys(findObj);
            const values = Object.values(findObj);
            const stringValues = values.map((v, idx) => keys[idx] !== 'id' ? `${v}` : v);
            const mainValue = stringValues.reduce((obj, n, indx) => {
              obj[keys[indx]] = n;
              return obj;
            }, {});
            updateFormValue(schema, { ...form[schema], ...mainValue });
          } else {
            updateFormValue(schema, { ...form[schema], id: undefined });
          }
        }
      });
    }
    this.setState({ showUpdate: true });
  }

  deleteBrand = (obj) => {
    console.log('delete brand called', obj);
    this.setState({ showDelete: obj });
  }

  mainDelete = async () => {
    const { deleteVarient } = this.props;
    const { showDelete } = this.state;
    this.setState({ loading: true, success: null, error: null });
    const res = await deleteVarient(showDelete);
    if (res) {
      this.setState({ loading: null, success: 'Successfully deleted' });
    } else {
      this.setState({ loading: null, error: 'Faild to delete' });
    }
  }

  render() {
    const { main, form } = this.props;
    const { showDelete, showUpdate, loading, error, success } = this.state;
    return (
      <div className="admin-add-brand-content-table">
        <div style={{ width: '100%' }}>
          {main.initialAdminData.vehicleVarientList && (
            <Table
              headers={{ id: 'Id', name: 'Name', exShowRoomPrice: 'ExShowroom price', onRoadPrice: 'Onroad Price', fuelType: 'Fuel Type', bodyType: 'Body Type', update: 'Update', delete: 'Delete' }}
              data={main.initialAdminData.vehicleVarientList.filter(
                vp => (
                  parseInt(vp.stypeId, 10) === parseInt(form.ServiceTypeBrandModelVarient.stypeId, 10)
                  && parseInt(vp.sbId, 10) === parseInt(form.ServiceTypeBrandModelVarient.sbId, 10)
                  && parseInt(vp.modelId, 10) === parseInt(form.ServiceTypeBrandModelVarient.modelId, 10)
                )).map(obj => (
                {
                  ...obj,
                  update: <Button text="Update" intent={Intent.SUCCESS} onClick={() => this.updateBrand(obj.id)} />,
                  delete: <Button text="Delete" intent={Intent.DANGER} onClick={() => this.deleteBrand(obj)} />,
                }
              ))}
            />
          )}
        </div>
        <PopUp
          isOpen={showDelete}
          title="Delete Confirmation"
          handleClose={this.toggleDelete}
          {...this.props}
          style={{ width: '300px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 0 0 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', flexDirection: 'column' }}>
              Are You sure want to delete?
              {loading && <Spinner intent="primary" size={15} />}
              {error && <span style={{ color: 'red' }}>{error}</span>}
              {success && <span style={{ color: 'green'}} >{success}</span>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button text="Yes" intent={Intent.DANGER} style={{ margin: '5px 5px 0 0' }} onClick={this.mainDelete} />
              <Button text="No" intent={Intent.SUCCESS} style={{ margin: '5px 5px 0 0' }} onClick={this.toggleDelete} />
            </div>
          </div>
        </PopUp>
        <AddBrandProductForm isOpen={showUpdate} onClose={this.toggleAddBrandForm} props={this.props} update />
      </div>
    );
  }
}
export default BrandList;
