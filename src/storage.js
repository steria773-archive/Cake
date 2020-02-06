//Cake Saving Game Data,Variables,Content To Local Storage API Using JSON
var Save = (variable_name,value) => localStorage.setItem(variable_name, JSON.stringify(value));
var Load = (variable_name) => JSON.parse(localStorage.getItem(variable_name));
var Modify = (variable_name,value) => localStorage[variable_name] = value;
var ClearData = () => localStorage.clear();