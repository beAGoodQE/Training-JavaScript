/*

*/
const {shopForBeans, soakTheBeans, cookTheBeans} = require('./DependentPromisesLibrary.js');

function nativePromiseVersion() {
    returnsFirstPromise()
        .then((firstValue) => {
            console.log(firstValue);
            return returnsSecondPromise(firstValue);
        })
        .then((secondValue) => {
            console.log(secondValue);
        });
}

// Write your code below:
const makeBeans = async () => {
  const type = await shopForBeans();
  const isSoft = await soakTheBeans(type);
  const dinner = await cookTheBeans(isSoft);

  console.log(dinner);
}

makeBeans();