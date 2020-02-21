//Created By Rabia Alhaffar In 24/November/2019
//A Library For Utilities
var u = undefined,RandomAlpha = Math.random();
//Basic Colors In Hex:
var HEXCOLOR =
{
RED:0xFF0000,
ORANGE:0xFF3300,
YELLOW:0xFFD900,
HONEY:0xAA4F08,
GREEN:0x35CC5A,
BLUE:0x3500FA,
PINK:0xC34288,
PURPLE:0x650A5A,
WHITE:0xFFFFFF,
BLACK:0x000000,
GREY:0x424949,
SILVER:0xB3B6B7,
CYAN:0x1ABC9C
};
var RED = "red";
var ORANGE = "orange";
var YELLOW = "yellow";
var GREEN = "green";
var BLUE = "blue";
var PINK = "pink";
var PURPLE = "purple";
var WHITE = "white";
var BLACK = "black";
var GREY = "grey";
var SILVER = "silver";
var CYAN = "cyan";
//Gamepad(USB,PS4,PS3,XBOX) Keys:
var XBKey =
{
A:0,
B:1,
X:2,
Y:3,
LB:4,
RB:5,
LT:6,
RT:7,
Back:8,
Start:9,
LeftAnalogStick:10,
RightAnalogStick:11,
Up:12,
Down:13,
Left:14,
Right:15
};
var PSKey =
{
X:0,
O:1,
Square:2,
Triangle:3,
L1:4,
R1:5,
L2:6,
R2:7,
Select:8,
Start:9,
LeftAnalogStick:10,
RightAnalogStick:11,
Up:12,
Down:13,
Left:14,
Right:15
};
//TV Keys
var TVKey =
{
Up:38,
Down:40,
Left:37,
Right:39,
ChannelUp:516,
ChannelDown:517,
F0:588,
F1:589,
F2:590,
F3:591,
Enter:13,
Aspect:642,
Info:615,
Return:8,
Option:623,
Zero:48,
One:49,
Two:50,
Three:51,
Four:52,
Five:53,
Six:54,
Seven:55,
Eight:56,
Nine:57,
LastView:651,
Play:250,
Pause:19,
Stop:178,
Record:603,
SkipToNext:176,
SkipToPrevious:177,
Next:228,
Previous:227
};
var Swap = (a,b) => { var disposed = a; a = b; b = disposed; };