var jcgterBOT = new Bot("jcgterBOT", "~");

function initializeBots() {
  jcgterBOT.register();
}
jcgterBOT.executeCommand = function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;

  if (message.substring(0, 4) == "ping") {
    jcgterBOT.respond(poster + ": Pong!");
  }

  if (message.substring(0, 5) == "hello") {
    jcgterBOT.respond(poster + ": Hello to you too!");
  }
  if (message.substring(0, 8) == "i am sad") {
    jcgterBOT.respond(poster + ": Awww.");
  }
  if (message.substring(0, 10) == "jcgterinfo") {
    jcgterBOT.respond(poster + ": jcgterBOT is a bot made by jcgter777 on 1/20/2018 for the great UniChat!");
  }
  if (message.substring(0, 7) == "karmame") {
    jcgterBOT.respond(poster + ": No, that is illegal.");
  }
  if (message.substring(0, 8) == "botssuck") {
    jcgterBOT.respond("That is RUDE, mean, and wrong.");
  }
  if (message.substring(0, 6) == "tanner") {
    jcgterBOT.respond("Stop abusing the bot.");
  }
  if (message.substring(0, 7) == "unichat") {
    jcgterBOT.respond("UniChat++ is awesome!");
  }
  if (message.substring(0, 8) == "botabuse") {
    jcgterBOT.respond("Stop abusing the bots.");
  }
  if (message.substring(0, 7) == "ninja'd") {
    jcgterBOT.respond("Someone typed faster to express the same sentiment.");
  }
  if (message.substring(0, 8) == "capslock") {
    jcgterBOT.respond("Pro tip: The [caps lock] key to the left ot [a] allows you to type lowercase letters.");
  }
  if (message.substring(0, 4) == "caps") {
    jcgterBOT.respond("Pro tip: The [caps lock] key to the left ot [a] allows you to type lowercase letters.");
  }
   if (message.substring(0, 4) == "kiwf") {
    jcgterBOT.respond("Kill it with FIRE 🔥!!!");
 }
  
  
 
  if (message.substring(0, 5) == "karme") {
    if (poster == "jcgter777") {
      jcgterBOT.respond("Here you go: jctger777++!");
    } else {
      if (poster == "_iPhoenix_") {
        jcgterBOT.respond("Here you go: _iPheonix_++!");
      } else {
        if (poster == "LAX18") {
          jcgterBOT.respond("Here you go: LAX16++!");
        } else {
          jcgterBOT.respond(poster: +" Here: " + poster + "--" + (Math.random() < 0.3) ? " Because you suck, no offense. :P" : "");
        }
      }
    }
