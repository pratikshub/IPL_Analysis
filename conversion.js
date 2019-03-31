function conversionCSvtoJSON(filename){
let csvToJson = require('convert-csv-to-json');
let obj=csvToJson.fieldDelimiter(',') .getJsonFromCsv(filename)
return obj;
}

module.exports = conversionCSvtoJSON;