/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
console.log('abc', 'def');
const callback = (x) => x + 1;
const array = [1, 2, 3];
array.map((element) => callback(element));
for (const element of array) {
    callback(element);
}
for (const [index, element] of array.entries()) {
    console.log(index, element);
}

const foo = '\u001B';
const bar = '\u001B';
const baz = '\u001B';
const isArray = Array.isArray(array);

const length = 10;
const array2 = Array.from({ length });

const buffer = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const un = undefined;
