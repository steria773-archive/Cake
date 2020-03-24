//Created By Rabia Alhaffar In 20/April/2019
//Rewritten By Rabia Alhaffar In 15/March/2020
var Y8_CloseSDKMenus = () => ID.closeMenu();
var Y8_ShowProfile = () => ID.OpenProfile();
var Y8_SDKMenusVisible = () => ID.isVisible();
var Y8_OpenAD = (after_ad_finished) => 
{
	ID.gameBreak(() => {
		window.setTimeout(after_ad_finished,0);
	});
};
var Y8_Register = () => ID.register();
var Y8_Login = () => ID.login();
var Y8_ShowAchievements = () => ID.GameAPI.Achievements.list({ embedded: false });
var Y8_UnlockAchievement = (title,key) =>
{
	ID.GameAPI.Achievements.save({
		achievement: title,
		achievementKey: key,
		overwrite: false,
		allowduplicates: false
	});
};
var Y8_ShowLeaderboards = (table_name) => 
{
	ID.GameAPI.Leaderboards.list({
		table: table_name,
		mode: "alltime",
		highest: true,
		useMilli: false,
		embedded: false
	});
};
var Y8_SaveScore = (score,player_name,table_name) =>
{
	ID.GameAPI.Leaderboards.save({
		table: table_name,
		points: score,
		allowduplicates: false,
		highest: true,
		playername: player_name
	});
};
var Y8_Share = (name,description,caption,picture,link) => 
{
	ID.ui({
		method: "feed",
		link: link,
		description: description,
		name: name,
		caption: caption,
		picture: picture
	  });
};
var Y8_DomainBlacklisted = () => ID.Protection.isBlacklisted();
var Y8_DomainSponsored = () => ID.Protection.isSponsor();
var Y8_SaveData = (data,datakey) =>
{
	ID.api('user_data/submit','POST', 
	{
		key: datakey,
		value: JSON.stringify(data)
	});
};
var Y8_RetrieveData = (datakey) => ID.api('user_data/retrieve','POST',{ key: datakey });
var Y8_RemoveData = (datakey) => ID.api('user_data/remove','POST',{ key: datakey });
var Y8_Initialize = (app_id) => ID.init({ appId: app_id,status: true });
var Y8_GetPlayerLoginStatus = () => ID.getLoginStatus();
var Y8_RequestFriend = (friend_id,uri) =>
{
	ID.ui({
		method: "friends",
		redirect_uri: uri,
		id: friend_id
	});
};
var Y8_SubmitImage = (base64_imagestring) => ID.submit_image(base64_imagestring);
var Y8_GetRoomsList = (lobby_or_game,room_id) => ID.Multiplayer.roomList(lobby_or_game, room_id,{},"00000000000000");
var Y8_CreateRoom = (lobby_or_game,room_id,is_open,is_visible,max_players) => 
{
	ID.Multiplayer.roomCreate(lobby_or_game,room_id,{}," ",{
		isOpen: is_open,
		isVisible: is_visible,
		maxPlayers: max_players
	});
}
var Y8_JoinRoom = (room_id) => ID.Multiplayer.roomJoin(room_id);
var Y8_LeaveRoom = () => ID.Multiplayer.roomLeave(" ");
var Y8_MessagePlayers = (msg) => ID.Multiplayer.broadcastAll(msg);
var Y8_MessagePlayer = (player_id,msg) => ID.Multiplayer.sendTo(player_id,msg);
var Y8_SetDebuggerLevel = (level) => ID.multiplayer.debuglevel = level;
var Y8_AutoJoinGame = () => ID.Matchmaking.autoJoinGame();
var Y8_LoadSDK = () =>
{
	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src =  document.location.protocol == 'https:' ? "https://cdn.y8.com/api/sdk.js" : "http://cdn.y8.com/api/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'id-jssdk'));
};