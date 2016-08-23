var request = require("request");

var base_url = "https://assignment-panglee18.c9users.io/api?search="

describe("Test Web Server witout city", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  
   it("Test Server return not null", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).not.toBeNull();
        done();
      });
    });
  });
});

describe("Test Web Server with city hong kong", function() {
  describe("GET /", function() {
      var data_url = base_url + 'hong kong';
    it("returns status code 200", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  
   it("Test Server return hong kong data not null", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(body).not.toBeNull();
        done();
      });
    });
  });
});

describe("Test Web Server with city usa", function() {
  describe("GET /", function() {
      var data_url = base_url + 'usa';
    it("returns status code 200", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  
   it("Test Server return usa data not null", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(body).not.toBeNull();
        done();
      });
    });
  });
});