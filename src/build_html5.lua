-- Created By Rabia Alhaffar In 3/March/2020
-- A HTML5 Web Page Generator For Cake Game Engine Games
-- To Run Use This Command: start Lua51.exe build_html5.lua
-- Great For Starters
local io = require("io")
print("What Is The Game Name?")
gamename = io.read()
print("Where Is The Game Script? (It Should Create Canvases With Initialization)")
gamefile = io.read()
gamelauncher = io.open(gamename..".html",'w')
gamelauncher:write("<!DOCTYPE html><html><head><title>"..gamename.."</title></head><body></body><script src=".."\""..gamefile.."\"".."></script>")
print("Is There More Scripts? [Yes/No]")
answer = io.read()
if answer == "Y" or answer == "Yes" then
	print("Enter Number Of Scripts:")
	script_number = io.read()
	for script_loop = 0,script_number,1 do
		print("Enter Game Script "..script_loop.." Name: ")
		script = io.read()
		gamelauncher:write("<script src=".."\""..script.."\"".."></script>")
	end
	gamelauncher:write("</html>")
end
if answer == "N" or answer == "No" then
	gamelauncher:write("</html>")
end
print("Generation Finished,Thanks For Using!!!")
io.read()