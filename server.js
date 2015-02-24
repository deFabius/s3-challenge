var express = require('express')
var app = express();
var cool = require('cool-ascii-faces');
var pg = require('pg');
var mode = process.env.MODE || 'dev';

app.get('/srv/', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM activity', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
});

app.get('/srv/id/:id', function (request, response) {
  console.log(request.params.id);
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    
    client.query('SELECT * FROM activity WHERE activity_id=' + request.params.id, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
});

app.get('/srv/max/:par', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    
    client.query('SELECT * FROM activity ORDER BY max_' + request.params.par + ' DESC LIMIT 1', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
});

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
  var folder = __dirname + (function() {
        if(/dist/i.test(mode)) return '/dist/';
        else return '/app/';
      }());
  response.sendFile(folder + 'index.html');
});

app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + __dirname + req.params[0]);

       var folder = __dirname + (function() {
        if(/dist/i.test(mode)) return '/dist/';
      if (/.*bower.components.*/i.test(req.params[0]) ) return '/';
      if (/.*styles.*/i.test(req.params[0])) return '/.tmp/';
      return '/app/';
     }());
     res.sendFile( folder + req.params[0]); 
 });

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port') + ' in ' + mode + ' mode');
})
