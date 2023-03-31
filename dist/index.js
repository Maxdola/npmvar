#! /usr/bin/env node
var e=Object.create?function(e,o,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return o[t]}})}:function(e,o,t,r){void 0===r&&(r=t),e[r]=o[t]},o=Object.create?function(e,o){Object.defineProperty(e,"default",{enumerable:!0,value:o})}:function(e,o){e.default=o},t=function(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var a in t)"default"!==a&&Object.hasOwnProperty.call(t,a)&&e(r,t,a);return o(r,t),r},r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var a=t(require("path")),l=t(require("fs")),n=r(require("chalk")),c=r(require("figlet")),u=r(require("clear")),i=require("child_process");!function(){u.default(),console.log(n.default.blue(c.default.textSync("nodevar",{horizontalLayout:"full"}))),console.log(n.default.blue("run commands with package.json variables")),console.log();var e=a.join(process.cwd(),"package.json");if(l.existsSync(e))try{var o=JSON.parse(l.readFileSync(e).toString("utf-8"));console.log(n.default.blue("project:    '"+n.default.cyanBright(o.name)+"'")),console.log(n.default.blue("version:    '"+n.default.cyanBright(o.version)+"'")),console.log(n.default.blue("author:     '"+n.default.cyanBright(o.author)+"'")),console.log(n.default.blue("timestamp:  '"+n.default.cyanBright((new Date).getTime().toString())+"'")),console.log(n.default.blue("date:       '"+n.default.cyanBright((new Date).toISOString())+"'")),console.log();var t=process.argv.slice(2).join(" "),r=t.replace(/\{project\}/g,o.name).replace(/\{name\}/g,o.name).replace(/\{version\}/g,o.version).replace(/\{author\}/g,o.author).replace(/\{timestamp\}/g,(new Date).getTime().toString()).replace(/\{date\}/g,(new Date).toISOString());if(console.log(n.default.blue("raw command:")+"\t "+n.default.cyanBright(t)),console.log(n.default.blue("parsed command:")+"\t "+n.default.cyanBright(r)),console.log(),0===r.trim().length)return void console.log(n.default.red("no command provided."));try{var s=(new Date).getTime(),d=i.exec(r);d.stdout&&d.stdout.pipe(process.stdout),d.stderr&&d.stderr.pipe(process.stderr),d.on("close",(function(e){console.log(),console.log("process exited with code "+e+" ("+((new Date).getTime()-s)+"ms)")}))}catch(e){console.error(e)}}catch(e){console.log(n.default.red("invalid package.json"))}else console.log(n.default.red("no package.json found in '"+process.cwd()+"'"))}();