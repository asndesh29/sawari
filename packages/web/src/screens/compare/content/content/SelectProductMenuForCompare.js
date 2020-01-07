import React from 'react';
import ProductSelector from './ProductSelector';
import ShowProduct from './ShowProduct';

class SelectProductForComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  showMenuHandler = (todo) => {
    const { showMenu } = this.state;
    const { showMenuHandler } = this.props;
    this.setState({ showMenu: !showMenu });
    showMenuHandler(todo);
  }

  render() {
    const { showMenu } = this.state;
    const { pId, type } = this.props;
    // console.log('main compare state', this.state);
    return (
      showMenu ? <ProductSelector {...this.props} showMenuHandler={this.showMenuHandler} /> : <ShowProduct {...this.props} showMenuHandler={this.showMenuHandler } />
    );
  }
}
export default SelectProductForComparison;
