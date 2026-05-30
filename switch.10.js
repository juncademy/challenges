let bahasa = "EN";
switch (bahasa) {
    case "ID":
    case "id":
        console.log("Language: Indonesia")
        console.log("Selamat datang! Ada yang bisa saya bantu hari?")
        break;
    case "EN":
    case "en":
        console.log("Language: English")
        console.log("Welcome! can we help you today?")
        break;
    case "JP":
    case "jp":
        console.log("Language: Japan")
        console.log("ようこそ！本日はどのようなご用件でしょうか？")
        break;
    case "KR":
    case "kr":
        console.log("Language: Korean")
        console.log("어서 오세요! 오늘 무엇을 도와드릴까요?")
        break;
    default:
        console.log("Language not supported.")
        break;
}