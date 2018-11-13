#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const realdir     = path.dirname(fs.realpathSync(__filename))
const adjectives    = fs.readFileSync(path.join(realdir,"adjectives.txt"),{encoding:"utf-8"}).split("\r\n");
const nouns         = fs.readFileSync(path.join(realdir,"nouns.txt"),{encoding:"utf-8"}).split("\r\n");


const randItem = function(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}


console.log((randItem(adjectives)+"-"+randItem(nouns)).toLowerCase());
