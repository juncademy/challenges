let berat = 70
let tinggi = 1.75;
let bmi = berat / tinggi** 2;
let kategori;

if (bmi < 18.5) {
    kategori = "Underweight";
} else if (bmi < 25) {
    kategori = "Normal";
} else if (bmi < 30) {
    kategori = "Overweight";
} else {
   kategori = "Obese";
}

console.log(`BMI: ${bmi.toFixed(2)}`);
console.log(`Kategori: ${kategori}`)