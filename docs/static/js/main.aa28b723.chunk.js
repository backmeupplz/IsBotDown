(this["webpackJsonpfrontend-starter"]=this["webpackJsonpfrontend-starter"]||[]).push([[0],{32:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);s(32);var n=s(10),r=s(2),c=s(4),o=s.n(c),a=s(7),i=s(3),u=s(26).a,l=s(0),b=u("text-indigo-900","font-bold","text-3xl","md:text-5xl","mt-8","mb-4"),j=function(e){var t=e.children;return Object(l.jsx)("p",{className:b,children:t})},d=u("text-indigo-900","font-bold","text-lg","md:text-xl","mt-6"),h=function(e){var t=e.children;return Object(l.jsx)("p",{className:d,children:t})},x=u("text-indigo-800"),p=function(e){var t=e.children;return Object(l.jsx)("p",{className:x,children:t})},O=u("text-indigo-800","underline"),f=function(e){var t=e.children,s=e.to;return Object(l.jsx)(n.b,{to:s,className:O,children:t})},m=function(e){var t=e.children,s=e.to;return Object(l.jsx)("a",{href:s,className:O,target:"_blank",rel:"noopener noreferrer",children:t})},v=s(27),g=s.n(v).a.create({baseURL:"https://backend.isbotdown.com",headers:{"Content-Type":"application/json"}});function w(){return(w=Object(a.a)(o.a.mark((function e(t,s){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/bots?skip=".concat(t,"&limit=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return k.apply(this,arguments)}function k(){return(k=Object(a.a)(o.a.mark((function e(t){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/bots/".concat(t));case 2:return s=e.sent,n=s.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return y.apply(this,arguments)}function y(){return(y=Object(a.a)(o.a.mark((function e(t){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/audience/".concat(t));case 2:return s=e.sent,n=s.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g.interceptors.response.use((function(e){return e}),(function(e){throw e}));var I=s(1),N=s.n(I),T=s(28),D=s.n(T),S=s(8),_=s.n(S),C=s(14),F=s.n(C);function M(){var e,t=null===(e=Object(r.g)().username)||void 0===e?void 0:e.replace("@","").trim(),s=Object(I.useState)(null),n=Object(i.a)(s,2),c=n[0],b=n[1],d=Object(I.useState)(!1),x=Object(i.a)(d,2),O=x[0],v=x[1],g=Object(I.useState)(!1),w=Object(i.a)(g,2),k=w[0],y=w[1],N=Object(I.useState)(!1),T=Object(i.a)(N,2),D=T[0],S=T[1],C=Object(I.useState)(void 0),F=Object(i.a)(C,2),M=F[0],W=F[1],A=Object(r.f)();return Object(I.useEffect)((function(){var e=function(){var e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return");case 2:return(null===t||void 0===t?void 0:t.trim())||A("/"),e.prev=3,e.t0=b,e.next=7,B(t);case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(3),v(!0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(a.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return");case 2:if(!M){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,R(t);case 7:(s=e.sent).botsBaseResult&&!s.botsBaseResult.users&&(s.botsBaseResult=void 0),W(s),s.botsBaseResult||y(!0),s.trueWebResult||S(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),y(!0),S(!0);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(){return e.apply(this,arguments)}}();e(),s()}),[t,A,M]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f,{to:"/",children:"back to main"}),Object(l.jsx)(j,{children:Object(l.jsxs)(m,{to:"https://t.me/".concat(t),children:["@",t]})}),!c&&!O&&Object(l.jsx)(p,{children:"\ud83e\udd14 loading..."}),O&&Object(l.jsxs)(p,{children:["This bot is not in the system! However, you can add it in"," ",Object(l.jsx)(m,{to:"https://t.me/IsBotDownBot",children:"@IsBotDownBot"}),"."]}),c&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(p,{children:["Telegram ID: ",c.telegramId]}),Object(l.jsx)(p,{children:c.isDown?"\u274c Bot is down since ".concat(_()(c.downSince).fromNow()):"\u2705 Bot is up"})]}),Object(l.jsx)(h,{children:"TrueCheckerBot info"}),!D&&!(null===M||void 0===M?void 0:M.trueWebResult)&&Object(l.jsxs)(p,{children:["\ud83e\udd14 Loading"," ",Object(l.jsx)(m,{to:"https://t.me/TrueCheckerBot",children:"@TrueCheckerBot"})," ","info..."]}),D&&Object(l.jsxs)(p,{children:["There is no information on this bot in"," ",Object(l.jsx)(m,{to:"https://t.me/TrueCheckerBot",children:"@TrueCheckerBot"}),". If you're the owner of this bot, use"," ",Object(l.jsx)(m,{to:"https://t.me/TrueCheckerBot",children:"@TrueCheckerBot"})," ","to calculate your audience."]}),!!(null===M||void 0===M?void 0:M.trueWebResult)&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(p,{children:["Last checked:"," ",_()(M.trueWebResult.updated).fromNow()]}),Object(l.jsxs)(p,{children:["Active: ",M.trueWebResult.users.active]}),Object(l.jsxs)(p,{children:["Stopped: ",M.trueWebResult.users.stopped]}),Object(l.jsxs)(p,{children:["Deleted: ",M.trueWebResult.users.deleted]}),Object(l.jsxs)(p,{children:["Not found: ",M.trueWebResult.users.not_found]})]}),Object(l.jsx)(h,{children:"BotsPulse info"}),!k&&!(null===M||void 0===M?void 0:M.botsBaseResult)&&Object(l.jsxs)(p,{children:["\ud83e\udd14 Loading"," ",Object(l.jsx)(m,{to:"https://t.me/botspulsebot",children:"@botspulsebot"})," ","info..."]}),k&&Object(l.jsxs)(p,{children:["There is no information on this bot in"," ",Object(l.jsx)(m,{to:"https://t.me/botspulsebot",children:"@botspulsebot"}),". If you're the owner of this bot, use"," ",Object(l.jsx)(m,{to:"https://t.me/botspulsebot",children:"@botspulsebot"})," ","to calculate your audience."]}),!!(null===M||void 0===M?void 0:M.botsBaseResult)&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(p,{children:["Last checked:"," ",_()(M.botsBaseResult.updated_at,"DD.MM.YY HH:mm:ss").fromNow()]}),Object(l.jsxs)(p,{children:["Active users: ",M.botsBaseResult.users.active]}),Object(l.jsxs)(p,{children:["Stopped users: ",M.botsBaseResult.users.stopped]}),Object(l.jsxs)(p,{children:["Deleted users: ",M.botsBaseResult.users.deleted]}),Object(l.jsxs)(p,{children:["Users not found: ",M.botsBaseResult.users.not_found]}),Object(l.jsxs)(p,{children:["Can't converse with users:"," ",M.botsBaseResult.users.cant_conversation]}),Object(l.jsxs)(p,{children:["Female users: ",M.botsBaseResult.users.female]}),Object(l.jsxs)(p,{children:["Male users: ",M.botsBaseResult.users.male]}),Object(l.jsxs)(p,{children:["Unisex users: ",M.botsBaseResult.users.unisex]}),Object(l.jsxs)(p,{children:["Error fetching users: ",M.botsBaseResult.users.error]}),Object(l.jsxs)(p,{children:["Available groups: ",M.botsBaseResult.groups.available]}),Object(l.jsxs)(p,{children:["Remove from groups:"," ",M.botsBaseResult.groups.not_availible]}),Object(l.jsxs)(p,{children:["Total users in groups:"," ",M.botsBaseResult.groups.count_all_users]})]}),Object(l.jsx)("div",{className:u("mt-8"),children:Object(l.jsxs)(p,{children:["Discuss here \ud83d\udc49"," ",Object(l.jsx)(m,{to:"https://t.me/borodutch_support",children:"@borodutch_support"}),"."]})})]})}_.a.extend(D.a),_.a.extend(F.a);var W=s(29),A=s(16);_.a.extend(F.a);var L=u("mt-2"),E=function(e){var t=e.bot;return Object(l.jsxs)("div",{className:L,children:[t.isDown?"\u274c":"\u2705"," ",Object(l.jsxs)(f,{to:"/".concat(t.username),children:["@",t.username]}),!!t.downSince&&" since ".concat(_()(t.downSince).fromNow())]})},z=u("my-4"),H=function(e){var t=e.children;return Object(l.jsx)("div",{className:z,children:Object(l.jsx)(p,{children:t})})},U=u("mt-4");function J(){var e=function(e){var t=Object(I.useState)([]),s=Object(i.a)(t,2),n=s[0],r=s[1],c=Object(I.useState)(!0),u=Object(i.a)(c,2),l=u[0],b=u[1],j=function(){var t=Object(a.a)(o.a.mark((function t(){var s,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,s=20,t.next=6,e(n.length,s);case 6:(c=t.sent).length&&r([].concat(Object(A.a)(n),Object(A.a)(c))),c.length<s&&b(!1),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(){return t.apply(this,arguments)}}();return Object(I.useEffect)((function(){j()}),[]),{items:n,setItems:r,fetchMoreItemsIfNeeded:j,moreItemsAvailable:l}}((function(e,t){return function(e,t){return w.apply(this,arguments)}(e,t)})),t=e.items,s=e.fetchMoreItemsIfNeeded,n=e.moreItemsAvailable;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{children:"Bots in the system:"}),Object(l.jsx)(W.a,{dataLength:t.length,next:s,hasMore:n,loader:Object(l.jsx)(H,{children:"\ud83e\udd14 Loading..."}),endMessage:Object(l.jsx)(H,{children:"\ud83d\ude80 That's all!"}),className:U,children:t.map((function(e){return Object(l.jsx)(E,{bot:e},e.telegramId)}))})]})}var P=s(17),Y=s(31),K=["title","disabled"],Z=function(e){return u("transition-colors","focus:outline-none","px-8","py-2","rounded-2xl",e?"bg-indigo-300":"bg-indigo-700",e?void 0:"hover:bg-indigo-900","text-indigo-100",e?"cursor-not-allowed":void 0)},q=function(e){var t=e.title,s=e.disabled,n=Object(Y.a)(e,K);return Object(l.jsx)("button",Object(P.a)(Object(P.a)({className:Z(s)},n),{},{children:t}))};var G=u("flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2"),Q=u("px-2","py-2","bg-transparent","border","border-indigo-200","transition-colors","rounded-2xl","text-indigo-900","focus:border-indigo-900","focus:outline-none");function V(){var e=Object(I.useState)(""),t=Object(i.a)(e,2),s=t[0],n=t[1],c=Object(I.useState)(!1),o=Object(i.a)(c,2),a=o[0],u=o[1],b=Object(r.f)(),d=function(e){b("/".concat(e))};return Object(I.useEffect)((function(){u(!!function(e){var t=/@?([A-Za-z0-9_]+bot)/gi.exec(e);if(t&&t[1])return t[1]}(s))}),[s]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{children:"Find a bot:"}),Object(l.jsxs)("div",{className:G,children:[Object(l.jsx)("input",{className:Q,placeholder:"@username",value:s,onChange:function(e){n(e.target.value)},onKeyDown:function(e){return"Enter"===e.code?d(s):void 0}}),Object(l.jsx)(q,{title:"Find!",disabled:!a,onClick:function(){return a?d(s):void 0}})]})]})}function X(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{children:"Is Bot Down"}),Object(l.jsx)(p,{children:"Check if your favorite bot is down or not!"}),Object(l.jsxs)(p,{children:["This is a website representation of the data from"," ",Object(l.jsx)(m,{to:"https://t.me/IsBotDownBot",children:"@IsBotDownBot"}),"."]}),Object(l.jsxs)(p,{children:["This website is"," ",Object(l.jsx)(m,{to:"https://github.com/backmeupplz/IsBotDown",children:"open-source"}),". The bot is"," ",Object(l.jsx)(m,{to:"https://github.com/backmeupplz/IsBotDownBot",children:"too"})," ","(and it has a public API)."]}),Object(l.jsxs)(p,{children:["Official discussion group \ud83d\udc49"," ",Object(l.jsx)(m,{to:"https://t.me/borodutch_support",children:"@borodutch_support"}),"."]}),Object(l.jsx)(V,{}),Object(l.jsx)(J,{})]})}function $(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{children:"Not found"}),Object(l.jsxs)(p,{children:["Try a different page or ",Object(l.jsx)(f,{to:"/",children:"go back"})," to the main page."]})]})}var ee=u("container","mx-auto","pb-10","max-w-4xl","p-4"),te=function(e){var t=e.children;return Object(l.jsx)("div",{className:ee,children:t})},se=function(){return Object(l.jsx)(te,{children:Object(l.jsx)(n.a,{children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",element:Object(l.jsx)(X,{})}),Object(l.jsx)(r.a,{path:"/:username",element:Object(l.jsx)(M,{})}),Object(l.jsx)(r.a,{path:"*",element:Object(l.jsx)($,{})})]})})})},ne=s(30);s.n(ne).a.render(Object(l.jsx)(N.a.StrictMode,{children:Object(l.jsx)(se,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.aa28b723.chunk.js.map