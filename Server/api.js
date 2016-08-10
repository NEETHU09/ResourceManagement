xlsxjson = require("xls-to-json");
//For Command Line Arguments
var files = process.argv;
var inputFile = files[2] || "Skill_Gap.xls";
var outputFile = files[3] || "output.json";
console.log(files);
xlsxjson ({
  input : inputFile,
  output : outputFile
}, function(err, result) {
  if(err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
