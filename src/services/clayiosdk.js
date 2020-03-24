//Created By Rabia Alhaffar In 19/March/2020
//For clay.io
var CLAY_Initialize = (game_id) => Clay('init', { gameId: game_id });
var CLAY_ShareWithText = (share_text) => Clay('client.share.any', { text: share_text });
var CLAY_VERSION = () => Clay('version');
var CLAY_ShowAd = () => Clay('ui.ads.page');
var CLAY_ShowBanner = (banner_position) => Clay('ui.ads.banner', { position: banner_position });
/*
banner_position Can Be:
"top"
"bottom"
*/