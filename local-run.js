var main = require('./index');
var downloader = require('./downloadPage');

var event = { };
var context = { };

/*main.handler(event, context, function(err, result){
    if (err) {
        console.log(err);
        return;
    } 
    console.log(result);
});*/

downloader.downloadUrl('https://api.kissfm.ro/api/kisstop40', function(err,result) {
    if (err) {
        console.err(err);
        return;
    } 
    console.log(result);
});