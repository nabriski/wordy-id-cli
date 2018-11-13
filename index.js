#!/usr/bin/env node
const fs = require("fs");

const adjectives    = fs.readFileSync("./adjectives.txt",{encoding:"utf-8"}).split("\r\n");
const nouns         = fs.readFileSync("./nouns.txt",{encoding:"utf-8"}).split("\r\n");


const randItem = function(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}


console.log((randItem(adjectives)+"-"+randItem(nouns)).toLowerCase());
