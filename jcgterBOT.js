var jcgterBOT = new Bot("jcgterBOT", "~");

function initializeBots() {
  jcgterBOT.register();
}
jcgterBOT.executeCommand = function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;

  if (message.startsWith("ping"))
    jcgterBOT.respond(poster + ": Pong!");
  
  if (message.startsWith("hello"))
    jcgterBOT.respond(poster + ": Hello to you too!");
  
  if (message.startsWith("i am sad"))
    jcgterBOT.respond(poster + ": Awww.");

  if (message.startsWith("jcgterinfo"))
    jcgterBOT.respond(poster + ": jcgterBOT is a bot made by jcgter777 on 1/20/2018 for the great UniChat!");

  if (message.startsWith("karma me"))
    jcgterBOT.respond(poster + ": No, that is illegal.");

  if (message.startsWith("botssuck"))
    jcgterBOT.respond("That is RUDE, mean, and wrong.");

  if (message.startsWith("tanner"))
    jcgterBOT.respond("Stop abusing the bot.");

  if (message.startsWith("unichat"))
    jcgterBOT.respond("UniChat++ is awesome!");

  if (message.startsWith("botabuse"))
    jcgterBOT.respond("Stop abusing the bots.");

  if (message.startsWith("ninja'd"))
    jcgterBOT.respond("Someone typed faster to express the same sentiment.");

  if (message.startsWith("capslock") || message.startsWith("caps"))
    jcgterBOT.respond("Pro tip: The [caps lock] key to the left ot [a] allows you to type lowercase letters.");

   if (message.startsWith("kiwf"))
    jcgterBOT.respond("Kill it with FIRE 🔥!!!");

  
  
  
  
  
  
  //Keep this at the end
  if (message.startsWith("incrementme")) {
    if (poster == "jcgter777") {
      jcgterBOT.respond("Here you go: jcgter777+" + String.fromCharCode(6158) + "+!");
    } else {
      if (poster == "_iPhoenix_") {
        jcgterBOT.respond("Here you go: _iPhoenix_+" + String.fromCharCode(6158) + "+!");
      } else {
        if (poster == "LAX18") {
          jcgterBOT.respond("Here you go: LAX18+" + String.fromCharCode(6158) + "+!");
        } else {
          jcgterBOT.respond(poster: +" Here: " + poster + "--" + (Math.random() < 0.3) ? " Because you suck, no offense. :P" : "");
        }
      }
    }
  }
}
