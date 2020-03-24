//Created By Rabia Alhaffar In 13/December/2019
var AdvertisingService;
var InitializeAdvertising = (service) =>
{
if(service == "Cocoon") AdvertisingService = Cocoon.Ad;
if(service == "MoPub") AdvertisingService = Cocoon.Ad.MoPub;
if(service == "AdMob") AdvertisingService = Cocoon.Ad.AdMob;
if(service == "Heyzap") AdvertisingService = Cocoon.Ad.Heyzap;
};
var ConfigureBanner = (ad_banner,ad_interstitial) => Cocoon.Ads.configure({ banner:ad_banner,interstitial:ad_interstitial });
function Banner()
{
this.Banner = AdvertisingService.createBanner();
this.Load = function() { this.Banner.load(); };	
this.Show = function() { this.Banner.show(); };
this.Hide = function() { this.Banner.hide(); };
this.Release = function() { AdvertisingService.releaseBanner(this.Banner); };
}
function Interstitial()
{
this.Interstitial = AdvertisingService.createInterstitial();
this.Load = function() { this.Interstitial.load(); };
this.Show = function() { this.Interstitial.show(); };
this.Release = function() { AdvertisingService.releaseInterstitial(this.Interstitial); };
}
function RewardedVideo()
{
this.Video = AdvertisingService.createRewardedVideo();
this.Load = function() { this.Video.load();	};
}