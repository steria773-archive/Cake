-- Created By Rabia Alhaffar In 3/March/2020
-- Game Scripting Compiler
function compile_coffee(script)
    os.execute("coffee -c -b "..script)
end

function compile_toffee(script)
    os.execute("toffee -c -b "..script)
end

function compile_jspp(script)
    os.execute("js++ "..script)
end

function compile_python(script)
    os.execute("transcrypt -b -n -m "..script)
end 