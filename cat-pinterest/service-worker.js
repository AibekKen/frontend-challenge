if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"cat-pinterest"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.9b7af234.css",revision:null},{url:"/img/favorite1.a6924052.svg",revision:null},{url:"/img/favorite2.8d21f7aa.svg",revision:null},{url:"/img/favorite3.b8bb4a66.svg",revision:null},{url:"/index.html",revision:"b01d7e20133c20f549f0b68f1b49cf8c"},{url:"/js/431.9d840c22.js",revision:null},{url:"/js/app.f3672809.js",revision:null},{url:"/js/chunk-vendors.3b19a0d2.js",revision:null},{url:"/manifest.json",revision:"3515674b0d93b6c646c5e8311a3aa743"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map