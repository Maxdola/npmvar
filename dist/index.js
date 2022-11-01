#! /usr/bin/env node
var e=Object.create?function(e,o,r,t){void 0===t&&(t=r),Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[r]}})}:function(e,o,r,t){void 0===t&&(t=r),e[t]=o[r]},o=Object.create?function(e,o){Object.defineProperty(e,"default",{enumerable:!0,value:o})}:function(e,o){e.default=o},r=function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var l in r)"default"!==l&&Object.hasOwnProperty.call(r,l)&&e(t,r,l);return o(t,r),t},t=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var l=r(require("path")),n=r(require("fs")),a=t(require("chalk")),c=t(require("figlet")),u=t(require("clear")),s=require("child_process");!function(){u.default(),console.log(a.default.blue(c.default.textSync("nodevar",{horizontalLayout:"full"}))),console.log(a.default.blue("run commands with package.json variables")),console.log();var e=l.join(process.cwd(),"package.json");if(n.existsSync(e))try{var o=JSON.parse(n.readFileSync(e).toString("utf-8"));console.log(a.default.blue("project: '"+a.default.cyanBright(o.name)+"'")),console.log(a.default.blue("version: '"+a.default.cyanBright(o.version)+"'")),console.log(a.default.blue("author:  '"+a.default.cyanBright(o.author)+"'")),console.log();var r=process.argv.slice(2).join(" "),t=r.replace(/\{project\}/g,o.name).replace(/\{version\}/g,o.version).replace(/\{author\}/g,o.author);if(console.log(a.default.blue("raw command:")+"\t "+a.default.cyanBright(r)),console.log(a.default.blue("parsed command:")+"\t "+a.default.cyanBright(t)),console.log(),0===t.trim().length)return void console.log(a.default.red("no command provided."));try{var i=(new Date).getTime(),d=s.exec(t);d.stdout&&d.stdout.pipe(process.stdout),d.stderr&&d.stderr.pipe(process.stderr),d.on("close",(function(e){console.log(),console.log("process exited with code "+e+" ("+((new Date).getTime()-i)+"ms)")}))}catch(e){console.error(e)}}catch(e){console.log(a.default.red("invalid package.json"))}else console.log(a.default.red("no package.json found in '"+process.cwd()+"'"))}();