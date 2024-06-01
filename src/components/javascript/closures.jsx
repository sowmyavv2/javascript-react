/**
 * @return {Function}
 */
var createHelloWorld = function() {
    var name = "Hello World"
    return function(...args) {
        return name;
    }
};