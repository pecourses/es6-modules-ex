// дефолтный импорт
// import math from './math.js';

// именованный импорт
// import { sum } from './math.js';
// console.log('sum(1,2)', sum(1, 2));

// import * as Math from './math.js';
// console.log('sum(1,2)', Math.sum(1, 2));

// дефолтный + именованный
import PI, { sum } from './math.js';
console.log('PI', PI);
console.log('sum(1,3)', sum(1, 3));
