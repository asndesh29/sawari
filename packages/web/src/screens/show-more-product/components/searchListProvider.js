export default (props) => {
  const { main, match, updateMainValue } = props;
  const { params } = match;
  const { searchType, tempId, buttonType, typeId } = params;
  const tempBrandIdArr = tempId.split('-');
  const sbId = parseInt(tempBrandIdArr[1], 10);
  let result = [];
  if (buttonType === 'new') {
    result = main.initialData.vehicleModel.filter((obj) => obj.stypeId === (params.typeId === 'car' ? 1 : 2));
    if (params.searchType === 'brand') {
      result = result.filter((r) => r.sbId === sbId);
    }
  }

  if (buttonType === 'used') {
    result = main.initialData.usedVehicle.filter((uv) => uv.stypeId === (params.typeId === 'car' ? 1 : 2));
    if (params.searchType === 'brand') {
      result = result.filter((uv) => uv.sbId === sbId);
    }
  }

  // console.log('props in Search List provider', props, result, sbId);
  return result;
};
