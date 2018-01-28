var BanBot = new Bot("BanBot", "/");

function initializeBots() {
  BanBot.register();
}

BanBot.executeCommand = function (data) {
  var poster = data.poster;
  var message = data.message;
  var rawMessage = data.rawMessage;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
  //you have to actually DECLARE the function before you use it.
  function getArgs(m) {
    return m.split(' ')
  }
  //If the command was right here, it would do nothing
  if (message.substring(0, 3) == "ban") {
    BanBot.respond(getArgs(rawMessage)[1] + " has been banned for 1 eternity.");
  }
}
