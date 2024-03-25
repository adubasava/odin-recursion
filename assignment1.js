// Function fibs takes a number and returns an array containing that many numbers from the Fibonacci sequence
// Function uses iteration

function fibs(number) {
    let arr = [];
    let num1 = 0; let num2 = 1;

    if (number < 0) return arr;

    arr.push(num1);
    if (number === 0) return arr;

    arr.push(num2);
    if (number === 1) return arr;

    let sum;

    for (let i = 2; i < number; i++) {
        sum = num1 + num2;
        arr.push(sum);
        num1 = num2;        
        num2 = sum;
    }

    return arr;
}

// Another function fibsRec solves the same problem recursively

function fibsRec(number) {

    if (number < 0) return [];

    if (number === 1) return [0];

    if (number === 2) return [0, 1];

    return fibsRec(number-1).concat(fibsRec(number-1)[fibsRec(number-1).length - 1]+fibsRec(number-1)[fibsRec(number-1).length - 2]);
}


//console.log(fibs(8));
//console.log(fibsRec(8));