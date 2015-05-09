var http = require('http');
var rf = require("fs");
var server = new http.Server();

server.on('request', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(getPacText());
});

var pac = "";
function getPacText() {
    if (pac == "") {
        pac = rf.readFileSync("20150509.pac", "utf-8");
        console.log(pac);
    }
    return pac;
}
server.listen(10000);


