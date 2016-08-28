var frisby = require("frisby");
//test web site api is normal
frisby.create('Get access weatherapi')
.get('https://assignment-panglee18.c9users.io/api')
.expectStatus(200)
.expectHeaderContains('content-type', 'application/json')// test return is json
.expectBodyContains('temp') //test the data have temp
.toss();
//test api with city hong kong
frisby.create('Get access weatherapi with city hong kong')
.get('https://assignment-panglee18.c9users.io/api?search=hong kong')
.expectStatus(200)
.expectHeaderContains('content-type', 'application/json')//Test Web Server witout city
.expectBodyContains('temp')//test the data have temp
.toss();
//test api with city USA
frisby.create('Get access weatherapi with city USA')
.get('https://assignment-panglee18.c9users.io/api?search=USA')
.expectStatus(200)
.expectHeaderContains('content-type', 'application/json')//Test Web Server witout city
.expectBodyContains('temp')//test the data have temp
.toss();