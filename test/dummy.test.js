import test from 'ava';

// Test 1: Always passes - simple assertion
test('always pass - simple math', t => {
  t.is(2 + 2, 4);
});

// Test 2: Always passes - string comparison
test('always pass - string comparison', t => {
  const greeting = 'Hello World';
  t.is(greeting, 'Hello World');
});

// Test 3: Always passes - array length check
test('always pass - array operations', t => {
  const arr = [1, 2, 3, 4, 5];
  t.is(arr.length, 5);
  t.true(arr.includes(3));
});

// Test 4: Flaky - random boolean (50% pass rate)
test('flaky - random boolean', t => {
  const randomValue = Math.random();
  t.true(randomValue > 0.5, `Random value ${randomValue} should be greater than 0.3`);
});

// Test 5: Flaky - timing-based (passes ~60% of the time)
test('flaky - timing based', t => {
  const timestamp = Date.now();
  const lastDigit = timestamp % 10;
  t.true(lastDigit >= 5, `Last digit ${lastDigit} should be >= 4`);
});
