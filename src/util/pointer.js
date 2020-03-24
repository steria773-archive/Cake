//Created By Rabia Alhaffar In 16/December/2019
var LockPointer = () =>
{
if(cakecanvas.requestPointerLock) cakecanvas.requestPointerLock();
if(document.pointerLockElement === canvas) cakecanvas.requestPointerLock();	
};
var UnlockPointer = () => document.exitPointerLock();	