let grade = "B";
let keterangan;

switch (grade) {
    case "A":
        keterangan = "Sangat Baik"
        break;
    case "B":
        keterangan = "Baik"
        break;
    case "C":
        keterangan = "Cukup"
        break;
    case "D":
        keterangan = "Kurang"
        break;
    case "E":
        keterangan = "Sangat Kurang"
        break;
    default:
        keterangan = "Grade tidak valid."
}
console.log(`Grade ${grade}: ${keterangan}`)