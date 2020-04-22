import { Foxy } from '../src/image.js'

describe("Foxy", () => {

  test ('should generate a random number between 1-3', () => {
    let test1 = new Foxy();
    let testArr = [1,2,3];
    test1.randomNumber(testArr.length);
    expect(test1.randomNumber(testArr.length)).toBeGreaterThanOrEqual(1);
    expect(test1.randomNumber(testArr.length)).toBeLessThanOrEqual(3);
  });

});