//Created By Rabia Alhaffar In 19/March/2020
var K_Save = (variable,value) => kongregate.stats.submit(variable,value);
var K_ResizeGame = (width,height) => kongregate.services.resizeGame(width,height);
var K_MessagePrivately = (msg) => kongregate.services.privateMessage(msg);
var K_ClearAllMessages = () => kongregate.chat.clearMessages();
var K_Message = (msg,user) => kongregate.chat.displayMessage(msg,user);
var K_Username = () => kongregate.services.getUsername();
var K_UserID = () => kongregate.services.getUserId();
var K_Guest = () => kongregate.services.isGuest();
var K_MessageBox = (msg) =>  kongregate.services.showShoutBox(msg);
var K_ShowMessageTab = (title,description,tab_size) => kongregate.chat.showTab(title,description, { size: tab_size });
var K_CloseMessageTab = () => kongregate.chat.closeTab();
var K_Register = () => kongregate.services.showRegistrationBox();
var K_SubmitAvatar = (img64baseavatar) => kongregate.images.submitAvatar(img64baseavatar);