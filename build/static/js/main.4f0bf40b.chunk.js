(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,n,e){t.exports=e(33)},23:function(t,n,e){},25:function(t,n,e){},33:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(3),o=e.n(i),c=(e(23),e(8)),s=e(9),l=e(13),u=e(10),h=e(14),f=(e(25),e(15)),g=e(1),v=e(2);function b(){var t=Object(g.a)(["\n      width: ","vmin;\n      height: ","vmin;\n  "]);return b=function(){return t},t}function p(){var t=Object(g.a)(["\n  background-image: url(/base.svg);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n\n  ","\n  \n  img {\n    width:100%;\n    height:100%;\n  }\n"]);return p=function(){return t},t}var d=v.b.div(p(),function(t){var n=t.size;return Object(v.a)(b(),n,n)}),m=function(t){var n=t.src,e=t.alt;return a.a.createElement(d,{size:18},a.a.createElement("img",{src:"/icons/".concat(n),alt:e}))};function w(){var t=Object(g.a)(["\n    left: 50%;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    text-align: right;\n    top: 50%;\n    transform-origin: 0 50%;\n    transform: translate(0, -50%);\n"]);return w=function(){return t},t}var k=v.b.div(w());function y(){var t=Object(g.a)(["\n            transform: rotate(","deg) scale(1.1);\n        "]);return y=function(){return t},t}function O(){var t=Object(g.a)(["\n        transform: rotate(","deg) scale(1);\n    "]);return O=function(){return t},t}function j(){var t=Object(g.a)(["\n    border-radius: 50%;\n    display: inline-block;\n    opacity: .5;\n    overflow: hidden;\n    pointer-events: all;\n    ","\n    will-change: opacity, transform;\n    transition: opacity .2s ease-in-out, transform .2s ease-in-out;\n\n    &:hover, &:focus {\n        outline: 0;\n        opacity: .75;\n        ","\n    }\n"]);return j=function(){return t},t}var E=v.b.a(j(),function(t){return Object(v.a)(O(),t.angle)},function(t){return Object(v.a)(y(),t.angle)}),z=function(t){var n=t.distance,e=t.href,r=t.title,i=t.src,o=t.angle;return a.a.createElement(k,{style:{transform:"translate(0, -50%) rotate(".concat(o,"deg)"),width:"".concat(n,"vmin")}},a.a.createElement(E,{href:e,title:r,angle:-o},a.a.createElement(m,{src:i,alt:r})))},C=function(t){return(t<12?30:60)*t},S=function(t){return t<12?t%2===0?46:42:27.5},T=function(t){return t.links.map(function(t,n){return Object(f.a)({},t,{key:n,angle:C(n),distance:S(n)})}).sort(function(t,n){return t.tab>n.tab?1:-1}).map(function(t){return a.a.createElement(z,t)})},W=[{href:"https://t.me/rightonhana",src:"telegram.svg",title:"Telegram",tab:11},{href:"skype:live:rightonhana",src:"skype.svg",title:"Skype",tab:15},{href:"https://www.twitch.tv/rightonhana",src:"twitch.svg",title:"Twitch",tab:18},{href:"https://playoverwatch.com/es-es/career/pc/hana-11360",src:"overwatch.svg",title:"Overwatch",tab:17},{href:"https://discordapp.com/users/133673024640647168",src:"discord.svg",title:"Discord",tab:16},{href:"https://soundcloud.com/rightonhana",src:"soundcloud.svg",title:"SoundCloud",tab:12},{href:"https://www.snapchat.com/add/rightonhana",src:"snapchat.svg",title:"Snapchat",tab:8},{href:"https://www.youtube.com/channel/UCN0IR9fhWQrp9gpBLwe4G0w?view_as=subscriber",src:"youtube.svg",title:"YouTube",tab:4},{href:"http://twitter.com/rightonhana",src:"twitter.svg",title:"Twitter",tab:1},{href:"http://fb.me/rightonhana",src:"facebook.svg",title:"Facebook",tab:2},{href:"https://www.instagram.com/rightonhana/",src:"instagram.svg",title:"Instagram",tab:3},{href:"https://line.me/R/rightonhana",src:"line.svg",title:"Line",tab:7},{href:"https://gitlab.com/rightonhana",src:"gitlab.svg",title:"Gitlab",tab:10},{href:"mailto:rightonhana@gmail.com",src:"gmail.svg",title:"Gmail",tab:14},{href:"https://www.linkedin.com/in/rightonhana/",src:"linkedin.svg",title:"LinkedIn",tab:13},{href:"https://stackoverflow.com/users/6272220/mar%C3%ADa-florencia-gonz%C3%A1lez?tab=profile",src:"stackoverflow.svg",title:"StackOverflow",tab:9},{href:"https://bitbucket.org/rightonhana/",src:"bitbucket.svg",title:"BitBucket",tab:5},{href:"http://github.com/rightonhana",src:"github.svg",title:"GitHub",tab:6}];function G(){var t=Object(g.a)(["\n        width: ","vmin;\n        height: ","vmin;\n    "]);return G=function(){return t},t}function L(){var t=Object(g.a)(["\n    left:50%;\n    opacity: .75;\n    position: absolute;\n    top:50%;\n    transform: translate(-50%, -50%);\n\n    ","\n"]);return L=function(){return t},t}var A=v.b.img(L(),function(t){var n=t.size;return Object(v.a)(G(),n,n)}),B=function(){return a.a.createElement(A,{src:"/roh.svg",size:18,alt:"Florencia Gonzalez"})},N=function(t){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(B,null),a.a.createElement(T,{links:W}))}}]),n}(r.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(t){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(t){console.error("Error during service worker registration:",t)})}o.a.render(a.a.createElement(N,null),document.querySelector("main")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");x?(function(t){fetch(t).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):I(t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):I(t)})}}()}},[[17,2,1]]]);
//# sourceMappingURL=main.4f0bf40b.chunk.js.map