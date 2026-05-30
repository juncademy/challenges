let bulan = 2;
let namaBulan;
let jumlahHari;

switch (bulan) {
    case 1:
        namaBulan = "Januari"
        break;
    case 2:
        namaBulan = "Februari"
        break;
    case 3:
        namaBulan = "Maret"
        break;
    case 4:
        namaBulan = "April"
        break;
    case 5:
        namaBulan = "Mei"
        break;
    case 6:
        namaBulan = "Juni"
        break;
    case 7:
        namaBulan = "Juli"
        break;
    case 8:
        namaBulan = "Agustus"
        break;
    case 9:
        namaBulan = "September"
        break;
    case 10:
        namaBulan = "Oktober"
        break;
    case 11:
        namaBulan = "November"
        break;
    case 12:
        namaBulan = "Desember"
        break;
    default:
        namaBulan = "Nama bulan tidak valid!"
        break;
}

switch (bulan) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        jumlahHari = 31
        break;
    case 2:
        jumlahHari = 28
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        jumlahHari = 30
        break;
    default:
        jumlahHari = null

}

console.log(`Bulan ke-${bulan} (${namaBulan}) memiliki ${jumlahHari} hari`)