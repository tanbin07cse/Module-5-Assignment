const http = require('http');
const url = require('url');

var server = http.createServer(function (req,res) {

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("End Successfully")
        res.end();

})

server.listen(3000,()=>{
    console.log("Server create Successful");
});


