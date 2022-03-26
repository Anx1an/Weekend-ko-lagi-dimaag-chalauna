function numba() {
    let d = 0;
    let b;
    while (d === 0) {
        let u = prompt("Number of inputs");
        let x = parseInt(u);
        if (Number.isInteger(x) != true){
            console.log("One or more input is invalid", u);
        }
        else {
            d = 1
            b = x
        }
logic(b);
}
}
    function logic(x) {
        const a = [];
        for (let i = 0; i < x; i++){
            let v = prompt("Input");
            let y = parseInt(v)
            if (Number.isInteger(y) === true){
                a.push(y);
            }
            } 
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            sum += (a[i]);
            }
console.log("sum", sum);
}
numba();