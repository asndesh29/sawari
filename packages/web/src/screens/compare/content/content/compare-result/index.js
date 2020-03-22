/* eslint-disable no-lonely-if */
/* eslint-disable no-nested-ternary */
import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import carDetailsObj from '../../../../productDetails/components/details/productDetailsObj';
import bikeDetailsObj from '../../../../productDetails/components/details/bikeDetailsObj';
import triggerElement from './triggerElement';
import containerElementWithvalue from './containerElementWithValue';

const carCollapseLablel = {Overview: true, 'Key Features': true, 'Key Specification': true, ...carDetailsObj.specifications };

const bikeCollapseLablel = { Overview: true, 'Key Features': true, 'Key Specification': true, ...bikeDetailsObj.specifications };

const arrSchema = {
  overview: 'CarVarientOverview',
  keySpecifications: 'CarVarientKeySpecification',
  'Engine and Transmission': 'CarVarientEngineTransmission',
  'Fuel & Performance': 'CarVarientFuelPerformance',
  'Suspension, Steering & Brakes': 'CarVarientSuspensionSteeringBreak',
  'Dimensions & Capacity': 'CarVarientDimentionCapacity',
  keyFeatures: 'CarVarientKeyFeatures',
  'Comfort & Convenience': 'CarVarientComfortConvenience',
  Interior: 'CarVarientInterior',
  Exterior: 'CarVarientExterior',
  Safety: 'CarVarientSafty',
  'Entertainment & Communication': 'CarVarientEntertainmentCommunication',
};

const arrBike = {
  overview: 'BikeVarientOverview',
  keySpecifications: 'BikeVarientKeySpecification',
  keyFeatures: 'BikeVarientKeyFeaturs',
  'Engine and Transmission': 'BikeVarientEngineTransmission',
  'Features and Safety': 'BikeVarientFeatursSafety',
  'Mileage and Performance': 'BikeVarientMileagePerformance',
  'Chassis and Suspension': 'BikeVarientChassisSuspension',
  'Dimensions and Capacity': 'BikeVarientDimensionCapacity',
  Electricals: 'BikeVarientElectricals',
  'Tyres and Brakes': 'BikeVarientTyresBrakes',
};

const collapseContent = (objArr, label, keyObj, hideCommon) => {
  // console.log('obj in collapse container', objArr, label, keyObj);
  return (
    <div className="specification-collapse-container">
      {Object.values(keyObj.labels).map((l, idx) => containerElementWithvalue(l, Object.keys(keyObj.labels)[idx], objArr, keyObj, label, hideCommon))}
    </div>
  );
};

const collapseHandler = (lable, objArr, keyObj, variantList, collapseObj, collapseOpenHandler, collapseColoseHandler, hideCommon) => {
  const constObjArr = objArr.filter(b => b);
  // console.log('collapse Handler', objArr, constObjArr);
  return (
    constObjArr.length >= 1 && (
    <Collapsible
      open={collapseObj[lable]}
      trigger={triggerElement(lable, variantList, collapseObj, collapseOpenHandler, collapseColoseHandler)}
      transitionTime={200}
    >
      {collapseContent(constObjArr, lable, keyObj, hideCommon)}
    </Collapsible>
    )
  );
};

class Specification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapseObj: {} };
  }

  componentWillMount() {
    const { match } = this.props;
    if (match.params.typeId === 'cars') {
      const initialCollapseLableValue = Object.keys(carCollapseLablel).reduce((obj, n) => {
        obj = { ...obj, [n]: false };
        return obj;
      }, {});
      this.setState({ collapseObj: initialCollapseLableValue });
    } else {
      const initialCollapseLableValue = Object.keys(bikeCollapseLablel).reduce((obj, n) => {
        obj = { ...obj, [n]: false };
        return obj;
      }, {});
      this.setState({ collapseObj: initialCollapseLableValue });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { match } = this.props;
    if (nextProps.expandAll) {
      if (match.params.typeId === 'cars') {
        const initialCollapseLableValue = Object.keys(carCollapseLablel).reduce((obj, n) => {
          obj = { ...obj, [n]: true };
          return obj;
        }, {});
        this.setState({ collapseObj: initialCollapseLableValue });
      } else {
        const initialCollapseLableValue = Object.keys(bikeCollapseLablel).reduce((obj, n) => {
          obj = { ...obj, [n]: true };
          return obj;
        }, {});
        this.setState({ collapseObj: initialCollapseLableValue });
      }
    } else {
      if (match.params.typeId === 'cars') {
        const initialCollapseLableValue = Object.keys(carCollapseLablel).reduce((obj, n) => {
          obj = { ...obj, [n]: false };
          return obj;
        }, {});
        this.setState({ collapseObj: initialCollapseLableValue });
      } else {
        const initialCollapseLableValue = Object.keys(bikeCollapseLablel).reduce((obj, n) => {
          obj = { ...obj, [n]: false };
          return obj;
        }, {});
        this.setState({ collapseObj: initialCollapseLableValue });
      }
    }
  }


  collapseOpenHandler = (label) => {
    // console.log('open handler called', label);
    const { collapseObj } = this.state;
    this.setState({ collapseObj: { ...collapseObj, [label]: true } });
  }

  collapseColoseHandler = (label) => {
    // console.log('close handler called', label);
    const { collapseObj } = this.state;
    this.setState({ collapseObj: { ...collapseObj, [label]: false } });
  }

  render() {
    // console.log('project detials in Onj in specification', productDetailsObj);
    const { collapseObj } = this.state;
    // console.log('Collapse Obj', collapseObj);
    const { productList, main, match, hideCommon } = this.props;
    const variantsDetailsList = [];
    let vehicleProductDetais = null;
    // console.log('ProductList', productList);
    if (match.params.typeId === 'cars') {
      productList.forEach((v) => {
        const allCarDetails = {};
        Object.keys(arrSchema).forEach((k) => {
          allCarDetails[k] = main.initialData[arrSchema[k]].find((d) => d.varientId === v.id);
        });
        variantsDetailsList.push(allCarDetails);
      });
      vehicleProductDetais = carDetailsObj;
    } else {
      productList.forEach((v) => {
        const allBikeDetailsList = {};
        Object.keys(arrBike).forEach((k) => {
          allBikeDetailsList[k] = main.initialData[arrBike[k]].find((d) => d.varientId === v.id);
        });
        variantsDetailsList.push(allBikeDetailsList);
      });
      vehicleProductDetais = bikeDetailsObj;
    }

    // console.log('variantsDetailsList', variantsDetailsList);
    // console.log(Object.keys(productList[0].specifications));
    return (
      <div className="specification">
        { vehicleProductDetais.overview && collapseHandler(
          'Overview',
          variantsDetailsList.map((v) => v.overview),
          vehicleProductDetais.overview,
          productList,
          collapseObj,
          this.collapseOpenHandler,
          this.collapseColoseHandler,
          hideCommon
        )}
        { vehicleProductDetais.keySpecifications && collapseHandler(
          'Key Specification',
          variantsDetailsList.map((v) => v.keySpecifications),
          vehicleProductDetais.keySpecifications,
          productList,
          collapseObj,
          this.collapseOpenHandler,
          this.collapseColoseHandler,
          hideCommon
        )}
        {vehicleProductDetais.keyFeatures && collapseHandler(
          'Key Features',
          variantsDetailsList.map((v) => v.keyFeatures),
          vehicleProductDetais.keyFeatures,
          productList,
          collapseObj,
          this.collapseOpenHandler,
          this.collapseColoseHandler,
          hideCommon
        )}
        {Object.keys(vehicleProductDetais.specifications)
          .map((topic, idx) => vehicleProductDetais.specifications[topic] && collapseHandler(
            topic,
            variantsDetailsList.map((v) => v[topic]),
            vehicleProductDetais.specifications[topic],
            productList,
            collapseObj,
            this.collapseOpenHandler,
            this.collapseColoseHandler,
            hideCommon

          ))}
      </div>
    );
  }
}
export default Specification;
Specification.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.any).isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
