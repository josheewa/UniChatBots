var roomBOT = new Bot("roomBOT", "/");
function initializeBots() {
  roomBOT.register();
}
roomBOT.executeCommand =  function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
  var room = message.match(/pm roomBot #(\w{2,64})/);
  if (room !== null) {
    roomBOT.respond("/pm "+poster+" Here is the link: " + "https://legend-of-iphoenix.github.io/UniChatDemo/?room=" + room);
  }
}
