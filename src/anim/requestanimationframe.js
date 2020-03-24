//Created By Rabia Alhaffar In 8/February/2020
//Not By Me,All Rights To Paul Irish
//I Just Improved His Code
//https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.update = () =>
{
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame     ||
            window.oRequestAnimationFrame      ||
            function( callback,fps ) 
            {
                window.setTimeout(callback, 1000 / fps);
            };
};