//Created By Rabia Alhaffar In 19/March/2020
var MC_Initialize = (mcgame_id,lang_code) =>
{
    MC.init({
        app_id: mcgame_id,
        language_code: lang_code,  // optional, defaults to 'en'
        modules: ['Leaderboard'],
        leaderboard: {}
    });
};
var MC_Login = () => MC.login();
var MC_Logout = () => MC.logout();
var MC_LoginStatus = () =>
{
    MC.getLoginStatus(function(r){
        if (r.status == MC.LOGIN_STATUS.CONNECTED) console.info("USER CONNECTED!!!");
        else console.log("USER IS NOT CONNECTED!!!");
    });
};
var MC_ShowLeaderboard = (game_level) => MC.Leaderboard.show(game_level);
var MC_ShowAllLeaderboards = () => MC.Leaderboard.showAll();
var MC_Save = (game_level,game_score) => MC.Leaderboard.saveScore({ level: game_level,score: game_score });
var MC_UserHighScore = (game_level) => MC.Leaderboard.getUserHighscore(game_level);