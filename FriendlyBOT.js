FriendlyBOT.executeCommand =  function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
 
   if (message.substring(0,1) == "/") {
  	FriendlyBOT.respond("/me waves back at " + poster);
  }
}
