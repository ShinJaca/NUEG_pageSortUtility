(window.webpackJsonppagesorter=window.webpackJsonppagesorter||[]).push([[0],{37:function(e,t,a){e.exports=a(49)},42:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},44:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r,o=a(0),n=a.n(o),i=a(7),c=a.n(i),l=(a(42),a(32)),u=a(10),s=(a(43),a(44),a(83)),p=a(78),m=a(80),d=a(81),f=a(82),b=a(84),g=a(21),h=a(16),v=function(){function e(){Object(g.a)(this,e)}return Object(h.a)(e,[{key:"sortBooklet",value:function(e){var t=1,a=[];if(e%4==0){for(var r=1;r<=e/4;r++)a.push(e-(t-1)),a.push(t),a.push(t+1),a.push(e-t),t+=2;return a}}},{key:"sortTwoPerPage",value:function(e){for(var t=[],a=0;a<e;a++)t.push(a+1),t.push(a+1);return t}},{key:"sortDoubleBooklet",value:function(e){var t=1,a=[];if(e%4==0){for(var r=1;r<=e/4;r++)a.push(e-(t-1)),a.push(t),a.push(e-(t-1)),a.push(t),a.push(t+1),a.push(e-t),a.push(t+1),a.push(e-t),t+=2;return a}}}]),e}();function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var k=Object(s.a)((r={root:{background:"#292a2f",color:"white"},input:{color:"lime"},paper:{background:"#292a2f",width:300}},Object(u.a)(r,"input",{color:"lime","& .MuiInput":{color:"darkgreen"}}),Object(u.a)(r,"textField",{width:250,"& label.Mui-focused":{color:"lime"},"& .MuiInput-underline:after":{borderBottomColor:"lime"},"& .MuiInput-underline:hover:before":{borderBottomColor:"darkgreen"},"& .MuiInput-input:hover":{color:"darkgreen"},"& .MuiInput-input:focus":{color:"lime"},"& .Mui-focused":{borderColor:"darkgreen"}}),Object(u.a)(r,"button",{width:200}),r));var O=function(){var e,t=n.a.useState({pages:24}),a=Object(l.a)(t,2),r=a[0],o=a[1],i=k(),c=new v;function s(e){var t=e.toString();document.getElementById("txt_field-saida").value=t}return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(p.a,{className:i.paper},n.a.createElement(m.a,{container:!0,spacing:2,padding:2,margin:"normal",justify:"center"},n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(d.a,{variant:"h5",component:"h3",color:"primary"},"NUEG PageSortUtility")),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(f.a,{label:"paginas",value:r.pages,onChange:(e="pages",function(t){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,Object(u.a)({},e,t.target.value)))}),className:i.textField})),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(b.a,{variant:"outlined",color:"primary",onClick:function(e){s(c.sortBooklet(r.pages))},className:i.button},"Booklet")),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(b.a,{variant:"outlined",color:"primary",onClick:function(e){s(c.sortTwoPerPage(r.pages))},className:i.button},"Duplicado")),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(b.a,{variant:"outlined",color:"primary",onClick:function(e){s(c.sortDoubleBooklet(r.pages))},className:i.button},"Booklet Duplo")),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(f.a,{id:"txt_field-saida",label:"Saida",multiline:!0,rows:"6",InputLabelProps:{shrink:!0},className:i.textField,helperText:"copie e cole o intervalo de paginas acima na ordem em que est\xe1"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.adf19bf6.chunk.js.map