//Created By Rabia Alhaffar In 26/December/2019
//A Functions For cake.wsh.js Or AKA cake.wsc.js
//To Work With MSExcel
var ExcelApplication = new ActiveXObject("Excel.Application");  
var ExcelSheets = new ActiveXObject("Excel.Sheet");
function SetVisibility(visibility)
{
ExcelSheets.Application.Visible = visibility; 	
}
function ExitExcel()
{
ExcelSheets.Application.Quit();	
}
function AddToSheet(text,col,row)
{
ExcelSheets.ActiveSheet.Cells(col,row).Value = str;
}
function SaveSheetAs(loc)
{
ExcelSheets.SaveAs(loc);
}