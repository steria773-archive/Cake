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
A:"button_1",
B:"button_2",
X:"button_3",
Y:"button_4",
LB:"shoulder_top_left",
RB:"shoulder_top_right",
LT:"shoulder_bottom_left",
RT:"shoulder_bottom_right",
Back:"select",
Start:"start",
LeftAnalogStick:"stick_button_left",
RightAnalogStick:"stick_button_right",
Up:"d_pad_up",
Down:"d_pad_down",
Left:"d_pad_left",
Right:"d_pad_right",
XBOX_Button:"vendor"
};
var PSKey =
{
X:"button_1",
O:"button_2",
Square:"button_3",
Triangle:"button_4",
L1:"shoulder_top_left",
R1:"shoulder_top_right",
L2:"shoulder_bottom_left",
R2:"shoulder_bottom_right",
Select:"select",
Start:"start",
LeftAnalogStick:"stick_button_left",
RightAnalogStick:"stick_button_right",
Up:"d_pad_up",
Down:"d_pad_down",
Left:"d_pad_left",
Right:"d_pad_right",
Playstation_Button:"vendor"	
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