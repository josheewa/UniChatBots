var UniChat = new Bot("UniChat", "\");
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
//I need to know how to toggle for specific users, if they choose to do so. 
 if (message.startsWith("hide my status"))
    UniChat.respond("in the process of hiding " + poster + "'s status.");
                    setTimeout('', 900);
  
  //This is where I need to add the hide status code, or above the timeout
  UniChat.respond(poster + ": Done!");
//I just need to know how to make a blacklist. var blacklist = {}?
