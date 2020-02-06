var LaunchXBOX = () => window.open("https://www.xbox.com/");	
var OpenXBOXPage = (page) =>
{
if(page == "Main") window.open("https://www.xbox.com");
if(page == "Games") window.open("https://www.xbox.com/games");
if(page == "Feedback") window.open("https://aka.ms/xboxideas");
if(page == "Support") window.open("https://support.xbox.com/");
if(page == "News") window.open("https://news.xbox.com/");
if(page == "Developers") window.open("https://www.xbox.com/developers");
if(page == "XBOX Game Pass") window.open("https://www.xbox.com/xbox-game-pass");
if(page == "Profile") window.open("https://account.xbox.com/Profile");
if(page == "Settings") window.open("https://account.xbox.com/Settings/");
if(page == "Trending") window.open("https://account.xbox.com/trendingtopics");
if(page == "Home") window.open("https://account.xbox.com/social");
if(page == "Friends") window.open("https://account.xbox.com/Friends");
if(page == "Messages") window.open("https://account.xbox.com/SkypeMessages");
if(page == "My Games") window.open("https://account.xbox.com/MyGames");
if(page == "Clubs") window.open("https://account.xbox.com/clubs");
if(page == "Community") window.open("https://www.xbox.com/community");
if(page == "XBOX Live") window.open("https://www.xbox.com/live");
}
var OpenXBOXGamePage = (game_name) => window.open("https://www.xbox.com/games/" + game_name.toString());	
var SignOutFromXBOX = () => window.open("https://account.xbox.com/Account/Signout");	
