import db from '../db';
import budgetRagneList from './budgetRangeProvider';

export default async (record) => {
  console.log('multi search api called', record);
  const { buttonType, brandId, budgetId, searchType, typeId } = record;

  const mainRes = await db.execute(async ({ find, findOne, executeSql }) => {
    if (buttonType === 'new') {
      if (searchType === 'brand') {
        const productList = await find('ServiceTypeBrandProductDetails', { sid: parseInt(brandId, 10), stypeId: parseInt(typeId, 10) });
        return { productList };
      }

      if (searchType === 'budget') {
        const budget = budgetRagneList.find((b) => b.id === parseInt(budgetId, 10));
        const productListTemp = await executeSql('SELECT * FROM ServiceTypeBrandProductDetails WHERE [price] BETWEEN ? AND ?', [budget.lowerValue, budget.uperValue]);
        const productList = productListTemp.filter((p) => p.stypeId === parseInt(typeId, 10));
        return { productList };
      }
    }
    if (buttonType === 'used') {
      return { brandProducts: [] };
    }
  });
  return mainRes;
};
