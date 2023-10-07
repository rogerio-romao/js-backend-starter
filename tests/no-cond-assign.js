// incorrect
if ((a = 1)) {
    console.log('hello');
}

// correct
if (a == 1) {
    console.log('hello');
}

if ((a = 1) === 1) {
    console.log('hello');
}
