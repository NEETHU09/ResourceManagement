var should = require("chai").should(),
supertest = require("supertest");
var app = require("../app");
var url = supertest("http://localhost:9090/employee");

//............................Testing userAll................................
describe("Testing the userAll : ", function(err) {
  it("Should handle and send the json data", function(done) {
    url
      .get("/all")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        should.not.exist(err);
        var myObj = JSON.parse(res.text);
        console.log(myObj);
        var msg = "DATABASE CONTAINS USERS";
        console.log(msg);
        done();
      });
  });
});

//............................Testing singleUser................................
describe("Testing the singleUser : ", function(err) {
  it("Should handle and send the json data", function(done) {
    url
      .get("/342245")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        should.not.exist(err);
        var myObj = JSON.parse(res.text);
        //console.log(myObj);
        var status = res.text;
        if(status === "null")
        {
          var msg = "user not exist";
          console.log(msg);
        }
        else {
          var msg1 = "user exist";
          console.log(msg1);
        }
        done();
      });
  });
});
