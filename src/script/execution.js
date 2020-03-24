//Created By Rabia Alhaffar On 15/November/2019
//An Library To Debug,Run Scripts In-Game
var scripts_added = 0;
var Execute = (code,l,time) =>
{
    if(Unknown(l)) l = 0;
    if(Unknown(time)) time = 0;
    if(l == 0) setTimeout(code,0);
    if(l == 1) setTimeout(code,time);
    if(l == 2) setInterval(code,0);
    if(l == 3) setInterval(code,time);
};

var Import = (script_source) =>
{
  var script = document.createElement('script'); 
  script.src = script_source; 
  script.type = 'text/javascript'; 
  script.defer = true; 
  document.getElementsByTagName('head')[scripts_added].appendChild(script); 
  scripts_added++;
};