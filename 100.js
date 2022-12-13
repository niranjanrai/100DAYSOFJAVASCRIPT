// important array methods
/*

let arr = ['a', 'b', 'c', 'd', 'e'];

 Slice method

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
console.log(arr.slice()); // Shallow copy
console.log([...arr]); // Shallow copy

 Splice method ( It mutate original array)

 console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
arr.splice(1, 2); // deleted 2
console.log(arr);

 Reverse method (Mutate original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

 Concat method
const letter = arr.concat(arr2);
console.log([...arr, ...arr2]);
console.log(letter);

 Join method

console.log(letter.join(' - '));



 The new at method
const arr = [22, 11, 28];

console.log(arr[0]);
console.log(arr.at(0));

 gives last value of array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1)); // latest method

console.log('Niranjan'.at(0));
console.log('Niranjan'.at(-1));



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

 for (const mov of movements) {
   if (mov > 0) {
     console.log(`You deposited ${mov}`);
   } else {
     console.log(`You credited ${Math.abs(mov)}`);
   }
 }

 with index
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(` Movements ${i}: You deposited ${mov} `);
  } else {
    console.log(` Movements ${i}:You credited ${Math.abs(mov)} `);
  }
}

console.log('------- ForEach -------');

 movements.forEach(function (mov) {
   if (mov > 0) {
     console.log(`You deposited ${mov}  `);
   } else {
     console.log(`You credited ${Math.abs(mov)} `);
   }
 });

 with index --->
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(` Movements ${i}: You deposited ${mov}  `);
  } else {
    console.log(` Movements ${i}: You credited ${Math.abs(mov)} `);
  }

   console.log(arr);
});

 function name(name) {
   console.log(arguments);
 }

 const name = name => {
   console.log(arguments);
 };
 name('Niranjan');

console.log('---------------------------------------------');

const o = {
  a: 1,
  b: 2,
  __proto__ sets the [[Prototype]]. It's specified here
  as another object literal.
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      e: 5,
      f: 6,
      __proto__: {
        g: 7,
        h: 8,
      },
    },
  },
};

 o.[[Prototype]] has properties b and c.
 o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
 what that means later).
 Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
 This is the end of the prototype chain, as null,
 by definition, has no [[Prototype]].
 Thus, the full prototype chain looks like:
 { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
 Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
 Is there a 'b' own property on o? Yes, and its value is 2.
 The prototype also has a 'b' property, but it's not visited.
 This is called Property Shadowing

console.log(o.c); // 4
Is there a 'c' own property on o? No, check its prototype.
 Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
 Is there a 'd' own property on o? No, check its prototype.
 Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
 o.[[Prototype]].[[Prototype]] is Object.prototype and
 there is no 'd' property by default, check its prototype.
 o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
 no property found, return undefined.
console.log(o.e);
console.log(o.f);
console.log(o.g);
console.log(o.h);

const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];

console.log(boxes).__proto__;



map method
const euroToUsd = 1.1;
const euroToInd = 84.75;

const movementInd = movements.map(function (mov) {
  return mov * euroToInd;
});

const movementInd = movements.map(mov => mov * euroToInd);
console.log(movements);
console.log(movementInd);

let arr3 = [];
for (let mov of movements) {
  arr3.push(mov * euroToInd);
}

console.log(arr3);

const movementDescriptions = movements.map(
  (mov, i) =>
    ` Movements ${i + 1}: You ${mov > 0 ? 'deposited' : 'widhdrew'}  ${Math.abs(
      mov
    )} `

  if (mov > 0) {
    return ` Movements ${i}: You deposited ${mov}  `;
  } else {
    return ` Movements ${i}: You credited ${Math.abs(mov)} `;
  }

  console.log(arr);
);
console.log(movementDescriptions);


const deposit = movements.filter(function (mov) {
  return mov > 0;
});
const widhdrawal = movements.filter(function (mov) {
  return mov < 0;
});

const arrDep = [];
const arrWthdra = [];
for (const mov of movements) {
  if (mov > 0) {
    arrDep.push(mov);
  }
}
for (const mov of movements) {
  if (mov < 0) {
    arrWthdra.push(mov);
  }
}
console.log('Deposited --->', arrDep);
console.log('Withdraw --->', arrWthdra);
console.log(movements);
console.log(deposit);
console.log(widhdrawal);


Reduce Method

console.log(movements);
accumulator ---> SNOWBALL

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(` Iteration ${i} : ${acc}`);
  return acc + cur;
}, 100);

const balance = movements.reduce((acc, cur) => acc + cur, 100);

console.log(balance);


let balance2 = 100;
for (const mov of movements) {
  balance2 += mov;
}

console.log(balance2);

Maximum value of the movements

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

const euroToInd = 84;

Pipeline
const totalDeposit = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToInd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposit);



const calcAverageHumanAge = ages => {
  const average = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return average;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


Find method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Sarah Smith');
const account5 = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
console.log(account5);

for (const acc of accounts) {
  if (acc.owner === 'Sarah Smith') {
    console.log(acc);
  }
}


FindIndex Method

Some method
console.log(movements);
Equality
console.log(movements.includes(-130));

Conditions
console.log(movements.some(mov => mov === -130));
const anyDeposit = movements.some(mov => mov > 1500);
console.log(anyDeposit);

Every method
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));


Array and flat Array method

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const deepArr = [[[1, 2], 3], [4, [5, 6]], 7, 8];

console.log(deepArr.flat(1)); default

console.log(deepArr.flat(2));
console.log(deepArr.flat().flat()); //same

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
console.log(accountMovements.flat().reduce((acc, mov) => acc + mov, 0));

flatmap
const overAllBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);



sorting method

strings
const owners = ['Niranjan', 'Manoj', 'Shravan', 'Sunil'];
console.log(owners.sort());
console.log(owners);

numbers

console.log(movements);
console.log(movements.sort());
console.log(movements.sort((a, b) => a - b));
console.log(movements.sort((a, b) => b - a));
console.log(movements.sort((a, b) => console.log('hie')));



console.log([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

const x = new Array(7);
console.log(x.fill(5));
console.log(x.fill(5, 4, 6));

console.log(x);
console.log(Array.from({ length: 7 }, () => 1));
console.log(Array.from({ length: 7 }, (_, i) => i + 1));

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('₹', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];

  console.log(movementsUI2);
});



console.log(5 % 2);

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i === 0) {
      row.style.backgroundColor = 'orange';
    }
    if (i === 1) {
      row.style.backgroundColor = 'white';
    }
    if (i === 2) {
      row.style.backgroundColor = 'green';
    }
    // console.log(i);
  });
});

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(23 / 0);
console.log(545864354357657513576574538756434567687543546878354354567n);
console.log(BigInt(545864354357657513576574538756434567687543546878354354567));
console.log(account2.movementsDates);
console.log(account1.movementsDates);



console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 - 1);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

document.querySelector('.logo').addEventListener('click', () => {
  alert('You clicked me!!');
});

*/
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

//

const me = new Promise();
console.log(me);
