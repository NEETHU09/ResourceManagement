var fs = require("fs");
var d;
var inFile = "out.json";
var res = [];
var obj = {};
fs.readFile(inFile, function (err, data) {
    if (err) throw err;
    data = data.toString();
    d = JSON.parse(data);
    var obj1 = {},  obj2 = {}, obj3 = {};
    var count1 = 0, count2 = 0, count3 = 0;
    for (var i = 0, len = d.length; i < len; i++) {
          if(d[i]["Agile Trainings Complete? (Y/N)"] == "Y"){
            count1++;
          }
           if(d[i]["Digital Academy Complete? (Y/N/NA)"] == "Y" ){
            count2++;
          }
           if(d[i]["BFSI Training Courses Complete? (Y/N)"] == "Y"){
            count3++;
          }
        }
        obj1['Skills'] = 'Agile';
        obj1['Employees'] = count1;
        res.push(obj1);

        obj2['Skills'] = 'MERN';
        obj2['Employees'] = count2;
        res.push(obj2);

        obj3['Skills'] = 'BFSI';
        obj3['Employees'] = count3;
        res.push(obj3);

        console.log(res);

     fs.writeFile("D3Graph.json", JSON.stringify(res), function (err) {
         if (err) throw err;
    })

});
