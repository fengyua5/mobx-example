
const simpleIsEqual = (a, b) => {
  return a === b;
};

export default function (resultFn, isEqual = simpleIsEqual) {
  let lastThis;
  let lastArgs = [];
  let lastResult;
  let calledOnce = false;

  const isNewArgEqualToLast = (newArg, index) => isEqual(newArg, lastArgs[index]);
  console.log('2222222');
  const result = function (...newArgs) {
    if (calledOnce &&
      lastThis === this &&
      newArgs.length === lastArgs.length &&
      newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    lastResult = resultFn.apply(this, newArgs);
    console.log('complete----------------');
    return lastResult;
  };

  // telling flow to ignore the type of `result` as we know it is `ResultFn`
  return result;
}