const http = require('http');
const url = require('url');

var server = http.createServer(function (req,res) {

    if(req.url=='/'){

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("This is Home Page")
        res.end();
    }
    else{
        res.end("Not Found")
    }


})

server.listen(3000,()=>{
    console.log("Server create Successful");
});


