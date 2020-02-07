//Copyright (c)2019-Present Rabia Alhaffar,All Rights Reserved!!!
//Cake Canvas (2D And 3D) And WebGL(2D And 3D) HTML5 Game Framework!!!
//Date: 6/February/2020
/*
 * lightgl.js
 * http://github.com/evanw/lightgl.js/
 *
 * Copyright 2011 Evan Wallace
 * Released under the MIT license
 */
 /*
 Copyright (C) 2011 by Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
var GL=function(){var t;var r={create:function(r){r=r||{};var a=document.createElement("canvas");a.width=800;a.height=600;if(!("alpha"in r))r.alpha=false;try{t=a.getContext("webgl",r)}catch(o){}try{t=t||a.getContext("experimental-webgl",r)}catch(o){}if(!t)throw new Error("WebGL not supported");t.HALF_FLOAT_OES=36193;e();i();n();u();return t},keys:{},Matrix:c,Indexer:h,Buffer:m,Mesh:d,HitTest:p,Raytracer:x,Shader:E,Texture:_,Vector:P};function e(){t.MODELVIEW=f|1;t.PROJECTION=f|2;var r=new c;var e=new c;t.modelviewMatrix=new c;t.projectionMatrix=new c;var i=[];var n=[];var a,o;t.matrixMode=function(r){switch(r){case t.MODELVIEW:a="modelviewMatrix";o=i;break;case t.PROJECTION:a="projectionMatrix";o=n;break;default:throw new Error("invalid matrix mode "+r)}};t.loadIdentity=function(){c.identity(t[a])};t.loadMatrix=function(r){var e=r.m,i=t[a].m;for(var n=0;n<16;n++){i[n]=e[n]}};t.multMatrix=function(r){t.loadMatrix(c.multiply(t[a],r,e))};t.perspective=function(e,i,n,a){t.multMatrix(c.perspective(e,i,n,a,r))};t.frustum=function(e,i,n,a,o,s){t.multMatrix(c.frustum(e,i,n,a,o,s,r))};t.ortho=function(e,i,n,a,o,s){t.multMatrix(c.ortho(e,i,n,a,o,s,r))};t.scale=function(e,i,n){t.multMatrix(c.scale(e,i,n,r))};t.translate=function(e,i,n){t.multMatrix(c.translate(e,i,n,r))};t.rotate=function(e,i,n,a){t.multMatrix(c.rotate(e,i,n,a,r))};t.lookAt=function(e,i,n,a,o,s,u,f,l){t.multMatrix(c.lookAt(e,i,n,a,o,s,u,f,l,r))};t.pushMatrix=function(){o.push(Array.prototype.slice.call(t[a].m))};t.popMatrix=function(){var r=o.pop();t[a].m=l?new Float32Array(r):r};t.project=function(r,e,i,n,a,o){n=n||t.modelviewMatrix;a=a||t.projectionMatrix;o=o||t.getParameter(t.VIEWPORT);var s=a.transformPoint(n.transformPoint(new P(r,e,i)));return new P(o[0]+o[2]*(s.x*.5+.5),o[1]+o[3]*(s.y*.5+.5),s.z*.5+.5)};t.unProject=function(i,n,a,o,s,u){o=o||t.modelviewMatrix;s=s||t.projectionMatrix;u=u||t.getParameter(t.VIEWPORT);var f=new P((i-u[0])/u[2]*2-1,(n-u[1])/u[3]*2-1,a*2-1);return c.inverse(c.multiply(s,o,r),e).transformPoint(f)};t.matrixMode(t.MODELVIEW)}function i(){var r={mesh:new d({coords:true,colors:true,triangles:false}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],pointSize:1,shader:new E("uniform float pointSize;varying vec4 color;varying vec4 coord;void main(){color=gl_Color;coord=gl_TexCoord;gl_Position=gl_ModelViewProjectionMatrix*gl_Vertex;gl_PointSize=pointSize;}","uniform sampler2D texture;uniform float pointSize;uniform bool useTexture;varying vec4 color;varying vec4 coord;void main(){gl_FragColor=color;if(useTexture)gl_FragColor*=texture2D(texture,coord.xy);}")};t.pointSize=function(t){r.shader.uniforms({pointSize:t})};t.begin=function(t){if(r.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");r.mode=t;r.mesh.colors=[];r.mesh.coords=[];r.mesh.vertices=[]};t.color=function(t,e,i,n){r.color=arguments.length==1?t.toArray().concat(1):[t,e,i,n||1]};t.texCoord=function(t,e){r.coord=arguments.length==1?t.toArray(2):[t,e]};t.vertex=function(t,e,i){r.mesh.colors.push(r.color);r.mesh.coords.push(r.coord);r.mesh.vertices.push(arguments.length==1?t.toArray():[t,e,i])};t.end=function(){if(r.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");r.mesh.compile();r.shader.uniforms({useTexture:!!t.getParameter(t.TEXTURE_BINDING_2D)}).draw(r.mesh,r.mode);r.mode=-1}}function n(){var r=t,e=0,i=0,n={},a=false;var u=Object.prototype.hasOwnProperty;function f(){for(var t in n){if(u.call(n,t)&&n[t])return true}return false}function l(r){var n={};for(var o in r){if(typeof r[o]=="function"){n[o]=function(t){return function(){t.apply(r,arguments)}}(r[o])}else{n[o]=r[o]}}n.original=r;n.x=n.pageX;n.y=n.pageY;for(var s=t.canvas;s;s=s.offsetParent){n.x-=s.offsetLeft;n.y-=s.offsetTop}if(a){n.deltaX=n.x-e;n.deltaY=n.y-i}else{n.deltaX=0;n.deltaY=0;a=true}e=n.x;i=n.y;n.dragging=f();n.preventDefault=function(){n.original.preventDefault()};n.stopPropagation=function(){n.original.stopPropagation()};return n}function c(e){t=r;if(!f()){o(document,"mousemove",h);o(document,"mouseup",m);s(t.canvas,"mousemove",h);s(t.canvas,"mouseup",m)}n[e.which]=true;e=l(e);if(t.onmousedown)t.onmousedown(e);e.preventDefault()}function h(e){t=r;e=l(e);if(t.onmousemove)t.onmousemove(e);e.preventDefault()}function m(e){t=r;n[e.which]=false;if(!f()){s(document,"mousemove",h);s(document,"mouseup",m);o(t.canvas,"mousemove",h);o(t.canvas,"mouseup",m)}e=l(e);if(t.onmouseup)t.onmouseup(e);e.preventDefault()}function d(){a=false}function v(){n={};a=false}o(t.canvas,"mousedown",c);o(t.canvas,"mousemove",h);o(t.canvas,"mouseup",m);o(t.canvas,"mouseover",d);o(t.canvas,"mouseout",d);o(document,"contextmenu",v)}function a(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function o(t,r,e){t.addEventListener(r,e)}function s(t,r,e){t.removeEventListener(r,e)}o(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var e=a(t.keyCode);if(e)r.keys[e]=true;r.keys[t.keyCode]=true}});o(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var e=a(t.keyCode);if(e)r.keys[e]=false;r.keys[t.keyCode]=false}});function u(){(function(r){t.makeCurrent=function(){t=r}})(t);t.animate=function(){var r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};var e=(new Date).getTime();var i=t;function n(){t=i;var a=(new Date).getTime();if(t.onupdate)t.onupdate((a-e)/1e3);if(t.ondraw)t.ondraw();r(n);e=a}n()};t.fullscreen=function(r){r=r||{};var e=r.paddingTop||0;var i=r.paddingLeft||0;var n=r.paddingRight||0;var a=r.paddingBottom||0;if(!document.body){throw new Error("document.body doesn't exist yet (call gl.fullscreen() from "+"window.onload() or from inside the <body> tag)")}document.body.appendChild(t.canvas);document.body.style.overflow="hidden";t.canvas.style.position="absolute";t.canvas.style.left=i+"px";t.canvas.style.top=e+"px";function s(){t.canvas.width=window.innerWidth-i-n;t.canvas.height=window.innerHeight-e-a;t.viewport(0,0,t.canvas.width,t.canvas.height);if(r.camera||!("camera"in r)){t.matrixMode(t.PROJECTION);t.loadIdentity();t.perspective(r.fov||45,t.canvas.width/t.canvas.height,r.near||.1,r.far||1e3);t.matrixMode(t.MODELVIEW)}if(t.ondraw)t.ondraw()}o(window,"resize",s);s()}}var f=305397760;var l=typeof Float32Array!="undefined";function c(){var t=Array.prototype.concat.apply([],arguments);if(!t.length){t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}this.m=l?new Float32Array(t):t}c.prototype={inverse:function(){return c.inverse(this,new c)},transpose:function(){return c.transpose(this,new c)},multiply:function(t){return c.multiply(this,t,new c)},transformPoint:function(t){var r=this.m;return new P(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new P(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}};c.inverse=function(t,r){r=r||new c;var e=t.m,i=r.m;i[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10];i[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10];i[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6];i[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6];i[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10];i[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10];i[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6];i[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6];i[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9];i[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9];i[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5];i[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5];i[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9];i[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9];i[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5];i[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];var n=e[0]*i[0]+e[1]*i[4]+e[2]*i[8]+e[3]*i[12];for(var a=0;a<16;a++)i[a]/=n;return r};c.transpose=function(t,r){r=r||new c;var e=t.m,i=r.m;i[0]=e[0];i[1]=e[4];i[2]=e[8];i[3]=e[12];i[4]=e[1];i[5]=e[5];i[6]=e[9];i[7]=e[13];i[8]=e[2];i[9]=e[6];i[10]=e[10];i[11]=e[14];i[12]=e[3];i[13]=e[7];i[14]=e[11];i[15]=e[15];return r};c.multiply=function(t,r,e){e=e||new c;var i=t.m,n=r.m,a=e.m;a[0]=i[0]*n[0]+i[1]*n[4]+i[2]*n[8]+i[3]*n[12];a[1]=i[0]*n[1]+i[1]*n[5]+i[2]*n[9]+i[3]*n[13];a[2]=i[0]*n[2]+i[1]*n[6]+i[2]*n[10]+i[3]*n[14];a[3]=i[0]*n[3]+i[1]*n[7]+i[2]*n[11]+i[3]*n[15];a[4]=i[4]*n[0]+i[5]*n[4]+i[6]*n[8]+i[7]*n[12];a[5]=i[4]*n[1]+i[5]*n[5]+i[6]*n[9]+i[7]*n[13];a[6]=i[4]*n[2]+i[5]*n[6]+i[6]*n[10]+i[7]*n[14];a[7]=i[4]*n[3]+i[5]*n[7]+i[6]*n[11]+i[7]*n[15];a[8]=i[8]*n[0]+i[9]*n[4]+i[10]*n[8]+i[11]*n[12];a[9]=i[8]*n[1]+i[9]*n[5]+i[10]*n[9]+i[11]*n[13];a[10]=i[8]*n[2]+i[9]*n[6]+i[10]*n[10]+i[11]*n[14];a[11]=i[8]*n[3]+i[9]*n[7]+i[10]*n[11]+i[11]*n[15];a[12]=i[12]*n[0]+i[13]*n[4]+i[14]*n[8]+i[15]*n[12];a[13]=i[12]*n[1]+i[13]*n[5]+i[14]*n[9]+i[15]*n[13];a[14]=i[12]*n[2]+i[13]*n[6]+i[14]*n[10]+i[15]*n[14];a[15]=i[12]*n[3]+i[13]*n[7]+i[14]*n[11]+i[15]*n[15];return e};c.identity=function(t){t=t||new c;var r=t.m;r[0]=r[5]=r[10]=r[15]=1;r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0;return t};c.perspective=function(t,r,e,i,n){var a=Math.tan(t*Math.PI/360)*e;var o=a*r;return c.frustum(-o,o,-a,a,e,i,n)};c.frustum=function(t,r,e,i,n,a,o){o=o||new c;var s=o.m;s[0]=2*n/(r-t);s[1]=0;s[2]=(r+t)/(r-t);s[3]=0;s[4]=0;s[5]=2*n/(i-e);s[6]=(i+e)/(i-e);s[7]=0;s[8]=0;s[9]=0;s[10]=-(a+n)/(a-n);s[11]=-2*a*n/(a-n);s[12]=0;s[13]=0;s[14]=-1;s[15]=0;return o};c.ortho=function(t,r,e,i,n,a,o){o=o||new c;var s=o.m;s[0]=2/(r-t);s[1]=0;s[2]=0;s[3]=-(r+t)/(r-t);s[4]=0;s[5]=2/(i-e);s[6]=0;s[7]=-(i+e)/(i-e);s[8]=0;s[9]=0;s[10]=-2/(a-n);s[11]=-(a+n)/(a-n);s[12]=0;s[13]=0;s[14]=0;s[15]=1;return o};c.scale=function(t,r,e,i){i=i||new c;var n=i.m;n[0]=t;n[1]=0;n[2]=0;n[3]=0;n[4]=0;n[5]=r;n[6]=0;n[7]=0;n[8]=0;n[9]=0;n[10]=e;n[11]=0;n[12]=0;n[13]=0;n[14]=0;n[15]=1;return i};c.translate=function(t,r,e,i){i=i||new c;var n=i.m;n[0]=1;n[1]=0;n[2]=0;n[3]=t;n[4]=0;n[5]=1;n[6]=0;n[7]=r;n[8]=0;n[9]=0;n[10]=1;n[11]=e;n[12]=0;n[13]=0;n[14]=0;n[15]=1;return i};c.rotate=function(t,r,e,i,n){if(!t||!r&&!e&&!i){return c.identity(n)}n=n||new c;var a=n.m;var o=Math.sqrt(r*r+e*e+i*i);t*=Math.PI/180;r/=o;e/=o;i/=o;var s=Math.cos(t),u=Math.sin(t),f=1-s;a[0]=r*r*f+s;a[1]=r*e*f-i*u;a[2]=r*i*f+e*u;a[3]=0;a[4]=e*r*f+i*u;a[5]=e*e*f+s;a[6]=e*i*f-r*u;a[7]=0;a[8]=i*r*f-e*u;a[9]=i*e*f+r*u;a[10]=i*i*f+s;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return n};c.lookAt=function(t,r,e,i,n,a,o,s,u,f){f=f||new c;var l=f.m;var h=new P(t,r,e);var m=new P(i,n,a);var d=new P(o,s,u);var v=h.subtract(m).unit();var g=d.cross(v).unit();var p=v.cross(g).unit();l[0]=g.x;l[1]=g.y;l[2]=g.z;l[3]=-g.dot(h);l[4]=p.x;l[5]=p.y;l[6]=p.z;l[7]=-p.dot(h);l[8]=v.x;l[9]=v.y;l[10]=v.z;l[11]=-v.dot(h);l[12]=0;l[13]=0;l[14]=0;l[15]=1;return f};function h(){this.unique=[];this.indices=[];this.map={}}h.prototype={add:function(t){var r=JSON.stringify(t);if(!(r in this.map)){this.map[r]=this.unique.length;this.unique.push(t)}return this.map[r]}};function m(t,r){this.buffer=null;this.target=t;this.type=r;this.data=[]}m.prototype={compile:function(r){var e=[];for(var i=0,n=1e4;i<this.data.length;i+=n){e=Array.prototype.concat.apply(e,this.data.slice(i,i+n))}var a=this.data.length?e.length/this.data.length:0;if(a!=Math.round(a))throw new Error("buffer elements not of consistent size, average size is "+a);this.buffer=this.buffer||t.createBuffer();this.buffer.length=e.length;this.buffer.spacing=a;t.bindBuffer(this.target,this.buffer);t.bufferData(this.target,new this.type(e),r||t.STATIC_DRAW)}};function d(t){t=t||{};this.vertexBuffers={};this.indexBuffers={};this.addVertexBuffer("vertices","gl_Vertex");if(t.coords)this.addVertexBuffer("coords","gl_TexCoord");if(t.normals)this.addVertexBuffer("normals","gl_Normal");if(t.colors)this.addVertexBuffer("colors","gl_Color");if(!("triangles"in t)||t.triangles)this.addIndexBuffer("triangles");if(t.lines)this.addIndexBuffer("lines")}d.prototype={addVertexBuffer:function(r,e){var i=this.vertexBuffers[e]=new m(t.ARRAY_BUFFER,Float32Array);i.name=r;this[r]=[]},addIndexBuffer:function(r){var e=this.indexBuffers[r]=new m(t.ELEMENT_ARRAY_BUFFER,Uint16Array);this[r]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name];r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e];r.compile()}},transform:function(t){this.vertices=this.vertices.map(function(r){return t.transformPoint(P.fromArray(r)).toArray()});if(this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(t){return r.transformVector(P.fromArray(t)).unit().toArray()})}this.compile();return this},computeNormals:function(){if(!this.normals)this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++){this.normals[t]=new P}for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t];var e=P.fromArray(this.vertices[r[0]]);var i=P.fromArray(this.vertices[r[1]]);var n=P.fromArray(this.vertices[r[2]]);var a=i.subtract(e).cross(n.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(a);this.normals[r[1]]=this.normals[r[1]].add(a);this.normals[r[2]]=this.normals[r[2]].add(a)}for(var t=0;t<this.vertices.length;t++){this.normals[t]=this.normals[t].unit().toArray()}this.compile();return this},computeWireframe:function(){var t=new h;for(var r=0;r<this.triangles.length;r++){var e=this.triangles[r];for(var i=0;i<e.length;i++){var n=e[i],a=e[(i+1)%e.length];t.add([Math.min(n,a),Math.max(n,a)])}}if(!this.lines)this.addIndexBuffer("lines");this.lines=t.unique;this.compile();return this},getAABB:function(){var t={min:new P(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=P.fromArray(this.vertices[r]);t.min=P.min(t.min,e);t.max=P.max(t.max,e)}return t},getBoundingSphere:function(){var t=this.getAABB();var r={center:t.min.add(t.max).divide(2),radius:0};for(var e=0;e<this.vertices.length;e++){r.radius=Math.max(r.radius,P.fromArray(this.vertices[e]).subtract(r.center).length())}return r}};d.plane=function(t){t=t||{};var r=new d(t);detailX=t.detailX||t.detail||1;detailY=t.detailY||t.detail||1;for(var e=0;e<=detailY;e++){var i=e/detailY;for(var n=0;n<=detailX;n++){var a=n/detailX;r.vertices.push([2*a-1,2*i-1,0]);if(r.coords)r.coords.push([a,i]);if(r.normals)r.normals.push([0,0,1]);if(n<detailX&&e<detailY){var o=n+e*(detailX+1);r.triangles.push([o,o+1,o+detailX+1]);r.triangles.push([o+detailX+1,o+1,o+detailX+2])}}}r.compile();return r};var v=[[0,4,2,6,-1,0,0],[1,3,5,7,+1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,+1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,+1]];function g(t){return new P((t&1)*2-1,(t&2)-1,(t&4)/2-1)}d.cube=function(t){var r=new d(t);for(var e=0;e<v.length;e++){var i=v[e],n=e*4;for(var a=0;a<4;a++){var o=i[a];r.vertices.push(g(o).toArray());if(r.coords)r.coords.push([a&1,(a&2)/2]);if(r.normals)r.normals.push(i.slice(4,7))}r.triangles.push([n,n+1,n+2]);r.triangles.push([n+2,n+1,n+3])}r.compile();return r};d.sphere=function(t){function r(t,r,e){return s?[t,e,r]:[t,r,e]}function e(t){return t+(t-t*t)/2}t=t||{};var i=new d(t);var n=new h;detail=t.detail||6;for(var a=0;a<8;a++){var o=g(a);var s=o.x*o.y*o.z>0;var u=[];for(var f=0;f<=detail;f++){for(var l=0;f+l<=detail;l++){var c=f/detail;var m=l/detail;var v=(detail-f-l)/detail;var p={vertex:new P(e(c),e(m),e(v)).unit().multiply(o).toArray()};if(i.coords)p.coord=o.y>0?[1-c,v]:[v,1-c];u.push(n.add(p))}if(f>0){for(var l=0;f+l<=detail;l++){var c=(f-1)*(detail+1)+(f-1-(f-1)*(f-1))/2+l;var m=f*(detail+1)+(f-f*f)/2+l;i.triangles.push(r(u[c],u[c+1],u[m]));if(f+l<detail){i.triangles.push(r(u[m],u[c+1],u[m+1]))}}}}}i.vertices=n.unique.map(function(t){return t.vertex});if(i.coords)i.coords=n.unique.map(function(t){return t.coord});if(i.normals)i.normals=i.vertices;i.compile();return i};d.load=function(t,r){r=r||{};if(!("coords"in r))r.coords=!!t.coords;if(!("normals"in r))r.normals=!!t.normals;if(!("colors"in r))r.colors=!!t.colors;if(!("triangles"in r))r.triangles=!!t.triangles;if(!("lines"in r))r.lines=!!t.lines;var e=new d(r);e.vertices=t.vertices;if(e.coords)e.coords=t.coords;if(e.normals)e.normals=t.normals;if(e.colors)e.colors=t.colors;if(e.triangles)e.triangles=t.triangles;if(e.lines)e.lines=t.lines;e.compile();return e};function p(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE;this.hit=r;this.normal=e}p.prototype={mergeWith:function(t){if(t.t>0&&t.t<this.t){this.t=t.t;this.hit=t.hit;this.normal=t.normal}}};function x(){var r=t.getParameter(t.VIEWPORT);var e=t.modelviewMatrix.m;var i=new P(e[0],e[4],e[8]);var n=new P(e[1],e[5],e[9]);var a=new P(e[2],e[6],e[10]);var o=new P(e[3],e[7],e[11]);this.eye=new P((-o.dot(i)),(-o.dot(n)),(-o.dot(a)));var s=r[0],u=s+r[2];var f=r[1],l=f+r[3];this.ray00=t.unProject(s,f,1).subtract(this.eye);this.ray10=t.unProject(u,f,1).subtract(this.eye);this.ray01=t.unProject(s,l,1).subtract(this.eye);this.ray11=t.unProject(u,l,1).subtract(this.eye);this.viewport=r}x.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2];r=1-(r-this.viewport[1])/this.viewport[3];var e=P.lerp(this.ray00,this.ray10,t);var i=P.lerp(this.ray01,this.ray11,t);return P.lerp(e,i,r).unit()}};x.hitTestBox=function(t,r,e,i){var n=e.subtract(t).divide(r);var a=i.subtract(t).divide(r);var o=P.min(n,a);var s=P.max(n,a);var u=o.max();var f=s.min();if(u>0&&u<f){var l=1e-6,c=t.add(r.multiply(u));e=e.add(l);i=i.subtract(l);return new p(u,c,new P((c.x>i.x)-(c.x<e.x),(c.y>i.y)-(c.y<e.y),(c.z>i.z)-(c.z<e.z)))}return null};x.hitTestSphere=function(t,r,e,i){var n=t.subtract(e);var a=r.dot(r);var o=2*r.dot(n);var s=n.dot(n)-i*i;var u=o*o-4*a*s;if(u>0){var f=(-o-Math.sqrt(u))/(2*a),l=t.add(r.multiply(f));return new p(f,l,l.subtract(e).divide(i))}return null};x.hitTestTriangle=function(t,r,e,i,n){var a=i.subtract(e);var o=n.subtract(e);var s=a.cross(o).unit();var u=s.dot(e.subtract(t))/s.dot(r);if(u>0){var f=t.add(r.multiply(u));var l=f.subtract(e);var c=o.dot(o);var h=o.dot(a);var m=o.dot(l);var d=a.dot(a);var v=a.dot(l);var g=c*d-h*h;var x=(d*m-h*v)/g;var y=(c*v-h*m)/g;if(x>=0&&y>=0&&x+y<=1)return new p(u,f,s)}return null};function y(t,r,e){while((result=t.exec(r))!=null){e(result)}}var w="LIGHTGL";function E(r,e){function i(t){var r=document.getElementById(t);return r?r.text:t}r=i(r);e=i(e);var n="uniform mat3 gl_NormalMatrix;uniform mat4 gl_ModelViewMatrix;uniform mat4 gl_ProjectionMatrix;uniform mat4 gl_ModelViewProjectionMatrix;uniform mat4 gl_ModelViewMatrixInverse;uniform mat4 gl_ProjectionMatrixInverse;uniform mat4 gl_ModelViewProjectionMatrixInverse;";var a=n+"attribute vec4 gl_Vertex;attribute vec4 gl_TexCoord;attribute vec3 gl_Normal;attribute vec4 gl_Color;vec4 ftransform(){return gl_ModelViewProjectionMatrix*gl_Vertex;}";var o="precision highp float;"+n;var s=r+e;var u={};y(/\b(gl_[^;]*)\b;/g,n,function(t){var r=t[1];if(s.indexOf(r)!=-1){var e=r.replace(/[a-z_]/g,"");u[e]=w+r}});if(s.indexOf("ftransform")!=-1)u.MVPM=w+"gl_ModelViewProjectionMatrix";this.usedMatrices=u;function f(t,r){var e={};var i=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(r);r=i?i[1]+t+r.substr(i[1].length):t+r;y(/\bgl_\w+\b/g,t,function(t){if(!(t in e)){r=r.replace(new RegExp("\\b"+t+"\\b","g"),w+t);e[t]=true}});return r}r=f(a,r);e=f(o,e);function l(r,e){var i=t.createShader(r);t.shaderSource(i,e);t.compileShader(i);if(!t.getShaderParameter(i,t.COMPILE_STATUS)){throw new Error("compile error: "+t.getShaderInfoLog(i))}return i}this.program=t.createProgram();t.attachShader(this.program,l(t.VERTEX_SHADER,r));t.attachShader(this.program,l(t.FRAGMENT_SHADER,e));t.linkProgram(this.program);if(!t.getProgramParameter(this.program,t.LINK_STATUS)){throw new Error("link error: "+t.getProgramInfoLog(this.program))}this.attributes={};this.uniformLocations={};var c={};y(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,r+e,function(t){c[t[2]]=1});this.isSampler=c}function M(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function b(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}var T=new c;var A=new c;E.prototype={uniforms:function(r){t.useProgram(this.program);for(var e in r){var i=this.uniformLocations[e]||t.getUniformLocation(this.program,e);if(!i)continue;this.uniformLocations[e]=i;var n=r[e];if(n instanceof P){n=[n.x,n.y,n.z]}else if(n instanceof c){n=n.m}if(M(n)){switch(n.length){case 1:t.uniform1fv(i,new Float32Array(n));break;case 2:t.uniform2fv(i,new Float32Array(n));break;case 3:t.uniform3fv(i,new Float32Array(n));break;case 4:t.uniform4fv(i,new Float32Array(n));break;case 9:t.uniformMatrix3fv(i,false,new Float32Array([n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8]]));break;case 16:t.uniformMatrix4fv(i,false,new Float32Array([n[0],n[4],n[8],n[12],n[1],n[5],n[9],n[13],n[2],n[6],n[10],n[14],n[3],n[7],n[11],n[15]]));break;default:throw new Error("don't know how to load uniform \""+e+'" of length '+n.length)}}else if(b(n)){(this.isSampler[e]?t.uniform1i:t.uniform1f).call(t,i,n)}else{throw new Error('attempted to set uniform "'+e+'" to invalid value '+n)}}return this},draw:function(r,e){this.drawBuffers(r.vertexBuffers,r.indexBuffers[e==t.LINES?"lines":"triangles"],arguments.length<2?t.TRIANGLES:e)},drawBuffers:function(r,e,i){var n=this.usedMatrices;var a=t.modelviewMatrix;var o=t.projectionMatrix;var s=n.MVMI||n.NM?a.inverse():null;var u=n.PMI?o.inverse():null;var f=n.MVPM||n.MVPMI?o.multiply(a):null;var l={};if(n.MVM)l[n.MVM]=a;if(n.MVMI)l[n.MVMI]=s;if(n.PM)l[n.PM]=o;if(n.PMI)l[n.PMI]=u;if(n.MVPM)l[n.MVPM]=f;if(n.MVPMI)l[n.MVPMI]=f.inverse();if(n.NM){var c=s.m;l[n.NM]=[c[0],c[4],c[8],c[1],c[5],c[9],c[2],c[6],c[10]]}this.uniforms(l);var h=0;for(var m in r){var d=r[m];var v=this.attributes[m]||t.getAttribLocation(this.program,m.replace(/^(gl_.*)$/,w+"$1"));if(v==-1||!d.buffer)continue;this.attributes[m]=v;t.bindBuffer(t.ARRAY_BUFFER,d.buffer);t.enableVertexAttribArray(v);t.vertexAttribPointer(v,d.buffer.spacing,t.FLOAT,false,0,0);h=d.buffer.length/d.buffer.spacing}for(var m in this.attributes){if(!(m in r)){t.disableVertexAttribArray(this.attributes[m])}}if(h&&(!e||e.buffer)){if(e){t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.buffer);t.drawElements(i,e.buffer.length,t.UNSIGNED_SHORT,0)}else{t.drawArrays(i,0,h)}}return this}};function _(r,e,i){i=i||{};this.id=t.createTexture();this.width=r;this.height=e;this.format=i.format||t.RGBA;this.type=i.type||t.UNSIGNED_BYTE;var n=i.filter||i.magFilter||t.LINEAR;var a=i.filter||i.minFilter||t.LINEAR;if(this.type===t.FLOAT){if(!_.canUseFloatingPointTextures()){throw new Error("OES_texture_float is required but not supported")}if((a!==t.NEAREST||n!==t.NEAREST)&&!_.canUseFloatingPointLinearFiltering()){throw new Error("OES_texture_float_linear is required but not supported")}}else if(this.type===t.HALF_FLOAT_OES){if(!_.canUseHalfFloatingPointTextures()){throw new Error("OES_texture_half_float is required but not supported")}if((a!==t.NEAREST||n!==t.NEAREST)&&!_.canUseHalfFloatingPointLinearFiltering()){throw new Error("OES_texture_half_float_linear is required but not supported")}}t.bindTexture(t.TEXTURE_2D,this.id);t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,i.wrap||i.wrapS||t.CLAMP_TO_EDGE);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,i.wrap||i.wrapT||t.CLAMP_TO_EDGE);t.texImage2D(t.TEXTURE_2D,0,this.format,r,e,0,this.format,this.type,i.data||null)}var R;var F;var z;_.prototype={bind:function(r){t.activeTexture(t.TEXTURE0+(r||0));t.bindTexture(t.TEXTURE_2D,this.id)},unbind:function(r){t.activeTexture(t.TEXTURE0+(r||0));t.bindTexture(t.TEXTURE_2D,null)},canDrawTo:function(){R=R||t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,R);t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.id,0);var r=t.checkFramebufferStatus(t.FRAMEBUFFER)==t.FRAMEBUFFER_COMPLETE;t.bindFramebuffer(t.FRAMEBUFFER,null);return r},drawTo:function(r){var e=t.getParameter(t.VIEWPORT);R=R||t.createFramebuffer();F=F||t.createRenderbuffer();t.bindFramebuffer(t.FRAMEBUFFER,R);t.bindRenderbuffer(t.RENDERBUFFER,F);if(this.width!=F.width||this.height!=F.height){F.width=this.width;F.height=this.height;t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,this.width,this.height)}t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.id,0);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,F);if(t.checkFramebufferStatus(t.FRAMEBUFFER)!=t.FRAMEBUFFER_COMPLETE){throw new Error("Rendering to this texture is not supported (incomplete framebuffer)")}t.viewport(0,0,this.width,this.height);r();t.bindFramebuffer(t.FRAMEBUFFER,null);t.bindRenderbuffer(t.RENDERBUFFER,null);t.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var r;r=t.id;t.id=this.id;this.id=r;r=t.width;t.width=this.width;this.width=r;r=t.height;t.height=this.height;this.height=r}};_.fromImage=function(r,e){e=e||{};var i=new _(r.width,r.height,e);try{t.texImage2D(t.TEXTURE_2D,0,i.format,i.format,i.type,r)}catch(n){if(location.protocol=="file:"){throw new Error('image not loaded for security reasons (serve this page over "http://" instead)')}else{throw new Error("image not loaded for security reasons (image must originate from the same "+"domain as this page or use Cross-Origin Resource Sharing)")}}if(e.minFilter&&e.minFilter!=t.NEAREST&&e.minFilter!=t.LINEAR){t.generateMipmap(t.TEXTURE_2D)}return i};_.fromURL=function(r,e){z=z||function(){var t=document.createElement("canvas").getContext("2d");t.canvas.width=t.canvas.height=128;for(var r=0;r<t.canvas.height;r+=16){for(var e=0;e<t.canvas.width;e+=16){t.fillStyle=(e^r)&16?"#FFF":"#DDD";t.fillRect(e,r,16,16)}}return t.canvas}();var i=_.fromImage(z,e);var n=new Image;var a=t;n.onload=function(){a.makeCurrent();_.fromImage(n,e).swapWith(i)};n.src=r;return i};_.canUseFloatingPointTextures=function(){return!!t.getExtension("OES_texture_float")};_.canUseFloatingPointLinearFiltering=function(){return!!t.getExtension("OES_texture_float_linear")};_.canUseHalfFloatingPointTextures=function(){return!!t.getExtension("OES_texture_half_float")};_.canUseHalfFloatingPointLinearFiltering=function(){return!!t.getExtension("OES_texture_half_float_linear")};function P(t,r,e){this.x=t||0;this.y=r||0;this.z=e||0}P.prototype={negative:function(){return new P((-this.x),(-this.y),(-this.z))},add:function(t){if(t instanceof P)return new P(this.x+t.x,this.y+t.y,this.z+t.z);else return new P(this.x+t,this.y+t,this.z+t)},subtract:function(t){if(t instanceof P)return new P(this.x-t.x,this.y-t.y,this.z-t.z);else return new P(this.x-t,this.y-t,this.z-t)},multiply:function(t){if(t instanceof P)return new P(this.x*t.x,this.y*t.y,this.z*t.z);else return new P(this.x*t,this.y*t,this.z*t)},divide:function(t){if(t instanceof P)return new P(this.x/t.x,this.y/t.y,this.z/t.z);else return new P(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new P(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new P(this.x,this.y,this.z)},init:function(t,r,e){this.x=t;this.y=r;this.z=e;return this}};P.negative=function(t,r){r.x=-t.x;r.y=-t.y;r.z=-t.z;return r};P.add=function(t,r,e){if(r instanceof P){e.x=t.x+r.x;e.y=t.y+r.y;e.z=t.z+r.z}else{e.x=t.x+r;e.y=t.y+r;e.z=t.z+r}return e};P.subtract=function(t,r,e){if(r instanceof P){e.x=t.x-r.x;e.y=t.y-r.y;e.z=t.z-r.z}else{e.x=t.x-r;e.y=t.y-r;e.z=t.z-r}return e};P.multiply=function(t,r,e){if(r instanceof P){e.x=t.x*r.x;e.y=t.y*r.y;e.z=t.z*r.z}else{e.x=t.x*r;e.y=t.y*r;e.z=t.z*r}return e};P.divide=function(t,r,e){if(r instanceof P){e.x=t.x/r.x;e.y=t.y/r.y;e.z=t.z/r.z}else{e.x=t.x/r;e.y=t.y/r;e.z=t.z/r}return e};P.cross=function(t,r,e){e.x=t.y*r.z-t.z*r.y;e.y=t.z*r.x-t.x*r.z;e.z=t.x*r.y-t.y*r.x;return e};P.unit=function(t,r){var e=t.length();r.x=t.x/e;r.y=t.y/e;r.z=t.z/e;return r};P.fromAngles=function(t,r){return new P(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))};P.randomDirection=function(){return P.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))};P.min=function(t,r){return new P(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))};P.max=function(t,r){return new P(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))};P.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)};P.fromArray=function(t){return new P(t[0],t[1],t[2])};P.angleBetween=function(t,r){return t.angleTo(r)};return r}();
/*!
 * gamepad.js v0.0.5-alpha
 * https://github.com/neogeek/gamepad.js
 *
 * Copyright (c) 2017 Scott Doxey
 * Released under the MIT license.
 */
 /*
The MIT License (MIT)

Copyright (c) 2017 Scott Doxey

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function () {

    'use strict';

    var _requestAnimationFrame,
        _cancelAnimationFrame,
        hasGamepadSupport = window.navigator.getGamepads !== undefined;

    if (String(typeof window) !== 'undefined') {

        ['webkit', 'moz'].forEach(function (key) {
            _requestAnimationFrame = _requestAnimationFrame || window.requestAnimationFrame || window[key + 'RequestAnimationFrame'] || null;
            _cancelAnimationFrame = _cancelAnimationFrame || window.cancelAnimationFrame || window[key + 'CancelAnimationFrame'] || null;
        });

    }

    function findKeyMapping(index, mapping) {

        var results = [];

        Object.keys(mapping).forEach(function (key) {

            if (mapping[key] === index) {

                results.push(key);

            } else if (Array.isArray(mapping[key]) && mapping[key].indexOf(index) !== -1) {

                results.push(key);

            }

        });

        return results;

    }

    function Gamepad() {

        this._events = {
            gamepad: [],
            axes: [],
            keyboard: {}
        };

        this._handlers = {
            gamepad: {
                connect: null,
                disconnect: null
            }
        };

        this._keyMapping = {
            gamepad: {
                'button_1': 0,
                'button_2': 1,
                'button_3': 2,
                'button_4': 3,
                'shoulder_top_left': 4,
                'shoulder_top_right': 5,
                'shoulder_bottom_left': 6,
                'shoulder_bottom_right': 7,
                'select': 8,
                'start': 9,
                'stick_button_left': 10,
                'stick_button_right': 11,
                'd_pad_up': 12,
                'd_pad_down': 13,
                'd_pad_left': 14,
                'd_pad_right': 15,
                'vendor': 16
            },
            axes: {
                'stick_axis_left': [0, 2],
                'stick_axis_right': [2, 4]
            },
            keyboard: {
                'button_1': 32,
                'start': 27,
                'd_pad_up': [ 38, 87 ],
                'd_pad_down': [ 40, 83 ],
                'd_pad_left': [ 37, 65 ],
                'd_pad_right': [ 39, 68 ]
            }
        };

        this._threshold = 0.3;

        this._listeners = [];

        this._handleKeyboardEventListener = this._handleKeyboardEventListener.bind(this);

        this.resume();

    }

    Gamepad.prototype._handleGamepadConnected = function (index) {

        if (this._handlers.gamepad.connect) {

            this._handlers.gamepad.connect({ index: index });

        }

    };

    Gamepad.prototype._handleGamepadDisconnected = function (index) {

        if (this._handlers.gamepad.disconnect) {

            this._handlers.gamepad.disconnect({ index: index });

        }

    };

    Gamepad.prototype._handleGamepadEventListener = function (controller) {

        var self = this;

        if (controller && controller.connected) {

            controller.buttons.forEach(function (button, index) {

                var keys = findKeyMapping(index, self._keyMapping.gamepad);

                if (keys) {

                    keys.forEach(function (key) {

                        if (button.pressed) {

                            if (!self._events.gamepad[controller.index][key]) {

                                self._events.gamepad[controller.index][key] = {
                                    pressed: true,
                                    hold: false,
                                    released: false,
                                    player: controller.index
                                };

                            }

                            self._events.gamepad[controller.index][key].value = button.value;

                        } else if (!button.pressed && self._events.gamepad[controller.index][key]) {

                            self._events.gamepad[controller.index][key].released = true;
                            self._events.gamepad[controller.index][key].hold = false;

                        }

                    });

                }

            });

        }

    };

    Gamepad.prototype._handleGamepadAxisEventListener = function (controller) {

        var self = this;

        if (controller && controller.connected) {

            Object.keys(self._keyMapping.axes).forEach(function (key) {

                var axes = Array.prototype.slice.apply(controller.axes, self._keyMapping.axes[key]);

                if (Math.abs(axes[0]) > self._threshold || Math.abs(axes[1]) > self._threshold) {

                    self._events.axes[controller.index][key] = {
                        pressed: self._events.axes[controller.index][key] ? false : true,
                        hold: self._events.axes[controller.index][key] ? true : false,
                        released: false,
                        value: axes
                    };

                } else if (self._events.axes[controller.index][key]) {

                    self._events.axes[controller.index][key] = {
                        pressed: false,
                        hold: false,
                        released: true,
                        value: axes
                    };

                }

            });

        }

    };

    Gamepad.prototype._handleKeyboardEventListener = function (e) {

        var self = this,
            keys = findKeyMapping(e.keyCode, self._keyMapping.keyboard);

        if (keys) {

            keys.forEach(function (key) {

                if (e.type === 'keydown' && !self._events.keyboard[key]) {

                    self._events.keyboard[key] = {
                        pressed: true,
                        hold: false,
                        released: false
                    };

                } else if (e.type === 'keyup' && self._events.keyboard[key]) {

                    self._events.keyboard[key].released = true;
                    self._events.keyboard[key].hold = false;

                }

            });

        }

    };

    Gamepad.prototype._handleEvent = function (key, events, player) {

        if (events[key].pressed) {

            this.trigger('press', key, events[key].value, player);

            events[key].pressed = false;
            events[key].hold = true;

        } else if (events[key].hold) {

            this.trigger('hold', key, events[key].value, player);

        } else if (events[key].released) {

            this.trigger('release', key, events[key].value, player);

            delete events[key];

        }

    };

    Gamepad.prototype._loop = function () {

        var self = this,
            gamepads = hasGamepadSupport ? window.navigator.getGamepads() : false,
            length = 4, // length = gamepads.length;
            i;

        if (gamepads) {

            for (i = 0; i < length; i = i + 1) {

                if (gamepads[i]) {

                    if (!self._events.gamepad[i]) {

                        self._handleGamepadConnected(i);

                        self._events.gamepad[i] = {};
                        self._events.axes[i] = {};

                    }

                    self._handleGamepadEventListener(gamepads[i]);
                    self._handleGamepadAxisEventListener(gamepads[i]);

                } else if (self._events.gamepad[i]) {

                    self._handleGamepadDisconnected(i);

                    self._events.gamepad[i] = null;
                    self._events.axes[i] = null;

                }

            }

            self._events.gamepad.forEach(function (gamepad, player) {

                if (gamepad) {

                    Object.keys(gamepad).forEach(function (key) {

                        self._handleEvent(key, gamepad, player);

                    });

                }

            });

            self._events.axes.forEach(function (gamepad, player) {

                if (gamepad) {

                    Object.keys(gamepad).forEach(function (key) {

                        self._handleEvent(key, gamepad, player);

                    });

                }

            });

        }

        Object.keys(self._events.keyboard).forEach(function (key) {

            self._handleEvent(key, self._events.keyboard, 'keyboard');

        });

        if (self._requestAnimation) {

            self._requestAnimation = _requestAnimationFrame(self._loop.bind(self));

        }

    };

    Gamepad.prototype.on = function (type, button, callback, options) {

        var self = this;

        if (Object.keys(this._handlers.gamepad).indexOf(type) !== -1 && typeof button === 'function') {

            this._handlers.gamepad[type] = button;

            this._events.gamepad = [];

        } else {

            if (typeof type === "string" && type.match(/\s+/)) {

                type = type.split(/\s+/g);

            }

            if (typeof button === "string" && button.match(/\s+/)) {

                button = button.split(/\s+/g);

            }

            if (Array.isArray(type)) {

                type.forEach(function (type) {

                    self.on(type, button, callback, options);

                });

            } else if (Array.isArray(button)) {

                button.forEach(function (button) {

                    self.on(type, button, callback, options);

                });

            } else {

                this._listeners.push({
                    type: type,
                    button: button,
                    callback: callback,
                    options: options
                });

            }

        }

    };

    Gamepad.prototype.off = function (type, button) {

        var self = this;

        if (typeof type === "string" && type.match(/\s+/)) {

            type = type.split(/\s+/g);

        }

        if (typeof button === "string" && button.match(/\s+/)) {

            button = button.split(/\s+/g);

        }

        if (Array.isArray(type)) {

            type.forEach(function (type) {

                self.off(type, button);

            });

        } else if (Array.isArray(button)) {

            button.forEach(function (button) {

                self.off(type, button);

            });

        } else {

            this._listeners = this._listeners.filter(function (listener) {

                return listener.type !== type && listener.button !== button;

            });

        }

    };

    Gamepad.prototype.setCustomMapping = function (device, config) {

        if (this._keyMapping[device] !== undefined) {

            this._keyMapping[device] = config;

        } else {

            throw new Error('The device "' + device + '" is not supported through gamepad.js');

        }

    };

    Gamepad.prototype.setGlobalThreshold = function (num) {

        this._threshold = parseFloat(num);

    };

    Gamepad.prototype.trigger = function (type, button, value, player) {

        if (this._listeners) {

            this._listeners.forEach(function (listener) {

                if (listener.type === type && listener.button === button) {

                    listener.callback({
                        type: listener.type,
                        button: listener.button,
                        value: value,
                        player: player,
                        event: listener,
                        timestamp: Date.now()
                    });

                }

            });

        }

    };

    Gamepad.prototype.pause = function () {

        _cancelAnimationFrame(this._requestAnimation);

        this._requestAnimation = null;

        document.removeEventListener('keydown', this._handleKeyboardEventListener);
        document.removeEventListener('keyup', this._handleKeyboardEventListener);

    };

    Gamepad.prototype.resume = function () {

        this._requestAnimation = _requestAnimationFrame(this._loop.bind(this));

        document.addEventListener('keydown', this._handleKeyboardEventListener);
        document.addEventListener('keyup', this._handleKeyboardEventListener);

    };

    Gamepad.prototype.destroy = function () {

        this.pause();

        delete this._listeners;

    };

    if (typeof define === 'function' && define.amd !== undefined) {

        define([], function () { return Gamepad; });

    } else if (typeof module === 'object' && module.exports !== undefined) {

        module.exports = Gamepad;

    } else {

        window.Gamepad = Gamepad;

    }

}());
/*globaldefine:false */ 
//mousetrap.js 1.6.3
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.3
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return Mousetrap;
        });
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);

//The Engine/Framework Code Starts Here!!!
//Variables:
var Opera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
	Firefox = typeof InstallTrigger !== 'undefined',
	Safari = /constructor/i.test(window.HTMLElement) || (function (p)
	{
		return p.toString() === "[object SafariRemoteNotification]";
	})(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)),
	IE = false || !!document.documentMode,
	Chrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),
	iOS = navigator.userAgent.match(/iPhone|iPad|iPod|Apple-iPhone/i),
	Android = navigator.userAgent.match(/Android/i),
	Mac = navigator.userAgent.match(/Macintosh|Intel Mac OS X/i),
	Windows = navigator.userAgent.match(/Windows|Windows Phone|Windows NT/i),
	Windows_Phone = navigator.userAgent.match(/Windows Phone/i),
	Blackberry = navigator.userAgent.match(/Blackberry|BB/i),
	Linux = navigator.userAgent.match(/Android|Linux|Ubuntu|X11/i),
	Ubuntu = navigator.userAgent.match(/Ubuntu|X11/i),
	Chromecast = navigator.userAgent.match(/CrKey/i),
	Chrome_OS = navigator.userAgent.match(/CrOS/i),
	PS4 = navigator.userAgent.match(/PlayStation 4/i),
	Playstation = navigator.userAgent.match(/PlayStation/i),
	PSVita = navigator.userAgent.match(/PlayStation Vita/i),
	XB1 = navigator.userAgent.match(/Xbox One/i),
	XB1S = navigator.userAgent.match(/XBOX_ONE_ED/i),
	XBOX = navigator.userAgent.match(/Xbox/i),
	Nintendo = navigator.userAgent.match(/Nintendo/i),
	N_3DS = navigator.userAgent.match(/Nintendo 3DS/i),
	WiiU = navigator.userAgent.match(/Nintendo WiiU/i),
	FireTV = navigator.userAgent.match(/AFTS/i),
	Roku_Ultra = navigator.userAgent.match(/Roku4640X/i),
	Roku = navigator.userAgent.match(/Roku/i),
	Google_Nexus_Player = navigator.userAgent.match(/Nexus Player/i),
	Minix_NEO_X5 = navigator.userAgent.match(/NEO-X5/i),
	AppleTV = navigator.userAgent.match(/AppleTV/i),
	Kindle = navigator.userAgent.match(/Kindle/i),
	Google_Bot = navigator.userAgent.match(/Googlebot/i),
	ChromeDevice = navigator.userAgent.match(/Cr/i),
	Bing_Bot = navigator.userAgent.match(/bingbot/i),
	Yahoo_Bot = navigator.userAgent.match(/Yahoo!/i),
	Desktop = navigator.userAgent.match(/Windows|Windows Phone|Windows NT|Macintosh|Intel Mac OS X|Android|Linux|Ubuntu|X11|CrKey|CrOS/i),
	Mobile = navigator.userAgent.match(/Android|Linux|Ubuntu|iPhone|iPad|iPod|Apple-iPhone|Blackberry|BB|Windows Phone/i),
	Console = navigator.userAgent.match(/PlayStation|Nintendo|Xbox|XBOX/i),
	TV = navigator.userAgent.match(/AppleTV|CrKey|CrOS|Roku|AFTS|Nexus Player/i),
	JRE = navigator.javaEnabled(),
	Language = navigator.language,
	Online = navigator.onLine,
	BrowserClientPlatform = navigator.platform,
	OS = window.navigator.userAgent,
	RAM = navigator.deviceMemory,
	OS_Codename = window.navigator.oscpu,
	Location = navigator.geolocation,
	Device_Languages = navigator.languages,
	ScreenHeight = screen.height,
	ScreenWidth = screen.width,
	WindowHeight = window.innerHeight,
	WindowWidth = window.innerWidth,
	RandomAlpha = Math.random(),
	CanvasHeight,
	CanvasWidth,
	calltime = performance.now(),
	RandomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
	RED = "red",
	ORANGE = "orange",
	YELLOW = "yellow",
	GREEN = "green",
	BLUE = "blue",
	PINK = "pink",
	PURPLE = "purple",
	WHITE = "white",
	BLACK = "black",
	GREY = "grey",
	SILVER = "silver",
	CYAN = "cyan";
var u = undefined;
var cheat, Target, cakecanvas, cakepen;
//Colors
var HEXCOLOR = {
	RED: 0xFF0000,
	ORANGE: 0xFF3300,
	YELLOW: 0xFFD900,
	HONEY: 0xAA4F08,
	GREEN: 0x35CC5A,
	BLUE: 0x3500FA,
	PINK: 0xC34288,
	PURPLE: 0x650A5A,
	WHITE: 0xFFFFFF,
	BLACK: 0x000000,
	GREY: 0x424949,
	SILVER: 0xB3B6B7,
	CYAN: 0x1ABC9C
};
var XBKey = {
	A: "button_1",
	B: "button_2",
	X: "button_3",
	Y: "button_4",
	LB: "shoulder_top_left",
	RB: "shoulder_top_right",
	LT: "shoulder_bottom_left",
	RT: "shoulder_bottom_right",
	Back: "select",
	Start: "start",
	LeftAnalogStick: "stick_button_left",
	RightAnalogStick: "stick_button_right",
	Up: "d_pad_up",
	Down: "d_pad_down",
	Left: "d_pad_left",
	Right: "d_pad_right",
	XBOX_Button: "vendor"
};
var PSKey = {
	X: "button_1",
	O: "button_2",
	Square: "button_3",
	Triangle: "button_4",
	L1: "shoulder_top_left",
	R1: "shoulder_top_right",
	L2: "shoulder_bottom_left",
	R2: "shoulder_bottom_right",
	Select: "select",
	Start: "start",
	LeftAnalogStick: "stick_button_left",
	RightAnalogStick: "stick_button_right",
	Up: "d_pad_up",
	Down: "d_pad_down",
	Left: "d_pad_left",
	Right: "d_pad_right",
	Playstation_Button: "vendor"
};
//TV Keys
var TVKey = {
	Up: 38,
	Down: 40,
	Left: 37,
	Right: 39,
	ChannelUp: 516,
	ChannelDown: 517,
	F0: 588,
	F1: 589,
	F2: 590,
	F3: 591,
	Enter: 13,
	Aspect: 642,
	Info: 615,
	Return: 8,
	Option: 623,
	Zero: 48,
	One: 49,
	Two: 50,
	Three: 51,
	Four: 52,
	Five: 53,
	Six: 54,
	Seven: 55,
	Eight: 56,
	Nine: 57,
	LastView: 651,
	Play: 250,
	Pause: 19,
	Stop: 178,
	Record: 603,
	SkipToNext: 176,
	SkipToPrevious: 177,
	Next: 228,
	Previous: 227
};

//Module: Browser
var ReloadHistory = () => window.location.reload();
var NextHistory = () => window.history.forward();
var BackHistory = () => window.history.back();
var OpenURL = (url) => window.open(url);

//Module: Audio
var PlayAudio = (url) => audio = new Audio(url).play();

function Music(url)
{
	this.url = url;
	this.audio = new Audio(this.url);
	this.Play = function ()
	{
		this.audio.play();
	}
	this.Pause = function ()
	{
		this.audio.pause();
	}
	this.Resume = function ()
	{
		this.Play();
	}
};

//Module: Fullscreen API
var Fullscreen = window.fullscreen;
var ToggleFullscreen = () =>
{
	var screen = document.documentElement;
	if (screen.requestFullscreen) screen.requestFullscreen();
	if (screen.mozRequestFullScreen) screen.mozRequestFullScreen();
	if (screen.webkitRequestFullscreen) screen.webkitRequestFullscreen();
	if (screen.msRequestFullscreen) screen.msRequestFullscreen();
};

var ExitFullscreen = () =>
{
	if (document.exitFullscreen) document.exitFullscreen();
	if (document.mozCancelFullScreen) document.mozCancelFullScreen();
	if (document.webkitExitFullscreen) document.webkitExitFullscreen();
	if (document.msExitFullscreen) document.msExitFullscreen();
};

//Module: Storage(JSON)
//Cake Saving Game To Local Storage API Using JSON
var Save = (variable_name, value) => localStorage.setItem(variable_name, JSON.stringify(value));
var Load = (variable_name) => JSON.parse(localStorage.getItem(variable_name));
var Modify = (variable_name, value) => localStorage[variable_name] = value;
var ClearData = () => localStorage.clear();

//Module: Tracking
//An Tracking Objects,PC,Player,And Game Specifications For Cake Game Framework!!!
//Works Successfully But It Still In Development!!!
var RAM = navigator.deviceMemory;
var OS_Codename = window.navigator.oscpu;
var Location = navigator.geolocation;
var Device_Languages = navigator.languages;
var TrackGameObject = (object) => console.info(`Object ${object.name} Properties:\nX Position: ${object.x}\nY Position: ${object.y}\nWidth: ${object.width}\nHeight: ${object.width}\nSpeed X: ${object.speedX}\nSpeed Y: ${object.speedY}\nGravity: ${object.gravity}\nGravity Speed: ${object.gravitySpeed}\nBouncing: ${object.bounce}\n`);
var TrackWebGL = () =>
{
	var gl = document.createElement("canvas").getContext("webgl"),
		ext = gl.getExtension("WEBGL_debug_renderer_info");
	console.info(`WebGL Properties:\nWebGL Version: ${gl.getParameter(gl.VERSION)}\nWebGL GLSL Version: ${gl.getParameter(gl.SHADING_LANGUAGE_VERSION)}\nWebGL Vendor/Provider: ${gl.getParameter(gl.VENDOR)}\nWebGL GPU Vendor: ${gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)}\nPC GPU: ${gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)}\n`);
};
var TrackDevice = () => console.info(`Device Info:\n Device OS: ${window.navigator.userAgent}\nDevice Browser OS: ${navigator.platform}\nDevice Language: ${navigator.language}\nJava Enabled: ${navigator.javaEnabled()}\nIs The Device Online: ${navigator.onLine}\nDevice RAM: ${navigator.deviceMemory} GB\nOperating System Real Name: ${window.navigator.oscpu}\nDevice Location: ${navigator.geolocation}\nLanguages List: ${navigator.languages}\n`);
var TrackCanvas = () => console.info(`Game Canvas Info:\nCanvas Height: ${cakecanvas.height}\nCanvas Width: ${cakecanvas.width}\n`);

//Module: Physics
//Cake Physics Collision Detection Library!!!
//Cake Physics Collision Detection Library!!!
var CheckCollisionRect = (r1, r2) =>
{
	return (r1.x < r2.x + r2.width && r1.x + r1.width > r2.x && r1.y < r2.y + r2.height && r1.y + r1.height > r2.y && r1.collidable && r2.collidable);
};
var CheckCollisionRectAdvanced = (r_1_x, r_1_y, r_1_w, r_1_h, r_2_x, r_2_y, r_2_w, r_2_h) =>
{
	return (r_1_x < r_2_x + r_2_w && r_1_x + r_1_w > r_2_x && r_1_y < r_2_y + r_2_h && r_1_y + r_1_h > r_2_y);
};
var CheckCollisionCircleAdvanced = (c_1_x, c_1_y, c_1_r, c_2_x, c_2_y, c_2_r) =>
{
	return (Math.sqrt((c_1_x - c_2_x * c_1_x - c_2_x) + (c_1_y + c_2_y * c_1_y + c_2_y)) < c_1_r + c_2_r);
};
var CheckCollisionCircle = (c1, c2) =>
{
	return (Math.sqrt((c1.x - c2.x * c1.x - c2.x) + (c1.y + c2.y * c1.y + c2.y)) < c1.radius + c2.radius && c1.collidable && c2.collidable);
};
var CheckCollisionCircleRectAdvanced = (c_1_x, c_1_y, c_1_r, r_1_x, r_1_y, r_1_w, r_1_h) =>
{
	if (Math.abs(c_1_x - r_1_x - r_1_w / 2) > (r_1_w / 2 + c_1_r) || Math.abs(c_1_y - r_1_y - r_1_h / 2) > (r_1_h / 2 + c_1_r))
	{
		return false;
	}
	if (Math.abs(c_1_x - r_1_x - r_1_w / 2) <= (r_1_w / 2) || Math.abs(c_1_y - r_1_y - r_1_h / 2) <= (r_1_h / 2))
	{
		return true;
	}
	return (Math.abs(c_1_x - r_1_x - r_1_w / 2) - r_1_w / 2 * Math.abs(c_1_x - r_1_x - r_1_w / 2) - r_1_w / 2 + Math.abs(c_1_y - r_1_y - r_1_h / 2) - r_1_h / 2 * Math.abs(c_1_y - r_1_y - r_1_h / 2) - r_1_h / 2 <= (c_1_r * c_1_r));
};
var CheckCollisionCircleRect = (c1, r1) =>
{
	if (Math.abs(c1.x - r1.x - r1.width / 2) > (r1.width / 2 + c1.radius) || Math.abs(c1.y - r1.y - r1.height / 2) > (r1.height / 2 + c1.radius))
	{
		return false;
	}
	if (Math.abs(c1.x - r1.x - r1.width / 2) <= (r1.width / 2) || Math.abs(c1.y - r1.y - r1.height / 2) <= (r1.height / 2))
	{
		return true;
	}
	return (Math.abs(c1.x - r1.x - r1.width / 2) - r1.width / 2 * Math.abs(c1.x - r1.x - r1.width / 2) - r1.width / 2 + Math.abs(c1.y - r1.y - r1.height / 2) - r1.height / 2 * Math.abs(c1.y - r1.y - r1.height / 2) - r1.height / 2 <= (c1.radius * c1.radius) && c1.collidable && c2.collidable);
};
var CheckCanvasCollisionLeft = (object) =>
{
	return (object.x <= object.width * 0.5);
};
var CheckCanvasCollisionLeftAdvanced = (o_x, o_w) =>
{
	return (o_x <= o_w * 0.5);
};
var CheckCanvasCollisionRight = (object) =>
{
	return (object.x + object.width >= cakecanvas.width + object.width * 0.5);
};
var CheckCanvasCollisionRightAdvanced = (o_x, o_w) =>
{
	return (o_x + o_w >= cakecanvas.width + o_w * 0.5);
};
var CheckCanvasCollisionTop = (object) =>
{
	return (object.y <= object.height * 0.5);
};
var CheckCanvasCollisionTopAdvanced = (o_y, o_h) =>
{
	return (o_y <= o_h * 0.5);
};
var CheckCanvasCollisionBottom = (object) =>
{
	return (object.y + object.height >= cakecanvas.height + object.height * 0.5);
};
var CheckCanvasCollisionBottomAdvanced = (o_y, o_h) =>
{
	return (o_y + o_h >= cakecanvas.height + o_h * 0.5);
};
//In Test(For Circles!!!)
var CheckCanvasCollisionBottomCircle = (c1) =>
{
	return (c1.y + c1.size >= cakecanvas.height);
};
var CheckCanvasCollisionTopCircle = (c1) =>
{
	return (c1.y - c1.size <= 0);
};
var CheckCanvasCollisionLeftCircle = (c1) =>
{
	return (c1.x + c1.size <= 0);
};
var CheckCanvasCollisionRightCircle = (c1) =>
{
	return (c1.x + c1.size >= cakecanvas.width);
};
var CheckCanvasCollisionBottomCircleAdvanced = (c_1_y, c_1_r) =>
{
	return (c_1_y + c_1_r >= cakecanvas.height);
};
var CheckCanvasCollisionTopCircleAdvanced = (c_1_y, c_1_r) =>
{
	return (c_1_y - c_1_r <= 0);
};
var CheckCanvasCollisionLeftCircleAdvanced = (c_1_x, c_1_r) =>
{
	return (c_1_x + c_1_r <= 0);
};
var CheckCanvasCollisionRightCircleAdvanced = (c_1_x, c_1, r) =>
{
	return (c_1_x + c_1_r >= cakecanvas.width);
};

//Module: Mobile
//Created By Rabia Alhaffar In 23/April/2019
//An Library Specified To Use With Smartphones For Cake Game Framework
var Vibrate = (x) => window.navigator.vibrate(x);
var StopVibrating = () => window.navigator.vibrate(0);
var ShowBatteryStatus = () => console.log("Battery Status: " + window.navigator.battery.level * 100 + "%");
var UnlockDeviceRotation = () => ScreenOrientation.unlock();
var LockDeviceRotation = (position) => ScreenOrientation.lock(position);
/*
Position Could Be:

    "any"
    "natural"
    "landscape"
    "portrait"
    "portrait-primary"
    "portrait-secondary"
    "landscape-primary"
    "landscape-secondary"

*/

//Module: Graphics(2D)
//Cake 2D Graphics Library!!!
//Always Needs More Additions And Updates!!!
//If You Calling A Function With Undefined Values You Defined,Use u Instead Of undefined Or NaN
//Defined Values
var WindowHeight = window.innerHeight,
	WindowWidth = window.innerWidth,
	ScreenHeight = screen.height,
	ScreenWidth = screen.width,
	RandomAlpha = Math.random(),
	RandomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
//Undefined Values(Defined It's Value When You Initialize The Engine In-Game Code!!!)
var CanvasHeight, CanvasWidth, mode, texture, RandomX, RandomY, HalfCanvasHeight, HalfCanvasWidth, cakecanvas, cakepen;
var DrawText = (x, y, text, color, stroke_color, textAlign) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(text)) text = "";
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = color;
	if (Unknown(textAlign)) textAlign = "";
	cakepen.fillStyle = color, cakepen.strokeStyle = stroke_color, cakepen.textAlign = textAlign;
	if (mode == "fill") cakepen.fillText(text, x, y);
	if (mode == "stroke") cakepen.strokeText(text, x, y);
	if (mode == "custom")
	{
		cakepen.fillText(text, x, y);
		cakepen.strokeText(text, x, y);
	}
};
var SetFont = (textfont) =>
{
	if (Unknown(textfont)) cakepen.font = "12px arial";
	cakepen.font = textfont;
};
var SetShadowProperties = (shadowOffsetX, shadowOffsetY, shadowcolor, shadowblur) =>
{
	if (Unknown(shadowOffsetX)) cakepen.shadowOffsetX = 0;
	if (Unknown(shadowOffsetY)) cakepen.shadowOffsetY = 0;
	if (Unknown(shadowcolor)) cakepen.shadowColor = "black";
	if (Unknown(shadowblur)) cakepen.shadowBlur = "0px";
	cakepen.shadowOffsetX = shadowOffsetX, cakepen.shadowOffsetY = shadowOffsetY, cakepen.shadowColor = shadowcolor, cakepen.shadowBlur = shadowblur;
};
var SetLineProperties = (line_width, line_height) =>
{
	if (Unknown(line_h)) line_height = 1;
	if (Unknown(line_w)) line_width = 1;
	cakepen.lineHeight = line_height, cakepen.lineWidth = line_width;
};
var DrawRect = (x, y, width, height, color, stroke_color) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(height)) height = 0;
	if (Unknown(width)) width = 0;
	if (!Unknown(color)) cakepen.fillStyle = color;
	if (Unknown(color)) cakepen.fillStyle = "black";
	if (!Unknown(stroke_color)) cakepen.strokeStyle = stroke_color;
	if (Unknown(stroke_color)) cakepen.strokeStyle = color;
	if (mode == "fill") cakepen.fillRect(x, y, width, height);
	if (mode == "stroke") cakepen.strokeRect(x, y, width, height);
	if (mode == "custom")
	{
		cakepen.fillRect(x, y, width, height);
		cakepen.stroke();
	}
};

var DrawLine = (line_height, line_width, start_x, start_y, end_x, end_y, color) =>
{
	if (Unknown(start_x)) start_x = 0;
	if (Unknown(start_y)) start_y = 0;
	if (Unknown(end_x)) end_x = 0;
	if (Unknown(end_y)) end_y = 0;
	if (Unknown(line_h)) line_height = 1;
	if (Unknown(line_w)) line_width = 1;
	cakepen.lineHeight = line_height, cakepen.lineWidth = line_width;
	cakepen.beginPath();
	if (Unknown(color)) color = "black";
	cakepen.strokeStyle = color;
	cakepen.moveTo(start_x, start_y);
	cakepen.lineTo(end_x, end_y);
	cakepen.stroke();
	cakepen.closePath();
};

var DrawGrid = (gridsize, color) =>
{
	if (Unknown(gridsize)) gridsize = 10;
	if (Unknown(color)) color = "black";
	cakepen.fillStyle = color;
	var grid_loop_width = cakecanvas.width / gridsize,
		grid_loop_height = cakecanvas.height / gridsize;
	var x = 0,
		y = 0;
	for (var i = 0; i < grid_loop_height; i++)
	{
		for (z = 0; z < grid_loop_width; z++)
		{
			cakepen.strokeRect(x, y, gridsize, gridsize);
			cakepen.strokeRect(x + gridsize, y, gridsize, gridsize);
			x = x + gridsize;
		}
		x = 0, y = y + gridsize;
	}
};
var DrawCircle = (x, y, radius, color, stroke_color) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(radius)) radius = 1;
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = "black";
	cakepen.fillStyle = color, cakepen.strokeStyle = stroke_color;
	cakepen.beginPath();
	cakepen.arc(x, y, radius, 90, 180 * Math.PI);
	if (mode == "fill") cakepen.fill();
	if (mode == "stroke") cakepen.stroke();
	if (mode == "custom")
	{
		cakepen.stroke();
		cakepen.fill();
	}
	cakepen.closePath();
};
var DrawArc = (x, y, radius, color, stroke_color, startAngle, endAngle) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(radius)) radius = 1;
	if (Unknown(startAngle)) startAngle = 90;
	if (Unknown(endAngle)) endAngle = 180;
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = "black";
	cakepen.fillStyle = color, cakepen.strokeStyle = stroke_color;
	cakepen.beginPath();
	cakepen.arc(x, y, radius, startAngle, endAngle);
	if (mode == "fill") cakepen.fill();
	if (mode == "stroke") cakepen.stroke();
	if (mode == "custom")
	{
		cakepen.stroke();
		cakepen.fill();
	}
	cakepen.closePath();
};

var DrawTri = (a, b, c, size, color, stroke_color) =>
{
	if (Unknown(a)) a = 0;
	if (Unknown(b)) b = 0;
	if (Unknown(c)) c = 0;
	if (Unknown(size)) size = 0;
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = color;
	cakepen.fillStyle = color, cakepen.strokeStyle = stroke_color;
	cakepen.beginPath();
	cakepen.moveTo(a, b);
	cakepen.lineTo(b, c);
	cakepen.lineTo(c, a);
	cakepen.moveTo(a, b);
	if (mode == "fill") cakepen.fill();
	if (mode == "stroke") cakepen.stroke();
	if (mode == "custom")
	{
		cakepen.stroke();
		cakepen.fill();
	}
	cakepen.closePath();
};

var DrawTriangle = (x1, y1, x2, y2, x3, y3, size, color, stroke_color) =>
{
	if (Unknown(x1)) x1 = 0;
	if (Unknown(y1)) y1 = 0;
	if (Unknown(x2)) x2 = 0;
	if (Unknown(y2)) y2 = 0;
	if (Unknown(x3)) x3 = 0;
	if (Unknown(y3)) y3 = 0;
	if (Unknown(size)) size = 0;
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = color;
	cakepen.fillStyle = color;
	cakepen.strokeStyle = stroke_color;
	cakepen.beginPath();
	cakepen.moveTo(x1, y1);
	cakepen.lineTo(x2, y2);
	cakepen.lineTo(x3, y3);
	cakepen.lineTo(x1, y1);
	if (mode == "fill") cakepen.fill();
	if (mode == "stroke") cakepen.stroke();
	if (mode == "custom")
	{
		cakepen.stroke();
		cakepen.fill();
	}
	cakepen.closePath();
};
var ClearCanvas = () =>
{
	cakepen.clearRect(0, 0, cakecanvas.height, cakecanvas.width);
	cakecanvas.height = cakecanvas.height, cakecanvas.width = cakecanvas.width;
};

var DrawPolygon = (points, color, stroke_color) =>
{
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = color;
	cakepen.fillStyle = color, cakepen.strokeStyle = stroke_color;
	if (points.length <= 0) return;
	cakepen.moveTo(points[0][0], points[0][1]);
	for (var i = 0; i < points.length; i++) cakepen.lineTo(points[i][0], points[i][1]);
	if (mode == "fill") cakepen.fill();
	if (mode == "stroke") cakepen.stroke();
	if (mode == "custom")
	{
		cakepen.fill();
		cakepen.stroke();
	}
};

var DrawPolygonLineSides = (x, y, size, sides, color, stroke_color, start_angle, anticlockwise) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(size)) size = 1;
	if (Unknown(color)) color = "black";
	if (Unknown(sides)) sides = 1;
	if (Unknown(anticlockwise)) anticlockwise = false;
	if (Unknown(start_angle)) start_angle = 90;
	if (Unknown(end_angle)) end_angle = 180 * Math.PI;
	if (Unknown(stroke_color)) stroke_color = color;
	cakepen.fillStyle = color, cakepen.strokeStyle = stroke_color;
	cakepen.beginPath();
	if (sides < 3) return;
	var a = 360 / sides;
	a = anticlockwise ? -a : a;
	cakepen.moveTo(x, y);
	for (var i = 1; i < sides; i++) cakepen.lineTo(size * Math.cos(a * i), size * Math.sin(a * i));
	cakepen.closePath();
	cakepen.fill();
};

var DrawTexture = (url, x, y, width, height) =>
{
	texture = new Image();
	texture.src = url;
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(height)) height = 0;
	if (Unknown(width)) width = 0;
	cakepen.drawImage(texture, x, y, width, height);
};

var Scale = (scale_width, scale_height) =>
{
	if (Unknown(scale_height)) scale_height = 0;
	if (Unknown(scale_width)) scale_width = 0;
	cakepen.scale(scale_height, scale_width);
};
var Rotate = (angle) =>
{
	if (Unknown(angle)) angle = 0;
	cakepen.rotate(angle);
};
var Translate = (x, y) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	cakepen.translate(x, y);
};

var Transform = (a, b, mode) =>
{
	if (Unknown(a)) a = 0;
	if (Unknown(b)) b = 0;
	if (mode == "translate") cakepen.translate(a, b);
	if (mode == "rotate") cakepen.rotate(a);
	if (mode == "scale") cakepen.scale(a, b);
};

var DrawFilledGrid = (gridsize, color, stroke_color) =>
{
	if (Unknown(gridsize)) gridsize = 10;
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = color;
	cakepen.strokeStyle = stroke_color;
	cakepen.fillStyle = color;
	var grid_loop_width = cakecanvas.width / gridsize,
		grid_loop_height = cakecanvas.height / gridsize,
		x = 0,
		y = 0;
	for (var i = 0; i < grid_loop_height; i++)
	{
		for (z = 0; z < grid_loop_width; z++)
		{
			cakepen.fillRect(x, y, gridsize, gridsize);
			cakepen.strokeRect(x, y, gridsize, gridsize);
			cakepen.fillRect(x + gridsize, y, gridsize, gridsize);
			cakepen.strokeRect(x + gridsize, y, gridsize, gridsize);
			x = x + gridsize;
		}
		x = 0, y = y + gridsize;
	}
};

var DrawSuperFilledGrid = (gridsize) =>
{
	if (Unknown(gridsize)) gridsize = 0;
	var grid_loop_width = cakecanvas.width / gridsize,
		grid_loop_height = cakecanvas.height / gridsize,
		x = 0,
		y = 0;
	for (var i = 0; i < grid_loop_height; i++)
	{
		for (z = 0; z < grid_loop_width; z++)
		{
			cakepen.fillStyle = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
			cakepen.fillRect(x, y, gridsize, gridsize);
			cakepen.fillStyle = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
			cakepen.fillRect(x + gridsize, y, gridsize, gridsize);
			x = x + gridsize;
		}
		x = 0, y = y + gridsize;
	}
};
var RemoveAlpha = () => cakepen.globalAlpha = 0;
var SetTransform = (horizontal_scaling, horizontal_skewing, vertical_skewing, vertical_scaling, horizontal_moving, vertical_moving) =>
{
	if (Unknown(horizontal_scaling)) horizontal_scaling = 0;
	if (Unknown(horizontal_skewing)) horizontal_skewing = 0;
	if (Unknown(vertical_skewing)) vertical_skewing = 0;
	if (Unknown(vertical_scaling)) vertical_scaling = 0;
	if (Unknown(horizontal_moving)) horizontal_moving = 0;
	if (Unknown(vertical_moving)) vertical_moving = 0;
	cakepen.setTransform(horizontal_scaling, horizontal_skewing, vertical_skewing, vertical_scaling, horizontal_moving, vertical_moving);
};

var DoTransform = (horizontal_scaling, horizontal_skewing, vertical_skewing, vertical_scaling, horizontal_moving, vertical_moving) =>
{
	if (Unknown(horizontal_scaling)) horizontal_scaling = 0;
	if (Unknown(horizontal_skewing)) horizontal_skewing = 0;
	if (Unknown(vertical_skewing)) vertical_skewing = 0;
	if (Unknown(vertical_scaling)) vertical_scaling = 0;
	if (Unknown(horizontal_moving)) horizontal_moving = 0;
	if (Unknown(vertical_moving)) vertical_moving = 0;
	cakepen.transform(horizontal_scaling, horizontal_skewing, vertical_skewing, vertical_scaling, horizontal_moving, vertical_moving);
};

var CreateTexturePattern = (texture_id, repeat_mode) =>
{
	var texture = document.getElementById(texture_id),
		texture_patttern = cakepen.createPattern(texture, repeat_mode);
	cakepen.rect(0, 0, cakecanvas.height, cakecanvas.width);
	cakepen.fillStyle = texture_patttern;
	cakepen.fill();
};

var DrawPixel = (x, y, size, color, show_grid) =>
{
	if (Unknown(color)) color = "black";
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(size)) size = 0;
	if (Unknown(show_grid)) show_grid = false;
	cakepen.fillStyle = color, cakepen.strokeStyle = "black";
	cakepen.fillRect(x, y, size, size);
	if (show_grid) cakepen.strokeRect(x, y, size, size);
};

var ClearColor = (color) =>
{
	if (Unknown(color)) color = "black";
	cakepen.fillStyle = color;
	cakepen.clearRect(0, 0, cakecanvas.height, cakecanvas.width);
	cakecanvas.height = cakecanvas.height, cakecanvas.width = cakecanvas.width;
	cakepen.fillRect(0, 0, cakecanvas.height, cakecanvas.width);
};
var SetAlpha = (alpha) =>
{
	if (Unknown(alpha)) alpha = 1;
	cakepen.globalAlpha = alpha;
};
var SetBackgroundImage = (url) => document.body.style.backgroundImage = `url(${url.toString()})`;
var SetBackgroundColor = (color) =>
{
	if (Unknown(color)) color = "white";
	document.body.style.color = color, document.body.style.backgroundColor = color;
};
var SetCanvasBackgroundImage = (url) => cakecanvas.style.backgroundImage = `url(${url.toString()})`;
var RemoveCanvasBackgroundImage = () => cakecanvas.style.backgroundImage = "none";
var RemoveCanvasBackgroundColor = () => cakecanvas.style.backgroundColor = "none";
var SetCanvasBackgroundColor = (color) =>
{
	if (Unknown(color)) color = "white";
	cakecanvas.style.backgroundColor = color;
};
var MakeCanvasFullSize = () =>
{
	cakecanvas.style.height = "100%", cakecanvas.style.width = "100%";
};
var CreateCanvas = (width, height, border_style) =>
{
	if (Unknown(height)) height = 0;
	if (Unknown(width)) width = 0;
	if (Unknown(border_style)) border_style = "none";
	var canvas = document.createElement("canvas");
	canvas.id = "cake-canvas", canvas.height = height, canvas.width = width, canvas.style.border = border_style;
	document.getElementsByTagName("body")[0].appendChild(canvas);
};

var DrawSquare = (x, y, size, color, stroke_color) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(size)) size = 0;
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = color;
	cakepen.fillStyle = color, cakepen.strokeStyle = stroke_color;
	if (mode == "fill") cakepen.fillRect(x, y, size, size);
	if (mode == "stroke") cakepen.strokeRect(x, y, size, size);
	if (mode == "custom")
	{
		cakepen.fillRect(x, y, size, size);
		cakepen.stroke();
	}
};

var DrawSnowflake = (x, y, length, color, stroke_color) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(length)) length = 0;
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = color;
	cakepen.fillStyle = color, cakepen.strokeStyle = stroke_color;
	var deg = Math.PI / 180;
	cakepen.translate(x, y);
	cakepen.moveTo(x, y);
	Leg(mode);
	cakepen.rotate(-120 * deg);
	Leg(mode);
	cakepen.rotate(-120 * deg);
	Leg(mode);
	cakepen.closePath();
	var Leg = (mode) =>
	{
		if (mode == 0) cakepen.lineTo(length, 0);
		else
		{
			cakepen.scale(1 / 3, 1 / 3);
			Leg(mode - 1);
			cakepen.rotate(60 * deg);
			Leg(mode - 1);
			cakepen.rotate(-120 * deg);
			Leg(mode - 1);
			cakepen.rotate(60 * deg);
			Leg(mode - 1);
		}
		cakepen.translate(length, 0);
	};
};
var DrawRoundedRect = (x, y, width, height, size, color, stroke_color) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(width)) width = 0;
	if (Unknown(height)) height = 0;
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = color;
	cakepen.fillStyle = color, cakepen.strokeStyle = stroke_color;
	if (typeof size === "undefined") size = 5;
	cakepen.beginPath();
	cakepen.moveTo(x + size, y);
	cakepen.lineTo(x + width - size, y);
	cakepen.quadraticCurveTo(x + width, y, x + width, y + size);
	cakepen.lineTo(x + width, y + height - size);
	cakepen.quadraticCurveTo(x + width, y + height, x + width - size, y + height);
	cakepen.lineTo(x + size, y + height);
	cakepen.quadraticCurveTo(x, y + height, x, y + height - size);
	cakepen.lineTo(x, y + size);
	cakepen.quadraticCurveTo(x, y, x + size, y);
	cakepen.closePath();
	if (mode == "fill") cakepen.fill();
	if (mode == "stroke") cakepen.stroke();
	if (mode == "custom")
	{
		cakepen.fill();
		cakepen.stroke();
	}
};
var ResetAlpha = () => cakepen.globalAlpha = 1;
var Initialize = (c) =>
{
	if (Unknown(c)) c = 1;
	cakecanvas = document.getElementsByTagName("canvas")[c - 1];
	cakepen = cakecanvas.getContext("2d");
	CanvasHeight = cakecanvas.height, CanvasWidth = cakecanvas.width, HalfCanvasHeight = CanvasHeight * 0.5, HalfCanvasWidth = CanvasWidth * 0.5, RandomX = Math.floor(Math.random() * CanvasWidth), RandomY = Math.floor(Math.random() * CanvasHeight);
};
var ResizeCanvas = (canvas_width, canvas_height) =>
{
	cakecanvas.height = canvas_height, cakecanvas.width = canvas_width;
};
var SetResolution = (canvas_width, canvas_height) =>
{
	cakecanvas.style.height = canvas_height, cakecanvas.style.width = canvas_width;
};
var SetAntialiasing = (enabled, quality) =>
{
	if (Unknown(enabled)) enabled = true;
	if (Unknown(quality)) quality = "high";
	cakepen.imageSmoothingEnabled = enabled;
	if (cakepen.imageSmoothingEnabled) cakepen.imageSmoothingQuality = quality;
};
var SetDrawingMode = (drawing_mode) =>
{
	if (Unknown(drawing_mode)) drawing_mode = "fill";
	mode = drawing_mode;
};
var LineDash = (dash) => cakepen.setLineDash(dash);
var RemoveCanvas = () =>
{
	cakecanvas = document.getElementsByTagName("canvas")[0];
	cakecanvas.parentNode.removeChild(cakecanvas);
};
var MeasureText = (text) => cakepen.measureText(text);
var EnableDOMInsideCanvas = (elements) =>
{
	cakecanvas.style.position = "relative";
	var elm = document.querySelectorAll(elements);
	elm.style.position = "absolute";
};
var SetLineJoining = (mode) => cakepen.lineJoin = mode;
var DrawEllipse = (x, y, radius, color, stroke_color, rotation, start_angle, end_angle, anticlockwise) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(rotation)) rotation = 0;
	if (Unknown(start_angle)) start_angle = 90;
	if (Unknown(end_angle)) end_angle = 180;
	if (Unknown(anticlockwise)) anticlockwise = false;
	if (Unknown(radius)) radius = 1;
	if (Unknown(color)) color = "black";
	if (Unknown(stroke_color)) stroke_color = color;
	cakepen.fillStyle = color;
	cakepen.strokeStyle = stroke_color;
	if (anticlockwise) cakepen.ellipse(x, y, radius, radius, rotation, start_angle, end_angle * Math.PI, true);
	else cakepen.ellipse(x, y, radius, radius, rotation, start_angle, end_angle * Math.PI, false);
};
var Cut = () => cakepen.clip();
var SetTextDrawingDirection = (dir) => cakepen.direction = dir;
var DoAroundCanvas = (each, fun) =>
{
	if (Unknown(each)) each = 0;
	var grid_loop_width = CanvasWidth / each,
		grid_loop_height = CanvasHeight / each,
		x = 0,
		y = 0;
	for (var i = 0; i < grid_loop_height; i++)
	{
		for (z = 0; z < grid_loop_width; z++)
		{
			setTimeout(fun, 0);
			x = 0, x = x + each;
		}
		x = 0, y = y + each;
	}
};
var Color = (c) => cakepen.fillStyle = c;
var RGB = (r, g, b) =>
{
	if (Unknown(r)) r = 0;
	if (Unknown(g)) g = 0;
	if (Unknown(b)) b = 0;
	return `rgb(${r.toString()},${g.toString()},${b.toString()})`;
};

var TranslateBackground = (horizontal, vertical) =>
{
	cakecanvas.style.backgroundAttachment = "fixed";
	cakecanvas.style.backgroundRepeat = "no-repeat";
	cakecanvas.style.backgroundPosition = (horizontal + "px " + vertical + "px").toString();
};

var SetBackgroundPosition = (pos) =>
{
	cakecanvas.style.backgroundAttachment = "fixed";
	cakecanvas.style.backgroundRepeat = "no-repeat";
	cakecanvas.style.backgroundPosition = pos;
};
var SwitchCanvas = (c) =>
{
	if (Unknown(c)) c = 1;
	cakecanvas = document.getElementsByTagName("canvas")[c - 1];
};
var SwitchContext = (c) =>
{
	if (Unknown(c)) c = "2d";
	cakepen = cakecanvas.getContext(c);
};
var SwitchContent = (canvas, c) =>
{
	cakecanvas = document.getElementsByTagName("canvas")[canvas - 1];
	cakepen = cakecanvas.getContext(c);
};
//For SpriteSheets Drawing!!!
var DrawImageAdvanced = (source_x, source_y, source_width, source_height, x, y, width, height) =>
{
	texture = new Image();
	texture.src = url;
	if (Unknown(source_x)) source_x = 0;
	if (Unknown(source_y)) source_y = 0;
	if (Unknown(source_height)) source_height = 0;
	if (Unknown(source_width)) source_width = 0;
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(height)) height = 0;
	if (Unknown(width)) width = 0
	cakepen.drawImage(source_x, source_y, source_width, source_height, x, y, width, height);
};
var HideCanvas = () => cakecanvas.style.visibility = "hidden";
var ShowCanvas = () => cakecanvas.style.visibility = "visible";
var ConvertToImage = () => cakecanvas.toDataURL();
var Screenshot = () => window.open(cakecanvas.toDataURL());
var Fitscreen = (res, type) =>
{
	var nwidth = res[0],
		nheight = res[1],
		dwidth = window.innerWidth,
		dheight = window.innerHeight,
		modeused, fillnative = Math.max(dwidth / nwidth, dheight / nheight),
		fitnative = Math.min(dwidth / nwidth, dheight / nheight);
	if (type == "fit") modeused = fitnative;
	if (type == "fill") modeused = fillnative;
	cakecanvas.style.width = `${dwidth}px`, cakecanvas.style.height = `${dheight}px`, cakecanvas.width = dwidth, cakecanvas.height = dheight;
	cakepen.setTransform(modeused, 0, 0, fitnative, Math.floor(dwidth / 2), Math.floor(dheight / 2));
	cakepen.imageSmoothingEnabled = fitnative < 1 ? true : false;
};
var Fitwindow = () =>
{
	cakecanvas.width = document.innerWidth;
	cakecanvas.height = document.innerHeight;
};
var UseAllCanvases = (context) =>
{
	if (Unknown(context)) context = "2d";
	var canvases = document.getElementsByClassName("canvas");
	for (var i = 0; i < canvases.length; i++) cakepen = canvases[i].getContext(context);
};

//For SpriteSheets Drawing!!!
var DrawImageAdvanced = (source_x, source_y, source_width, source_height, x, y, width, height) =>
{
	texture = new Image();
	texture.src = url;
	if (Unknown(source_x)) source_x = 0;
	if (Unknown(source_y)) source_y = 0;
	if (Unknown(source_height)) source_height = 0;
	if (Unknown(source_width)) source_width = 0;
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(height)) height = 0;
	if (Unknown(width)) width = 0
	cakepen.drawImage(source_x, source_y, source_width, source_height, x, y, width, height);
};
var HideCanvas = () => cakecanvas.style.visibility = "hidden";
var ShowCanvas = () => cakecanvas.style.visibility = "visible";
var ConvertToImage = () => cakecanvas.toDataURL();
var Screenshot = () => window.open(cakecanvas.toDataURL());
var RandomColor = () => { return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`; };
var RandomAlpha = () => { return Math.random(); };

//Module: Game
//Cake Game Library!!!
//Just For Closing Game Page As Exit Or Opening URL Or Even Restart Game!!!
var RestartGame = () => window.location.reload();
var CloseGame = () => window.close();
var Title = (document_title) => document.title = document_title;
var CrashGame = () =>
{
	while (true) console.log(0);
};
var ViewSourceCode = (index) => window.open(document.scripts[index].src);
var ViewGameSourceCode = () => window.open(document.scripts[2].src);
var StartProcess = (dir) => window.open("file:///" + dir.toString);

//Module: Components(Game Objects)
//Cake Library For Creating Players With Shape,Or Image,Or Custom Functioned Type Or Shape!!!
//In Update,Not Completed Yet!!!
//Only For 2D,3D Version Are Standalone!!!
function Rectangle(x, y, width, height, color, stroke_color, autoupdate)
{

	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.h = this.height;
	this.w = this.width;
	this.speedX = 0;
	this.speedY = 0;
	this.speed = 0;
	this.color = color;
	this.gravity = 0;
	this.stroke_color = stroke_color;
	this.alpha = 1;
	this.bounce = 0;
	this.gravitySpeed = 0;
	this.name = "";
	this.destroyed = false;
	this.rotated = false;
	this.collidable = true;
	this.rotationAngle = 0;

	this.Name = function (x)
	{
		this.name = x;
	};
	this.Rotate = function (a)
	{
		this.rotated = true, this.rotationAngle = a;
	};
	this.Draw = function ()
	{
		if (Unknown(this.x)) this.x = 0;
		if (Unknown(this.y)) this.y = 0;
		if (Unknown(this.height)) this.height = 0;
		if (Unknown(this.width)) this.width = 0;
		if (Unknown(this.stroke_color)) this.stroke_color = color;
		if (Unknown(autoupdate)) autoupdate = false;
		cakepen.strokeStyle = this.stroke_color, cakepen.globalAlpha = this.alpha, cakepen.fillStyle = this.color;
		if (this.destroyed) cakepen.globalAlpha = 0;
		if (this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.strokeRect(this.x, this.y, this.width, this.height);
		cakepen.fillRect(this.x, this.y, this.width, this.height);
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
	};

	this.UpdatePosition = function ()
	{
		this.gravitySpeed += this.gravity, this.x += this.speedX, this.y += this.speedY + this.gravitySpeed;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Floor = function ()
	{
		if (this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height;
	};
	this.FloorAndBounce = function ()
	{
		if (this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height, this.gravitySpeed = -(this.gravitySpeed * this.bounce);
	};
	this.Accelerate = function (g)
	{
		this.gravity = g;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Stop = function ()
	{
		this.speedX = 0, this.speedY = 0;
	};
	this.Translate = function (position_x, position_y)
	{
		if (Unknown(position_x)) position_x = this.x;
		if (Unknown(position_y)) position_y = this.y;
		this.x = position_x, this.y = position_y;
	};
	this.Resize = function (w, h)
	{
		if (Unknown(h)) h = this.height;
		if (Unknown(w)) w = this.width;
		this.height = h, this.width = w;
	};

	this.Force = function (force_x, force_y)
	{
		if (Unknown(force_x)) force_x = this.speedX;
		if (Unknown(force_y)) force_y = this.speedY;
		this.speedX = force_x, this.speedY = force_y;
	};

	this.Move = function (position, force)
	{
		if (Unknown(force)) force = 0;
		if (position == "up") this.speedY = Math.abs(force);
		if (position == "down") this.speedY = force;
		if (position == "left") this.speedX = Math.abs(force);
		if (position == "right") this.speedX = force;
	};
	this.Add = function (feature, code)
	{
		this.feature = code;
	};
	this.InPosition = function (x_pos, y_pos)
	{
		return (this.x == x_pos && this.y == y_pos);
	};
	if (autoupdate) this.Update();
}

function Text(x, y, text, color, font, textAlign, autoupdate)
{

	this.x = x;
	this.y = y;
	this.speedX = 0;
	this.speedY = 0;
	this.text = text;
	this.textAlign = textAlign;
	this.alpha = 1;
	this.stroke_color = "black";
	this.font = font;
	this.color = color;
	this.name = "";
	this.rotationAngle = 0;
	this.rotated = false;
	this.destroyed = false;
	this.Name = function (x)
	{
		this.name = x;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Rotate = function (a)
	{
		this.rotated = true, this.rotationAngle = a;
	};
	this.Draw = function ()
	{
		if (Unknown(this.x)) this.x = 0;
		if (Unknown(this.y)) this.y = 0;
		if (Unknown(this.text)) this.text = "";
		if (Unknown(this.font)) this.font = "12px arial";
		if (Unknown(autoupdate)) autoupdate = false;
		if (Unknown(this.textAlign)) this.textAlign = "";
		cakepen.globalAlpha = this.alpha;
		if (Unknown(this.color)) this.color = "black";
		if (Unknown(this.stroke_color)) this.stroke_color = this.color;
		cakepen.fillStyle = this.color, cakepen.strokeStyle = this.stroke_color, cakepen.font = this.font, cakepen.textAlign = this.textAlign, cakepen.globalAlpha = this.alpha;
		if (this.destroyed) cakepen.globalAlpha = 0;
		if (this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.fillText(this.text, this.x, this.y);
		cakepen.strokeText(this.text, this.x, this.y);
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
	};
	this.Highlight = function (text_color)
	{
		this.color = text_color;
	};
	this.UpdatePosition = function ()
	{
		this.x += this.speedX, this.y += this.speedY;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Stop = function ()
	{
		this.speedX = 0, this.speedY = 0;
	};

	this.Translate = function (position_x, position_y)
	{
		if (Unknown(position_x)) position_x = this.x;
		if (Unknown(position_y)) position_y = this.y;
		this.x = position_x, this.y = position_y;
	};

	this.Force = function (force_x, force_y)
	{
		if (Unknown(force_x)) force_x = this.speedX;
		if (Unknown(force_y)) force_y = this.speedY;
		this.speedX = force_x, this.speedY = force_y;
	};

	this.Move = function (position, force)
	{
		if (Unknown(force)) force = 0;
		if (position == "up") this.speedY = Math.abs(force);
		if (position == "down") this.speedY = force;
		if (position == "left") this.speedX = Math.abs(force);
		if (position == "right") this.speedX = force;
	};
	this.Add = function (feature, code)
	{
		this.feature = code;
	};
	this.InPosition = function (x_pos, y_pos)
	{
		return (this.x == x_pos && this.y == y_pos);
	};
	if (autoupdate) this.Update();
}

function Texture(url, x, y, width, height, autoupdate)
{

	this.img = new Image();
	this.img.src = url;
	this.x = x;
	this.y = y;
	this.speedX = 0;
	this.speedY = 0;
	this.bounce = 0;
	this.gravity = 0;
	this.gravitySpeed = 0;
	this.height = height;
	this.alpha = 1;
	this.width = width;
	this.h = this.height;
	this.w = this.width;
	this.color = color;
	this.destroyed = false;
	this.rotated = false;
	this.collidable = true;
	this.rotationAngle = 0;
	this.name = "";
	this.Name = function (x)
	{
		this.name = x;
	};
	this.Rotate = function (a)
	{
		this.rotated = true, this.rotationAngle = a;
	};
	this.Draw = function ()
	{
		if (Unknown(this.x)) this.x = 0;
		if (Unknown(this.y)) this.y = 0;
		if (Unknown(autoupdate)) autoupdate = false;
		cakepen.globalAlpha = this.alpha;
		if (this.destroyed) cakepen.globalAlpha = 0;
		if (this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.drawImage(this.img, this.x, this.y, this.height, this.width);
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
	};

	this.UpdatePosition = function ()
	{
		this.gravitySpeed += this.gravity, this.x += this.speedX, this.y += this.speedY;
	};
	this.Floor = function ()
	{
		if (this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height;
	};
	this.FloorAndBounce = function ()
	{
		if (this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height, this.gravitySpeed = -(this.gravitySpeed * this.bounce);
	};
	this.Accelerate = function (g)
	{
		this.gravity = g;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Stop = function ()
	{
		this.speedX = 0, this.speedY = 0;
	};
	this.Translate = function (position_x, position_y)
	{
		if (Unknown(position_x)) position_x = this.x;
		if (Unknown(position_y)) position_y = this.y;
		this.x = position_x, this.y = position_y;
	};

	this.Resize = function (w, h)
	{
		if (Unknown(h)) h = this.height;
		if (Unknown(w)) w = this.width;
		this.height = h, this.width = w;
	};

	this.Force = function (force_x, force_y)
	{
		if (Unknown(force_x)) force_x = this.speedX;
		if (Unknown(force_y)) force_y = this.speedY;
		this.speedX = force_x, this.speedY = force_y;
	};

	this.Move = function (position, force)
	{
		if (Unknown(force)) force = 0;
		if (position == "up") this.speedY = Math.abs(force);
		if (position == "down") this.speedY = force;
		if (position == "left") this.speedX = Math.abs(force);
		if (position == "right") this.speedX = force;
	};
	this.Add = function (feature, code)
	{
		this.feature = code;
	};
	this.InPosition = function (x_pos, y_pos)
	{
		return (this.x == x_pos && this.y == y_pos);
	};
	if (autoupdate) this.Update();
}

function Circle(x, y, size, color, start_angle, end_angle, autoupdate)
{
	this.x = x;
	this.y = y;
	this.a = start_angle;
	this.b = end_angle;
	this.radius = size;
	this.r = this.radius;
	this.alpha = 1;
	this.speedX = 0;
	this.speedY = 0;
	this.speed = 0;
	this.color = color;
	this.stroke = this.color;
	this.gravity = 0;
	this.bounce = 0;
	this.gravitySpeed = 0;
	this.destroyed = false;
	this.rotated = false;
	this.collidable = true;
	this.rotationAngle = 0;
	this.name = "";

	this.Name = function (x)
	{
		this.name = x;
	};
	this.Draw = function ()
	{
		if (Unknown(this.x)) this.x = 0;
		if (Unknown(this.y)) this.y = 0;
		if (Unknown(this.radius)) this.radius = 1;
		if (Unknown(this.color)) this.color = "black";
		if (Unknown(this.a)) this.a = 90;
		if (Unknown(autoupdate)) autoupdate = false;
		if (Unknown(this.b)) this.b = 180;
		cakepen.fillStyle = this.color;
		cakepen.globalAlpha = this.alpha;
		cakepen.strokeStyle = this.stroke;
		if (this.destroyed) cakepen.globalAlpha = 0;
		if (this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.beginPath();
		cakepen.arc(this.x, this.y, this.radius, this.a, this.b * Math.PI);
		cakepen.stroke();
		cakepen.fill();
		cakepen.closePath();
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
	};
	this.UpdatePosition = function ()
	{
		this.gravitySpeed += this.gravity, this.x += this.speedX, this.y += this.speedY + this.gravitySpeed;
	};
	this.Floor = function ()
	{
		if (this.y > cakecanvas.height - this.radius) this.y = cakecanvas.height - this.radius;
	};
	this.FloorAndBounce = function ()
	{
		if (this.y > cakecanvas.height - this.radius) this.y = cakecanvas.height - this.radius, this.gravitySpeed = -(this.gravitySpeed * this.bounce);
	};
	this.Accelerate = function (g)
	{
		this.gravity = g;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Rotate = function (a)
	{
		this.rotated = true, this.rotationAngle = a;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Stop = function ()
	{
		this.speedX = 0, this.speedY = 0;
	};
	this.Translate = function (position_x, position_y)
	{
		if (Unknown(position_x)) position_x = this.x;
		if (Unknown(position_y)) position_y = this.y;
		this.x = position_x, this.y = position_y;
	};
	this.Resize = function (size)
	{
		if (Unknown(size)) size = this.radius;
		this.radius = size;
	};
	this.Force = function (force_x, force_y)
	{
		if (Unknown(force_x)) force_x = this.speedX;
		if (Unknown(force_y)) force_y = this.speedY;
		this.speedX = force_x, this.speedY = force_y;
	};
	this.Move = function (position, force)
	{
		if (Unknown(force)) force = 0;
		if (position == "up") this.speedY = Math.abs(force);
		if (position == "down") this.speedY = force;
		if (position == "left") this.speedX = Math.abs(force);
		if (position == "right") this.speedX = force;
	};
	this.Add = function (feature, code)
	{
		this.feature = code;
	};
	this.InPosition = function (x_pos, y_pos)
	{
		return (this.x == x_pos && this.y == y_pos);
	};
	if (autoupdate) this.Update();
}

function Square(x, y, size, color, autoupdate)
{
	this.x = x;
	this.y = y;
	this.size = size;
	this.height = this.size;
	this.width = this.size;
	this.h = this.height;
	this.w = this.width;
	this.speedX = 0;
	this.speedY = 0;
	this.speed = 0;
	this.color = color;
	this.gravity = 0;
	this.bounce = 0;
	this.gravitySpeed = 0;
	this.destroyed = false;
	this.rotated = false;
	this.collidable = true;
	this.alpha = 1;
	this.stroke = this.color;
	this.rotationAngle = 0;
	this.name = "";

	this.Name = function (x)
	{
		this.name = x;
	};
	this.Draw = function ()
	{
		if (Unknown(this.x)) this.x = 0;
		if (Unknown(this.y)) this.y = 0;
		if (Unknown(this.size)) this.size = 0;
		if (Unknown(autoupdate)) autoupdate = false;
		if (Unknown(this.color)) this.color = "black";
		cakepen.globalAlpha = this.alpha, cakepen.strokeStyle = this.stroke, cakepen.fillStyle = this.color;
		if (this.destroyed) cakepen.globalAlpha = 0;
		if (this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.fillRect(this.x, this.y, this.size, this.size);
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
	};
	this.UpdatePosition = function ()
	{
		this.gravitySpeed += this.gravity, this.x += this.speedX, this.y += this.speedY + this.gravitySpeed;
	};
	this.Floor = function ()
	{
		if (this.y > cakecanvas.height - this.size) this.y = cakecanvas.height - this.size;
	};
	this.FloorAndBounce = function ()
	{
		if (this.y > cakecanvas.height - this.size) this.y = cakecanvas.height - this.size, this.gravitySpeed = -(this.gravitySpeed * this.bounce);
	};
	this.Accelerate = function (g)
	{
		this.gravity = g;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Rotate = function (a)
	{
		this.rotated = true, this.rotationAngle = a;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Stop = function ()
	{
		this.speedX = 0, this.speedY = 0;
	};
	this.Translate = function (position_x, position_y)
	{
		if (Unknown(position_x)) position_x = this.x;
		if (Unknown(position_y)) position_y = this.y;
		this.x = position_x, this.y = position_y;
	};
	this.Force = function (force_x, force_y)
	{
		if (Unknown(force_x)) force_x = this.speedX;
		if (Unknown(force_y)) force_y = this.speedY;
		this.speedX = force_x, this.speedY = force_y;
	};

	this.Move = function (position, force)
	{
		if (Unknown(force)) force = 0;
		if (position == "up") this.speedY = Math.abs(force);
		if (position == "down") this.speedY = force;
		if (position == "left") this.speedX = Math.abs(force);
		if (position == "right") this.speedX = force;
	};
	this.Add = function (feature, code)
	{
		this.feature = code;
	};
	this.InPosition = function (x_pos, y_pos)
	{
		return (this.x == x_pos && this.y == y_pos);
	};
	this.Resize = function (s)
	{
		if (Unknown(s)) s = this.size;
		this.size = s;
	};
	if (autoupdate) this.Update();
}

function RoundedRect(x, y, width, height, color, radius, autoupdate)
{
	this.x = x;
	this.y = y;
	this.alpha = 1;
	this.height = height;
	this.width = width;
	this.h = this.height;
	this.w = this.width;
	this.radius = radius;
	this.r = this.radius;
	this.speedX = 0;
	this.speedY = 0;
	this.speed = 0;
	this.color = color;
	this.stroke = this.color;
	this.gravity = 0;
	this.bounce = 0;
	this.gravitySpeed = 0;
	this.destroyed = false;
	this.rotated = false;
	this.collidable = true;
	this.rotationAngle = 0;
	this.name = "";
	this.Name = function (x)
	{
		this.name = x;
	};
	this.Draw = function ()
	{
		if (Unknown(this.x)) this.x = 0;
		if (Unknown(this.y)) this.y = 0;
		if (Unknown(this.height)) this.height = 0;
		if (Unknown(this.width)) this.width = 0;
		if (Unknown(this.color)) this.color = "black";
		if (Unknown(this.radius)) this.radius = 1;
		if (Unknown(autoupdate)) autoupdate = false;
		cakepen.fillStyle = this.color, cakepen.strokeStyle = this.stroke, cakepen.globalAlpha = this.alpha;
		if (this.destroyed) cakepen.globalAlpha = 0;
		if (this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.beginPath();
		cakepen.moveTo(this.x + this.radius, this.y);
		cakepen.lineTo(this.x + this.width - this.radius, this.y);
		cakepen.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width, this.y + this.radius);
		cakepen.lineTo(this.x + this.width, this.y + this.height - this.radius);
		cakepen.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + width - this.radius, this.y + this.height);
		cakepen.lineTo(this.x + this.radius, this.y + this.height);
		cakepen.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.radius);
		cakepen.lineTo(this.x, this.y + this.radius);
		cakepen.quadraticCurveTo(this.x, this.y, this.x + this.radius, this.y);
		cakepen.closePath();
		cakepen.fill();
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
	};

	this.UpdatePosition = function ()
	{
		this.gravitySpeed += this.gravity, this.x += this.speedX, this.y += this.speedY + this.gravitySpeed;
	};
	this.Floor = function ()
	{
		if (this.y > cakecanvas.height - this.size) this.y = cakecanvas.height - this.size;
	};
	this.FloorAndBounce = function ()
	{
		if (this.y > cakecanvas.height - this.size) this.y = cakecanvas.height - this.size, this.gravitySpeed = -(this.gravitySpeed * this.bounce);
	};
	this.Accelerate = function (g)
	{
		this.gravity = g;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Rotate = function (a)
	{
		this.rotated = true, this.rotationAngle = a;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Stop = function ()
	{
		this.speedX = 0, this.speedY = 0;
	};
	this.Translate = function (position_x, position_y)
	{
		if (Unknown(position_x)) position_x = this.x;
		if (Unknown(position_y)) position_y = this.y;
		this.x = position_x, this.y = position_y;
	};
	this.Resize = function (w, h, r)
	{
		if (Unknown(h)) h = this.height;
		if (Unknown(w)) w = this.width;
		if (Unknown(r)) r = this.radius;
		this.height = h, this.width = w, this.radius = r;
	};
	this.Force = function (force_x, force_y)
	{
		if (Unknown(force_x)) force_x = this.speedX;
		if (Unknown(force_y)) force_y = this.speedY;
		this.speedX = force_x, this.speedY = force_y;
	};

	this.Move = function (position, force)
	{
		if (Unknown(force)) force = 0;
		if (position == "up") this.speedY = Math.abs(force);
		if (position == "down") this.speedY = force;
		if (position == "left") this.speedX = Math.abs(force);
		if (position == "right") this.speedX = force;
	};
	this.Add = function (feature, code)
	{
		this.feature = code;
	};
	this.InPosition = function (x_pos, y_pos)
	{
		return (this.x == x_pos && this.y == y_pos);
	};
	if (autoupdate) this.Update();
}

function Polygon(points, color, autoupdate)
{
	this.points = points;
	this.x = this.points[0][0];
	this.y = this.points[0][1];
	this.speedX = 0;
	this.speedY = 0;
	this.color = color;
	this.stroke = this.color;
	this.gravity = 0;
	this.gravitySpeed = 0;
	this.color = color;
	this.alpha = 1;
	this.destroyed = false;
	this.rotated = false;
	this.rotationAngle = 0;
	this.name = "";
	this.Name = function (x)
	{
		this.name = x;
	};
	this.UpdatePosition = function ()
	{
		this.gravitySpeed += this.gravity, this.x += this.speedX, this.y += this.speedY + this.gravitySpeed;
	};
	this.Draw = function ()
	{
		if (Unknown(this.color)) this.color = "black";
		if (Unknown(autoupdate)) autoupdate = false;
		cakepen.globalAlpha = this.alpha, cakepen.fillStyle = this.color, cakepen.strokeStyle = this.stroke;
		if (this.destroyed) cakepen.globalAlpha = 0;
		if (this.rotated) cakepen.rotate(this.rotationAngle);
		if (points.length <= 0) return;
		cakepen.moveTo(points[0][0], points[0][1]);
		for (var i = 0; i < points.length; i++) cakepen.lineTo(points[i][0], points[i][1]);
		cakepen.fill();
		cakepen.stroke();
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Accelerate = function (g)
	{
		this.gravity = g;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Rotate = function (a)
	{
		this.rotated = true, this.rotationAngle = a;
	};
	this.Stop = function ()
	{
		this.speedX = 0, this.speedY = 0;
	};
	this.Translate = function (position_x, position_y)
	{
		if (Unknown(position_x)) position_x = this.x;
		if (Unknown(position_y)) position_y = this.y;
		this.x = position_x, this.y = position_y;
	};

	this.Force = function (force_x, force_y)
	{
		if (Unknown(force_x)) force_x = this.speedX;
		if (Unknown(force_y)) force_y = this.speedY;
		this.speedX = force_x, this.speedY = force_y;
	};

	this.Move = function (position, force)
	{
		if (Unknown(force)) force = 0;
		if (position == "up") this.speedY = Math.abs(force);
		if (position == "down") this.speedY = force;
		if (position == "left") this.speedX = Math.abs(force);
		if (position == "right") this.speedX = force;
	};
	this.Add = function (feature, code)
	{
		this.feature = code;
	};
	this.InPosition = function (x_pos, y_pos)
	{
		return (this.x == x_pos && this.y == y_pos);
	};
	if (autoupdate) this.Update();
}

function Sprite(url, x, y, width, height, autoupdate)
{
	this.url = url;
	this.img = new Image();
	this.img.src = this.url;
	this.x = x;
	this.y = y;
	this.alpha = 1;
	this.speedX = 0;
	this.speedY = 0;
	this.bounce = 0;
	this.gravity = 0;
	this.gravitySpeed = 0;
	this.height = height;
	this.width = width;
	this.h = this.height;
	this.w = this.width;
	this.name = "";
	this.destroyed = false;
	this.rotated = false;
	this.collidable = true;
	this.rotationAngle = 0;
	this.Name = function (x)
	{
		this.name = x;
	};
	this.Draw = function ()
	{
		cakepen.globalAlpha = this.alpha;
		if (Unknown(this.x)) this.x = 0;
		if (Unknown(this.y)) this.y = 0;
		if (Unknown(this.height)) this.height = 0;
		if (Unknown(this.width)) this.width = 0;
		if (Unknown(autoupdate)) autoupdate = false;
		if (this.destroyed) cakepen.globalAlpha = 0;
		if (this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.drawImage(this.img.src[0], this.x, this.y, this.height, this.width);
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
	};
	this.Animate = function ()
	{
		if (this.destroyed) cakepen.globalAlpha = 0;
		if (this.rotated) cakepen.rotate(this.rotationAngle);
		for (x in this.img.src) cakepen.drawImage(this.img.src, this.x, this.y, this.height, this.width);
		cakepen.globalAlpha = 1;
		cakepen.rotate(-this.rotationAngle);
	};
	this.UpdatePosition = function ()
	{
		this.gravitySpeed += this.gravity, this.x += this.speedX, this.y += this.speedY;
	};
	this.Floor = function ()
	{
		if (this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height;
	};
	this.FloorAndBounce = function ()
	{
		if (this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height, this.gravitySpeed = -(this.gravitySpeed * this.bounce);
	};
	this.Accelerate = function (g)
	{
		this.gravity = g;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Rotate = function (a)
	{
		this.rotated = true, this.rotationAngle = a;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Animate();
	};
	this.Stop = function ()
	{
		this.speedX = 0, this.speedY = 0;
	};
	this.Translate = function (position_x, position_y)
	{
		if (Unknown(position_x)) position_x = this.x;
		if (Unknown(position_y)) position_y = this.y;
		this.x = position_x, this.y = position_y;
	};

	this.Resize = function (w, h)
	{
		if (Unknown(h)) h = this.height;
		if (Unknown(w)) w = this.width;
		this.height = h, this.width = w;
	};

	this.Force = function (force_x, force_y)
	{
		if (Unknown(force_x)) force_x = this.speedX;
		if (Unknown(force_y)) force_y = this.speedY;
		this.speedX = force_x, this.speedY = force_y;
	};

	this.Move = function (position, force)
	{
		if (Unknown(force)) force = 0;
		if (position == "up") this.speedY = Math.abs(force);
		if (position == "down") this.speedY = force;
		if (position == "left") this.speedX = Math.abs(force);
		if (position == "right") this.speedX = force;
	};
	this.Add = function (feature, code)
	{
		this.feature = code;
	};
	this.InPosition = function (x_pos, y_pos)
	{
		return (this.x == x_pos && this.y == y_pos);
	};
	if (autoupdate) this.Update();
}

function PolygonLineSides(x, y, size, sides, color, stroke_color, start_angle, anticlockwise, autoupdate)
{
	this.x = x;
	this.y = y;
	this.size = size;
	this.sides = sides;
	this.color = color;
	this.stroke_color = stroke_color;
	this.speedX = 0;
	this.alpha = 0;
	this.rotated = false;
	this.name = "";
	this.rotationAngle = 0;
	this.speedY = 0;
	this.gravitySpeed = 0;
	this.gravity = 0;
	this.destroyed = false;
	this.startangle = start_angle;
	this.anticlockwise = anticlockwise;
	this.UpdatePosition = function ()
	{
		this.gravitySpeed += this.gravity, this.x += this.speedX, this.y += this.speedY;
	};
	this.Draw = function ()
	{
		cakepen.globalAlpha = this.alpha;
		if (Unknown(this.x)) this.x = 0;
		if (Unknown(this.y)) this.y = 0;
		if (Unknown(this.size)) this.size = 1;
		if (Unknown(this.color)) this.color = "black";
		if (Unknown(this.sides)) this.sides = 1;
		if (Unknown(this.anticlockwise)) this.anticlockwise = false;
		if (Unknown(this.startangle)) this.startangle = 90;
		if (Unknown(this.stroke)) this.stroke = this.color;
		if (this.destroyed) cakepen.globalAlpha = 0;
		if (this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.fillStyle = this.color, cakepen.strokeStyle = this.stroke_color;
		cakepen.beginPath();
		if (this.sides < 3) return;
		var a = 360 / this.sides;
		a = this.anticlockwise ? -a : a;
		cakepen.moveTo(this.x, this.y);
		for (var i = 1; i < this.sides; i++) cakepen.lineTo(this.size * Math.cos(a * i), this.size * Math.sin(a * i));
		cakepen.closePath();
		cakepen.fill();
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
	};

	this.Translate = function (position_x, position_y)
	{
		if (Unknown(position_x)) position_x = this.x;
		if (Unknown(position_y)) position_y = this.y;
		this.x = position_x, this.y = position_y;
	};
	this.Rotate = function (a)
	{
		this.rotated = true, this.rotationAngle = a;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Resize = function (s)
	{
		this.size = s;
	};
	this.Force = function (force_x, force_y)
	{
		if (Unknown(force_x)) force_x = this.speedX;
		if (Unknown(force_y)) force_y = this.speedY;
		this.speedX = force_x, this.speedY = force_y;
	};
	this.Stop = function ()
	{
		this.speedX = 0, this.speedY = 0;
	};
	this.Force = function (force_x, force_y)
	{
		if (Unknown(force_x)) force_x = this.speedX;
		if (Unknown(force_y)) force_y = this.speedY;
		this.speedX = force_x, this.speedY = force_y;
	};

	this.Move = function (position, force)
	{
		if (Unknown(force)) force = 0;
		if (position == "up") this.speedY = Math.abs(force);
		if (position == "down") this.speedY = force;
		if (position == "left") this.speedX = Math.abs(force);
		if (position == "right") this.speedX = force;
	};
	this.Add = function (feature, code)
	{
		this.feature = code;
	};
	this.InPosition = function (x_pos, y_pos)
	{
		return (this.x == x_pos && this.y == y_pos);
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	if (autoupdate) this.Update();
}

//Module: Log And Mouse Tracking
//Cake Keyboard Keys,Mouse Buttons,Touch Recording API
//This Is For Recording,For Game Controlling Check canvas/addlibs/mousetrap.js
var Keycode, MouseX, MouseY, MouseButton, MouseButtonName, TouchX, TouchY;
var Log = (log) => console.log(log);
var RecordKeyboard = (KeyboardKey) =>
{
	Keycode = Keycode || window.event, KeyboardKey = Keycode.key || Keycode.keycode;
	console.log(`Key Pressed: ${KeyboardKey.key} , Keycode: ${KeyboardKey.keycode}`);
};
var RecordMouse = (event) =>
{
	MouseX = event.clientX, MouseY = event.clientY, MouseButton = event.button;
	if (MouseButton == 0) MouseButtonName = "Left";
	if (MouseButton == 1) MouseButtonName = "Middle(Wheel)"
	if (MouseButton == 2) MouseButtonName = "Right";
	console.log(`Mouse X Position: ${MouseX} , Mouse Y Position: ${MouseY} , Button Pressed: ${MouseButtonName} Mouse Button`);
};
var RecordTouch = (event) =>
{
	TouchX = event.pageX, TouchY = event.pageY;
	console.log(`Touch X Position: ${TouchX} , Touch Y Position: ${TouchY}`);
};
document.addEventListener("keydown", RecordKeyboard);
document.addEventListener("keyup", RecordKeyboard);
document.addEventListener("mousemove", RecordMouse);
document.addEventListener("click", RecordMouse);
document.addEventListener("touchmove", RecordTouch);
document.addEventListener("touchstart", RecordTouch);
var ClearConsole = () => console.clear();

//Module: Cheat
//Created By Rabia Alhaffar In 25/April/2019
//An Cake Cheatcoding Library Example!!!
//It Could Add Cheats To Your Game By Prompting
//Next Version:Add Keyboard Key Chains
var cheat;
var InputCheatCode = () => cheat = prompt("Enter Cheatcode:");
var CheckCheatCode = (cheatcode, f) =>
{
	if (cheat == cheatcode)
	{
		setTimeout(f, 0);
		return true;
	}
	else
	{
		return false;
	}
};
var SetCheatCode = (cheatcode) => cheat = cheatcode;

//Module: Execution
//Created By Rabia Alhaffar On 15/November/2019
//An Library To Debug,Run Scripts In-Game
var Execute = (code, l, time) =>
{
	if (Unknown(l)) l = 0;
	if (Unknown(time)) time = 0;
	if (l == 0) setTimeout(code, 0);
	if (l == 1) setTimeout(code, time);
	if (l == 2) setInterval(code, 0);
	if (l == 3) setInterval(code, time);
};

var Import = (script_source) =>
{

	var script = document.createElement('script');
	script.src = script_source;
	script.type = 'text/javascript';
	script.defer = true;
	document.getElementsByTagName('head').item(0).appendChild(script);

};
//Module: FPS And Levels
//Created By Rabia Alhaffar On 16/November/2019
//An Library For Timers,Frames Per Second
function Level(code, fps)
{
	this.code = code;
	this.fps = fps;
	this.interval = 0;
	if (Unknown(this.fps)) this.fps = 120;
	this.Start = function ()
	{
		this.interval = setInterval(this.code, 1000 / this.fps);
	};
	this.Pause = function ()
	{
		clearInterval(this.interval);
	};
	this.Resume = function ()
	{
		this.Start();
	};
	this.Switch = function (level)
	{
		this.Pause();
		level.Start();
	};
}
var DrawFPS = (Level) =>
{
	cakecanvas = document.getElementsByTagName("canvas")[0];
	cakepen = cakecanvas.getContext("2d");
	cakepen.font = "20px arial";
	cakepen.fillStyle = "black";
	cakepen.fillText("FPS: " + Level.fps, 30, 30);
};
var SetFPS = (Level, fps_value) => Level.fps = fps_value;

//Module: Exceptions And Errors
var Exception = (name, code, description) =>
{
	throw "\nEXCEPTION CODE: " + code + "\nEXCEPTION NAME: " + name.toString() + "\nEXCEPTION DESCRIPTION: " + description.toString();
};
var Info = (title, info) => console.info(title.toString() + ":\n" + info.toString());
var Trace = () => console.trace();
var Warn = (name, description) => console.warn(name.toString() + ": " + description.toString());
var Error = (name, code, description) => console.error("\nERROR CODE: " + code + "\nERROR NAME: " + name.toString() + "\nERROR DESCRIPTION: " + description.toString());
var StartConsoleTimer = () => console.timer();
var EndConsoleTimer = () => console.timeEnd();

//Module: Performance Getting And Calling
var GetPerformance = () => console.log("Calling Functions Performance: " + performance.now() + " Milliseconds");

//Module: Filters(Canvas CSS Filters)
//Created By Rabia Alhaffar In November Of 2019
//A Library Of CSS Filters For Your Game In Canvas!!!
var SetFilters = (filters) => cakecanvas.style.filter = filters;
var AddFilters = (filters) => cakecanvas.style.filter += filters;
var SetBlur = (pixels) => cakecanvas.style.filter += ` blur(${pixels}px) `;
var SetBrightness = (percentage) => cakecanvas.style.filter += ` brightness(${percentage}%) `;
var SetContrast = (percentage) => cakecanvas.style.filter += ` contrast(${percentage}%) `;
var SetGrayscale = (percentage) => akecanvas.style.filter += ` grayscale(${percentage}%) `;
var SetInvert = (percentage) => cakecanvas.style.filter += ` invert(${percentage}%) `;
var SetOpacity = (percentage) => cakecanvas.style.filter += ` opacity${percentage}%) `;
var SetSaturation = (percentage) => cakecanvas.style.filter += ` saturate(${percentage}%) `;
var SetSepia = (percentage) => cakecanvas.style.filter += ` sepia(${percentage}%) `;
var SetHueRotation = (degrees) => cakecanvas.style.filter += ` hue-rotate(${degrees}deg) `;
var RemoveFilters = () => cakecanvas.style.filter = "none";

function Filter(name, px, per, deg)
{
	this.name = name;
	this.degrees = deg;
	this.pixels = px;
	this.percentage = per;
	this.filtervalue = 0;
	this.Add = function ()
	{
		if (this.name != "blur" && this.name != "hue-rotate") this.filtervalue = `${this.percentage}%`;
		if (this.name == "blur") this.filtervalue = `${this.pixels}px`;
		if (this.name == "hue-rotate") this.filtervalue = `${this.degrees}deg`;
		cakecanvas.style.filter += ` ${this.name}(${this.filtervalue}) `;
	};
}

//Module: Testwall(To Test Equality Then Do Function If True)
//Created By Rabia Alhaffar In 13/December/2019
//Testing Basics: a,b Are Values And c Is A Function!!!
//If a Equal b(However What Type Is They),c Which Is A Function Runs Via setTimeout()
var Is = (a, b, c) =>
{
	if (a == b) setTimeout(c, 0);
	return a == b, a, b, c;
};

//Module: Browser Compatibility
//Created By Rabia Alhaffar In 16/December/2019
//For Making Some Functions Compatible With Other Browsers!!!
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.webkitRequestAnimationFrame;
window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame;
document.documentElement.requestFullscreen = document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.msRequestFullscreen || document.documentElement.webkitRequestFullscreen;
document.exitFullscreen = document.exitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitExitFullscreen;
document.requestPointerLock = document.requestPointerLock || document.mozRequestPointerLock || document.webkitRequestPointerLock;
document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;

//Module: Pointer Lock API
//Created By Rabia Alhaffar In 16/December/2019
var LockPointer = () =>
{
	cakecanvas = document.getElementsByTagName("canvas")[0];
	if (cakecanvas.requestPointerLock) cakecanvas.requestPointerLock();
	if (document.pointerLockElement === canvas) cakecanvas.requestPointerLock();
};
var UnlockPointer = () => document.exitPointerLock();

//Module: Mouse Cursor
//Created By Rabia Alhaffar In 5/February/2020
//A Library To Change Cursor Shape To Image!!!
var HideCursor = () => cakecanvas.style.cursor = "none";
var ShowCursor = () => cakecanvas.style.cursor = "auto";
var SetCursor = (img_src, type, cursor_size) =>
{
	var cursor_image;
	if (Unknown(cursor_size)) cursor_size = 10;
	if (type == "color")
	{
		cakepen.fillStyle = img_src;
		//Part 1: Hide Mouse Cursor If Mouse Cursor Enters Game Canvas
		cakecanvas.addEventListener("mouseenter", () =>
		{
			HideCursor();
		});
		cakecanvas.addEventListener("click", () =>
		{
			HideCursor();
		});
		//Part 2: Draw Mouse Cursor Shape As Circle
		cakecanvas.addEventListener("mousemove", (e) =>
		{
			cakepen.arc(e.clientX, e.clientY, cursor_size, 90, 180 * Math.PI);
			cakepen.fill();
		});
		cakecanvas.addEventListener("mouseover", (e) =>
		{
			cakepen.arc(e.clientX, e.clientY, cursor_size, 90, 180 * Math.PI);
			cakepen.fill();
		});
		cakecanvas.addEventListener("mousedown", (e) =>
		{
			cakepen.arc(e.clientX, e.clientY, cursor_size, 90, 180 * Math.PI);
			cakepen.fill();
		});
		cakecanvas.addEventListener("touchmove", (e) =>
		{
			cakepen.arc(e.pageX, e.pageY, cursor_size, 90, 180 * Math.PI);
			cakepen.fill();
		});
		cakecanvas.addEventListener("touchstart", (e) =>
		{
			cakepen.arc(e.pageX, e.pageY, cursor_size, 90, 180 * Math.PI);
			cakepen.fill();
		});
	}
	if (type == "image")
	{
		//Part 1: Hide Mouse Cursor If Mouse Cursor Enters Game Canvas
		cakecanvas.addEventListener("mouseenter", () =>
		{
			HideCursor();
		});
		cakecanvas.addEventListener("click", () =>
		{
			HideCursor();
		});
		//Part 2: Draw Mouse Cursor Shape/Icon From Image
		cursor_image = new Image(), cursor_image.src = img_src, cursor_image.height = cursor_size, cursor_image.width = cursor_size;
		cakecanvas.addEventListener("mousemove", (e) =>
		{
			cakepen.drawImage(cursor_image, e.clientX, e.clientY);
		});
		cakecanvas.addEventListener("mouseover", (e) =>
		{
			cakepen.drawImage(cursor_image, e.clientX, e.clientY);
		});
		cakecanvas.addEventListener("mousedown", (e) =>
		{
			cakepen.drawImage(cursor_image, e.clientX, e.clientY);
		});
		cakecanvas.addEventListener("touchmove", (e) =>
		{
			cakepen.drawImage(cursor_image, e.pageX, e.pageY);
		});
		cakecanvas.addEventListener("touchstart", (e) =>
		{
			cakepen.drawImage(cursor_image, e.pageX, e.pageY);
		});

	}
	if (type == "icon") cakecanvas.style.cursor = img_src; //CSS Style,Your Call ;)
};

//Module: Compiler Fixing For Values
//Written By Rabia Alhaffar In 16/December/2019
var FixValue = (x, type) =>
{
	if ((type == undefined) || (type == NaN)) type = "bool";
	if ((x == undefined) || (x == isNaN) && (type == "string")) x = "";
	if ((x == undefined) || (x == NaN) && (type == "int")) x = 0;
	if ((x == undefined) || (x == NaN) && (type == "bool")) x = false;
	if ((x == undefined) || (x == NaN) && (type == "char")) x = '';
	if ((x == undefined) || (x == NaN) && (type == "array")) x = [];
};
var FixValuesFromArray = (values, type) =>
{
	for (x in values)
	{
		if ((type == undefined) || (type == NaN)) type = "bool";
		if ((values[x++] == undefined) || (values[x++] == NaN) && type == "string") values[x++] = "";
		if ((values[x++] == undefined) || (values[x++] == NaN) && type == "int") values[x++] = 0;
		if ((values[x++] == undefined) || (values[x++] == NaN) && type == "bool") values[x++] = false;
		if ((values[x++] == undefined) || (values[x++] == NaN) && type == "char") values[x++] = '';
		if ((values[x++] == undefined) || (values[x++] == NaN) && type == "array") values[x++] = [];
	}
};
var Unknown = (x) => ((x == undefined) || (x == NaN));
var Help = (f) =>
{
	if (typeof f == "function") console.log(f);
};

//Module: Support
//Created By Rabia Alhaffar In 23/December/2019 
//File To Check Supporting Some Features In-Game!!!
var CANVAS = () =>
{
	return (!!(document.createElement('canvas').getContext) && (document.createElement('canvas').getContext('2d')));
};
var WEBGL = () =>
{
	return (!!((document.createElement('canvas').getContext) && (document.createElement('canvas').getContext('2d')) && (document.createElement('canvas').getContext('webgl')) || (document.createElement('canvas').getContext("experimental-webgl"))));
};
var MP3 = () =>
{
	return (document.createElement('audio').canPlayType('audio/mpeg'));
};
var AIFF = () =>
{
	return (document.createElement('audio').canPlayType('audio/x-aiff'));
};
var MP4 = () =>
{
	return (document.createElement('video').canPlayType('video/mp4'));
};
var OGG = () =>
{
	return (document.createElement('audio').canPlayType('audio/ogg'));
};
var WAV = () =>
{
	return (document.createElement('audio').canPlayType('audio/wav'));
};
var WEBM = () =>
{
	return (document.createElement('video').canPlayType('video/webm'));
};
var WEBXR = () =>
{
	return ("xr" in window.navigator);
};
var WEBVR = () =>
{
	return (navigator.getVRDisplays);
};
var JAVA = () =>
{
	return (navigator.javaEnabled());
};
var ONLINE = () =>
{
	return (navigator.onLine);
};

//Module: Loading
//Created By Rabia Alhaffar In 25/December/2019
//An File Explains Loading Game Images!!!
//That Happens Each Time Document Or Window Is Loaded
//If No Loading Screen Images Added It Will Starts Game By Default
//You Can Make A Scene For Game Loading Instead Of Images If You Love Coding!!!
var LoadingImageSource = "";
var LoadingImageTime, LoadingLevelTime = 0;
var LoadingLevelAvailable, LoadLevelInsteadOfImage, LoadingImagesAvailable = false;
var LoadingLevel, StartingLevel;
window.onload = () =>
{
	cakecanvas = document.getElementsByTagName("canvas")[0];
	if (LoadingImagesAvailable)
	{
		cakecanvas.style.backgroundImage = `url(${src.toString()})`;
		setTimeout(() =>
		{
			cakecanvas.style.backgroundImage = "none";
			ClearCanvas();
			StartingLevel.Start();
		}, LoadingImageTime);
	}
	if (!LoadingImagesAvailable) LoadLevelInsteadOfImage = true;
	if (LoadLevelInsteadOfImage && LoadingLevelAvailable)
	{
		LoadingLevel.Start();
		setTimeout(() =>
		{
			LoadingLevel.Pause();
			LoadingLevel.Switch(StartingLevel);
		}, LoadingLevelTime);
	}
};
var SetLoadingImage = (src, level, time) =>
{
	StartingLevel = level;
	LoadingImagesAvailable = true;
	LoadingImageSource = src.toString();
	LoadingImageTime = time;
};
var SetLoadingLevel = (loading_level, level, time) =>
{
	LoadingLevelAvailable = true;
	LoadingLevel = loading_level;
	LoadingLevelTime = time;
	StartingLevel = level;
};

//Module: Splashscreen
//Created By Rabia Alhaffar In 26/December/2019
//For Splash Screen Creation
var SetSplashscreen = (src, time, level) =>
{
	cakecanvas.style.backgroundImage = `url(${src.toString()})`;
	setTimeout(() =>
	{
		cakecanvas.style.backgroundImage = "none";
		level.Start();
	}, time);
};

//Module: Graphics(3D)
//Created By Rabia Alhaffar In 26/December/2019
//A Fork Of Google's Space 3D For 2D Canvas Graphics Engine
//Do Not Use It For 3D If You Do Not Know What Are You Doing
/* 
Features:
1- No Dependencies Needed  
2- Works With 2D Graphics And Huge Polygonal Designs
3- Easy To Use,You Can Add Your Shaped As Code Contribution
4- Use Cake Game Framework Features Without Hassle    
    */
/*
	Copyright 2006 Google Inc.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	  http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
var canvasWidth = CanvasWidth,
	halfCanvasWidth = CanvasWidth * 0.5,
	canvasHeight = CanvasHeight,
	halfCanvasHeight = CanvasHeight * 0.5;

function Space()
{
	this.m = createMatrixIdentity();
	this.mStack = [];
}

Space.prototype.createMatrixIdentity = function ()
{
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1]
	];
}

/**
 * Multiplies two 4x4 matricies together.
 */
Space.prototype.matrixMultiply = function (m1, m2)
{
	var result = this.createMatrixIdentity();

	var width = m1[0].length;
	var height = m1.length;

	if (width != m2.length)
	{
		// error
	}

	for (var x = 0; x < width; x++)
	{
		for (var y = 0; y < height; y++)
		{
			var sum = 0;

			for (var z = 0; z < width; z++)
			{
				sum += m1[y][z] * m2[z][x];
			}

			result[y][x] = sum;
		}
	}

	return result;
}

/**
 * Transforms a coordinate using the current transformation
 * matrix, then flattens it using the projection matrix.
 */
Space.prototype.flatten = function (point)
{
	var p = [
		[point.x, point.y, point.z, 1]
	];
	var pm = this.matrixMultiply(p, this.m);

	point.tx = pm[0][0];
	point.ty = pm[0][1];
	point.tz = pm[0][2];

	// lazy projection
	point.fx = halfCanvasWidth + (canvasWidth * point.tx / point.tz);
	point.fy = halfCanvasHeight - (canvasWidth * point.ty / point.tz);
}

/**
 * Translate (move) the current transformation matrix
 */
Space.prototype.translate = function (x, y, z)
{
	var m = [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[x, y, z, 1]
	];

	this.m = this.matrixMultiply(m, this.m);
}

/**
 * Rotate the current transformation matrix. Rotations are
 * world-oriented, and occur in y,x,z order.
 */
Space.prototype.rotate = function (x, y, z)
{
	if (y)
	{
		var cosY = Math.cos(y);
		var sinY = Math.sin(y);
		var rotY = [
			[cosY, 0, sinY, 0],
			[0, 1, 0, 0],
			[-sinY, 0, cosY, 0],
			[0, 0, 0, 1]
		];

		this.m = this.matrixMultiply(this.m, rotY);
	}

	if (x)
	{
		var cosX = Math.cos(x);
		var sinX = Math.sin(x);
		var rotX = [
			[1, 0, 0, 0],
			[0, cosX, -sinX, 0],
			[0, sinX, cosX, 0],
			[0, 0, 0, 1]
		];
		this.m = this.matrixMultiply(this.m, rotX);
	}

	if (z)
	{
		var cosZ = Math.cos(z);
		var sinZ = Math.sin(z);
		var rotZ = [
			[cosZ, -sinZ, 0, 0],
			[sinZ, cosZ, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1]
		];

		this.m = this.matrixMultiply(this.m, rotZ);
	}
}

/**
 * Pushes the current transformation onto the stack
 */
Space.prototype.push = function ()
{
	this.mStack.push(this.m);
	this.m = [
		[this.m[0][0], this.m[0][1], this.m[0][2], this.m[0][3]],
		[this.m[1][0], this.m[1][1], this.m[1][2], this.m[1][3]],
		[this.m[2][0], this.m[2][1], this.m[2][2], this.m[2][3]],
		[this.m[3][0], this.m[3][1], this.m[3][2], this.m[3][3]]
	];
}

/**
 * Pops the end off the transformation stack
 */
Space.prototype.pop = function ()
{
	this.m = this.mStack.pop();
}

/* -------------------------------------------------------------------- */

/**
 * A 3d coordinate
 */
function Point(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;

	// Relative to camera coordinates
	this.tx;
	this.ty;
	this.tz;

	// Flattened coordinates
	this.fx;
	this.fy;
}

/**
 * A Shape is made up of polygons
 */
function Shape()
{
	this.points = [];
	this.polygons = [];
}

/**
 * Draws the shape
 */
Shape.prototype.draw = function (drawlist)
{
	for (var i = 0; i < this.points.length; i++)
	{
		space.flatten(this.points[i]);
	}

	for (var i = 0; i < this.polygons.length; i++)
	{
		var poly = this.polygons[i]; // convenience

		space.flatten(poly.origin);

		// lazy backface culling
		if (poly.normal && this.backface)
		{
			space.flatten(poly.normal);

			var originDist = Math.pow(poly.origin.tx, 2) +
				Math.pow(poly.origin.ty, 2) +
				Math.pow(poly.origin.tz, 2);

			var normalDist = Math.pow(poly.normal.tx, 2) +
				Math.pow(poly.normal.ty, 2) +
				Math.pow(poly.normal.tz, 2);

			if (originDist > normalDist)
			{
				drawlist.push(poly);
			}
		}
		else
		{
			drawlist.push(poly);
		}
	}
}

/**
 * A polygon is a connection of points in the shape object. You
 * should probably try to make them coplanar.
 */
function Polygon(points, normal, backface, type, color)
{
	this.points = points;

	this.origin = new Point(0, 0, 0);
	for (var i = 0; i < this.points.length; i++)
	{
		this.origin.x += this.points[i].x;
		this.origin.y += this.points[i].y;
		this.origin.z += this.points[i].z;
	}

	this.origin.x /= this.points.length;
	this.origin.y /= this.points.length;
	this.origin.z /= this.points.length;

	if (normal)
	{
		this.normal = new Point(this.origin.x + normal.x,
			this.origin.y + normal.y,
			this.origin.z + normal.z);
	}
	else
	{
		this.normal = null;
	}

	this.backface = backface;
	this.type = type;
	this.color = color;
}

Polygon.SOLID = 0;
Polygon.WIRE = 1;

/**
 * Draws the polygon. Assumes that the points have already been
 * flattened.
 */
Polygon.prototype.draw = function ()
{
	cakepen.beginPath();
	cakepen.moveTo(this.points[0].fx, this.points[0].fy);

	for (var i = 0; i < this.points.length; i++)
	{
		cakepen.lineTo(this.points[i].fx, this.points[i].fy);
	}

	cakepen.closePath();

	var color = this.color;

	/*
	// Do lighting here
	lightvector = Math.abs(this.normal.x + this.normal.y);
	if(lightvector > 1) {
		lightvector = 1;
	}

	color[0] = (color[0] * lightvector).toString();
	color[1] = (color[1] * lightvector).toString();
	color[2] = (color[2] * lightvector).toString();
	*/

	if (color.length > 3)
	{
		var style = ["rgba(",
			color[0], ",",
			color[1], ",",
			color[2], ",",
			color[3], ")"
		].join("");
	}
	else
	{
		var style = ["rgb(",
			color[0], ",",
			color[1], ",",
			color[2], ")"
		].join("");
	}

	if (this.type == Polygon.SOLID)
	{
		cakepen.fillStyle = style;
		cakepen.fill();
	}
	else if (this.type == Polygon.WIRE)
	{
		cakepen.strokeStyle = style;
		cakepen.stroke();
	}
}

/* -------------------------------------------------------------------- */

/**
 * Scene describes the 3D environment
 */
function Scene()
{
	this.shapes = {};
	this.camera = new Point(0, 0, 0);
	this.cameraTarget = new Point(0, 0, 0);
	this.cameraRotation = 0;

	this.drawlist = [];
}

/**
 * Draw the world
 */
Scene.prototype.draw = function ()
{
	space.push();

	// Camera transformation
	space.translate(
		-this.camera.x,
		-this.camera.y,
		-this.camera.z
	);

	// Camera rotation
	var xdiff = this.cameraTarget.x - this.camera.x;
	var ydiff = this.cameraTarget.y - this.camera.y;
	var zdiff = this.cameraTarget.z - this.camera.z;

	var xzdist = Math.sqrt(Math.pow(xdiff, 2) + Math.pow(zdiff, 2));

	var xrot = -Math.atan2(ydiff, xzdist); // up/down rotation
	var yrot = Math.atan2(xdiff, zdiff); // left/right rotation

	space.rotate(xrot, yrot, this.cameraRotation);

	// Drawing
	this.drawlist = [];

	for (var i in this.shapes)
	{
		this.shapes[i].draw(this.drawlist);
	}

	// Depth sorting (warning: this is only enough to drive this demo - feel
	// free to contribute a better system).
	this.drawlist.sort(function (poly1, poly2)
	{
		return poly2.origin.tz - poly1.origin.tz;
	});

	for (var i = 0; i < this.drawlist.length; i++)
	{
		this.drawlist[i].draw();
	}

	space.pop();
}

function createMatrixIdentity()
{
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1]
	];

}
//Module: Cookies
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username
var Cookie = (cname, cvalue, exdays) =>
{
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

var GetCookie = (cname) =>
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
};

var CheckCookie = (cname) =>
{
	var cookie = GetCookie(cname);
	if (cookie == "")
	{
		cookie = prompt("Please Enter Something:", "");
		if (user != "" && user != null) Cookie(cname, cookie, 365);
	}
};

//Module: Content
//Created By Rabia Alhaffar In 4/January/2020
//A Module To Add Flash SWF And Java JAR Content!!!
var AddContent = (source, w, h) =>
{
	var content = document.createElement("object");
	content.src = source, content.height = h, content.width = w;
	document.getElementsByTagName("body")[0].appendChild(content);
};

//Module: App Windows
//Created By Rabia Alhaffar In 4/January/2020
function Window(s, h, w, l, t)
{
	this.src = s;
	this.h = h, this.w = w;
	this.l = l, this.t = t;
	this.height = "height=" + this.h, this.width = "width=" + this.w;
	this.Win = 0, this.resizable = "yes";
	this.left = "left=" + this.l, this.top = "top=" + this.t;
	this.Init = function ()
	{
		if (Unknown(this.src)) this.src = "";
		if (Unknown(this.h)) this.h = 400;
		if (Unknown(this.w)) this.w = 400;
		if (Unknown(this.l)) this.l = 0;
		if (Unknown(this.t)) this.t = 0;
		this.Win = window.open(this.src, "", this.height + "," + this.width + "," + this.left + "," + this.top + "," + "resizable=" + this.resizable);
	};
	this.Translate = function (x, y)
	{
		if (Unknown(x)) x = 0;
		if (Unknown(y)) y = 0;
		this.Win.moveTo(x, y);
	};
	this.Move = function (x, y)
	{
		if (Unknown(x)) x = 0;
		if (Unknown(y)) y = 0;
		this.Win.moveBy(x, y);
	};
	this.Resize = function (h, w)
	{
		if (Unknown(h)) h = 0;
		if (Unknown(w)) w = 0;
		this.Win.resizeTo(h, w);
	};
	this.Scale = function (h, w)
	{
		if (Unknown(h)) h = 0;
		if (Unknown(w)) w = 0;
		this.Win.resizeBy(h, w);
	};
	this.Close = function ()
	{
		this.Win.close();
	};
	this.Pause = function ()
	{
		this.Win.stop();
	};
	this.Write = function (w)
	{
		if (Unknown(w)) w = "";
		this.Win.document.write(w);
	};
	this.WriteLine = function (wl)
	{
		if (Unknown(wl)) wl = "";
		this.Win.document.writeln(wl);
	};
}

//Module: Camera
//Created By Rabia Alhaffar In 5/January/2020
//A Library For 2D And 3D Camera Controlling(Canvas 2D,3D Space And WebGL)
var cx, cy, cz;
var SetCameraPosition = (x, y, z) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(z)) z = 0;
	cx = x, cy = y, cz = z;
};
var InitializeCamera = (mode, scene) =>
{
	if (Unknown(mode)) mode = "canvas";
	if (mode == "canvas") setInterval(() =>
	{
		cakepen.translate(cx, cy);
	}, 0);
	if (mode == "space") setInterval(() =>
	{
		scene.camera.x = cx, scene.camera.y = cy, scene.camera.z = cz;
	}, 0);
	if (mode == "webgl") setInterval(() =>
	{
		cakepen.translate(cx, cy, cz);
	}, 0);
};
var MoveCamera = (x, y, z) =>
{
	cx += x, cy += y, cz += z;
};
var FreezeCamera = () =>
{
	cx = 0;
	cy = 0;
	cz = 0;
};

//Utilities Functions
var ApplyMod = (mod_code) => setInterval(mod_code, 0);

var Swap = (a, b) =>
{
	var disposed = a;
	a = b;
	b = disposed;
};

//Module: Buttons
//Rectangle Button
function Button(x, y, width, height, text, colors, clickCB)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.colors = colors;
	this.textColor = "black";
	this.text = text;
	this.alpha = 1;
	this.destroyed = false;
	this.state = 'default'; // current button state
	var isClicking = false,
		isTouching = false,
		mousePosition = {
			x: 0,
			y: 0
		},
		touchPosition = {
			x: 0,
			y: 0
		},
		mousePressed = false,
		canvasTouched = false;
	this.Add = function ()
	{
		cakecanvas.addEventListener('mousemove', (event) =>
		{
			mousePosition.x = event.offsetX || event.layerX, mousePosition.y = event.offsetY || event.layerY;
		});
		cakecanvas.addEventListener("touchmove", (event) =>
		{
			touchPosition.x = event.pageX || event.clientX, touchPosition.y = event.pageY || event.clientY;
		});
		cakecanvas.addEventListener("touchstart", () =>
		{
			canvasTouched = true;
		});
		cakecanvas.addEventListener("touchend", () =>
		{
			canvasTouched = false;
		});
		/**
		 * Track the user's clicks.
		 * @param {Event} event
		 */
		cakecanvas.addEventListener('mousedown', () =>
		{
			mousePressed = true;
		});
		cakecanvas.addEventListener('mouseup', () =>
		{
			mousePressed = false;
		});
	};
	/**
	 * Check to see if the user is hovering over or clicking on the button.
	 */
	this.UpdatePosition = function ()
	{
		// check for hover
		if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
				mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
			(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
				touchPosition.y >= this.y && touchPosition.y <= this.y + this.height))
		{
			this.state = 'hover';
			// check for click
			if (mousePressed || canvasTouched)
			{
				this.state = 'active';
				if ((typeof clickCB === 'function') && (!isClicking || !isTouching))
				{
					clickCB();
					isClicking = true, isTouching = true;
				}
			}
			else isClicking = false, isTouching = false;
		}
		else this.state = 'default';
	};
	/**
	 * Draw the button.
	 */
	this.Draw = function ()
	{
		var colors = this.colors[this.state],
			halfH = this.height / 2;
		// button
		if (this.destroyed) cakepen.globalAlpha = 0;
		cakepen.fillStyle = colors.top;
		cakepen.fillRect(this.x, this.y, this.width, halfH);
		cakepen.fillStyle = colors.bottom;
		cakepen.fillRect(this.x, this.y + halfH, this.width, halfH);
		// text
		var size = cakepen.measureText(this.text),
			x = this.x + (this.width - size.width) / 2,
			y = this.y + (this.height - 15) / 2 + 12;
		cakepen.fillStyle = this.textColor;
		cakepen.fillText(this.text, x, y);
		cakepen.globalAlpha = this.alpha;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Add();
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
}


//Circle-Shaped Button!!!
function CircleButton(x, y, radius, text, colors, clickCB)
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.text = text;
	this.destroyed = false;
	this.alpha = 1;
	this.textColor = "black";
	this.colors = colors;
	this.state = 'default'; // current button state
	var isClicking = false,
		isTouching = false,
		mousePosition = {
			x: 0,
			y: 0
		},
		touchPosition = {
			x: 0,
			y: 0
		},
		mousePressed = false,
		canvasTouched = false;
	this.Add = function ()
	{
		cakecanvas.addEventListener('mousemove', (event) =>
		{
			mousePosition.x = event.offsetX || event.layerX, mousePosition.y = event.offsetY || event.layerY;
		});
		cakecanvas.addEventListener("touchmove", (event) =>
		{
			touchPosition.x = event.pageX || event.clientX, touchPosition.y = event.pageY || event.clientY;
		});
		cakecanvas.addEventListener("touchstart", (event) =>
		{
			canvasTouched = true;
		});
		cakecanvas.addEventListener("touchend", (event) =>
		{
			canvasTouched = false;
		});
		/**
		 * Track the user's clicks.
		 * @param {Event} event
		 */
		cakecanvas.addEventListener('mousedown', (event) =>
		{
			mousePressed = true;
		});
		cakecanvas.addEventListener('mouseup', (event) =>
		{
			mousePressed = false;
		});
	};
	/**
	 * Check to see if the user is hovering over or clicking on the button.
	 */
	this.UpdatePosition = function ()
	{
		// check for hover
		if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.radius &&
				mousePosition.y >= this.y && mousePosition.y <= this.y + this.radius) ||
			(touchPosition.x >= this.x && touchPosition.x <= this.x + this.radius &&
				touchPosition.y >= this.y && touchPosition.y <= this.y + this.radius))
		{
			this.state = 'hover';
			// check for click
			if (mousePressed || canvasTouched)
			{
				this.state = 'active';
				if ((typeof clickCB === 'function') && (!isClicking || !isTouching))
				{
					clickCB();
					isClicking = true, isTouching = true;
				}
			}
			else isClicking = false, isTouching = false;
		}
		else this.state = 'default';
	};
	/**
	 * Draw the button.
	 */
	this.Draw = function ()
	{
		var colors = this.colors[this.state],
			halfR = this.radius / 2;
		// button
		if (this.destroyed) cakepen.globalAlpha = 0;
		cakepen.fillStyle = colors.top;
		cakepen.arc(this.x, this.y, this.radius, 90, 180 * Math.PI);
		cakepen.fillStyle = colors.bottom;
		cakepen.arc(this.x, this.y + halfR, this.radius, 90, 180 * Math.PI);
		// text
		var size = cakepen.measureText(this.text),
			x = this.x + (this.radius - size.width) / 2,
			y = this.y + (this.radius - 15) / 2 + 12;
		cakepen.fillStyle = this.textColor;
		cakepen.fillText(this.text, x, y);
		cakepen.globalAlpha = this.alpha;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Add();
}

function RoundedButton(x, y, width, height, radius, text, colors, clickCB)
{

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.colors = colors;
	this.textColor = "black";
	this.text = text;
	this.alpha = 1;
	this.destroyed = false;
	this.state = 'default'; // current button state
	this.radius = radius;
	var isClicking = false,
		isTouching = false,
		mousePosition = {
			x: 0,
			y: 0
		},
		touchPosition = {
			x: 0,
			y: 0
		},
		mousePressed = false,
		canvasTouched = false;
	this.Add = function ()
	{
		cakecanvas.addEventListener('mousemove', (event) =>
		{
			mousePosition.x = event.offsetX || event.layerX, mousePosition.y = event.offsetY || event.layerY;
		});
		cakecanvas.addEventListener("touchmove", (event) =>
		{
			touchPosition.x = event.pageX || event.clientX, touchPosition.y = event.pageY || event.clientY;
		});
		cakecanvas.addEventListener("touchstart", () =>
		{
			canvasTouched = true;
		});
		cakecanvas.addEventListener("touchend", () =>
		{
			canvasTouched = false;
		});
		/**
		 * Track the user's clicks.
		 * @param {Event} event
		 */
		cakecanvas.addEventListener('mousedown', () =>
		{
			mousePressed = true;
		});
		cakecanvas.addEventListener('mouseup', () =>
		{
			mousePressed = false;
		});
	};
	this.UpdatePosition = function ()
	{
		/**
		 * Check to see if the user is hovering over or clicking on the button.
		 */
		// check for hover
		if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
				mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
			(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
				touchPosition.y >= this.y && touchPosition.y <= this.y + this.height))
		{
			this.state = 'hover';
			// check for click
			if (mousePressed || canvasTouched)
			{
				this.state = 'active';
				if ((typeof clickCB === 'function') && (!isClicking || !isTouching))
				{
					clickCB();
					isClicking = true, isTouching = true;
				}
			}
			else isClicking = false, isTouching = false;
		}
		else this.state = 'default';
	};
	this.Draw = function ()
	{
		var colors = this.colors[this.state],
			halfR = this.radius / 2;
		// button
		if (this.destroyed) cakepen.globalAlpha = 0;
		cakepen.beginPath();
		//Part 1 Of Button
		cakepen.fillStyle = colors.top;
		cakepen.moveTo(this.x + this.radius, this.y);
		cakepen.lineTo(this.x + this.width - this.radius, this.y);
		cakepen.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width, this.y + this.radius);
		cakepen.lineTo(this.x + this.width, this.y + this.height - this.radius);
		cakepen.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width - this.radius, this.y + this.height);
		//Part 2 Of Button
		cakepen.fillStyle = colors.bottom;
		cakepen.lineTo(this.x + this.radius, this.y + this.height);
		cakepen.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.radius);
		cakepen.lineTo(this.x, this.y + this.radius);
		cakepen.quadraticCurveTo(this.x, this.y, this.x + this.radius, this.y);
		cakepen.closePath();
		// text
		var size = cakepen.measureText(this.text),
			x = this.x + (this.radius - size.width) / 2,
			y = this.y + (this.radius - 15) / 2 + 12;
		cakepen.fillStyle = this.textColor;
		cakepen.fillText(this.text, x, y);
		cakepen.globalAlpha = this.alpha;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Add();
}



function ImagedButton(x, y, width, height, text, img_src, clickCB)
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.text = text;
	this.destroyed = false;
	this.alpha = 1;
	this.textColor = "black";
	this.img = new Image();
	this.img.src = img_src;
	this.state = 'default'; // current button state
	var isClicking = false,
		isTouching = false,
		mousePosition = {
			x: 0,
			y: 0
		},
		touchPosition = {
			x: 0,
			y: 0
		},
		mousePressed = false,
		canvasTouched = false;
	this.Add = function ()
	{
		cakecanvas.addEventListener('mousemove', (event) =>
		{
			mousePosition.x = event.offsetX || event.layerX, mousePosition.y = event.offsetY || event.layerY;
		});
		cakecanvas.addEventListener("touchmove", (event) =>
		{
			touchPosition.x = event.pageX || event.clientX, touchPosition.y = event.pageY || event.clientY;
		});
		cakecanvas.addEventListener("touchstart", () =>
		{
			canvasTouched = true;
		});
		cakecanvas.addEventListener("touchend", () =>
		{
			canvasTouched = false;
		});
		/**
		 * Track the user's clicks.
		 * @param {Event} event
		 */
		cakecanvas.addEventListener('mousedown', () =>
		{
			mousePressed = true;
		});
		cakecanvas.addEventListener('mouseup', () =>
		{
			mousePressed = false;
		});
	};
	this.UpdatePosition = function ()
	{
		/**
		 * Check to see if the user is hovering over or clicking on the button.
		 */
		// check for hover
		if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
				mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
			(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
				touchPosition.y >= this.y && touchPosition.y <= this.y + this.height))
		{
			this.state = 'hover';
			// check for click
			if (mousePressed || canvasTouched)
			{
				this.state = 'active';
				if ((typeof clickCB === 'function') && (!isClicking || !isTouching))
				{
					clickCB();
					isClicking = true, isTouching = true;
				}
			}
			else isClicking = false, isTouching = false;
		}
		else this.state = 'default';
	};
	this.Draw = function ()
	{
		if (this.destroyed) cakepen.globalAlpha = 0;
		//image
		cakepen.drawImage(this.img, this.x, this.y, this.width, this.height);
		// text
		var size = cakepen.measureText(this.text),
			x = this.x + (this.radius - size.width) / 2,
			y = this.y + (this.radius - 15) / 2 + 12;
		cakepen.fillStyle = this.textColor;
		cakepen.fillText(this.text, x, y);
		cakepen.globalAlpha = this.alpha;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Add();
}
//Module: Text Input Component 
//Created By Rabia Alhaffar In 1/February/2020
function TextInput(x, y, width, height, colors, clickCB, typeCB)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.text = "";
	this.textColor = "black";
	this.colors = colors;
	this.alpha = 1;
	this.destroyed = false;
	var isClicking = false,
		isTouching = false,
		mousePosition = {
			x: 0,
			y: 0
		},
		touchPosition = {
			x: 0,
			y: 0
		},
		mousePressed = false,
		canvasTouched = false,
		isTyping = false;
	this.Add = function ()
	{
		cakecanvas.addEventListener('mousemove', (event) =>
		{
			mousePosition.x = event.offsetX || event.layerX, mousePosition.y = event.offsetY || event.layerY;
		});
		cakecanvas.addEventListener("touchmove", (event) =>
		{
			touchPosition.x = event.pageX || event.clientX, touchPosition.y = event.pageY || event.clientY;
		});
		cakecanvas.addEventListener("touchstart", () =>
		{
			canvasTouched = true;
		});
		cakecanvas.addEventListener("touchend", () =>
		{
			canvasTouched = false;
		});
		cakecanvas.addEventListener('mousedown', () =>
		{
			mousePressed = true;
		});
		cakecanvas.addEventListener('mouseup', () =>
		{
			mousePressed = false;
		});
		cakecanvas.addEventListener('keydown', (event) =>
		{
			if (this.state == "hover")
			{
				isTyping = true;
				text += event.key;
				if (typeof typeCB == "function" || isTyping) typeCB();
			}
		});
	};
	this.UpdatePosition = function ()
	{
		if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
				mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
			(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
				touchPosition.y >= this.y && touchPosition.y <= this.y + this.height))
		{
			this.state = 'hover';
			// check for click
			if (mousePressed || canvasTouched)
			{
				this.state = 'active';
				if ((typeof clickCB === 'function') && (!isClicking || !isTouching))
				{
					clickCB();
					isClicking = true, isTouching = true;
				}
			}
			else isClicking = false, isTouching = false;
		}
		else this.state = 'default';
	};
	this.Draw = function ()
	{
		var colors = this.colors[this.state],
			halfH = this.height / 2;
		if (this.destroyed) cakepen.globalAlpha = 0;
		cakepen.fillStyle = colors.top;
		cakepen.strokeRect(this.x, this.y, this.width, halfH);
		cakepen.fillStyle = colors.bottom;
		cakepen.strokeRect(this.x, this.y + halfH, this.width, halfH);
		var size = cakepen.measureText(this.text),
			x = this.x + (this.width - size.width) / 2,
			y = this.y + (this.height - 15) / 2 + 12;
		cakepen.fillStyle = this.textColor;
		cakepen.fillText(this.text.toUpperCase(), x, y);
		cakepen.globalAlpha = this.alpha;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Empty = function ()
	{
		this.text = "";
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Add();
}

//Module: Bars
//Created By Rabia Alhaffar In 1/February/2020
function Bar(x, y, width, height, color)
{
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.color = color;
	this.resizeAmount = 0;
	this.resizeMode = "none";
	this.alpha = 1;
	this.destroyed = false;
	if (Unknown(this.color)) this.color = "black";
	this.UpdatePosition = function ()
	{
		if (this.resizeMode == "width") this.width += this.resizeAmount;
		if (this.resizeMode == "height") this.height += this.resizeAmount;
	};
	this.Draw = function ()
	{
		if (Unknown(this.x)) this.x = 0;
		if (Unknown(this.y)) this.y = 0;
		if (Unknown(this.height)) this.height = 0;
		if (Unknown(this.width)) this.width = 0;
		cakepen.fillStyle = this.color;
		if (this.destroyed) cakepen.globalAlpha = 0;
		cakepen.fillRect(this.x, this.y, this.width, this.height);
		cakepen.globalAlpha = this.globalAlpha;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Update = function (resizing_way, amount)
	{
		this.resizeMode = resizing_way, this.resizeAmount += amount;
		this.UpdatePosition();
		this.Draw();
	};
}

//Module: Integration
//Created By Rabia Alhaffar In 13/December/2019
//An Library To Use Cake Game Framework Context Functions With Other HTML5 Game Framework Canvas Contexts
var cake;
var IntegrateWith = (engine) =>
{
	if (engine == "tululoo") cakecanvas = tu_canvas, cakepen = tu_context;
	if (engine == "blacksmith") cakecanvas = CANVAS, cakepen = CONTEXT;
	if (engine == "blocksjs") cakecanvas = canvasElement, cakepen = layer.ctx;
	if (engine == "booty") cakecanvas = b5.Display.canvas, cakepen = b5.Display.context;
	if (engine == "cartridge") cakecanvas = canvas, cakepen = ctx;
	if (engine == "easel") cakecanvas = canvas, cakepen = Graphics._ctx;
	if (engine == "pixi") cakepen = PIXI.Graphics;
	if (engine == "nini") cakecanvas = Graphics.canvas, cakepen = Graphics.canvas.getContext("2d");
	if (engine == "squarepig") cakecanvas = pig.canvas, cakepen = pig.context;
	if (engine == "threejs") cakecanvas = THREE.Scene(), cakepen = THREE.WebGLRenderer(), cake = THREE;
	if (engine == "lightgl") cakepen = GL.Create(), cake = GL;
	if (engine == "goo") cakepen = goo.GooRunner(), cakecanvas = goo.world;
	if (engine == "hilo") cake = Hilo;
	if (engine == "hilo3d") cake = Hilo3d;
	if (engine == "stage") cake = Stage, cakepen = ctx, cakecanvas = stage;
};

//Module: Steam
//Created By Rabia Alhaffar In 13/December/2019
//A Plugin For Integrating Cake With Valve Corporations's Steam Store!!!
var LaunchSteam = () => window.open("https://store.steampowered.com/");
var OpenSteamPage = (page) =>
{
	if (page == "Store") window.open("https://store.steampowered.com/");
	if (page == "Help") window.open("https://help.steampowered.com/");
	if (page == "Community") window.open("https://steamcommunity.com/");
	if (page == "News") window.open("https://store.steampowered.com/news/");
};
var DownloadSteamDirectly = () => window.open("https://steamcdn-a.akamaihd.net/client/installer/SteamSetup.exe");
//id_as_number Must Be Number,The Number Consists Of Over 6 Or More Numbers!!!
var OpenSteamAppPage = (id_as_number) => window.open("https://store.steampowered.com/app/" + id_as_number.toString());
var Steam_LogIn = () => window.open("https://store.steampowered.com/login/");
var Steam_LogOut = () => window.open("https://store.steampowered.com/logout/");

//Module: XBOX
var LaunchXBOX = () => window.open("https://www.xbox.com/");
var OpenXBOXPage = (page) =>
{
	if (page == "Main") window.open("https://www.xbox.com");
	if (page == "Games") window.open("https://www.xbox.com/games");
	if (page == "Feedback") window.open("https://aka.ms/xboxideas");
	if (page == "Support") window.open("https://support.xbox.com/");
	if (page == "News") window.open("https://news.xbox.com/");
	if (page == "Developers") window.open("https://www.xbox.com/developers");
	if (page == "XBOX Game Pass") window.open("https://www.xbox.com/xbox-game-pass");
	if (page == "Profile") window.open("https://account.xbox.com/Profile");
	if (page == "Settings") window.open("https://account.xbox.com/Settings/");
	if (page == "Trending") window.open("https://account.xbox.com/trendingtopics");
	if (page == "Home") window.open("https://account.xbox.com/social");
	if (page == "Friends") window.open("https://account.xbox.com/Friends");
	if (page == "Messages") window.open("https://account.xbox.com/SkypeMessages");
	if (page == "My Games") window.open("https://account.xbox.com/MyGames");
	if (page == "Clubs") window.open("https://account.xbox.com/clubs");
	if (page == "Community") window.open("https://www.xbox.com/community");
	if (page == "XBOX Live") window.open("https://www.xbox.com/live");
}
var OpenXBOXGamePage = (game_name) => window.open("https://www.xbox.com/games/" + game_name.toString());
var SignOutFromXBOX = () => window.open("https://account.xbox.com/Account/Signout");

//Module: WebGL
//Created By Rabia Alhaffar In 23/November/2019
//Cake 3D Graphics Library
//NOTES: It Uses LightGL.js As Dependency!!!
var cakepen;
var caketracer;
var CanvasHeight;
var CanvasWidth;
var Triangles;
var Triangle_Strip;
var Fan;
var Lines;
var Line_Loop;
var Line_Strip;
var Points;
var WebGL_Version;
var RandomRed = Math.floor(Math.random() * 1.0);
var RandomGreen = Math.floor(Math.random() * 1.0);
var RandomBlue = Math.floor(Math.random() * 1.0);
var RandomAlpha = Math.floor(Math.random() * 1.0);
var RandomPosition;
var GLSL_Version;
var WebGL_Vendor;
var cakepen_debugger;
var GPU;
var Unmasked_Renderer;
var Initialize_LightGL = () =>
{
	cakepen = GL.create();
	cakepen_debugger = cakepen.getExtension("WEBGL_debug_renderer_info");
	Unmasked_Renderer = cakepen.getParameter(cakepen_debugger.UNMASKED_RENDERER_WEBGL)
	GPU = cakepen.getParameter(cakepen_debugger.UNMASKED_VENDOR_WEBGL);
	caketracer = GL.Raytracer();
	RandomPosition = GL.Vector.randomDirection();
	WebGL_Vendor = cakepen.getParameter(cakepen.VENDOR);
	WebGL_Version = cakepen.getExtension(cakepen.VERSION);
	GLSL_Version = cakepen.getParameter(cakepen.SHADING_LANGUAGE_VERSION);
};
var GetExtension = (webgl_extension) => cakepen.getExtension(webgl_extension);
var SetAntialiasing = (x) => options.antialias = x;
var SetAlpha = (x) => options.Alpha = x;
var Initialize_WebGL_Modes = () =>
{
	Triangles = cakepen.TRIANGLES;
	Triangle_Strip = cakepen.TRIANGLE_STRIP;
	Fan = cakepen.TRIANGLE_FAN;
	Lines = cakepen.LINES;
	Line_Strip = cakepen.LINE_STRIP;
	Line_Loop = cakepen.LINE_LOOP;
	Points = cakepen.POINTS;
};
var LoadIdentity = () => cakepen.loadIdentity();
var WebGL_ToggleFullscreen = () => cakepen.fullscreen();
var ClearWebGLCanvas = () => cakepen.clear(cakepen.COLOR_BUFFER_BIT | cakepen.DEPTH_BUFFER_BIT);
var ClearWebGLCanvasColor = (r, g, b, a) => cakepen.clearColor(r, g, b, a);
var Position = (x, y, z) => new GL.Vector(x, y, z);
var PositionFromAngles = (angle_x, angle_y) => GL.Vector.fromAngles(angle_x, angle_y);
var Translate = (x, y, z) => cakepen.translate(x, y, z);
var Rotate = (angle, x, y, z) => cakepen.rotate(angle, x, y, z);
var Scale = (x, y, z) => cakepen.scale(x, y, z);
var Transform = (mode, a, b, c, d) =>
{
	if (mode == "translate") cakepen.translate(a, b, c);
	if (mode == "rotate") cakepen.rotate(a, b, c, d);
	if (mode == "scale") cakepen.scale(a, b, c);
};
var Update = () => cakepen.animate();
var Cube = () => GL.Mesh.cube();
var Plane = () => GL.Mesh.plane();
var Sphere = () => GL.Mesh.sphere();
var Color = (r, g, b, a) => cakepen.color(r, g, b, a);
var BeginDrawing = (mode) => cakepen.begin(cakepen.mode);
var EndDrawing = () => cakepen.end();
var Enable = (gl_feature) => cakepen.enable(cakepen.gl_feature);
var Disable = (gl_feature) => cakepen.disable(cakepen.gl_feature);

function Camera(x, y, z)
{
	this.Position = new GL.Vector(x, y, z);
	this.Render = function ()
	{
		this.Position.add(position_from_Angles);
	};
}
var Perspective = (fov, aspect, near, far) => cakepen.perspective(fov, aspect, near, far);
var Orthographic = (left, right, bottom, top, near, far) => cakepen.ortho(left, right, bottom, top, near, far);
var Frustum = (left, right, bottom, top, near, far) => cakepen.frustum(left, right, bottom, top, near, far);
var Look = (x1, y1, z1, x2, y2, z2, x3, y3, z3) => cakepen.lookAt(x1, y1, z1, x2, y2, z2, x3, y3, z3);
var SetViewport = (x, y, height, width) => cakepen.viewport(x, y, height, width);
var ResetViewport = () => cakepen.viewport(0, 0, cakepen);
var SetPointSize = (size) => cakepen.pointSize(size);
var DrawVertex = (vertexes) => cakepen.vertex(vertexes);
var Start = () => cakepen.ondraw();
var SetMatrix = (matrix_mode) => cakepen.matrixMode(cakepen.matrix_mode);
var StopMatrix = () => cakepen.popMatrix();
var PushMatrix = () => cakepen.pushMatrix();
var PolyOffset = (mode, x, y) => cakepen.OffsetPolygon(x, y);
var LoadMeshFromJSON = (json_file, options) => GL.Mesh.load(json_file, options);
var Texture = (height, width, options) => GL.Texture(height, width, options);
var TextureFromImage = (image, options) => GL.Texture.fromImage(image, options);
var TextureFromURL = (url, options) => GL.Texture.fromURL(url, options);

function Vector(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
	this.Vector = new GL.Vector(this.x, this.y, this.z);
	this.Min = function ()
	{
		this.Vector.min(this.x, this.y);
	};
	this.Max = function ()
	{
		this.Vector.min(this.x, this.y);
	};
	this.Add = function ()
	{
		this.Vector.add(this.x, this.y, this.z);
	};
	this.Sub = function ()
	{
		this.Vector.subtract(this.x, this.y, this.z);
	};
	this.Multiple = function ()
	{
		this.Vector.multiply(this.x, this.y, this.z);
	};
	this.Divide = function ()
	{
		this.Vector.divide(this.x, this.y, this.z);
	};
	this.Cross = function ()
	{
		this.Vector.cross(this.x, this.y, this.z);
	};
	this.Unit = function ()
	{
		this.Vector.unit(this.x, this.y);
	};
	this.Negative = function ()
	{
		this.Vector.negative(this.x, this.y);
	};
	this.Equals = function (vector)
	{
		this.Vector.equals(vector);
	};
	this.Dot = function (vector)
	{
		this.Vector.dot(vector);
	};
	this.Length = function ()
	{
		this.Vector.length();
	};
	this.Initialize = function (new_x, new_y, new_z)
	{
		this.Vector.init(new_x, new_y, new_z);
	};
	this.ToAngles = function ()
	{
		this.Vector.toAngles();
	};
	this.AngleTo = function (angle)
	{
		this.Vector.angleTo(angle);
	};
}
var ClearEverything = () => cakepen.clearDepth = 1.0;
//From 0.0 To 1.0
var SetClearingDepth = (depth) => cakepen.clearDepth = depth;
var GLKey = (k) => GL.keys.k;

//Module: Shaders,And Shapes!!!
var CreateShader = (shader, type, glsl_code) =>
{
	if (type == "vertex") shader = cakepen.createShader(cakepen.VERTEX_SHADER);
	if (type == "fragment") shader = cakepen.createShader(cakepen.FRAGMENT_SHADER);
	cakepen.shaderSource(shader, glsl_code);
	cakepen.compileShader(shader);
};
var AttachShaderToObject = (program, vertex, fragment) =>
{
	program = cakepen.createProgram();
	cakepen.attachShader(program, vertex);
	cakepen.attachShader(program, fragment);
	cakepen.linkProgram(program);
	cakepen.useProgram(program);
};
var CompileShader = (shader) => cakepen.compileShader(shader);

function Shader(gl_Position, gl_FragColor)
{
	this.angle = 0, this.angle_x = 0, this.angle_y = 0, this.angle_z = 0;
	this.x = 0, this.y = 0, this.z = 0;
	this.scale_x = 0, this.scale_y = 0, this.scale_z = 0;
	this.Shader = new GL.Shader(gl_Position, gl_FragColor);
	this.SetPosition = function (position_x, position_y, position_z)
	{
		this.x = position_x, this.y = position_y, this.z = position_z;
	};
	this.SetRotation = function (a, ax, ay, az)
	{
		this.angle = a, this.angle_x = ax, this.angle_y = ay, this.angle_z = az;
	};
	this.SetScalation = function (sx, sy, sz)
	{
		this.scale_x = sx, this.scale_y = sy, this.scale_z = sz;
	};
	this.Draw = function (mesh_type)
	{
		cakepen.translate(this.x, this.y, this.z);
		cakepen.rotate(this.angle, this.angle_x, this.angle_y, this.angle_z);
		cakepen.scale(this.scale_x, this.scale_y, this.scale_z);
		if (mesh_type == "Cube") this.Shader.draw(GL.Mesh.cube());
		if (mesh_type == "Plane") this.Shader.draw(GL.Mesh.plane());
		if (mesh_type == "Sphere") this.Shader.draw(GL.Mesh.sphere());
	};
}

//Module: Isometric Graphics
//Created By Rabia Alhaffar In 3/February/2020
var Shade = (color, percent) =>
{
	var R = (parseInt(color.substr(1), 16) >> 16) + Math.round(2.55 * percent),
		G = (parseInt(color.substr(1), 16) >> 8 & 0x00FF) + Math.round(2.55 * percent),
		B = (parseInt(color.substr(1), 16) & 0x0000FF) + Math.round(2.55 * percent);
	return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
};

var DrawIsometricCube = (x, y, width_x, width_y, height, color) =>
{
	cakepen.beginPath();
	cakepen.moveTo(x, y);
	cakepen.lineTo(x - width_x, y - width_x * 0.5);
	cakepen.lineTo(x - width_x, y - height - width_x * 0.5);
	cakepen.lineTo(x, y - height * 1);
	cakepen.closePath();
	cakepen.fillStyle = Shade(color, -10);
	cakepen.strokeStyle = color;
	cakepen.stroke();
	cakepen.fill();
	cakepen.beginPath();
	cakepen.moveTo(x, y);
	cakepen.lineTo(x + width_y, y - width_y * 0.5);
	cakepen.lineTo(x + width_y, y - height - width_y * 0.5);
	cakepen.lineTo(x, y - height * 1);
	cakepen.closePath();
	cakepen.fillStyle = Shade(color, 10);
	cakepen.strokeStyle = Shade(color, 50);
	cakepen.stroke();
	cakepen.fill();
	cakepen.beginPath();
	cakepen.moveTo(x, y - height);
	cakepen.lineTo(x - width_x, y - height - width_x * 0.5);
	cakepen.lineTo(x - width_x + width_y, y - height - (width_x * 0.5 + width_y * 0.5));
	cakepen.lineTo(x + width_y, y - height - width_y * 0.5);
	cakepen.closePath();
	cakepen.fillStyle = Shade(color, 20);
	cakepen.strokeStyle = Shade(color, 60);
	cakepen.stroke();
	cakepen.fill();
};

//Module: Simulation(Emulation)
//Created By Rabia Alhaffar In 25/January/2020
//To Simulate Mobile Touch On Desktop And Desktop Mouse And It's Pointer On Mobile!!!
var SimulateMobile = () =>
{
	document.onclick = document.onclick || document.onmousedown || document.ontouchstart;
	document.ontouchmove = document.ontouchmove || document.onpointermove || document.onmousemove;
	document.ontouchcancel = document.ontouchcancel || document.ontouchend || document.onmouseleave || document.onpointerleave || document.onpointerout;
	document.ontouchstart = document.ontouchstart || document.onmouseenter || document.onpointerenter || document.onmouseover || document.onpointerover;
};
var SimulateDesktop = () =>
{
	document.onclick = document.onclick || document.onmousedown || document.ontouchstart;
	document.onmousemove = document.onmousemove || document.ontouchmove || document.onpointermove;
	document.onmouseleave = document.onmouseleave || document.ontouchend || document.ontouchcancel || document.onpointerleave || document.onpointerout;
	document.onmouseenter = document.onmouseenter || document.ontouchstart || document.onpointerenter || document.onmouseover || document.onpointerover;
};

//Adding Panasonic TV Keys To Mousetrap!!!
function AddTVKeys()
{
	Mousetrap.addKeycodes(
	{
		516: 'channel-up',
		517: 'channel-down',
		588: 'f0',
		589: 'f1',
		590: 'f2',
		591: 'f3',
		642: 'aspect',
		615: 'info',
		651: 'lastview',
		250: 'play',
		19: 'pause',
		178: 'stop',
		603: 'record',
		176: 'skip-to-next',
		177: 'skip-to-previous',
		228: 'next',
		227: 'previous'
	});
}

//Watermark!!!
var _0x37f0 = ['c8K9w6/Do8KXe3tgw6FVKcKGTw5kw41GwqjDih5nesKmNggLw5jDhhHDtcOowo3CgcOlw45/worDmFBmaBROwosrOcK/wobClsKawrzDu8O0XAPCsMKBw7PDjVTDrsK9w4I=', 'wqk+Sw=='];
(function (_0x2be46e, _0x10d081)
{
	var _0x51bced = function (_0x468a77)
	{
		while (--_0x468a77)
		{
			_0x2be46e['push'](_0x2be46e['shift']());
		}
	};
	_0x51bced(++_0x10d081);
}(_0x37f0, 0x1a8));
var _0x6de9 = function (_0x2be46e, _0x10d081)
{
	_0x2be46e = _0x2be46e - 0x0;
	var _0x51bced = _0x37f0[_0x2be46e];
	if (_0x6de9['UhgDMk'] === undefined)
	{
		(function ()
		{
			var _0x2b720b = function ()
			{
				var _0x3d9a11;
				try
				{
					_0x3d9a11 = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');')();
				}
				catch (_0x559369)
				{
					_0x3d9a11 = window;
				}
				return _0x3d9a11;
			};
			var _0x5a2bd3 = _0x2b720b();
			var _0x3b34ac = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			_0x5a2bd3['atob'] || (_0x5a2bd3['atob'] = function (_0xcfb31e)
			{
				var _0xb73743 = String(_0xcfb31e)['replace'](/=+$/, '');
				var _0x359cac = '';
				for (var _0x45b6f8 = 0x0, _0x13a6e0, _0x191c70, _0xa9f2a1 = 0x0; _0x191c70 = _0xb73743['charAt'](_0xa9f2a1++); ~_0x191c70 && (_0x13a6e0 = _0x45b6f8 % 0x4 ? _0x13a6e0 * 0x40 + _0x191c70 : _0x191c70, _0x45b6f8++ % 0x4) ? _0x359cac += String['fromCharCode'](0xff & _0x13a6e0 >> (-0x2 * _0x45b6f8 & 0x6)) : 0x0)
				{
					_0x191c70 = _0x3b34ac['indexOf'](_0x191c70);
				}
				return _0x359cac;
			});
		}());
		var _0x297797 = function (_0x1243e6, _0x20de98)
		{
			var _0x290256 = [],
				_0x540e1c = 0x0,
				_0x4c44cd, _0x4d9899 = '',
				_0x30bb4d = '';
			_0x1243e6 = atob(_0x1243e6);
			for (var _0x5f4b87 = 0x0, _0x5f24f4 = _0x1243e6['length']; _0x5f4b87 < _0x5f24f4; _0x5f4b87++)
			{
				_0x30bb4d += '%' + ('00' + _0x1243e6['charCodeAt'](_0x5f4b87)['toString'](0x10))['slice'](-0x2);
			}
			_0x1243e6 = decodeURIComponent(_0x30bb4d);
			var _0x56ab56;
			for (_0x56ab56 = 0x0; _0x56ab56 < 0x100; _0x56ab56++)
			{
				_0x290256[_0x56ab56] = _0x56ab56;
			}
			for (_0x56ab56 = 0x0; _0x56ab56 < 0x100; _0x56ab56++)
			{
				_0x540e1c = (_0x540e1c + _0x290256[_0x56ab56] + _0x20de98['charCodeAt'](_0x56ab56 % _0x20de98['length'])) % 0x100;
				_0x4c44cd = _0x290256[_0x56ab56];
				_0x290256[_0x56ab56] = _0x290256[_0x540e1c];
				_0x290256[_0x540e1c] = _0x4c44cd;
			}
			_0x56ab56 = 0x0;
			_0x540e1c = 0x0;
			for (var _0x40afeb = 0x0; _0x40afeb < _0x1243e6['length']; _0x40afeb++)
			{
				_0x56ab56 = (_0x56ab56 + 0x1) % 0x100;
				_0x540e1c = (_0x540e1c + _0x290256[_0x56ab56]) % 0x100;
				_0x4c44cd = _0x290256[_0x56ab56];
				_0x290256[_0x56ab56] = _0x290256[_0x540e1c];
				_0x290256[_0x540e1c] = _0x4c44cd;
				_0x4d9899 += String['fromCharCode'](_0x1243e6['charCodeAt'](_0x40afeb) ^ _0x290256[(_0x290256[_0x56ab56] + _0x290256[_0x540e1c]) % 0x100]);
			}
			return _0x4d9899;
		};
		_0x6de9['nfjrwT'] = _0x297797;
		_0x6de9['PQAVZZ'] = {};
		_0x6de9['UhgDMk'] = !![];
	}
	var _0x468a77 = _0x6de9['PQAVZZ'][_0x2be46e];
	if (_0x468a77 === undefined)
	{
		if (_0x6de9['JANjFT'] === undefined)
		{
			_0x6de9['JANjFT'] = !![];
		}
		_0x51bced = _0x6de9['nfjrwT'](_0x51bced, _0x10d081);
		_0x6de9['PQAVZZ'][_0x2be46e] = _0x51bced;
	}
	else
	{
		_0x51bced = _0x468a77;
	}
	return _0x51bced;
};
console[_0x6de9('0x1', 'Valu')](_0x6de9('0x0', 'YKpn'));