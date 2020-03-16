import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@blueprintjs/core';
import { AiOutlineClose } from 'react-icons/ai';

const Selector = (props) => {
  console.log('props in selector', props);
  const vehicleType = { cars: 1, bikes: 2 };
  const { placeHolder, SelectType, menuChangeHandler, main, state, match } = props;
  let options = [];
  if (SelectType === 'brandId') {
    options = main.initialData.vehicleBrand.filter((obj) => obj.stypeId === vehicleType[match.params.typeId]).map(b => ({ value: b.id, label: b.brandName }));
  }

  if (SelectType === 'modelId') {
    options = main.initialData.vehicleModel.filter((m) => m.sbId === state.brandId).map((b) => ({ value: b.id, label: b.name }));
  }

  if (SelectType === 'varientId') {
    options = main.initialData.variantList.filter((v) => v.modelId === state.modelId).map((b) => ({ value: b.id, label: b.name }));
  }
  return (
    <div style={{ marginBottom: 10, marginTop: 10, width: '100%' }}>
      <Select
        styles={{ container: (provided, state) => ({
          ...provided,
          color: 'black',
        })}}
        options={options}
        isSearchable
        placeholder={placeHolder}
        onChange={e => menuChangeHandler(SelectType, e.value)}
      />
    </div>
  );
};

Selector.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  SelectType: PropTypes.string.isRequired,
  menuChangeHandler: PropTypes.func.isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

class SelectProductMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brandId: null, modelId: null, varientId: null, selectedTabId: 'Brand' };
  }

  menuChangeHandler = (selectType, id) => {
    console.log('menu change handler called', selectType, id);
    const { showMenuHandler, type } = this.props;
    if (selectType === 'brandId') {
      this.setState({ [selectType]: id });
      this.setState({ selectedTabId: 'Model' });
    } else if (selectType === 'modelId') {
      this.setState({ [selectType]: id });
      this.setState({ selectedTabId: 'Varient' });
    } else {
      this.setState({ [selectType]: id });
      showMenuHandler({ [type]: id });
    }
    this.setState({ [selectType]: id });
  }

  handleTabChange = (tabId) => {
    this.setState({ selectedTabId: tabId });
  }

  render() {
    const { showMenuHandler } = this.props;
    const { selectedTabId, brandId, productId } = this.state;
    console.log('state value Product Selector', this.state);
    return (
      <div style={{ marginTop: -50, height: 200, width: 400, margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: 10, border: '2px solid #f5f5f5' }}>
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
          <Tab
            style={{ fontSize: 15, fontWeight: 'bold' }}
            id="Brand"
            title="Brand"
            panel={<Selector state={this.state} placeHolder="Select brand" SelectType="brandId" menuChangeHandler={this.menuChangeHandler} {...this.props} />}
          />
          <Tab
            style={{ fontSize: 15, fontWeight: 'bold' }}
            id="Model"
            title="Model"
            panel={<Selector state={this.state} placeHolder="Select model" SelectType="modelId" menuChangeHandler={this.menuChangeHandler} {...this.props} />}
          />
          <Tab
            style={{ fontSize: 15, fontWeight: 'bold' }}
            id="Varient"
            title="Varient"
            panel={<Selector state={this.state} placeHolder="Select varient" SelectType="varientId" menuChangeHandler={this.menuChangeHandler} {...this.props} />}
          />
          <Tabs.Expander />
          <AiOutlineClose onClick={showMenuHandler} style={{ cursor: 'pointer' }} />
        </Tabs>
      </div>
    );
  }
}
export default SelectProductMenu;
SelectProductMenu.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  showMenuHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
