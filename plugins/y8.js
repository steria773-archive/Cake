//Created By Rabia Alhaffar In 20/April/2019
//An Easier Functions To Connect Cake Game Framework With Y8 SDK!!!
//All Rights Comes To Them!!!
// "https://cdn.y8.com/api/sdk.js" Script Source
//Also,Link JQuery "https://code.jquery.com/jquery-3.3.1.min.js"
var Y8_OpenProfile = () => ID.openProfile();
var Y8_DetectSDKMenus = () => ID.isVisible();
var Y8_CloseSDKMenus = () => ID.closeMenu();
function Y8_GetLoginStatus()
{
var fnCallback = function(response){
    console.log(response);
}
ID.getLoginStatus(fnCallback, force);
}

function Y8_RegisterAccount()
{
	var fnCallback = function(response) {
    console.log(response);
}
ID.register(fnCallback);
}

function Y8_LogInAccount()
{
	var fnCallback = function(response){
    console.log(response);
}
    ID.login(fnCallback);
}
var Y8_SendMultiplayerMessage = (message) => ID.Multiplayer.broadcastAll(message);
function Y8_LoadSDK()
{
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src =  document.location.protocol == 'https:' ? "https://cdn.y8.com/api/sdk.js" : "http://cdn.y8.com/api/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'id-jssdk'));
}

//This Function Is In BETA,Do Not Try It!!!
function SetY8Buttons()
{
	 $('#sdk-login').click(function() {
      ID.login(loginCallback);
    });
    $('#sdk-register').click(function() {
      ID.register(loginCallback);
    });
}

function Y8_CreateRoom(type,name,passthrough,availbility,visibility,max_p)
{
	ID.Multiplayer.roomCreate(type, name, null, passthrough,{
		isOpen:availbility,
		isVisible:visibility,
		maxPlayers:max_p
		});
}

function Y8_UpdateRoom(passthrough,availbility,visibility)
{
	D.Multiplayer.roomUpdate(null, passthrough,{
		isOpen:availbility,
		isVisible:visibility
		});
}

var Y8_SetDebugging = (debugging_level) => ID.Multiplayer.debugLevel = debugging_level;
var Y8_AutoJoinGame = () => ID.Matchmaking.autoJoinGame();
var Y8_Message = (player_to_send,message) => ID.Multiplayer.sendTo(player_to_send, message);
var Y8_MessageOthers = (message) => ID.Multiplayer.broadcast(message);
var Y8_ExitGameRoom = (passthrough) => ID.Multiplayer.roomLeave(passthrough);

function Y8_ShowHighscoreMenu(table_name,table_mode,heighest_sort)
{
	ID.GameAPI.Leaderboards.list({
		table:table_name,
		mode:table_mode,
		highest:highest_sort,
		useMilli:false,
		embedded:false
	});
}

function Y8_ShowAchievement(achievement_name,achievement_code)
{
	ID.GameAPI.Achievements.save(
	{
	achievement:achievement_name,
    achievementkey:achievement_code,
    overwrite:false,
	allowduplicates:false
	},
	function()
	{
		console.log("Got Achievement!!!");
	});
}

function Y8_SaveScore(table_name,score,highest_sort,player_name)
{
	ID.GameAPI.Leaderboards.save({
	table:table_name,
	points:score,
	allowduplicates:false,
	highest:highest_sort,
	playername:player_name
	},
	function()
	{
		console.log("NEW HIGHSCORE!!!");
	});
}
