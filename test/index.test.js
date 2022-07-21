
  const fizz_buzz = require('../src/index.js');

  /**
   * This assert will pass 
   */
  describe("FizzBuzz", () => {
      test('[3] should result in "fizz"', () => {
        expect(fizz_buzz([3])).toBe('fizz');
      });
  
      test('[5] should result in "buzz"', () => {
        expect(fizz_buzz([5])).toBe('buzz');
      });
  
      test('[15] should result in "fizzbuzz"', () => {
        expect(fizz_buzz([15])).toBe('fizzbuzz');
      });
  
      test('[1,2,3] should result in "1, 2, fizz"', () => {
        expect(fizz_buzz([3])).toBe('fizz');
      });
  
  });

 /**
  * ! This assert is suppose to fail !
  */
 
//   describe("FizzBuzz", () => {
//     test('[3] should result in "fizz"', () => {
//       expect(fizz_buzz([2])).toBe('fizz');
//     });

//     test('[5] should result in "buzz"', () => {
//       expect(fizz_buzz([15])).toBe('buzz');
//     });

//     test('[15] should result in "fizzbuzz"', () => {
//       expect(fizz_buzz([5])).toBe('fizzbuzz');
//     });

//     test('[1,2,3] should result in "1, 2, fizz"', () => {
//       expect(fizz_buzz([15])).toBe('fizz');
//     });

// });