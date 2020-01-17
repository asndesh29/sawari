import React from 'react';
import { Dialog, Tab, Tabs } from '@blueprintjs/core';
import CarDetailsForm from './car-varient-form';
import BikeVarientForm from './bike-varient-form';

const arrSchema = [
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
];

const arrBike = [
  'BikeVarientOverview',
  'BikeVarientKeySpecification',
  'BikeVarientKeyFeaturs',
  'BikeVarientEngineTransmission',
  'BikeVarientFeatursSafety',
  'BikeVarientMileagePerformance',
  'BikeVarientChassisSuspension',
  'BikeVarientDimensionCapacity',
  'BikeVarientElectricals',
  'BikeVarientTyresBrakes'
];

class VarientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTabId: 'main' };
  }

  formClosedHandler = () => {
    console.log('model closed handler called', this.props);
    const { props } = this.props;
    const { updateMainValue, updateFormValue, form } = props;
    updateMainValue('varientId', null);
    const { sid, stypeId, sbId, modelId } = form.ServiceTypeBrandModelVarient;
    const keysv = Object.keys(form.ServiceTypeBrandModelVarient);
    keysv.forEach(k => {
      if (k !== 'loading' && k !== 'success' && k !== 'error' && k !== 'sid' && k !== 'sbId' && k !== 'stypeId' && k !== 'modelId') {
        delete form.ServiceTypeBrandModelVarient[k];
      }
    });
    updateFormValue('ServiceTypeBrandModelVarient', { loading: null, success: null, error: null, sid, stypeId: `${stypeId}`, sbId, modelId });
    arrSchema.forEach((schema) => {
      const keys = Object.keys(form[schema]);
      keys.forEach(k => {
        if (k !== 'loading' && k !== 'success' && k !== 'error') {
          delete form[schema][k];
        }
      });
      updateFormValue(schema, { loading: null, success: null, error: null });
    });

    arrBike.forEach((schema) => {
      const keys = Object.keys(form[schema]);
      keys.forEach(k => {
        if (k !== 'loading' && k !== 'success' && k !== 'error') {
          delete form[schema][k];
        }
      });
      updateFormValue(schema, { loading: null, success: null, error: null });
    });
  }

  handleTabChange = (id) => {
    this.setState({ selectedTabId: id });
  }

  render() {
    const { isOpen, onClose, props, update, main } = this.props;
    const { selectedTabId } = this.state;
    const { updateMainValue } = props;
    return (
      <Dialog
        isOpen={isOpen}
        title="Enter Varient Details"
        onClose={onClose}
        canOutsideClickClose={false}
        onClosed={this.formClosedHandler}
        style={{ maxHeight: window.innerHeight * 0.9, overflowY: 'scroll', width: 'auto' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {parseInt(props.form.ServiceTypeBrandModelVarient.stypeId, 10) === 1
            ? <CarDetailsForm allProps={this.props} handleTabChange={this.handleTabChange} selectedTabId={selectedTabId} />
            : <BikeVarientForm allProps={this.props} handleTabChange={this.handleTabChange} selectedTabId={selectedTabId} />
          }
        </div>
      </Dialog>
    );
  }
}
export default VarientForm;
