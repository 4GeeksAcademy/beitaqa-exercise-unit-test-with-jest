const sum = require('./sum');

test("Un euro equivale a 1.07 dolar", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(4000);
})

test("De USD a JPY (1 USD = 149.03 JPY)", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1490.3);
})

test(" DE JPY a GBP (1 JPY = 0.0072 GBP)", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1000)).toBe(7.2);
})
