(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{58:function(e,a,t){e.exports=t(71)},63:function(e,a,t){},64:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),o=t.n(c),l=(t(63),t(64),t(49)),s=t(116),m=t(111),i=t(110),p=t(112),u=t(113),d=t(42),E=t(117),h=t(114),f=t(35),v=t(24),b=t(52),g=Object(l.a)(function(e){return{root:{flexGrow:1},paper:{width:"800px",margin:"0 auto",padding:e.spacing(3,2)}}});function w(){var e=g();return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{className:e.paper},r.a.createElement(d.a,{variant:"h5"},"Welcome to the Fancy Store!"),r.a.createElement("br",null),r.a.createElement(d.a,{variant:"body1"},"Take a look at our wide variety of products.")))}var x=t(17),j=t.n(x),O=t(31),N=t(18),y=t(102),k=t(103),I=t(104),S=t(101),W=Object(l.a)(function(e){return{root:{flexGrow:1},grid:{width:"1000px",margin:"0 auto"},paper:{padding:e.spacing(3,2)},media:{height:0,paddingTop:"56.25%"}}});function G(){var e=W(),a=Object(n.useState)(!1),t=Object(N.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)([]),s=Object(N.a)(l,2),m=s[0],i=s[1];function p(){return(p=Object(O.a)(j.a.mark(function e(){var a,t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://localhost:8092/api/products"));case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,i(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),o(!0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){p.apply(this,arguments)}()},[]),r.a.createElement("div",{className:e.root},c&&r.a.createElement(b.a,{className:e.paper},r.a.createElement(d.a,{component:"p"},"An error has occurred, please try reloading the page.")),!c&&r.a.createElement(S.a,{className:e.grid,container:!0,spacing:3,justify:"flex-start",alignItems:"stretch"},m.map(function(a){return r.a.createElement(S.a,{key:a.id,item:!0,md:4,xs:12},r.a.createElement(y.a,null,r.a.createElement(k.a,{className:e.media,image:a.picture,title:a.name}),r.a.createElement(I.a,null,r.a.createElement(d.a,{variant:"body1"},a.name," - $",a.cost))))})))}var C=t(105),B=t(109),P=t(108),A=t(106),D=t(107),M=Object(l.a)(function(e){return{root:{flexGrow:1},paper:{maxWidth:"800px",margin:"0 auto",padding:e.spacing(3,2)},table:{minWidth:650},tableRow:{cursor:"pointer"}}});function R(e){var a=e.history,t=M(),c=Object(n.useState)(!1),o=Object(N.a)(c,2),l=o[0],s=o[1],m=Object(n.useState)([]),i=Object(N.a)(m,2),p=i[0],u=i[1];function E(){return(E=Object(O.a)(j.a.mark(function e(){var a,t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://localhost:8091/api/orders"));case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,u(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),s(!0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){E.apply(this,arguments)}()},[]),r.a.createElement("div",{className:t.root},l&&r.a.createElement(b.a,{className:t.paper},r.a.createElement(d.a,{component:"p"},"An error has occurred, please try reloading the page.")),!l&&r.a.createElement(b.a,{className:t.paper},r.a.createElement(d.a,{variant:"h5"},"Orders"),r.a.createElement(C.a,{className:t.table},r.a.createElement(A.a,null,r.a.createElement(D.a,null,r.a.createElement(P.a,null,"Order Id"),r.a.createElement(P.a,null,"Date"),r.a.createElement(P.a,null,"Total Items"),r.a.createElement(P.a,null,"Cost"))),r.a.createElement(B.a,null,p.map(function(e){return r.a.createElement(D.a,{hover:!0,className:t.tableRow,key:e.id,onClick:function(){a.push("/orders/".concat(e.id))}},r.a.createElement(P.a,{component:"th",scope:"row"},e.id),r.a.createElement(P.a,null,e.date),r.a.createElement(P.a,null,e.items&&e.items.length||0),r.a.createElement(P.a,null,"$",e.cost))})))))}var T=Object(l.a)(function(e){return{root:{flexGrow:1},paper:{maxWidth:"800px",margin:"0 auto",padding:e.spacing(3,2)},table:{minWidth:650}}});function $(e){var a=e.match,t=T(),c=Object(n.useState)(!1),o=Object(N.a)(c,2),l=o[0],s=o[1],m=Object(n.useState)({}),i=Object(N.a)(m,2),p=i[0],u=i[1];function E(){return(E=Object(O.a)(j.a.mark(function e(){var t,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://localhost:8091/api/orders","/").concat(a.params.id));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,u(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),s(!0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){E.apply(this,arguments)}()},{}),r.a.createElement("div",{className:t.root},l&&r.a.createElement(b.a,{className:t.paper},r.a.createElement(d.a,{component:"p"},"An error has occurred, please try reloading the page.")),!l&&r.a.createElement(b.a,{className:t.paper},r.a.createElement(d.a,{component:"p"},r.a.createElement("b",null,"Order ID: "),p.id),r.a.createElement(d.a,{component:"p"},r.a.createElement("b",null,"Date: "),p.date)))}var z=Object(l.a)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(3,2)}}});function F(){var e=z();return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{className:e.paper},r.a.createElement(d.a,{variant:"h6",component:"h6"},"Page not found")))}var H=Object(l.a)(function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},logo:{maxHeight:"60px",marginRight:e.spacing(1)},drawer:{width:200,flexShrink:0},drawerPaper:{width:200},drawerItem:{color:"rgba(0, 0, 0, 0.54)"},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}});function J(){var e=H();return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,null,r.a.createElement(i.a,null),r.a.createElement(m.a,{position:"fixed",className:e.appBar},r.a.createElement(p.a,null,r.a.createElement(d.a,{variant:"h6",noWrap:!0},"Fancy Store"))),r.a.createElement(s.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(u.a,null,r.a.createElement(E.a,{component:f.b,exact:!0,className:e.drawerItem,activeClassName:"Mui-selected",to:"/"},r.a.createElement(h.a,{primary:"Home"}))," ",r.a.createElement(E.a,{component:f.b,exact:!0,className:e.drawerItem,activeClassName:"Mui-selected",to:"/products"},r.a.createElement(h.a,{primary:"Products"}))," ",r.a.createElement(E.a,{component:f.b,className:e.drawerItem,activeClassName:"Mui-selected",to:"/orders"},r.a.createElement(h.a,{primary:"Orders"})))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:w}),r.a.createElement(v.a,{exact:!0,path:"/products",component:G}),r.a.createElement(v.a,{path:"/orders/:id",component:$}),r.a.createElement(v.a,{path:"/orders",component:R}),r.a.createElement(v.a,{component:F})))))}var q=t(115),K=t(51),L=Object(K.a)({});var Q=function(){return r.a.createElement(q.a,{theme:L},r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.3d54a05c.chunk.js.map