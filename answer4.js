const http = require('http');

var server = http.createServer(function (req,res) {

    res.end("Success");


})

server.listen(3000,()=>{
    console.log("Server create Successful");
});


