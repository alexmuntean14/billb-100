exports.handler = (event, context, callback) => {
    var billboard = require("billboard-top-100").getChart;
    var moment = require('moment');
    var date = new moment('1970-01-03').format('YYYY-MM-DD');
    var now = new moment(Date.now()).format('YYYY-MM-DD');
    var saturdays = [];
    saturdays.push(date);

    while(date < now){
    date = moment(date).add(1,'week').format('YYYY-MM-DD');
        saturdays.push(date);
    }

    var completeCount = 0;
    billboard('hot-100', saturdays[completeCount],  function(songs, err){
        complete(err, songs);
       });
    

    function complete(err, songs){
        if (err) console.error(err);
        //add the date for each song
        songs.forEach(function(song) { song.weekDate= saturdays[completeCount]});
        //processing
        console.log(songs);
        completeCount += 1;
        if (completeCount == saturdays.length){
            allComplete();
        } else { 
        billboard('hot-100', saturdays[completeCount],  function(songs, err){
            complete(err, songs);
       });
    }
}
    //AWS Lambda callback
    function allComplete() {
        callback(null, "done");
    }
    
}