import React from 'react';
import Select from 'react-select';
import { Tab, Tabs } from '@blueprintjs/core';
import { AiOutlineClose } from 'react-icons/ai';

const Selector = (props) => {
  console.log('props in selector', props);
  const { placeHolder, type, menuChangeHandler, main, state } = props;
  const options = type === 'brandId' ?
    main.initialData.vehicleBrand.map(b => ({ value: b.id, label: b.brandName }))
    : main.initialData.vehicleBrandProduct.filter(p => p.sbId === state.brandId).map(p => ({ value: p.id, label: p.name }));
  return (
    <div style={{ marginBottom: 10, marginTop: 10, width: 350 }}>
      <Select
        styles={{ container: (provided, state) => ({
          ...provided,
          color: 'black',
        })}}
        options={options}
        isSearchable
        placeholder={placeHolder}
        onChange={e => menuChangeHandler(type, e.value)}
      />
    </div>
  );
};

class SelectProductMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brandId: null, productId: null, selectedTabId: 'Brand' };
  }

  menuChangeHandler = (type, id) => {
    const { showMenuHandler } = this.props;
    if (type === 'brandId') {
      this.setState({ [type]: id });
      this.setState({ selectedTabId: 'Model' });
    } else {
      this.setState({ [type]: id });
      showMenuHandler({ productId: id });
    }
    this.setState({ [type]: id });
  }

  handleTabChange = (tabId) => {
    this.setState({ selectedTabId: tabId });
  }

  render() {
    const { showMenuHandler } = this.props;
    const { selectedTabId, brandId, productId } = this.state;
    console.log('state value Product Selector', this.state);
    return (
      <div style={{ marginTop: -50, height: 200, width: 400, margin: 5, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, border: '2px solid #f5f5f5' }}>
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
          <Tab
            style={{ fontSize: 15, fontWeight: 'bold' }}
            id="Brand"
            title="Brand"
            panel={<Selector placeHolder="Select brand" type="brandId" menuChangeHandler={this.menuChangeHandler} {...this.props} />}
          />
          <Tab
            style={{ fontSize: 15, fontWeight: 'bold' }}
            id="Model"
            title="Model"
            panel={<Selector state={this.state} placeHolder="Select model" type="productId" menuChangeHandler={this.menuChangeHandler} {...this.props} />}
          />
          <Tabs.Expander />
          <AiOutlineClose onClick={showMenuHandler} style={{ cursor: 'pointer' }}/>
        </Tabs>
      </div>
    );
  }
}
export default SelectProductMenu;
