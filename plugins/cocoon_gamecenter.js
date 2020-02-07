//Written By Rabia Alhaffar In 12/December/2019
var GameCenterSocialService;
var MultiplayerService;
var InitializeGameCenter = () =>
{
Cocoon.Social.GameCenter.init({});
GameCenterSocialService = Cocoon.Social.GameCenter.getSocialInterface();
GameCenterMultiplayerService = Cocoon.Social.GameCenter.getMultiplayerInterface();	
};
var GameCenter_LogIn = () => GameCenterSocialService.login();	
var GameCenter_LogOut = () => GameCenterSocialService.logout();	
var GameCenter_SubmitAchievement = (id) => GameCenterSocialService.submitAchievement(id);	
var GameCenter_ShowAchievements = () =>
{
GameCenterSocialService.loadAchievements();
GameCenterSocialService.loadAchievementDescriptions();
GameCenterSocialService.showAchievements();	
};
var GameCenter_ResetAchievements = () => GameCenterSocialService.resetAchievements();	
var GameCenter_SubmitScore = (score) => GameCenterSocialService.submitScore(score);	
var GameCenter_ShowLeaderboard = () => GameCenterSocialService.showLeaderboard();	

//Loads All Contents (Players,Friends,Scores,Achievements)
var GameCenter_LoadContents = () =>
{
GameCenterSocialService.loadAchievements();
GameCenterSocialService.loadAchievementDescriptions();
GameCenterSocialService.loadFriends();
GameCenterSocialService.loadPlayers();
GameCenterSocialService.loadScores();	
};