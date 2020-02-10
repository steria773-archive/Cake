# Using Python With Cake
1. Download And Install Python [Here]()
2. Download Transcrypt [Here]()
3. Create A Python Script Named `pythongame.py` With Content(For Example):
```python
CreateCanvas(WindowWidth,WindowHeight)
Initialize()
SetDrawingMode("fill")
def mousemove(e):
   DrawCircle(e.pageX,e.pageY,20,RandomColor())
cakecanvas.onmousemove = mousemove
```
4. Compile Using The Following Command:
```
transcrypt -b -n -m pythongame.py
```
5. When Compiled,A Folder Appears Named `__target__` That Contains Compiled Code
6. Create HTML File With Linking All JavaScript Scripts Generated And Cake Game Framework/Engine File `cake.js`
7. Run The Game On Your Preferred Browser  