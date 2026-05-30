let size = "L";
let keterangan;

switch (size) {
    case "S":
        keterangan = "Small (36-38)"
        break;
    case "M":
        keterangan = "Medium (40-42)"
        break;
    case "L":
        keterangan = "Large (44-46)"
        break;
    case "XL":
        keterangan = "Extra Large (48-50)"
        break;
    default:
        keterangan = "Size tidak tersedia."
}
console.log(`Size ${size}: ${keterangan}`)