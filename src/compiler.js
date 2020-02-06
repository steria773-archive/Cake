//Written By Rabia Alhaffar In 16/December/2019
var FixValue = (x,type) =>
{
if((type == undefined) || (type == NaN)) type = "bool";
if((x == undefined) || (x == isNaN) && (type == "string")) x = "";
if((x == undefined) || (x == NaN) && (type == "int")) x = 0;
if((x == undefined) || (x == NaN) && (type == "bool")) x = false;
if((x == undefined) || (x == NaN) && (type == "char")) x = '';
if((x == undefined) || (x == NaN) && (type == "array")) x = [];
};
var FixValuesFromArray = (values,type) =>
{
for(x in values)
{
if((type == undefined) || (type == NaN)) type = "bool";
if((values[x++] == undefined) || (values[x++] == NaN) && type == "string") values[x++] = "";
if((values[x++] == undefined) || (values[x++] == NaN) && type == "int") values[x++] = 0;
if((values[x++] == undefined) || (values[x++] == NaN) && type == "bool") values[x++] = false;
if((values[x++] == undefined) || (values[x++] == NaN) && type == "char") values[x++] = '';
if((values[x++] == undefined) || (values[x++] == NaN) && type == "array") values[x++] = [];
}		
};
var Unknown = (x) => ((x == undefined) || (x == NaN));
var Help = (f) => { if(typeof f == "function") console.log(f); };