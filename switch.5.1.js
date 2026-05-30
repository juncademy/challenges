let angka1 = 15;
let angka2 = 4;
let operator = "%";
let hasil;

switch (operator) {
    case "+":
        hasil = angka1 + angka2
        break;
    case "-":
        hasil = angka1 - angka2
        break;
    case "*":
        hasil = angka1 * angka2
        break;
    case "/":
        hasil = angka1 / angka2
        break;
    case "%":
        hasil = angka1 % angka2
        break;
    default:
        "Operator tidak valid!"
        break;
}
console.log(`${angka1} ${operator} ${angka2} = ${hasil}`)