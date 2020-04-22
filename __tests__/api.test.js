import { Foxy } from '../src/api.js'

describe("Foxy", () => {

  test ('should generate a random number between 0-195', () => {
    let test1 = new Foxy();
    let testArr = [1,2,3];
    test1.randomNumber(testArr.length);
    expect(test1.randomNumber(testArr.length)).toEqual()
  });

});