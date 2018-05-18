var http = require("http");
var count = 0;
http.createServer(function (request, response) {
    var url = request.url;
    var arr = url.split("/");
    console.log("url:"+url);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(count+'\n');
    if( arr[1] == "" ){
        count++;
    }
}).listen(8889);


// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8889/');