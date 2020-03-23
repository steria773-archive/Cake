//Created By Rabia Alhaffar In 15/March/2020
CreateCanvas(WindowWidth,550,"black");
Initialize(0);
var components_arrays = [];
var components_colors = ["red","orange","yellow","lightgreen","green","cyan","dodgerblue","blue","pink","darkorchid","purple" ];
for(var sq = 0;sq < 12;sq++) components_arrays.push(new Square(-50,sq * 50,50,components_colors[sq]));
var Animation = new Level(() =>
{
for(var components_num = 0;components_num < components_arrays.length;components_num++) 
{
    components_arrays[components_num].x += 20;
    components_arrays[components_num].Update();
}
},60);
Animation.Start();