/// <reference path="../typings/index.d.ts" />
import { expect } from 'chai';
import { triple } from '../src/demo';
/////////////////////////////////////////////


/******************************/
/*          Testkod           */
/******************************/

describe('triple function', () => {

   it('should triple the given input', () => {
       // arrange
       var input = 4;
       
       // act
       var result = triple(input);

       // assert
       expect(result).to.be.equal(12);
   });

});