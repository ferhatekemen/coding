function countdown(myArray, n) {
    if (n <= 0) {
        return;
    }

    myArray.push(n);
    countdown(myArray, n-1);
}

let myArray = [];

countdown(myArray, 10);

document.write("result:", myArray);
alert("fer");