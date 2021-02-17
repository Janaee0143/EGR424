var http = require('http');
var fs = require('fs');


//req = request & res = response
var server =http.createServer(function(req,res){
    fs.readFile('db.json', 'utf-8', function(err, data){
        if(err) throw (err);
        res.write(data);

        //always close the response
        res.end();
    })
})

server.listen(9870);
