(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),o=n(18),i=n.n(o),l=(n(25),n(11)),r=n(20),a=(n(26),n(8)),j=n(0);function d(t){return Object(j.jsxs)("ul",{class:"nav",children:[Object(j.jsx)("li",{class:"nav-item",children:Object(j.jsx)(a.b,{class:"nav-link active","aria-current":"page",to:"/",children:t.title})}),Object(j.jsx)("li",{class:"nav-item",children:Object(j.jsx)(a.b,{class:"nav-link",to:"/",children:"Home"})}),Object(j.jsx)("li",{class:"nav-item",children:Object(j.jsx)(a.b,{class:"nav-link",to:"/about",children:"About"})})]})}var b=d;d.defaultProps={title:"Header"};var h=function(t){var e=Object(c.useState)(""),n=Object(l.a)(e,2),s=n[0],o=n[1],i=Object(c.useState)(""),r=Object(l.a)(i,2),a=r[0],d=r[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Add Todo"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&a?(t.addTodo(s,a),o(""),d("")):alert("Please Fill the Form to Continue")},children:[Object(j.jsx)("div",{class:"mb-3",children:Object(j.jsx)("input",{type:"text",value:s,onChange:function(t){return o(t.target.value)},placeholder:"Title"})}),Object(j.jsx)("div",{class:"mb-3",children:Object(j.jsx)("input",{type:"text",value:a,onChange:function(t){return d(t.target.value)},placeholder:"Description"})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Submit"})]}),Object(j.jsx)("hr",{})]})};function u(t){return Object(j.jsxs)("footer",{className:"text-center",style:{position:"sticky",width:"100%",top:"80vh",backgroundColor:"black",color:"white",minHeight:"80px"},children:[Object(j.jsx)("h4",{children:t.title}),Object(j.jsx)("p",{children:"Copyright \xa9 TodosList - 2021"})]})}var O=u;u.defaultProps={title:"Footer"};var x=function(t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h5",{children:t.todo.sno}),Object(j.jsx)("h5",{children:t.todo.title}),Object(j.jsx)("h5",{children:t.todo.desc}),Object(j.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){t.onDelete(t.todo)},children:"Delete"}),Object(j.jsx)("hr",{})]})};var f=function(t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Todos List"}),0===t.todos.length?"Nothing to Display":t.todos.map((function(e){return Object(j.jsx)(x,{todo:e,onDelete:t.onDelete},e.sno)}))]})},g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Hii, I'm Daniyal Anwaar. This is my first React App in which following concepts of ReactJS are being used:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Import/Export"}),Object(j.jsx)("li",{children:"Class-Based Components"}),Object(j.jsx)("li",{children:"ArrowFunctions"}),Object(j.jsx)("li",{children:"StateHooks"}),Object(j.jsx)("li",{children:"UseEffectHooks"}),Object(j.jsx)("li",{children:"Local Storage"}),Object(j.jsx)("li",{children:"Router"})]})]})},p=n(2);var v=function(){var t;t=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var e=function(t,e){console.log("asas",t,e);var n={sno:0===i.length?1:i[i.length-1].sno+1,title:t,desc:e};d([].concat(Object(r.a)(i),[n]))},n=function(t){console.log("Hello",t),d(i.filter((function(e){return e!==t}))),localStorage.setItem("todos",JSON.stringify(i))},s=Object(c.useState)(t),o=Object(l.a)(s,2),i=o[0],d=o[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(i))}),[i]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(b,{title:"Logo"}),Object(j.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(h,{addTodo:e}),Object(j.jsx)(f,{todos:i,onDelete:n})]})}}),Object(j.jsx)(p.a,{path:"/about",children:Object(j.jsx)(g,{})}),Object(j.jsx)(O,{title:"My Footer"})]})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),o(t),i(t)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),m()}},[[33,1,2]]]);
//# sourceMappingURL=main.c37614b9.chunk.js.map