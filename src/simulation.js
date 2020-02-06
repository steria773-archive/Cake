//Created By Rabia Alhaffar In 25/January/2020
//To Simulate Mobile Touch On Desktop And Desktop Mouse And It's Pointer On Mobile!!!
var SimulateMobile = () =>
{
document.onclick = document.onclick || document.onmousedown || document.ontouchstart;
document.ontouchmove = document.ontouchmove || document.onpointermove || document.onmousemove;
document.ontouchcancel = document.ontouchcancel || document.ontouchend || document.onmouseleave || document.onpointerleave || document.onpointerout;
document.ontouchstart = document.ontouchstart || document.onmouseenter || document.onpointerenter || document.onmouseover || document.onpointerover;
};
var SimulateDesktop = () =>
{
document.onclick = document.onclick || document.onmousedown || document.ontouchstart;
document.onmousemove = document.onmousemove || document.ontouchmove || document.onpointermove;
document.onmouseleave = document.onmouseleave || document.ontouchend || document.ontouchcancel || document.onpointerleave || document.onpointerout;
document.onmouseenter = document.onmouseenter || document.ontouchstart || document.onpointerenter || document.onmouseover || document.onpointerover;
};