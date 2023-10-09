console.log('abc', 'def');
const callback = (x) => x + 1;
const array = [1, 2, 3];
array.map((element) => callback(element));
for (const element of array) {
    callback(element);
}
