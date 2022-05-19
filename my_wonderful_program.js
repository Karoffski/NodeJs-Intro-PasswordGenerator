#!/usr/bin/env node
import clipboard from "clipboardy";
import { argv } from 'node:process';

var pswdLength = argv[2];

// ######### fonctions utilisées dans la logique
function makeid(pswdLength) {
   var result = ''
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
   var speChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   
   for (var i = 0; i < pswdLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      if(result[-i] != speChar.test(/^[A-Za-z0-9_.]+$/)) {
         result += speChar.charAt(Math.floor(Math.random() * speChar.length))
      }
   }
   return result;
};

// ######### logique du programme
let pswd = makeid(pswdLength);

if(argv[3] == '-c' || argv[3] == '-C'){
   clipboard.writeSync(pswd);
}else {
   console.log(pswd);
}