(this["webpackJsonppopup-widgets"]=this["webpackJsonppopup-widgets"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/sezzle_logo.b0fe0998.png"},function(e,t,n){e.exports=n.p+"static/media/customer-service.0e0e8a17.svg"},function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),s=(n(14),n(15),n(2)),l=n(1),i=(n(16),n(17),n(18),n(19),function(e){var t=e.active,n=e.onClick;return o.a.createElement("div",{className:"toggle-button ",onClick:n},o.a.createElement("div",{className:"toggle-circle-container"},o.a.createElement("div",{className:"toggle-circle ".concat(t?"active":"")})))}),u=n(7),p=n.n(u),m=(n(20),["#F77275","#F9B835","#3CD2A1","#AA49CF"]),d=function(e){var t=e.quad,n=e.setQuad;return o.a.createElement("div",{className:"dial",onClick:function(){return n((function(e){return(e+1)%4}))},style:{backgroundColor:m[t],backgroundImage:"linear-gradient(".concat(90*t-90,"deg, transparent 50%, white 50%), linear-gradient(").concat(90*t,"deg, white 50%, transparent 50%)")}})},h=function(e){var t=Object(a.useState)(0),n=Object(l.a)(t,2),c=n[0],r=n[1],s=e.darkTheme,u=e.setDarkTheme;return o.a.createElement("div",{className:"title-tray"},o.a.createElement("div",{className:"darktheme-container"},o.a.createElement("div",{className:"darktheme-label"},"Dark Theme"),o.a.createElement(i,{active:s,onClick:function(){return u(!s)}})),o.a.createElement("img",{src:p.a,className:"logo",alt:"sezzle-logo",style:{filter:"hue-rotate(".concat(90*c,"deg)")}}),o.a.createElement(d,{quad:c,setQuad:r}))},f=(n(21),function(e){var t=e.header,n=e.closePopup;return o.a.createElement("div",{className:"header"},o.a.createElement("span",null,t),o.a.createElement("button",{className:"close-button",onClick:n},o.a.createElement("div",{className:"close-icon"})))}),b=function(e){var t=e.open,n=e.header,a=e.text,c=e.closePopup,r=e.className;return o.a.createElement("div",{className:"".concat(r," popup ").concat(t?"open":"")},o.a.createElement(f,{header:n,closePopup:c}),o.a.createElement("div",{className:"body"},a))},v=function(e){var t=e.open;return o.a.createElement("div",{className:"corner-container bottom-right ".concat(t?"open":"")},o.a.createElement(b,e))},y=(n(22),function(e){var t=e.open,n=e.text,a=e.closePopup;return o.a.createElement("div",{className:"top-banner ".concat(t?"open":"")},o.a.createElement("div",null,"Sezzle is currently hiring:"," ",o.a.createElement("a",{href:"https://sezzle.com/careers"},"learn more ",">")),o.a.createElement("div",null,n),o.a.createElement("button",{className:"top-banner-close-btn",onClick:a},o.a.createElement("div",{className:"cross-line"}),o.a.createElement("div",{className:"cross-line"})))}),E=(n(23),function(e,t,n,a){var o=!function e(t,n){return!!(t.className&&t.className.split(" ").indexOf(n)>=0)||t.parentNode&&e(t.parentNode,n)}(e.target,a);t&&o&&n()}),g=function(e){var t=e.open,n=e.closePopup;return o.a.createElement("div",{className:"overlay-popup-container ".concat(t?"open":""),onClick:function(e){return E(e,t,n,"overlay-popup")}},o.a.createElement(b,Object.assign({},e,{className:"overlay-popup"})))},w=(n(24),function(e){var t=e.open,n=e.header,c=e.closePopup,r=Object(a.useState)(null),s=Object(l.a)(r,2),i=s[0],u=s[1],p=Object(a.useState)(120),m=Object(l.a)(p,2),d=m[0],h=m[1];Object(a.useEffect)((function(){if(t){var e=setInterval((function(){return h((function(e){return e-1}))}),1e3);return u(e),function(){return clearInterval(e)}}h(120)}),[t]),Object(a.useEffect)((function(){0===d&&clearInterval(i)}),[d]);return o.a.createElement("div",{className:"overlay-popup-container ".concat(t?"open":""),onClick:function(e){return E(e,t,c,"timer-popup")}},o.a.createElement("div",{className:"timer-popup popup ".concat(t?"open":"")},o.a.createElement(f,{header:n,closePopup:c}),o.a.createElement("div",{className:"body"},o.a.createElement("div",{className:"countdown-text"},"Get 50% off when you sign up now."),o.a.createElement("div",{className:"countdown-text"},"Discount available for a limited time only!"),o.a.createElement("div",{className:"countdown ".concat(d<60?"final":""," ").concat(d<30?"very-last":"")},function(e){var t,n=(t=e,{hours:Math.floor(t/3600),minutes:Math.floor(t%3600/60),seconds:t%60});return Object.keys(n).forEach((function(e){var t;n[e]=(t=n[e]).toString().length>1?t.toString():"0"+t.toString()})),"".concat(n.hours,":").concat(n.minutes,":").concat(n.seconds)}(d)),o.a.createElement("button",{className:"signup-button",onClick:function(){return window.location.reload()}},"SIGN UP"))))}),N=(n(25),n(26),function(){return o.a.createElement("div",{className:"typing-animation"},o.a.createElement("div",{className:"dot"}),o.a.createElement("div",{className:"dot"}),o.a.createElement("div",{className:"dot"}))}),k=n(8),O=n.n(k),j={text:["Please call the merchant support team on 202-555-0195"]},z={text:["Please call the shopper support team on 202-555-0179"]},x={answer:"Nothing, I am just browsing.",response:{text:["No problem! Please click the reset button if you have any questions."]}},P=function(e){var t=null;return"shopify"===e?t="https://help.sezzle.com/merchant-shopify-settings":"woocommerce"===e?t="https://help.sezzle.com/sezzle-woocommerce":"commentsold"===e?t="https://help.sezzle.com/sezzle-commentsold":"other"===e&&(t="https://help.sezzle.com/merchant-other-platforms"),{text:["Please see the following guide:",t]}},S={text:["Welcome to Sezzle!","Are you a shopper or a merchant?"],options:[{answer:"Merchant",response:{text:["How can we help you today?"],options:[{answer:"I'd like to contact the sales team.",response:{text:["Please call the sales team on 202-555-0109"]}},{answer:"I need help connecting Sezzle to my ecommerce platform.",response:{text:["Which ecommerce platform does your store use?"],options:[{answer:"Shopify",response:P("shopify")},{answer:"Woocommerce",response:P("woocommerce")},{answer:"CommentSold",response:P("commentsold")},{answer:"Other Platform",response:P("other")}]}},{answer:"I think my account may have been hacked.",response:j},{answer:"My issue is not listed here.",response:j},x]}},{answer:"Shopper",response:{text:["How can we help you today?"],options:[{answer:"I have an issue with a payment.",response:{text:["What is your payment issue?"],options:[{answer:"I would like a refund.",response:{text:["Please contact the vendor to begin the refund process.","For more information click the following link:","https://help.sezzle.com/shopper-returns/shopper-refund-process"]}},{answer:"A payment I made has not registered on my account.",response:z},{answer:"My issue isn't listed.",response:z}]}},{answer:"There is an issue with my account.",response:{text:["What account issue do you have?"],options:[{answer:"I think my account may have been hacked.",response:z},{answer:"I cannot login to my account.",response:{text:["Please try reseting your PIN with the following link:","https://dashboard.sezzle.com/customer/reset-pin/verify-phone","If you still cannot access your account please contact support on 202-555-0179."]}}]}},x]}}]},I=[{component:v,label:"Popup",description:"A small popup that appears in the bottom right corner."},{component:y,label:"Banner",description:"A banner that appears across the top of the screen."},{component:g,label:"Overlay",description:"A popup that appears with a dark overlay across the screen."},{component:w,label:"Timer",description:"A popup with a countdown timer."},{component:function(e){var t=Object(a.useState)(0),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(S),u=Object(l.a)(i,2),p=u[0],m=u[1],d=Object(a.useState)(S.text),h=Object(l.a)(d,2),b=h[0],v=h[1],y=Object(a.useState)([]),E=Object(l.a)(y,2),g=E[0],w=E[1],k=Object(a.useState)([]),j=Object(l.a)(k,2),z=j[0],x=j[1],P=Object(a.useRef)(null),I=e.open,C=e.header,A=e.closePopup,T=function(){m(S),v(S.text),x([]),w([])};return Object(a.useEffect)((function(){if(I){var e=setInterval((function(){return r((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}T()}),[I]),Object(a.useEffect)((function(){return v(p.text)}),[p]),Object(a.useEffect)((function(){0!==b.length&&(!!(b[0].match("http")&&c>0)||c>b[0].length/24)?(x((function(e){return[].concat(Object(s.a)(e),[{speaker:"bot",text:b[0]}])})),v((function(e){return e.slice(1)})),r(0)):0===b.length&&w(p.options)}),[c]),Object(a.useEffect)((function(){return P.current.scrollIntoView()}),[z,g]),o.a.createElement("div",{className:"corner-container bottom-left ".concat(I?"open":"")},o.a.createElement("div",{className:"chatbot popup ".concat(I?"open":"")},o.a.createElement(f,{header:C,closePopup:A}),o.a.createElement("div",{className:"body"},o.a.createElement("img",{src:O.a,className:"chatbot-icon",alt:"sezzle-chatbot-icon"}),o.a.createElement("div",{className:"conversation"},z.map((function(e,t){var n=[];return 0!==t&&"bot"===z[t-1].speaker||n.push(o.a.createElement("div",{key:"name-".concat(t),className:"chat-name"},"SezzleSupport")),e.text.match("http")?n.push(o.a.createElement("a",{key:"link-".concat(t),href:e.text,className:"message ".concat(e.speaker)},e.text)):n.push(o.a.createElement("div",{key:"msg-".concat(t),className:"message ".concat(e.speaker)},e.text)),n})),b.length>0&&o.a.createElement(N,null)),g&&0===b.length&&o.a.createElement("div",{className:"options"},g.map((function(e,t){return o.a.createElement("button",{key:"option-".concat(t),className:"message option",onClick:function(){return t=e,x((function(e){return[].concat(Object(s.a)(e),[{speaker:"user",text:t.answer}])})),m(t.response),r(0),void w([]);var t}},e.answer)}))),0===b.length&&void 0===p.options&&o.a.createElement("button",{className:"reset-btn message option",onClick:function(){return T()}},"Reset Assistant"),o.a.createElement("div",{ref:P}))))},label:"Chatbot",description:"A chatbot to answer customer queries."}];var C=function(){var e=Object(a.useState)(new Array(I.length).fill(!1)),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(l.a)(r,2),u=i[0],p=i[1],m=function(e){var t=Object(s.a)(n);t[e]=!n[e],c(t)};return o.a.useEffect((function(){!function(e){var t=document.documentElement;e?(t.style.setProperty("--background-color","#333"),t.style.setProperty("--popup-header-color","#666"),t.style.setProperty("--banner-color","rgb(194, 112, 11)"),t.style.setProperty("--shadow-color","#111"),t.style.setProperty("--text-color","white")):(t.style.setProperty("--background-color","white"),t.style.setProperty("--popup-header-color","rgb(58, 12, 58)"),t.style.setProperty("--banner-color","rgb(194, 112, 11)"),t.style.setProperty("--shadow-color","#eee"),t.style.setProperty("--text-color","black"))}(u)}),[u]),o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"title"},"Sezzle Popup Widgets"),o.a.createElement(h,{darkTheme:u,setDarkTheme:p}),o.a.createElement("div",{className:"widget-info"},Object(s.a)(Array(I.length).keys()).map((function(e){return[o.a.createElement("button",{key:"button-".concat(e),className:"btn ".concat(n[e]?"enabled":""),onClick:function(){return m(e)}},I[e].label),o.a.createElement("div",{key:"description-".concat(e)},I[e].description),o.a.createElement(I[e].component,{key:"widget-".concat(e),open:n[e],header:I[e].label,text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, minus.",closePopup:function(){return m(e)}})]}))))};r.a.render(o.a.createElement(C,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.03735e3b.chunk.js.map