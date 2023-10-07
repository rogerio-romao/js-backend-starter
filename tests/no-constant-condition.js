// incorrect
if (Boolean(1)) {
    doSomethingUnfinished();
}

// correct
if (x === 0) {
    console.log('hello');
}

// because the flag checkLoops is set to false
while (true) {
    console.log('hello');
}
