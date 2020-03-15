//Created By Rabia Alhaffar In 15/March/2020
CreateCanvas(WindowWidth,550,"black");
Initialize(0);
var components_arrays = [
    new Square(-50,0,50,"red"),
    new Square(-50,50,50,"orange"),
    new Square(-50,100,50,"yellow"),
    new Square(-50,150,50,"lightgreen"),
    new Square(-50,200,50,"green"),
    new Square(-50,250,50,"aqua"),
    new Square(-50,300,50,"dodgerblue"),
    new Square(-50,350,50,"blue"),
    new Square(-50,400,50,"pink"),
    new Square(-50,450,50,"violet"),
    new Square(-50,500,50,"purple")
];
var Animation = new Level(() =>
{
for(var components_num = 0;components_num < components_arrays.length;components_num++) 
{
    components_arrays[components_num].x += 30;
    components_arrays[components_num].Update();
}
},60);
Animation.Start();