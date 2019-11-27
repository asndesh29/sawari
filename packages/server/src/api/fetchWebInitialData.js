import db from '../db';
import fetchAnsQsnTransDetails from './fetchAnsQsnTransDetails';

export default async (user) => {
  //  console.log('fetchWebInitialData called');
  try {
    const res = await db.execute(async ({ find, findOne }) => {
      const userDetails = await findOne('Astrologer', { userId: user.id });
      const appConfig = await findOne('AppConfiguration', { id: 1 });
      const employeeSalary = await findOne('EmployeeSalary', { id: 1 });
      const employeeBonusSalary = await find('EmployeeFixedAndBonusSalary', { userId: user.id });
      const employeePayment = await find('EmployeePayment', { empId: user.id });
      let allUserList = null;
      let clarifyAllRes = null;
      let allUnservedQustionList = null;
      let allEmployeeSalary = null;
      let allEmployeePayment = null;
      // if (user.type === 'super' || user.type === 'admin') {
      const userList = await find('User');
      allEmployeeSalary = await find('EmployeeFixedAndBonusSalary');
      allEmployeePayment = await find('EmployeePayment');
      const unservedQustionList1 = await find('UserQuestion', { serveStatus: 1 });
      const unservedQustionList2 = await find('UserQuestion', { serveStatus: 2 });
      const unservedQustionList3 = await find('UserQuestion', { serveStatus: 3 });
      allUnservedQustionList = [...unservedQustionList1, ...unservedQustionList2, ...unservedQustionList3].filter(qsn => !qsn.webDeleteStatus);

      const promiseAll = [];
      userList.forEach((data) => {
        delete data.password;
        promiseAll.push(findOne('Astrologer', { userId: data.id }));
      });
      const allUserDetails = await Promise.all(promiseAll);
      allUserList = allUserDetails.map((data, idx) => ({ ...userList[idx], userDetails: data || null }));
      const clarifyQuestionRes = await find('ClarifyQuestion', { serveStatus: 1 });
      const clarifyPromiseAll = [];
      clarifyQuestionRes.forEach(data => clarifyPromiseAll.push(fetchAnsQsnTransDetails(undefined, user, data.questionId, 'paidOnly')));
      clarifyAllRes = await Promise.all(clarifyPromiseAll);
      // }

      const bidhaUserList = await find('BidhaUser');
      const bidhaUserListFilterData = bidhaUserList.map(data => ({ id: data.id, fbToken: data.fbToken, firstName: data.firstName, registrationToken: data.registrationToken }));

      switch (user.type) {
        case 'super':
          return {
            userList: allUserList,
            pendingQuestion: clarifyAllRes,
            currentUserDetails: { ...user, userDetails },
            unserveQuestion: allUnservedQustionList,
            appConfig,
            bidhaUserList: bidhaUserListFilterData,
            employeeSalary,
            allEmployeeSalary,
            allEmployeePayment,
          };
        case 'admin':
          return {
            userList: allUserList,
            pendingQuestion: clarifyAllRes,
            currentUserDetails: { ...user, userDetails },
            unserveQuestion: allUnservedQustionList,
            appConfig,
            bidhaUserList: bidhaUserListFilterData,
            employeeSalary,
            allEmployeeSalary,
            allEmployeePayment,
          };
        case 'moderator':
          return {
            userList: allUserList.map(u => (u.userDetails ? { ...u, userDetails: { userId: u.id, name: u.userDetails.name, image: u.userDetails.image } } : u)),
            unserveQuestion: allUnservedQustionList,
            bidhaUserList: bidhaUserListFilterData,
            currentUserDetails: { ...user, userDetails },
            employeeBonusSalary,
            employeePayment,
          };
        case 'astrologer':
          return {
            userList: allUserList,
            unserveQuestion: allUnservedQustionList,
            currentUserDetails: { ...user, userDetails },
            employeeBonusSalary,
            bidhaUserList: bidhaUserListFilterData,
            employeePayment,
          };
        default:
          return null;
      }
    });
    return res;
  } catch (e) {
    console.log('error in fetching initial data', e);
    throw new Error('DB access failed');
  }
};
