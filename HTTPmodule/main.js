const http=require("http");
var server=http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("HTTP Module First Program");
}).listen(6060,console.log("Server Started Now"))