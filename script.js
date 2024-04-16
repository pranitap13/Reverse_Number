function reverseDigits() {
    var number = document.getElementById("numberInput").value;
    var reversedNumber = reverseNumber(number);
    document.getElementById("output").innerHTML = "Number with digits reversed: " + reversedNumber;
}

function reverseNumber(number) {
    var reversedNumber = 0;
    while (number > 0) {
        var digit = number % 10;
        reversedNumber = (reversedNumber * 10) + digit;
        number = Math.floor(number / 10);
    }
    return reversedNumber;
}