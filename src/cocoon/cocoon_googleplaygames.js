//Written By Rabia Alhaffar In 12/December/2019
var GooglePlayGamesSocialService;
var GooglePlayGamesMultiplayerService;
var InitializeGooglePlayGames = () =>
{
Cocoon.Social.GooglePlayGames.init({});	
GooglePlayGamesSocialService = Cocoon.Social.GooglePlayGames.getSocialInterface();
GooglePlayGamesMultiplayerService = Cocoon.Social.GooglePlayGames.getMultiplayerInterface();
};
var GooglePlayGames_LogIn = () => GooglePlayGamesSocialService.login();	
var GooglePlayGames_LogOut = () => GooglePlayGamesSocialService.logout();	
var GooglePlayGames_SubmitAchievement = (id) => GooglePlayGamesSocialService.submitAchievement(id);	
var GooglePlayGames_ShowAchievements = () =>
{
GooglePlayGamesSocialService.loadAchievements();
GooglePlayGamesSocialService.loadAchievementDescriptions();
GooglePlayGamesSocialService.showAchievements();		
};
var GooglePlayGames_SubmitScore = (score) => GooglePlayGamesSocialService.submitScore(score);		
var GooglePlayGames_ShowLeaderboard = () => GooglePlayGamesSocialService.showLeaderboard();		
var GooglePlayGames_SubmitEvent = (id,value) => GooglePlayGamesSocialService.submitEvent(id,value);	
var GooglePlayGames_ShowSavedGames = () => GooglePlayGamesSocialService.showSavedGames();	
var GooglePlayGamesSocialService_LoadSavedGame = (id) => GooglePlayGamesSocialService.loadSavedGame(id);
var GooglePlayGames_SaveGame = (save_id,save_title,save_description) =>
{
GooglePlayGamesSocialService.writeSavedGame({
	Identifier: save_id,
	Title: save_title,
	Description: save_description
	});
};