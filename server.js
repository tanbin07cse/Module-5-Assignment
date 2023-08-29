const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req,res) {

    if(req.url=='/'){

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("This is Home Page")
        res.end();
    }
    else if(req.url=='/about'){

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("This is About Page")
        res.end();
    }
    else if(req.url=='/contact'){

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("This is Contact Page")
        res.end();
    }
    else if(req.url=='/file-write'){

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

server.listen(3000,()=>{
    console.log("Server create Successful");
});


