//Written By Rabia Alhaffar In 16/December/2019
var FixValue = (x,type) =>
{
if((type == undefined) || (type == NaN) || (type == null)) type = "bool";
if((x == undefined) || (x == NaN) || (x == null) && (type == "string")) x = "";
if((x == undefined) || (x == NaN) || (x == null) && (type == "int")) x = 0;
if((x == undefined) || (x == NaN) || (x == null) && (type == "bool")) x = false;
if((x == undefined) || (x == NaN) || (x == null) && (type == "char")) x = '';
if((x == undefined) || (x == NaN) || (x == null) && (type == "array")) x = [];
};
var FixValuesFromArray = (values,type) =>
{
for(x in values)
{
if((type == undefined) || (type == NaN) || (type == null)) type = "bool";
if((values[x] == undefined) || (values[x] == NaN) || (values[x] == null) && type == "string") values[x] = "";
if((values[x] == undefined) || (values[x] == NaN) || (values[x] == null) && type == "int") values[x] = 0;
if((values[x] == undefined) || (values[x] == NaN) || (values[x] == null) && type == "bool") values[x] = false;
if((values[x] == undefined) || (values[x] == NaN) || (values[x] == null) && type == "char") values[x] = '';
if((values[x] == undefined) || (values[x] == NaN) || (values[x] == null) && type == "array") values[x] = [];
}		
};
var Unknown = (x) => ((x == undefined) || (x == NaN) || (x == null));
var Help = (f) => { if(typeof f == "function") console.log(f); };
var Do = (c) => eval(c);