//Module: Cookies
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username
var Cookie = (cname, cvalue, exdays) => 
{
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

var GetCookie = (cname) => 
{
  var name = `${cname}=`,ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
};

var CheckCookie = (cname) => 
{
  var cookie = GetCookie(cname);
  if (cookie == "")
  {
    cookie = prompt("Please Enter Something:", "");
    if (user != "" && user != null) Cookie(cname, cookie, 365);
  }
}; 