var frisby = require("frisby");

frisby.create('Get access weatherapi')
.get('https://assignment-panglee18.c9users.io/api')
.expectStatus(200)
.expectHeaderContains('content-type', 'application/json')
.expectBodyContains('temp')
.toss();

frisby.create('Get access weatherapi with city hong kong')
.get('https://assignment-panglee18.c9users.io/api?search=hong kong')
.expectStatus(200)
.expectHeaderContains('content-type', 'application/json')
.expectBodyContains('temp')
.toss();

frisby.create('Get access weatherapi with city USA')
.get('https://assignment-panglee18.c9users.io/api?search=USA')
.expectStatus(200)
.expectHeaderContains('content-type', 'application/json')
.expectBodyContains('temp')
.toss();