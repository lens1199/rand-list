(this["webpackJsonprand-list"]=this["webpackJsonprand-list"]||[]).push([[0],{21:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),i=n(14),r=n.n(i),l=n(15),j=n(6),d=n(31),o=n(29),b=n(30),x=s.a.createContext(),u=(n(21),n(32)),h=function(){var e=Object(a.useContext)(x),t=e.items,n=e.removeItemByIndex,s=t.map((function(e,t){return Object(c.jsxs)(u.a.Item,{className:"itemContainer",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"closeButton",onClick:function(){n(t)},children:"\xd7"}),Object(c.jsxs)("small",{className:"mr-2",children:[t,": "]}),e.name]}),Object(c.jsxs)("span",{className:"randRange",children:["~",e.range.toFixed(3)]}),Object(c.jsxs)("small",{children:[e.weight," weight (",e.normalizedWeight.toFixed(3),")"]})]},t)}));return Object(c.jsx)(u.a,{children:s})},O=n(33),m=n(34),v=n(35),f=function(){var e=Object(a.useContext)(x).addItem,t=Object(a.useState)(""),n=Object(j.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(1),l=Object(j.a)(r,2),d=l[0],o=l[1],b=function(){s&&(e(s,d),i(""),o(1))},u=function(e){"Enter"===e.key&&b()};return Object(c.jsxs)(O.a,{children:[Object(c.jsx)(O.a.Prepend,{children:Object(c.jsx)(m.a,{onClick:b,children:"Add"})}),Object(c.jsx)(v.a,{type:"text",placeholder:"Name",value:s,onChange:function(e){i(e.target.value)},onKeyDown:u}),Object(c.jsx)(v.a,{type:"number",placeholder:"Weight",value:d,onChange:function(e){o(e.target.value)},onKeyDown:u})]})},g=function(){var e=Object(a.useContext)(x),t=e.items,n=e.removeAllItems,s=e.randItem,i=e.saveItemListToLocalStorage;return!!t.length&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.a,{children:Object(c.jsx)(b.a,{children:Object(c.jsx)(m.a,{variant:"primary",onClick:s,block:!0,children:"Generate"})})}),Object(c.jsxs)(o.a,{className:"mt-4",children:[Object(c.jsx)(b.a,{children:Object(c.jsx)(m.a,{variant:"outline-danger",onClick:n,block:!0,children:"Clear"})}),Object(c.jsx)(b.a,{children:Object(c.jsx)(m.a,{variant:"outline-info",onClick:i,block:!0,children:"Save"})})]})]})},p=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(b.a,{xs:12,children:Object(c.jsx)("h3",{children:"Available Options"})}),Object(c.jsx)(b.a,{xs:12,children:Object(c.jsx)(f,{})}),Object(c.jsx)(b.a,{xs:12,className:"my-2",children:Object(c.jsx)(h,{})}),Object(c.jsx)(b.a,{xs:12,children:Object(c.jsx)(g,{})})]})},C=(n(26),function(){var e=Object(a.useContext)(x),t=e.items,n=e.randResult,s=n.value,i=n.index;if(void 0===i||void 0===s||i>=t.length)return null;var r=t[i].name,l=i>0?t[i-1].range:0,j=t[i].range,d=r[0].toUpperCase();return r.length>1&&(d+=r[1].toLowerCase()),Object(c.jsxs)(o.a,{children:[Object(c.jsx)(b.a,{xs:12,children:Object(c.jsx)("h3",{children:"Result"})}),Object(c.jsx)(b.a,{xs:12,children:Object(c.jsxs)("div",{className:"resultContainer",children:[Object(c.jsx)("div",{className:"top fullwidth",children:i}),Object(c.jsxs)("div",{className:"body fullWidth",children:[Object(c.jsx)("div",{className:"itemSymbol",children:d}),Object(c.jsx)("div",{className:"itemName",children:r}),Object(c.jsx)("small",{className:"resultText",children:s})]}),Object(c.jsxs)("div",{className:"bottom fullWidth",children:[Object(c.jsx)("span",{children:l.toFixed(6)}),Object(c.jsx)("span",{children:j.toFixed(6)})]})]})})]})}),I=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)({value:void 0,index:void 0}),r=Object(j.a)(i,2),u=r[0],h=r[1],O=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=n.reduce((function(e,t){return e+t.weight}),0);n.forEach((function(e,c){e.normalizedWeight=e.range=e.weight/t,c&&(e.range+=n[c-1].range)})),e&&(h({value:void 0,index:void 0}),s(Object(l.a)(n)))};Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("itemList"));e&&s(e)}),[]);var m={items:n,randResult:u,addItem:function(e,t){n.push({name:e,weight:t}),O()},removeItemByIndex:function(e){n.splice(e,1),O()},removeAllItems:function(){s([])},randItem:function(){var e=Math.random(),t=n.findIndex((function(t){return t.range>=e}));h({value:e,index:t})},saveItemListToLocalStorage:function(){localStorage.setItem("itemList",JSON.stringify(n))}};return Object(c.jsx)(x.Provider,{value:m,children:Object(c.jsx)(d.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(b.a,{xs:12,md:6,children:Object(c.jsx)(p,{})}),Object(c.jsx)(b.a,{children:Object(c.jsx)(C,{})})]})})})};n(27);r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.33b4da39.chunk.js.map