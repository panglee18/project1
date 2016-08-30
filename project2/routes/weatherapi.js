
/*
 * GET users listing.
 */
var dateFormat = require('dateformat');
var request = require('request');
var sync = require('sync-request'); 
var mongoose = require("mongoose");
mongoose.connect('mongodb://tony:tonylee18@ds031531.mlab.com:31531/assignment', function(err){
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var searchSchema = new mongoose.Schema({
    search: String,
    content: Object,
    updated_at: String,
});

var Do = mongoose.model('searches', searchSchema);




var callback = function(err, data){
    if(err) return console.error(err);
    else console.logh(data);
}

exports.weatherapi = function(req, res){
    var today = new Date();
    if (req.query.search == null){
        req.query.search = 'hong kong';
    }
    Do.find({search:req.query.search.toUpperCase(), updated_at: dateFormat(today, 'yyyy-mm-dd HH')}, function(err, datas){
     
    if(datas == ''){
        var url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&cnt=5&APPID=9319e5a8b29640d19a64160c19a0fa92&q=';
        var res2 = sync('GET', url+req.query.search.toUpperCase());
        var data = JSON.parse(res2.getBody().toString('utf8'));

        Do.create({
               search: req.query.search.toUpperCase(),
               content: data,
               updated_at: dateFormat(today, 'yyyy-mm-dd HH')
            }, function(err,todo){
                if(err) {
                    res.render('result', {result : err});
                }else{
                    Do.find({search:req.query.search.toUpperCase()}, function(err, datas){
                    res.header('Content-type','application/json');
                    res.header('Charset','utf8');
                    res.jsonp(datas);
                    //console.log(data);
                    });
            }
        }); 
    }else{
        if(datas.length >0){
            Do.find({search:req.query.search.toUpperCase()}, function(err, datas){
                res.header('Content-type','application/json');
                res.header('Charset','utf8');
                res.jsonp(datas);
            });
            console.log(req.query.search.toUpperCase());
        }else{
            res.render('result', {result : 'Error : array = 0'});
        }
    }
  });
};