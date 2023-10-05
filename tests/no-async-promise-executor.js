// incorrect
const foo = new Promise(async (resolve, reject) => {
    readFile('foo.txt', function (err, result) {
        if (err) {
            reject(err);
        } else {
            resolve(result);
        }
    });
});

// correct
const foo2 = new Promise((resolve, reject) => {
    readFile('foo.txt', function (err, result) {
        if (err) {
            reject(err);
        } else {
            resolve(result);
        }
    });
});
