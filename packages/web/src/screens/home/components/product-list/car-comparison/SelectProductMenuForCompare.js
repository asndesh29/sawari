import React from 'react';
import ProductSelector from './ProductSelector';
import ShowProduct from './ShowProduct';

class SelectProductForComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false, currentProduct: null, pId1: null, pId2: null };
  }

  showMenuHandler = (todo) => {
    console.log('main showmenuHandler called', todo);
    const { currentProduct, showMenu } = this.state;
    if (todo.showForProduct) {
      this.setState({ currentProduct: todo.showForProduct });
    }
    if (todo.productId) {
      if (currentProduct === 1) {
        this.setState({ pId1: todo.productId });
      } else {
        this.setState({ pId2: todo.productId });
      }
    }
    this.setState({ showMenu: !showMenu });
  }

  render() {
    const { showMenu, pId1, pId2 } = this.state;
    console.log('main compare state', this.state);
    return (
      showMenu ? <ProductSelector {...this.props} showMenuHandler={this.showMenuHandler} /> : <ShowProduct pId1={pId1} pId2={pId2} {...this.props} showMenuHandler={this.showMenuHandler } />
    );
  }
}
export default SelectProductForComparison;
