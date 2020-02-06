//Created By Rabia Alhaffar In 3/January/2020
CreateCanvas(1350,650);
Initialize();
SetCanvasBackgroundColor("black");
var r1 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r2 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r3 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r4 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r5 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r6 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r7 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r8 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r9 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r10 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r11 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r12 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r13 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r14 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r15 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r16 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r17 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r18 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r19 = new Rectangle(RandomX,RandomY,200,40,"blue");
var r20 = new Rectangle(RandomX,RandomY,200,40,"blue");
var Scene_1 = new Level(() =>
{
ClearCanvas();
r1.Update();
r2.Update();
r3.Update();
r4.Update();
r5.Update();
r6.Update();
r7.Update();
r8.Update();
r9.Update();
r10.Update();
r11.Update();
r12.Update();
r13.Update();
r14.Update();
r15.Update();
r16.Update();
r17.Update();
r18.Update();
r19.Update();
r20.Update();
r1.speedX = -10;
r2.speedX = -10;
r3.speedX = -10;
r4.speedX = -10;
r5.speedX = -10;
r6.speedX = -10;
r7.speedX = -10;
r8.speedX = -10;
r9.speedX = -10;
r10.speedX = -10;
r11.speedX = -10;
r12.speedX = -10;
r13.speedX = -10;
r14.speedX = -10;
r15.speedX = -10;
r16.speedX = -10;
r17.speedX = -10;
r18.speedX = -10;
r19.speedX = -10;
r20.speedX = -10;
if(CheckCanvasCollisionLeft(r1)) { r1.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r1.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r2)) { r2.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r2.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r3)) { r3.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r3.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r4)) { r4.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r4.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r5)) { r5.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r5.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r6)) { r6.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r6.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r7)) { r7.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r7.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r8)) { r8.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r8.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r9)) { r9.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r9.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r10)) { r10.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r10.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r11)) { r11.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r11.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r12)) { r12.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r12.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r13)) { r13.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r13.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r14)) { r14.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r14.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r15)) { r15.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r15.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r16)) { r16.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r16.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r17)) { r17.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r17.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r18)) { r18.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r18.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r19)) { r19.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r19.alpha = Math.random(); }
if(CheckCanvasCollisionLeft(r20)) { r20.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight)); r20.alpha = Math.random(); }
},120);
var Setup = () =>
{
r1.alpha = Math.random();
r2.alpha = Math.random();
r3.alpha = Math.random();
r4.alpha = Math.random();
r5.alpha = Math.random();
r6.alpha = Math.random();
r7.alpha = Math.random();
r8.alpha = Math.random();
r9.alpha = Math.random();
r10.alpha = Math.random();
r11.alpha = Math.random();
r12.alpha = Math.random();
r13.alpha = Math.random();
r14.alpha = Math.random();
r15.alpha = Math.random();
r16.alpha = Math.random();
r17.alpha = Math.random();
r18.alpha = Math.random();
r19.alpha = Math.random();
r20.alpha = Math.random();
r1.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r2.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r3.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r4.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r5.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r6.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r7.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r8.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r9.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r10.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r11.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r12.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r13.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r14.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r15.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r16.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r17.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r18.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r19.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
r20.Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
};
Setup();
Scene_1.Start();