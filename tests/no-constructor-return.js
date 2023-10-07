// incorrect
class A {
    constructor(a) {
        this.a = a;
        return a;
    }
}

class B {
    constructor(f) {
        if (!f) {
            return 'falsy';
        }
    }
}

// correct
class C {
    constructor(a) {
        this.a = a;
    }
}

class D {
    constructor(f) {
        if (!f) {
            return;
        }
        f();
    }
}
