//Created By Rabia Alhaffar In 3/February/2020
var Shade = (color, percent) => {
    var R = (parseInt(color.substr(1),16) >> 16) + Math.round(2.55 * percent),G = (parseInt(color.substr(1),16) >> 8 & 0x00FF) + Math.round(2.55 * percent),B = (parseInt(color.substr(1),16) & 0x0000FF) + Math.round(2.55 * percent);
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  };

  var DrawIsometricCube = (x, y, width_x, width_y, height, color) =>
  {
      cakepen.beginPath(); cakepen.moveTo(x, y);
      cakepen.lineTo(x - width_x, y - width_x * 0.5);
      cakepen.lineTo(x - width_x, y - height - width_x * 0.5);
      cakepen.lineTo(x, y - height * 1); cakepen.closePath();
      cakepen.fillStyle = Shade(color, -10); cakepen.strokeStyle = color;
      cakepen.stroke(); cakepen.fill(); cakepen.beginPath();
      cakepen.moveTo(x, y);
      cakepen.lineTo(x + width_y, y - width_y * 0.5);
      cakepen.lineTo(x + width_y, y - height - width_y * 0.5);
      cakepen.lineTo(x, y - height * 1);
      cakepen.closePath(); cakepen.fillStyle = Shade(color, 10); cakepen.strokeStyle = Shade(color, 50);
      cakepen.stroke(); cakepen.fill(); cakepen.beginPath(); cakepen.moveTo(x, y - height);
      cakepen.lineTo(x - width_x, y - height - width_x * 0.5);
      cakepen.lineTo(x - width_x + width_y, y - height - (width_x * 0.5 + width_y * 0.5));
      cakepen.lineTo(x + width_y, y - height - width_y * 0.5);
      cakepen.closePath(); cakepen.fillStyle = Shade(color, 20); cakepen.strokeStyle = Shade(color, 60);
      cakepen.stroke(); cakepen.fill();
    };