function checkPrime(n) {
    if (n<2)
        return false;
    for ( let i = 2 ; i < n/2 ; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function displayPrimes(numbers) {
    let count = 0;
    let N = 1;
    document.write("Các số nguyên tố là:  ");
    while (count < numbers) {

        if (checkPrime(N)) {
            document.write(N + "  ");
            count++;
        }
        N++;
    }

}
function main() {
    let number;
   do {
        alert("Hãy nhập số nguyên dương");
       number = parseInt(prompt("Nhập số nguyên tố cần in  "))
    }  while (number<1|| isNaN(number)==true);
        displayPrimes(number);

}