var roomBOT = new Bot("roomBOT", "#");
function initializeBots() {
  roomBOT.register();
}
roomBOT.executeCommand =  function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
 
   if message
     roomBOT.respond("https://legend-of-iphoenix.github.io/UniChatDemo/" + message); 
}
