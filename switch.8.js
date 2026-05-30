let statusCode = 404;
let explanation;

switch (statusCode) {
    case 200:
        explanation = "OK"
        break;
    case 403:
        explanation = "Forbidden"
        break;
    case 404:
        explanation = "Not Found"
        break;
    case 500:
        explanation = "Internal Server Error"
        break;
    default:
        explanation = "Unknown Status"
        break;
}
console.log(`Status ${statusCode}: ${explanation}`)