var http = require('http');
var fs = require('fs');


// req = request res = response
var server = http.createServer(function(req, res){
    //send request to get URL

    if(req.url === '/webdev') {
        //first route --> display html
        res.write('<h1> Welcome CBU Web Dev </h1>')
    }

    if(req.url === '/') {
        //landing page
        res.write('<h1> This is SE </h1>')
    }

    //close the connection
    res.end();
})

server.listen(3000);