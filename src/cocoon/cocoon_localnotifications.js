//Created By Rabia Alhaffar In 13/December/2019
var LocalNotify = Cocoon.Notification.Local;
function InitializeLocalNotifications()
{
LocalNotify.initialize({});	
}
function Local_Subscripe(channel)
{
LocalNotify.subscript(channel);	
}
function LocalNotification(msg,bdgnum,date)
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
LocalNotify.send(this.notification);	
};
}