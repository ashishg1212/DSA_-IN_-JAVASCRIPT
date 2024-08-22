//  Fabonacci Number
//  Fabonacci series => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// F[0] = 0, F[1] = a
// F[N] = = F[N-1] + F[N-2]

var fib = function(n) {
    const arr = [0,1];
    for(let i=2; i<=n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
}
const res = fib(7);
console.log(res);


// ---------------- Recursion ----------------
var fibonacci = function(n) {
    if(n <= 1) return n;
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(8));

