var Match = Cocoon.Multiplayer.Match;
var Multiplayer = Cocoon.Multiplayer;
var StartMatch = () => Match.start();	
var Disconnect = () => Match.disconnect();	
var PlayerExpectedCount = () => Match.getExpectedPlayerCount();	
var GetLocalPlayerID = () => Match.getLocalPlayerID();	
var GetPlayerID = () => Match.getPlayerID();	
var GetAllPlayersID = () => Match.getPlayerIDs();	
var SendData = (data_message) => Match.sendDataToAllPlayers(data_message,RELIABLE);