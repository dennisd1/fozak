// ==UserScript==
// @name        addpicture
// @include     https://*.google.com/*
// @include     http://*.google.com/*
// @include     https://*.casebook.ru/*
// @include     http://*.casebook.ru/*
// @version     1
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

console.log("monkey loaded");

var alreadyRun = GM_getValue ("alreadyRun",  false);

function openurlfunction(){
   console.log("openurlopen");
   location.href = "https://casebook.ru/#side/info/1127746371422";
}

function copycardfunction(){
   console.log("copycard started");
   console.log("card div "+document.getElementById('card').innerHTML);
   var GM_id = GM_setValue ("1127746371422",  document.getElementById('card').innerHTML);
   console.log("copycard FINISHED");
}


setTimeout(openurlfunction, 8000); 
setTimeout(copycardfunction, 12000); 


// @require     JQUERY deleted needs to add on sites without JQUERY
// location of SQLLITE data C:\Users\USERNAME\AppData\Roaming\Mozilla\Firefox\Profiles\nahd6ha2.default\gm_scripts\название скрипта.db
