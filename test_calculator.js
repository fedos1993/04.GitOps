const addition = require('./calculator.js');

function testAddition() {
  console.log('Start testing the addition function');

  if (addition(5, 5) === 10) {
    console.log('Test 1 passed');
  } else {
    console.log('Test 1 failed')
  }

  if (addition(1, 1) === 2) { 
    console.log('Test 2 passed');
  } else { 
    console.log('Test 2 failed')
  }

  if (addition(2, 2) === 3) { 
    console.log('Test 3 passed');
  } else { 
    console.log('Test 3 failed')
  }
}

testAddition();
