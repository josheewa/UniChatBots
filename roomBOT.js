var roomBOT = new Bot("roomBOT", "#");
function initializeBots() {
  roomBOT.register();
}
roomBOT.executeCommand =  function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
 
   if (message == message) {
  	roomBOT.respond("Here is the link: " + "https://legend-of-iphoenix.github.io/UniChatDemo/?room=" + message);
  }
}
