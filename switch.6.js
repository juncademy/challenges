let warna = "merah";
let keterangan;

switch (warna) {
    case "merah":
        keterangan = "berhenti"
        break;
    case "kuning":
        keterangan = "hati-hati"
        break;
    case "hijau":
        keterangan = "jalan"
        break;
    default:
        keterangan = "Lampu rusak"
}

console.log(`Lampu ${warna}: ${keterangan}`)