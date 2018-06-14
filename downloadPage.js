var request = require('request');

exports.downloadUrl = function(baseUrl) {
request(baseUrl, function(err, response,html){
  if(err){
      console.log(err);
      return;
  }
  var regex = /piesa":"([^"]+)","artist":"([^"]+)/gi;
  var matches;
  while((matches = regex.exec(html))!= null){
     console.log(matches[1]+" - "+matches[2]);
  }
});
}