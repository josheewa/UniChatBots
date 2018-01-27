roomBOT.executeCommand =  function(data) {
  var poster = data.poster;
  var message = data.rawMessage;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
  if (message.match(/roomBot: #?(\w{2,64})/)) {
  	roomBOT.respond(poster+": Here is the link: https://legend-of-iphoenix.github.io/UniChatDemo/?room=" + message.match(/roomBot: #?(\w{2,64})/)[1]);
  }
  if (message.toLowerCase().match(/\/pm roombot #?(\w{2,64})/) !== null) {
    roomBOT.respond("/pm "+poster+" Here is the link: " + "https://legend-of-iphoenix.github.io/UniChatDemo/?room=" + message.match(/#?(\w{2,64})/)[1]);
  } else {
  	if (message.toLowerCase.match(/\/pm roombot/)) {
  		roomBOT.respond("/pm "+poster+" That is not a valid room :/");
  	}
  }
}
