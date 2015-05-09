var http = require('http');
var rf = require("fs");
var server = new http.Server();
var port=process.argv[2]==null?"10000":process.argv.splice(2);
server.on('request', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(getPacText());
});
var pac = "";
function getPacText() {
    if (pac == "") {
        pac = rf.readFileSync("20150509pac", "utf-8");
        console.log("pac file loaded.");
    }
    return pac;
}
if(!isNaN(parseInt(port,10))){
    server.listen(10000);
    console.log("Server is online.")
}else{
    console.log("Server start fail.")

}


