let angka1 = 15;
let angka2 = 4;
let operator = "%";
let hasil;

switch (operator) {
    case "+":
        hasil = angka1 + angka2
        console.log(`${angka1} ${operator} ${angka2} = ${hasil}`)
        break;
    case "-":
        hasil = angka1 - angka2
        console.log(`${angka1} ${operator} ${angka2} = ${hasil}`)
        break;
    case "*":
        hasil = angka1 * angka2
        console.log(`${angka1} ${operator} ${angka2} = ${hasil}`)
        break;
    case "/":
        hasil = angka1 / angka2
        console.log(`${angka1} ${operator} ${angka2} = ${hasil}`)
        break;
    case "%":
        hasil = angka1 % angka2
        console.log(`${angka1} ${operator} ${angka2} = ${hasil}`)
        break;
    default:
        console.log("Operasi hitung tidak valid!")
        break;
}