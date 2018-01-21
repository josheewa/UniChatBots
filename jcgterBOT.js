var jcgterBOT = new Bot("jcgterBOT", "#");
function initializeBots() {
  jcgterBOT.register();
}
jcgterBOT.executeCommand =  function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
 
  jcgterBOT.respond();
}
