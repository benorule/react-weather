(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,function(e,t,a){},,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(2),a(1)),i=(a(10),a(11),function(e){return r.a.createElement("div",null,e.error&&r.a.createElement("div",{className:"text"},"Please enter a valid city."),e.loading&&r.a.createElement("div",{className:"text"},"Loading..."),200===e.responseObj.cod?r.a.createElement("div",null,r.a.createElement("p",{className:"text"},"In ",e.responseObj.name," it is currently ",Math.round(e.responseObj.main.temp)," degrees out with ",e.responseObj.weather[0].description,".")):null)}),u=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(l.a)(o,2),s=u[0],m=u[1],p=Object(n.useState)("imperial"),d=Object(l.a)(p,2),h=d[0],b=d[1],v=(encodeURIComponent(s),Object(n.useState)(!1)),E=Object(l.a)(v,2),f=E[0],g=E[1],j=Object(n.useState)(!1),O=Object(l.a)(j,2),w=O[0],N=O[1];return r.a.createElement("div",{className:"hero-container"},r.a.createElement("video",{src:"https://benorule.github.io/react-weather/videos/video-2.mp4",autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("h1",{className:"header"},"Weather Dashboard"),r.a.createElement(i,{responseObj:a,error:f,loading:w}),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),0===s.length)return g(!0);g(!1),c({}),N(!0);var t=encodeURIComponent(s);fetch("https://community-open-weather-map.p.rapidapi.com/weather?units=".concat(h,"&q=").concat(t),{method:"GET",headers:{"x-rapidapi-key":"f5bba0c546msh01aa24054963d65p158acajsn4137d8605948","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){if(200!==e.cod)throw new Error;c(e),N(!1)})).catch((function(e){g(!0),N(!1),console.log(e.message)}))}},r.a.createElement("input",{className:"field",type:"text",placeholder:"Enter City",maxLength:"50",value:s,onChange:function(e){return m(e.target.value)}}),r.a.createElement("div",null,r.a.createElement("label",{className:"label button"},r.a.createElement("input",{className:"input",type:"radio",name:"units",checked:"imperial"===h,value:"imperial",onChange:function(e){return b(e.target.value)}}),"\u2109"),r.a.createElement("label",{className:"label button"},r.a.createElement("input",{className:"input",type:"radio",name:"units",checked:"metric"===h,value:"metric",onChange:function(e){return b(e.target.value)}}),"\u2103")),r.a.createElement("button",{className:"field button",type:"submit"},"Get Weather")))};a(12);var s=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-logo"},r.a.createElement("a",{href:"https://github.com/react-weather",className:"social-logo"},"View Source Code")))};var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(s,null))};var p=function(){return r.a.createElement("div",null,r.a.createElement(m,null))};o.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.e2a72138.chunk.js.map