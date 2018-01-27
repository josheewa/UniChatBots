var UniChat = new Bot("UniChat", "o");
function initializeBots() {
  UniChat.register();
}
UniChat.executeCommand =  function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
UniChat.userJoined = function(data) { 
  	UniChat.respond(user + " entered the room.");
  }
}
UniChat.userLeft = function(data) {
    UniChat.respond(user + " left the room."
   }
}
