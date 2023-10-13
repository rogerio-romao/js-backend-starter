/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// helpers
import { test } from './test';

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
const item = array.some((x) => callback(x));
const foo2 = array.flat();
const foo3 = array.flatMap((element) => callback(element));

const foo = '\u001B';
const bar = '\u001B';
const baz = '\u001B';
const isArray = Array.isArray(array);

const length = 10;
const array2 = Array.from({ length });

const buffer = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const un = undefined;

const stuff = [3, 4].includes('foo');

window.addEventListener('keydown', (event) => {
    console.log(event.key);
});

const newfoo = foo?.bar ?? baz;

const inf = Number.POSITIVE_INFINITY;

const array3 = new Set([1, 2, 3]);
const hasValue = (value) => array3.has(value);

const crazyText = `
query user(id: 5) {
    firstName
    lastName
}
`;

const doSomething = async () => {
    await test();
};

const doSomethingElse = async () => {
    await test();
};

function say(a, b) {
    print(`${a} ${b}`);
}

say('hello', 'world');

const x = 0;

if (x === 0) {
    doSomething();
} else if (x === 1) {
    doSomethingElse();
} else {
    throw new Error('x should be 0 or 1');
}

const y = 0;

if (x !== undefined && y === 2) {
    // ...
}

'hello'.lastIndexOf('e');

const result = array.length > 0;

if (result) {
    doSomething();
    doSomethingElse();
} else if (result === false) {
    doSomething();
} else {
    doSomethingElse();
}

let a;
if (a) {
    // Noncompliant
    doSomething();
}

if (a) {
    // Noncompliant
    doSomething();
}
if (a !== 2) {
    // Noncompliant
    doSomething();
}

function booleanFunction() {
    return true;
}

if (booleanFunction()) {
    // Noncompliant
    doSomething();
}

function getLength(a, b, c) {
    return a.length + b.length + c.length;
}
