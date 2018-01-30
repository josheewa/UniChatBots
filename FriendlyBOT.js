var FriendlyBOT = new Bot("FriendlyBOT", "o");
function initializeBots() {
  FriendlyBOT.register();
}
FriendlyBOT.executeCommand =  function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;

  function getArgs(m) {
    return m.split(' ')
    
   if (message.substring(0,1) == "/") {
  	FriendlyBOT.respond("/me waves back at " + poster);
  }
   if (message.substring(0,1) == "/") {
  	FriendlyBot.respond(getArgs(rawMessage)[1] + ": How are you today, sir?");
  }
}
