var request = require('request');

exports.downloadUrl = function(baseUrl) {
request(baseUrl, function(err, response,html){
  if(err){
      console.log(err);
      return;
  }
  console.log(html);
});
}