/***********************************************************************
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should
set an interval with the given callback and delay. If an amount argument
is passed, the interval should be cleared after the callback has been
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples:

dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely

console.log(timeoutObject); // Timeout { ... }
***********************************************************************/

function dynamicIntervalCount(cb, delay, amount) {
    let count = 0;
    // let intervalID;

    if(amount) {

        let intervalID = setInterval(() => {
            cb();
            count++;

            if(count === amount) {
                clearInterval(intervalID);
                console.log('interval stopped');
            }
        }, delay)
    }
    else {
        return setInterval(cb, delay);
    }
}

dynamicIntervalCount(function() {
  console.log('hi, repeat 3');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times

const timeoutObject = dynamicIntervalCount(function() {
  console.log('hi, keep going');
}, 500); // prints 'hi' at 500ms intervals indefinitely

console.log(timeoutObject); // Timeout { ... }



// first solution -- working \/

// function dynamicIntervalCount(cb, delay, amount) {
//     let count = 0;

//     // If amount not passed, return the Timeout object for the interval.
//     if (amount === undefined) {
//         return setInterval(cb, delay);
//     }

//     let timeoutID = setInterval(() => {
//       console.log(amount)

//     cb();
//     count++;
//     // If an amount argument is passed, the interval should be
//     // cleared after the callback has been called 'amount' # of times.
//         if(count === amount) {
//             clearInterval(timeoutID);
//             console.log('///////////////////')
//             console.log(timeoutID);
//         }

//   }, delay);
// }

// dynamicIntervalCount(function() {
//   console.log('hi, repeat 3');
// }, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times

// const timeoutObject = dynamicIntervalCount(function() {
//   console.log('hi, keep going');
// }, 500); // prints 'hi' at 500ms intervals indefinitely

// console.log(timeoutObject); // Timeout { ... }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}
