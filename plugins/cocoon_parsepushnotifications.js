//Created By Rabia Alhaffar In 13/December/2019
var ParseNotify = Cocoon.Notification.Parse;
function InitializeParseNotifications()
{
ParseNotify.initialize({});	
}
function Parse_Subscripe(channel)
{
ParseNotify.subscript(channel);	
}
function ParseNotification(msg,bdgnum,date)
{
this.message = msg;	
this.badgeNumber = bdgnum;
this.time = date;
this.notification = 
{
message:this.message,
soundEnabled:true,
badgeNumber:this.badgeNumber,
userData: {"key1" : "value1", "key2": "value2", "index": index},
contentBody: "",
contentTitle: "",
date: this.time
};
this.Send = function()
{
ParseNotify.send(this.notification);	
};
}