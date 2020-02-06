//Created By Rabia Alhaffar In November Of 2019
//A Library Of CSS Filters For Your Game In Canvas!!!
var SetFilters = (filters) => cakecanvas.style.filter = filters;
var AddFilters = (filters) => cakecanvas.style.filter += filters;
var SetBlur = (pixels) => cakecanvas.style.filter += ` blur(${pixels}px) `;
var SetBrightness = (percentage) => cakecanvas.style.filter += ` brightness(${percentage}%) `;
var SetContrast = (percentage) => cakecanvas.style.filter += ` contrast(${percentage}%) `;
var SetGrayscale = (percentage) => akecanvas.style.filter += ` grayscale(${percentage}%) `;
var SetInvert = (percentage) => cakecanvas.style.filter += ` invert(${percentage}%) `;
var SetOpacity = (percentage) => cakecanvas.style.filter += ` opacity${percentage}%) `;
var SetSaturation = (percentage) => cakecanvas.style.filter += ` saturate(${percentage}%) `;
var SetSepia = (percentage) => cakecanvas.style.filter += ` sepia(${percentage}%) `;
var SetHueRotation = (degrees) => cakecanvas.style.filter += ` hue-rotate(${degrees}deg) `;
var RemoveFilters = () => cakecanvas.style.filter = "none";
function Filter(name,px,per,deg)
{
	this.name = name;
	this.degrees = deg;
	this.pixels = px;
	this.percentage = per;
	this.filtervalue = 0;
	this.Add = function()
	{
	if(this.name != "blur" && this.name != "hue-rotate") this.filtervalue = `${this.percentage}%`;
    if(this.name == "blur") this.filtervalue = `${this.pixels}px`;
	if(this.name == "hue-rotate") this.filtervalue = `${this.degrees}deg`;
	cakecanvas.style.filter += ` ${this.name}(${this.filtervalue}) `;
	};
}