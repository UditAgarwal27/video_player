(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(17),r=c.n(a),s=(c(24),c(25),c(8)),o=c.n(s),d=c(11),l=c(12),u=(c(27),c(28),c(9)),j=c(1);function p(e){e.id;var t=e.posterid,c=e.name,n=e.duration,i=e.videoid;return Object(j.jsxs)("div",{className:"thumbnail",children:[Object(j.jsx)("p",{children:c}),Object(j.jsx)("p",{children:i}),Object(j.jsx)(u.b,{to:"/video/".concat(i),children:Object(j.jsx)("img",{src:"https://drive.google.com/thumbnail?id=".concat(t),alt:c})}),Object(j.jsx)("p",{children:n})]})}function h(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/videos").then((function(e){return e.json()})).then((function(e){i(e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsx)("div",{className:"home",children:Object(j.jsx)("div",{className:"row",children:c.map((function(e){return Object(j.jsx)(p,{id:e.id,posterid:e.posterid,name:e.name,duration:e.duration,videoid:e.videoid},!0)}))})})}var b=c(2);c(35);function f(){var e=Object(b.e)().videoid,t=Object(n.useState)(),c=Object(l.a)(t,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){function t(){return(t=Object(d.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:8000/getvideo/".concat(e)).then((function(e){return e.json()})).then((function(e){a(e.name)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{className:"videoplayer",children:[Object(j.jsx)("h2",{children:"this is the videoplayer screen"}),Object(j.jsxs)("h2",{children:["Now playing ",i]}),Object(j.jsx)("div",{className:"player",children:Object(j.jsx)("iframe",{src:"https://player.vimeo.com/video/".concat(e,"?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=d2bede10c4"),frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0,title:"Countdown2.mp4"})})]})}var v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(u.a,{children:[Object(j.jsx)(b.a,{exact:!0,path:"/home",children:Object(j.jsx)(h,{})}),Object(j.jsx)(b.a,{path:"/video/:videoid",children:Object(j.jsx)(f,{})})]})})})};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.00f9f74c.chunk.js.map