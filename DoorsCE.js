var DoorsCE = new Bot("DoorsCE", "~");

function initializeBots() {
  DoorsCE.register();
}
DoorsCE.executeCommand = function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;

  if (message.substring(0, 4) == "ping") {
    DoorsCE.respond(poster + ": Pong!");
  }
  if (message.substring(0, 5) == "hello") {
    DoorsCE.respond(poster + ": Hello to you too!");
  }
  if (message.substring(0, 8) == "sad") {
    DoorsCE.respond(poster + ": Awww.");
  }
  if (message.substring(0, 10) == "jcgterinfo") {
    DoorsCE.respond(poster + ": DoorsCE is a bot made by jcgter777 on 1/20/2018 for the great UniChat!");
  }
  if (message.substring(0, 8) == "karma me") {
    DoorsCE.respond(poster + ": No, that is illegal.");
  }
  if (message.substring(0, 8) == "botssuck") {
    DoorsCE.respond("That is RUDE, mean, and wrong.");
  }
  if (message.substring(0, 7) == "unichat") {
    DoorsCE.respond("UniChat is awesome!");
  }
  if (message.substring(0, 8) == "botabuse") {
    DoorsCE.respond("Stop abusing the bots.");
  }
  if (message.substring(0, 7) == "ninja'd") {
    DoorsCE.respond("Someone typed faster to express the same sentiment.");
  }
  if (message.substring(0, 8) == "capslock") {
    DoorsCE.respond("Pro tip: The [caps lock] key to the left of [a] allows you to type lowercase letters.");
  }
  if (message.substring(0, 4) == "caps") {
    DoorsCE.respond("Pro tip: The [caps lock] key to the left of [a] allows you to type lowercase letters.");
  }
   if (message.substring(0, 4) == "kiwf") {
    DoorsCE.respond("Kill it with FIRE 🔥!!!");
 }

