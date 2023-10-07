// incorrect
if (x === -0) {
    // doSomething()...
}

// correct
if (Object.is(x, -0)) {
    // doSomething()...
}
