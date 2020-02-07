//Created By Rabia Alhaffar In 29/November/2019
//An Library For Importing Some Functions From Blackberry WebWorks SDK
var BB =
{
	Developer:blackberry.app.author,
	DeveloperEmail:blackberry.app.authorEmail,
	DeveloperURL:blackberry.app.authorURL,
	Copyright:blackberry.app.copyright,
	Description:blackberry.app.description,
	ID:blackberry.app.id,
	License:blackberry.app.license,
	LicenseURL:blackberry.app.licenseURL,
	Name:blackberry.app.name,
	Version:blackberry.app.version,
	ScreenOrientation:blackberry.app.orientation,
	State:blackberry.app.windowState,
	Exit:function() { blackberry.app.exit(); },
	Minimize:function() { blackberry.app.minimize(); },
	Unlock:function() { blackberry.app.unlock(); },
	LockOrientation:function(screen_orientation) { blackberry.app.lock(screen_orientation); },
	Rotate:function(screen_orientation) { blackberry.app.rotate(screen_orientation); },
	Register:function(info) { blackberry.app.register(info); },
	GetCurrentTimezone:function() { blackberry.system.getCurrentTimezone(); },
	GetTimezones:function() { blackberry.system.getTimezones();	},
	GetFont:function() { blackberry.system.getFontInfo(); },
	SetWallpaper:function(image_filepath) { blackberry.system.setWallpaper(image_filepath);	},
	GetUserIdentityVersion:function() { blackberry.user.identity.getVersion(); }
};
