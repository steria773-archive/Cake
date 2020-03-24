var Exception = (name,code,description) => { throw "\nEXCEPTION CODE: " + code + "\nEXCEPTION NAME: " + name.toString() + "\nEXCEPTION DESCRIPTION: " + description.toString(); };
var Info = (title,info) => console.info(title.toString() + ":\n" + info.toString());
var Trace = () => console.trace();
var Warn = (name,description) => console.warn(name.toString() + ": " + description.toString());
var Error = (name,code,description) => console.error("\nERROR CODE: " + code + "\nERROR NAME: " + name.toString() + "\nERROR DESCRIPTION: " + description.toString());	
var StartConsoleTimer = () => console.timer();
var EndConsoleTimer = () => console.timeEnd();