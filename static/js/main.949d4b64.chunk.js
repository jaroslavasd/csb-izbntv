(this["webpackJsonpreact-hangman"]=this["webpackJsonpreact-hangman"]||[]).push([[0],{39:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(26),c=n.n(a),r=(n(38),n(39),n(3)),l=n(2),s=n(1),i=n.n(s),o=n(10),j=n(0),u=["style","size","className"];var b=n(7),d=n(6),m=n(13),O=n(28),x=n.n(O);var h=n(21),v=n(20),f=n(24),g=n(14),p=n(29),I=n(30);var N={Item01:function(){},Item02:function(){return i.a.createElement("div",{className:"item02-container",children:"Hello World"})},Item03:function(){return Object(j.jsx)("div",{className:"item03-container",children:"Hello World"})},Item04:function(){var e={className:"item04-container",id:"item04-id",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Hello"})," ",Object(j.jsx)("strong",{children:"World"})]})};return Object(j.jsx)("div",Object(l.a)({},e))},Item05:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:"Hello"})," ",Object(j.jsx)("span",{children:"World"})]})},Item06:function(){var e=function(e){var t=e.children;return Object(j.jsx)("div",{className:"message",children:t})};return Object(j.jsx)("div",{className:"item06-container",children:Object(j.jsx)(e,{children:"Hello World"})})},Item07:function(){var e=function(e){var t=e.firstName,n=e.lastName;return Object(j.jsxs)("div",{children:["Hello ",t," ",n,"!"]})};return Object(j.jsx)(e,{firstName:!1})},Item08:function(){function e(e){var t=e.text;return Object(j.jsxs)(o.a,{variant:"light",children:['The text "'.concat(t,'" has '),t.length?Object(j.jsx)("strong",{children:t.length}):"No"," characters"]})}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(e,{text:"Hello World"}),Object(j.jsx)(e,{text:""})]})},Item09:function(){},Item10:function(){var e=function(e){var t=e.style,n=e.size,a=e.className,c=void 0===a?"":a,s=Object(r.a)(e,u),i=n?"box--".concat(n):"";return Object(j.jsx)("div",Object(l.a)({className:"box ".concat(c," ").concat(i),style:Object(l.a)({fontStyle:"italic"},t)},s))};return Object(j.jsxs)("div",{children:[Object(j.jsx)(e,{size:"small",style:{backgroundColor:"lightblue"},children:"small lightblue box"}),Object(j.jsx)(e,{size:"medium",style:{backgroundColor:"pink"},children:"medium pink box"}),Object(j.jsx)(e,{size:"large",style:{backgroundColor:"orange"},children:"large orange box"}),Object(j.jsx)(e,{children:"sizeless box"})]})},Item11:function(){},Item12:function(){var e=function(){var e=i.a.useState(""),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Label,{htmlFor:"name",children:"Name"}),Object(j.jsx)(d.a.Control,{placeholder:"Please type your name",onChange:function(e){return a(e.target.value)},id:"name"})]}),Object(j.jsx)("br",{}),n?Object(j.jsxs)(o.a,{children:["Hello ",n]}):""]})};return Object(j.jsx)(e,{})},Item13:function(){var e=function(){var e=i.a.useState(window.localStorage.getItem("name")||""),t=Object(b.a)(e,2),n=t[0],a=t[1];i.a.useEffect((function(){window.localStorage.setItem("name",n)}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Label,{htmlFor:"name",children:"Name"}),Object(j.jsx)(d.a.Control,{value:n,onChange:function(e){return a(e.target.value)},id:"name"}),n?"":Object(j.jsx)(d.a.Text,{className:"text-muted",children:"Please type your name"})]}),Object(j.jsx)("br",{}),n?Object(j.jsxs)(o.a,{children:["Hello ",n]}):""]})};return Object(j.jsx)(e,{})},Item14:function(){var e=function(){var e=i.a.useState((function(){return window.localStorage.getItem("name")||""})),t=Object(b.a)(e,2),n=t[0],a=t[1];i.a.useEffect((function(){window.localStorage.setItem("name",n)}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Label,{htmlFor:"name",children:"Name:"}),Object(j.jsx)(d.a.Control,{size:"sm",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Please type your name",id:"name"})]}),Object(j.jsx)("br",{}),n?Object(j.jsxs)(o.a,{children:["Hello ",n]}):""]})};return Object(j.jsx)(e,{})},Item15:function(){var e=function(){var e=i.a.useState((function(){return window.localStorage.getItem("name")||""})),t=Object(b.a)(e,2),n=t[0],a=t[1];i.a.useEffect((function(){window.localStorage.setItem("name",n)}),[n]);return Object(j.jsxs)("div",{children:[Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Label,{htmlFor:"name",children:"Name"}),Object(j.jsx)(d.a.Control,{value:n,onChange:function(e){return a(e.target.value)},placeholder:"Please type your name",id:"name"})]}),Object(j.jsx)("br",{}),n?Object(j.jsxs)(o.a,{children:["Hello ",n]}):""]})},t=i.a.useState(0),n=Object(b.a)(t,2),a=n[0],c=n[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.a,{variant:"secondary",onClick:function(){return c((function(e){return e+1}))},children:a}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsx)(e,{})]})},Item16:function(){var e=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=i.a.useState((function(){return window.localStorage.getItem(e)||t})),a=Object(b.a)(n,2),c=a[0],r=a[1];return i.a.useEffect((function(){window.localStorage.setItem(e,c)}),[e,c]),[c,r]}("name"),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Label,{htmlFor:"name",children:"Name"}),Object(j.jsx)(d.a.Control,{value:n,onChange:function(e){return a(e.target.value)},placeholder:"Please type your name",id:"name"})]}),Object(j.jsx)("br",{}),n?Object(j.jsxs)(o.a,{children:["Hello ",n]}):""]})};return Object(j.jsx)(e,{})},Item17:function(){var e=function(e){var t=e.children,n=i.a.useRef();return i.a.useEffect((function(){var e=n.current;x.a.init(e,{max:25,speed:400,glare:!0,"max-glare":.5})}),[]),Object(j.jsx)("div",{ref:n,className:"tilt-root",children:Object(j.jsx)("div",{className:"tilt-child",children:t})})},t=i.a.useState(!0),n=Object(b.a)(t,2),a=n[0],c=n[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:a,onChange:function(e){return c(e.target.checked)}})," ","show tilt"]}),a?Object(j.jsx)(e,{children:Object(j.jsx)("div",{className:"totally-centered",children:"vanilla-tilt.js"})}):null]})},Item18:function(){},Item19:function(){var e=function(){return Object(j.jsxs)(d.a,{onSubmit:function(e){e.preventDefault();var t=e.target.elements.usernameInput.value;alert("You entered: ".concat(t))},children:[Object(j.jsxs)(d.a.Group,{className:"mb-3",controlId:"usernameInput",children:[Object(j.jsx)(d.a.Label,{children:"Username"}),Object(j.jsx)(d.a.Control,{type:"text"})]}),Object(j.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})};return Object(j.jsx)(e,{})},Item20:function(){var e=function(){var e=i.a.useState(""),t=Object(b.a)(e,2),n=t[0],a=t[1],c=i.a.useState(""),r=Object(b.a)(c,2),l=r[0],s=r[1],u=n===n.toLowerCase()?null:"Username must be lower case";return Object(j.jsx)(p.a,{children:Object(j.jsxs)(f.a,{children:[Object(j.jsx)(g.a,{children:Object(j.jsxs)(d.a,{onSubmit:function(e){e.preventDefault(),s(n)},children:[Object(j.jsxs)(I.a,{direction:"horizontal",gap:3,children:[Object(j.jsx)(m.a,{className:"ms-auto",variant:"primary",disabled:Boolean(u),type:"submit",children:"Submit"}),Object(j.jsx)(d.a.Control,{placeholder:"Your name",type:"text",onChange:function(e){s(""),a(e.target.value)}})]}),!Boolean(u)||Object(j.jsx)(o.a,{className:"mt-3",variant:"danger",children:u}),!Boolean(l)||Object(j.jsxs)(o.a,{className:"mt-3",variant:"primary",children:["Hello ",l]})]})}),Object(j.jsx)(g.a,{})]})})};return Object(j.jsx)(e,{})},Item21:function(){var e=function(){var e=i.a.useState(""),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(d.a,{onSubmit:function(e){e.preventDefault(),alert("You entered: ".concat(n))},children:[Object(j.jsx)(v.a,{controlId:"floatingInput",label:"Username",className:"mb-3",children:Object(j.jsx)(d.a.Control,{type:"text",onChange:function(e){a(e.target.value.toLowerCase())},value:n})}),Object(j.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})};return Object(j.jsx)(e,{})},Item22:function(){},Item23:function(){var e=[{id:"a",value:"apple"},{id:"o",value:"orange"},{id:"g",value:"grape"},{id:"p",value:"pear"}],t=i.a.useState(e),n=Object(b.a)(t,2),a=n[0],c=n[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(m.a,{className:"mb-2",variant:"success",disabled:a.length>=e.length,onClick:function(){c([].concat(Object(h.a)(a),[e.find((function(e){return!a.includes(e)}))]))},children:"add item"}),Object(j.jsx)(f.a,{children:a.map((function(e){return Object(j.jsxs)(g.a,{children:[Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Label,{children:e.value}),Object(j.jsx)(d.a.Control,{className:"mb-3",placeholder:e.value,defaultValue:e.value})]}),Object(j.jsx)(m.a,{variant:"danger",onClick:function(){return function(e){c(a.filter((function(t){return t!==e})))}(e)},children:"remove"})]})}))})]})},Item24:function(){var e=function(e){var t=e.name,n=e.onNameChange;return Object(j.jsxs)(d.a.Group,{className:"mb-4",children:[Object(j.jsx)(d.a.Label,{children:"Name"}),Object(j.jsx)(d.a.Control,{value:t,onChange:n})]})},t=function(){var e=i.a.useState(""),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(d.a.Group,{className:"mb-4",children:[Object(j.jsx)(d.a.Label,{children:"Favorite Animal"}),Object(j.jsx)(d.a.Control,{value:n,onChange:function(e){return a(e.target.value)}})]})},n=function(e){var t=e.name;return Object(j.jsx)("div",{children:"Hey ".concat(t,", you are great!")})},a=i.a.useState(""),c=Object(b.a)(a,2),r=c[0],l=c[1];return Object(j.jsxs)(d.a,{children:[Object(j.jsx)(e,{name:r,onNameChange:function(e){return l(e.target.value)}}),Object(j.jsx)(t,{}),Object(j.jsx)(n,{name:r})]})},Item25:function(){},Item26:function(){}};function y(){return function(e){var t=N[e];return Object(j.jsx)(t,{id:e})}("Item20")}function C(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(y,{})})}c.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(C,{}))}},[[43,1,2]]]);
//# sourceMappingURL=main.949d4b64.chunk.js.map