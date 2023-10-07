// incorrect
const value1 = +x == null;

const value2 = condition ? x : {} || DEFAULT;

const value3 = !foo == null;

const value4 = new Boolean(foo) === true;

const objIsEmpty = someObj === {};

const arrIsEmpty = someArr === [];

const shortCircuit1 = condition1 && false && condition2;

const shortCircuit2 = condition1 || true || condition2;

const shortCircuit3 = condition1 ?? 'non-nullish' ?? condition2;

// correct
const value5 = x == null;

const value6 = (condition ? x : {}) || DEFAULT;

const value7 = !(foo == null);

const value8 = Boolean(foo) === true;

const objIsEmpty1 = Object.keys(someObj).length === 0;

const arrIsEmpty1 = someArr.length === 0;
