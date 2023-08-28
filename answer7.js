const http = require('http');
//const url = require('url')
const fs = require('fs');

var server = http.createServer(function (req,res) {

    if(req.url=='/file-write'){

        fs.writeFile('demo.txt','hello world',function (error){

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Not Successful");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Successful");
                res.end();
            }



        })

    }

})

server.listen(5100,()=>{
    console.log("Server create Successful");
});


