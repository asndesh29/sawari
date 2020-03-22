/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, Dialog, Intent, Spinner, Switch } from '@blueprintjs/core';
import Table from '../../../../components/common/Table';
import { ENDPOINT } from '../../../../config';
import AddBrand from './addUsedVehicleForm';

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
      publishLoading: false,
      soldLoading: false,
    };
  }

  toggleAddBrandForm = () => {
    this.setState({ showUpdate: !this.state.showUpdate });
  }

  toggleDelete = () => {
    this.setState({ showDelete: !this.state.showDelete });
  }

  updateBrand = (id) => {
    const { main, updateFormValue } = this.props;
    const brandToUpdate = main.initialAdminData.SellVehicle.find((vb) => vb.id === id);
    updateFormValue('sellVehicle', { ...brandToUpdate });
    this.setState({ showUpdate: true });
  }

  deleteBrand = (id) => {
    // console.log('delete brand called', id);
    this.setState({ showDelete: id });
  }

  mainDelete = async () => {
    const { deleteSellVehicle } = this.props;
    const { showDelete } = this.state;
    this.setState({ loading: true });
    const res = await deleteSellVehicle(showDelete);
    if (res) {
      this.setState({ loading: null, success: 'Successfully deleted'});
    } else {
      this.setState({ loading: null, error: 'Faild to delete' });
    }
  }

  publishHandler = async (obj) => {
    const { publish } = obj;
    const { updateSellVehicle } = this.props;
    const res = await updateSellVehicle({ ...obj, publish: !publish });
  }

  soldHandler = async (obj) => {
    const { updateSellVehicle } = this.props;
    const { sold } = obj;
    const res = await updateSellVehicle({ ...obj, sold: !sold });
  }

  render() {
    const { main, form } = this.props;
    const { showDelete, showUpdate, loading, error, success } = this.state;
    return (
      <div className="admin-add-brand-content-table">
        <div style={{ width: '100%' }}>
          {main.initialAdminData.SellVehicle && (
            <Table
              headers={{ id: 'Id', model: 'Name', update: 'Update', delete: 'Delete', publish: 'Publish', sold: 'Sold' }}
              data={main.initialAdminData.SellVehicle
                .filter((sv) => (sv.stypeId === parseInt(form.sellVehicleFilter.stypeId, 10)
                  && (sv.sbId === parseInt(form.sellVehicleFilter.sbId, 10))
                  && (sv.province === form.sellVehicleFilter.province)
                )).map((obj) => (
                  {
                    ...obj,
                    brandImageUrl: <img src={`${ENDPOINT}/brand_image/${obj.brandImageUrl}`} style={{ width: 50, height: 50 }} />,
                    update: <Button text="Update" intent={Intent.SUCCESS} onClick={() => this.updateBrand(obj.id)} />,
                    delete: <Button text="Delete" intent={Intent.DANGER} onClick={() => this.deleteBrand(obj.id)} />,
                    publish: <Switch checked={obj.publish === 1 || obj.publish} onChange={() => this.publishHandler(obj)} />,
                    sold: <Switch checked={obj.sold === 1 || obj.sold} onChange={() => this.soldHandler(obj)} />,
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
              {success && <span style={{ color: 'green' }}>{success}</span>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button text="Yes" intent={Intent.DANGER} style={{ margin: '5px 5px 0 0' }} onClick={this.mainDelete} />
              <Button text="No" intent={Intent.SUCCESS} style={{ margin: '5px 5px 0 0' }} onClick={this.toggleDelete} />
            </div>
          </div>
        </PopUp>
        <AddBrand isOpen={showUpdate} onClose={this.toggleAddBrandForm} props={this.props} update />
      </div>
    );
  }
}

export default BrandList;

BrandList.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
  updateSellVehicle: PropTypes.func.isRequired,
  deleteSellVehicle: PropTypes.func.isRequired,
};
