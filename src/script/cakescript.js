//Forked By Rabia Alhaffar In 21/December/2019
/*
Cakescript Is An Fork Of Egg Programming Language But Have More Functions Like:
- Cake Game Framework Functions
- Javascript Functions
- Similar To Python
- Improved And Fast
*/
//Example:
/*
cakescript("do(define(total, 0)," ,
           "   define(count, 1)," ,
           "   while(<(count, 11)," ,
           "         do(define(total, +(total, count))," ,
           "             define(count, +(count, 1))))," ,
           "   writeln(total))" );
*/
// everything in the language would be an expression even ">" which are operators in js
// Each expression in egg would be an object.
// thus would contain a type property, which would describe the type of the porgram (i.e. the kind of expression it contains)
// type: "value" means strings (any value quoted in "") or number value that they represent
// type: "word" means name properteis which holds the identifiers name (variables)
// type: "apply" represent applications , the if else block, define , functions ect are applications
// also they would contain an operator and args property.
// operator: {type: "word", value: ">"} // refers to the expression being applied., which in this case is >
// args: [{type: "word", value: "a"},{type: "value", value: 5}] // refers to the array of argument expressions. // means a = 5,
// a is word(variable) and 5 is value (number)
// egg would contain any amount of white space in between
// The Parsing of the Expressions.............................................................
// skip the white space from the program
function skipspace(string) {
  let skippable = string.match(/^(\s|#.*)*/);
  return string.slice(skippable[0].length);
}
// takes a string and returns the object containing the data str of the expression , along with the expression left out.
// for subexpression the function wold be called again to make the data str of the subexpression.
var parseExpression = (program) => {
    // eliminate the white space
    program = skipspace(program);
    var match, expr;
    // match the program if it is a value, word or apply
    if (match = /^"([^"]*)"/.exec(program)){
      expr = {type: "value", value: match[1]}
    } else if (match = /^\d+\b/.exec(program)) {
      expr = {type: "value", value: Number(match[0])}
    } else if (match = /^[^\s(),"]+/.exec(program)) {
      expr = {type: "word", name: match[0]}
    } else {
      throw new SyntaxError("Unexpected Syntax: " + program)
    }
    // return the program and call other function to check whether the program is an application or not
    return parseApply(expr, program.slice(match[0].length))
}
var parseApply = (expr, program) => {
    // eliminate the white whtespace
    program = skipspace(program);

    // check whether the program is an application i.e. start with "("
    if (program[0] != "("){
      return {expr: expr, rest: program}
    }
    // eliminate the white space from within the application
    program = skipspace(program.slice(1));
    expr = {type: "apply",  operator: expr, args: []};
    // check the end of the program.
    while (program[0] != ")") {
      var arg = parseExpression(program);
      expr.args.push(arg.expr);
      program = skipspace(arg.rest);
      if (program[0] == ',') {
        program = skipspace(program.slice(1));
      } else if (program[0] != ")") {
        throw  new SyntaxError("Expected ',' or ')' ");
      }
    }
    return parseApply(expr, program.slice(1))
}
 // the actual parsing begins
var parse = (program) => {
  var result = parseExpression(program);
  if (skipspace(result.rest).length > 0) {
    throw new SyntaxError("Unexpected Text after program")
  }
  return result.expr;
}
// The Evaluation of the Program..............................................................
// the evaluator
var evaluate = (expr, env) => {
  switch(expr.type){
    // a literal value expression simply produces its value. eg. expression 10 or a just evaluates the number 10 or string a
    case "value":
      return expr.value
    // for a variable/word we must check whether it is defined in the environment , and if it is , just fecth the value.
    case "word":
      if (expr.name in env) {
        return env[expr.name];
      } else {
        console.log(expr)
        throw new ReferenceError("Undefined variable: " + expr.name )
      }
    // apply are a little complex.
    case "apply":
      // check whether the expr are a specialForm like "if" or "while", and if it is
      // dont evaluate anything , just pass the argument expressions along with the environment to the function that handles this specialForms.
      if (expr.operator.type == "word" && expr.operator.name in specialForms) {
        return specialForms[expr.operator.name](expr.args, env);
      }
      // if the expression is a normal call , we evaluate the operator ,verify that it is a function and call it with
      // result of evaluating the arguments.
      var op = evaluate(expr.operator, env);
      if (typeof op != "function"){
        throw new TypeError("Applying a non-function")
      }
      return op.apply(null, expr.args.map((arg) => {
        return evaluate(arg, env)
      }))
  }
}
// Declaring the special forms......
// A new object with null protoype is created because we dont want our EGG language to inherit the prototype of the JAVASCRIPT's [object Object]
// (the global one.)
var specialForms = Object.create(null);
specialForms["if"] = (args, env) => {
  // check whether the length of args is 3 or not, since our if expression takes 3 arguments.
  if (args.length != 3) {
    throw new SyntaxError("Bad number of arguments passed to IF");
  }
  // check the condiditon and return the result based on that.
  // more like a javascript's ternary operator. Evaluate the condition and if true, evaluate the expression before :
  // if false , evaluate the expression after :
  if (evaluate(args[0], env) !== false){
    return evaluate(args[1], env)
  } else {
    return evaluate(args[2], env)
  }
}
specialForms['while'] = (args, env) => {
  if (args.length != 2){
    throw new SyntaxError("Bad number of arguments passed to WHILE");
  }
  while(evaluate(args[0], env) !== false){
    evaluate(args[1], env)
  }
  // since undefined or null does not exist in our EGG language,
  // we return false.
  return false;
}
// do just evaluates everythingin it from top to bottom.
// its value is the value produced by the last argument
specialForms['do'] = (args, env) => {
  var value = false;
  args.forEach((arg) => {
    value = evaluate(arg, env);
  });
  return value;
}
specialForms['define'] = (args, env) => {
  if (args.length != 2 || args[0].type != 'word' ){
    throw new SyntaxError("Bad use of define")
  }
  var value = evaluate(args[1], env);
  env[args[0].name] = value;
  return value
}
specialForms.set = (args, env) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Bad use of set");
  }
  let varName = args[0].name;
  let value = evaluate(args[1], env);
  for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
    if (Object.prototype.hasOwnProperty.call(scope, varName)) {
      scope[varName] = value;
      return value;
    }
  }
  throw new ReferenceError(`Setting undefined variable ${varName}`);
};
// Creating the Environment.....(Global)
var topEnv = Object.create(null);
topEnv['true'] = true;
topEnv['false'] = false;
["+", "-", "*", "/", "==", "<", ">"].forEach((op) => {
  topEnv[op] = new Function("a,b", "return a" + op + "b;")
})
//Functions Of Cakescript
topEnv['print'] = (value) => console.log(value);
topEnv['write'] = (value) => document.write(value);
topEnv['writeln'] = (value) => document.writeln(value);
topEnv['initialize'] = () => Initialize();	
topEnv['togglefullscreen'] = () => ToggleFullscreen();	
topEnv['exitfullscreen'] = () => ExitFullscreen();	
topEnv['execute'] = (js_code,time,loop) => Execute(js_code,time,l);
topEnv['opera'] = () => Opera;	
topEnv['ie'] = () => IE;	
topEnv['firefox'] = () => Firefox;	
topEnv['safari'] = () => Safari;	
topEnv['chrome'] = () => Chrome;	
topEnv['openurl'] = (url) => OpenURL(url);  
topEnv['backhistory'] = () => BackHistory();  
topEnv['nexthistory'] = () => NextHistory();  
topEnv['restartgame'] = () => RestartGame();
topEnv['closegame'] = () => CloseGame();  
topEnv['array'] = (...values) => values;
topEnv.length = array => array.length;
topEnv.element = (array, i) => array[i];
function cakescript() {
  var env = Object.create(topEnv);
  var program = Array.prototype.slice.call(arguments, 0).join('\n');
  return evaluate(parse(program), env)
}
specialForms.fun = (args, scope) => {
  if (!args.length) {
    throw new SyntaxError("Functions need a body");
  }
  let body = args[args.length - 1];
  let params = args.slice(0, args.length - 1).map(expr => {
    if (expr.type != "word") {
      throw new SyntaxError("Parameter names must be words");
    }
    return expr.name;
  });
  return function() {
    if (arguments.length != params.length) {
      throw new TypeError("Wrong number of arguments");
    }
    let localScope = Object.create(scope);
    for (let i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i];
    }
    return evaluate(body, localScope);
  };
};