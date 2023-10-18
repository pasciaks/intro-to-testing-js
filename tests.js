// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Sheldon!" when executed', function() {
        expect(sayHello('Sheldon')).toBe("Hello, Sheldon!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Sheldon!" when executed', function() {
        expect(sayHello('Sheldon')).toBe("Hello, Sheldon!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
});

//expect(sayHello()).toBe("Hello, World!")
describe('sayHello', function () {
    it('should return a string [Hello, World!"] when called', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return a string [Hello, World!"] when called', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return a string [Hello, World!"] when called', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return a string [Hello, 2.3!"] when called', function() {
        expect(sayHello(2.3)).toBe("Hello, 2.3!");
    });
    it('should return a string [Hello, 5!"] when called', function() {
        expect(sayHello("5")).toBe("Hello, 5!");
    });
    it('should return a string [Hello, World!"] when called', function() {
        expect(sayHello([])).toBe("Hello, World!");
    });
    it('should return a string [Hello, World!"] when called', function() {
        expect(sayHello({})).toBe("Hello, World!");
    });
    it('should return a string [Hello, World!"] when called', function() {
        expect(sayHello(function test(){})).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return true if "5" is passed', function() {
        expect( isFive("5")).toBe(true);
    });
    it('should return false if "2" is passed', function() {
        expect( isFive("2")).toBe(false);
    });
});

describe('isEven', function () {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });

    it('should return true - isEven(2)', function() {
        expect( isEven(2)).toBe(true);
    });
    it('should return true - isEven(-4)', function() {
        expect( isEven(-4)).toBe(true);
    });
    it('should return false - isEven(3)', function() {
        expect( isEven(3)).toBe(false);
    });
    it('should return false - isEven("banana")', function() {
        expect( isEven("banana")).toBe(false);
    });
    it('should return true - isEven("8")', function() {
        expect( isEven("8")).toBe(true);
    });
    it('should return true - isEven(Infinity)', function() {
        expect( isEven(Infinity)).toBe(false);
    });
    it('should return false - isEven(true)', function() {
        expect( isEven(true)).toBe(false);
    });
    it('should return false - isEven(false)', function() {
        expect( isEven(false)).toBe(false);
    });
    it('should return false - isEven()', function() {
        expect( isEven()).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return boolean - isVowel(false)', function() {
        expect( typeof isVowel()).toBe('boolean');
    });
    it('should return true - isVowel("a")', function() {
        expect( isVowel("a")).toBe(true);
    });
    it('should return true - isVowel("A")', function() {
        expect( isVowel("A")).toBe(true);
    });
    it('should return false - isVowel("y")', function() {
        expect( isVowel("y")).toBe(false);
    });
    it('should return false - isVowel(4)', function() {
        expect( isVowel(4)).toBe(false);
    });
    it('should return false - isVowel(true)', function() {
        expect( isVowel(true)).toBe(false);
    });
    it('should return false - isVowel(false)', function() {
        expect( isVowel(false)).toBe(false);
    });
    it('should return false - isVowel("banana")', function() {
        expect( isVowel("banana")).toBe(false);
    });
    it('should return false - isVowel()', function() {
        expect( isVowel()).toBe(false);
    });
});

describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });

    it('should return 5 - add(2,3)', function() {
        expect( add(2,3)).toBe(5);
    });

    it('should return -12 - add(-3,-9)', function() {
        expect( add(-3,-9)).toBe(-12);
    });

    it('should return 11 - add("5",6)', function() {
        expect( add("5",6)).toBe(11);
    });

    it('should return 6 - add("-4","10")', function() {
        expect( add("-4","10")).toBe(6);
    });

    it('should return NaN - add("banana","split")', function() {
        expect( isNaN(add("banana","split"))).toBe(true);
    });

    it('should return NaN - add(2,"apples")', function() {
        expect( isNaN(add(2,"apples"))).toBe(true);
    });

    it('should return NaN - add()', function() {
        expect( isNaN(add())).toBe(true);
    });

});