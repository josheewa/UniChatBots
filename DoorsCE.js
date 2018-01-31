var DoorsCE = new Bot("DoorsCE", "!");

function initializeBots() {
  DoorsCE.register();
}

DoorsCE.executeCommand = function(data) {
  var poster = data.poster;
  var message = data.message;
  var rawMessage = data.rawMessage;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
 
  function getArgs(m) {
    return m.split(' ');
  }
  if (message.startsWith("hello"))
    DoorsCE.respond(poster + ": Hello to you too!");
  
  if (message.startsWith("i am sad"))
    DoorsCE.respond(poster + ": Awww.");

  if (message.startsWith("jcgterinfo"))
    DoorsCE.respond(poster + ": DoorsCE is a bot made by jcgter777 on 1/20/2018 for the great UniChat!");

  if (message.startsWith("botssuck"))
    DoorsCE.respond("That is RUDE, mean, and wrong.");

  if (message.startsWith("tanner"))
    DoorsCE.respond("Stop abusing the bot.");

  if (message.startsWith("unichat"))
    DoorsCE.respond("UniChat++ is awesome!");

  if (message.startsWith("botabuse"))
    DoorsCE.respond("Stop abusing the bots.");

  if (message.startsWith("ninja'd"))
    DoorsCE.respond("Someone typed faster to express the same sentiment.");

  if (message.startsWith("capslock") || message.startsWith("caps"))
    DoorsCE.respond("Pro tip: The [caps lock] key to the left ot [a] allows you to type lowercase letters.");

  if (message.startsWith("kiwf"))
    DoorsCE.respond("Kill it with FIRE 🔥!!!");
  
  if (message.startsWith("getrekt"))
    DoorsCE.respond("Someone got chucked in a house in the middle of demolition?");
  
  if (message.startsWith("roasted"))
    DoorsCE.respond("Someone's up for sale at the BBQ place?");
  
  if (message.startsWith("omg"))
    DoorsCE.respond("Oh my gosh! WHat happened?");
  
  if (message.startsWith("dce"))
    DoorsCE.respond("DoorsCE's been delayed because of all you noobs asking for it!!!!!!");
  
  if (message.startsWith("jcgter777"))
    DoorsCE.respond("jcgter777: " + poster + " says hi!");
  
  if (message.startsWith("cookie"))
    DoorsCE.respond("Someone wanted you to have this cookie.");
    
  if (message.startsWith("give"))
    DoorsCE.respond(getArgs(rawMessage)[1] + ": " + "Someone wanted you to have this " + getArgs(rawMessage)[2]);
    
    
  
 //keep this at the end so nothing will go wrong
  if (message.startsWith("karme")) {
    if (poster == "jcgter777") {
      DoorsCE.respond("Here you go: jctger777++! You're awesome!");
    } else if (poster == "_iPhoenix_") {
      DoorsCE.respond("Here you go: _iPheonix_++! You're awesome!");
    } else if (poster == "LAX18") {
      DoorsCE.respond("Here you go: LAX16++! You're awesome!");
    } else {
      DoorsCE.respond("Here: " + poster + "+-" + " Because you suck, no offense. :P");
    }
  }
}


