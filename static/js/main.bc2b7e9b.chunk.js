(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){},181:function(e,t){},183:function(e,t){},194:function(e,t){},196:function(e,t){},223:function(e,t){},224:function(e,t){},229:function(e,t){},231:function(e,t){},238:function(e,t){},257:function(e,t){},273:function(e,t,n){"use strict";n.r(t);var c,a,o,r,i=n(0),l=n.n(i),s=n(150),d=n.n(s),u=(n(168),n(169),n(9)),j=n.n(u),b=n(51),f=n(24),h=n(23),O=n(8),x=n(295),m=n(296),p=n(298),g=n(293),v=n(38),w=n(297),y=n(2);function k(e){var t=Object(i.useState)(e.done),n=Object(O.a)(t,2),l=n[0],s=(n[1],new Date),d=new Date(e.date),u=s.getHours(),j=d.getHours(),b=v.a.h2(c||(c=Object(h.a)(["\n    text-align: left;\n    color: #d44d2f;\n    font-weight:700;\n  "]))),f=v.a.p(a||(a=Object(h.a)(["\n    text-align: left;\n    font-size: 1rem;\n    color: #8a8a8a;\n  "]))),x=v.a.p(o||(o=Object(h.a)(["\n    color: ",";\n    text-align: left;\n    font-size: 1rem;\n  "])),j-u>2?"rgb("+(j-u)%255+", 100, 0) ":"#ff7575"),m=v.a.div(r||(r=Object(h.a)(["\n    background-color: ",";\n    border-top-left-radius: 0.375rem;\n    border-bottom-left-radius  0.375rem;\n    padding-top: 1rem;\n    height:100%\n  "])),l?"#dedede":"white");return Object(y.jsx)(m,{children:Object(y.jsxs)(w.a,{children:[Object(y.jsx)(b,{children:e.title}),Object(y.jsx)(f,{children:e.note}),Object(y.jsx)(x,{children:e.date&&"ddl: "+e.date.replace("T"," ")})]})})}function S(e,t){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new ToDo item created")}))}function N(e){return fetch(e,{method:"DELETE"}).then((function(){console.log("ToDo item deleted")})).catch((function(e){console.log(e.message)}))}var D,T,C,B,E=n(291),z=n(156),A="https://61ae505ba7c7f3001786f792.mockapi.io/items",F=n(11),L=n(40);function P(){var e=Object(z.a)(),t=e.register,n=e.handleSubmit,c=e.reset,a=Object(i.useState)(Object(L.randomBytes)(16)),o=Object(O.a)(a,2),r=o[0],l=o[1],s=Object(i.useState)(""),d=Object(O.a)(s,2),u=d[0],w=d[1],P=Object(i.useState)(""),R=Object(O.a)(P,2),H=R[0],J=R[1],I=Object(i.useState)(""),Z=Object(O.a)(I,2),_=Z[0],q=Z[1],K=function(e,t){var n=Object(i.useState)([{}]),c=Object(O.a)(n,2),a=c[0],o=c[1],r=Object(i.useState)(!0),l=Object(O.a)(r,2),s=l[0],d=l[1];return Object(i.useEffect)((function(){fetch(e).then((function(e){if(!e.ok)throw Error("Could not fetch the data");return e.json()})).then((function(e){o(e),console.log(e),d(!1)})).catch((function(e){d(!1),console.log("ERROR"+e.message)}))}),[t]),{data:a,loading:s}}(""===H?A+"?search="+u:A+H,r),M=K.data,U=K.loading,G=v.a.h1(D||(D=Object(h.a)(["\n    font-size: 1.2em;\n    text-align: center;\n    color: palevioletred;\n    font-weight: 900;\n    "]))),Q=Object(F.a)(x.a)(T||(T=Object(h.a)(["\n    color: #c70000;\n    background-color:#e38f8f ;\n    "]))),V=Object(F.a)(x.a)(C||(C=Object(h.a)(["\n    background-color: lightgreen;\n    "]))),W=Object(F.a)(x.a)(B||(B=Object(h.a)(["\n    background-color: lightblue;\n    "])));function X(){return(X=Object(f.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t,n);case 2:l(Object(L.randomBytes)(16));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(f.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:l(Object(L.randomBytes)(16));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t,n,c){return ee.apply(this,arguments)}function ee(){return(ee=Object(f.a)(j.a.mark((function e(t,n,c,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t+"/"+n);case 2:return c.done=a,e.next=5,S(t,c);case 5:l(Object(L.randomBytes)(16));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(y.jsxs)("div",{className:"bg-white object-contain rounded-2xl border-green-400 filter drop-shadow-lg",children:[Object(y.jsx)("div",{className:"bg-red-100 rounded-t-xl",children:Object(y.jsx)(G,{children:"ToDo Zoznam"})}),Object(y.jsxs)("div",{className:"bg-white flex flex-row text-gray-400  items-center",children:[Object(y.jsxs)(m.a,{value:H,exclusive:!0,onChange:function(e,t){J(t),l(Object(L.randomBytes)(16))},color:"primary","aria-label":"filter items",children:[Object(y.jsx)(p.a,{value:"",children:"All"}),Object(y.jsx)(p.a,{value:"?filter=true",children:"Done"}),Object(y.jsx)(p.a,{value:"?filter=false",children:"not Done"})]}),Object(y.jsx)("div",{className:"flex-1 p-2 w-full",children:Object(y.jsx)(g.a,{type:"search",placeholder:"Search",onKeyDown:function(e){var t;"Enter"===e.key&&(t=e.target.value,w(t),l(Object(L.randomBytes)(16)))},value:_,onChange:function(e){return q(e.target.value)}})})]}),Object(y.jsxs)("div",{className:"bg-blue-200 object-contain px-4 border-green-400 overflow-y-scroll",children:[U&&Object(y.jsx)("p",{children:"Loading data ..."}),M&&M.map((function(e){return Object(y.jsxs)("div",{className:"flex flex-row bg-white rounded-md my-4 filter drop-shadow-xl",children:[Object(y.jsx)("div",{className:"w-full",children:Object(y.jsx)(k,{title:e.title,note:e.note,date:e.date,time:e.time,done:e.done},e.id)}),Object(y.jsxs)("div",{className:"flex flex-col bg-white rounded-md my-4 filter",children:[e.done?Object(y.jsx)(W,{onClick:function(){return $(A,e.id,e,!1)},children:"Back"}):Object(y.jsx)(V,{onClick:function(){return $(A,e.id,e,!0)},children:"Hotovo"}),Object(y.jsx)(Q,{onClick:function(){!function(e,t){Y.apply(this,arguments)}(String(A+"/"+e.id),e)},children:"Zmaza\u0165"})]})]})})),Object(y.jsx)("p",{children:"Add new ToDo"})]}),Object(y.jsx)("div",{children:Object(y.jsxs)("form",{className:"flex text-black rounded-b-xl m-2 flex-col bg-gray-300",onSubmit:n((function(e){e.done=!1,function(e,t){X.apply(this,arguments)}(A,e),c(),console.log(e)})),children:[Object(y.jsx)(g.a,Object(b.a)(Object(b.a)({},t("title",{required:!0})),{},{type:"text",placeholder:"Title"})),Object(y.jsx)(E.a,Object(b.a)(Object(b.a)({},t("note")),{},{className:"text-base",placeholder:"write notes",maxRows:3})),Object(y.jsx)(g.a,Object(b.a)({type:"datetime-local"},t("date"))),Object(y.jsx)(g.a,{type:"submit",value:"Prida\u0165",disableUnderline:!0})]})})]})}var R=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("header",{className:"App-header",children:Object(y.jsx)(P,{})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,299)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};d.a.render(Object(y.jsx)(l.a.StrictMode,{children:Object(y.jsx)(R,{})}),document.getElementById("root")),H()}},[[273,1,2]]]);
//# sourceMappingURL=main.bc2b7e9b.chunk.js.map