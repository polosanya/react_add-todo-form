(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a.n(n),s=a(2),o=a(3),r=a(1),c=(a(10),a(0)),l=function(e){var t=e.task,a=Object(r.useState)(t.completed),n=Object(s.a)(a,2),i=n[0],o=n[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{className:"task__title",children:t.title}),Object(c.jsx)("input",{type:"checkbox",checked:i,className:"task__completed",onChange:function(){return o(!i)}})]})},u=function(e){var t=e.name,a=e.email;return Object(c.jsxs)("p",{className:"task__info",children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)("a",{href:"mailto:".concat(a),children:a})]})},d=function(e){var t=e.todos;return Object(c.jsx)("ul",{className:"App__list",children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"task",children:[Object(c.jsx)(l,{task:e}),e.user&&Object(c.jsx)(u,Object(o.a)({},e.user))]})},e.id)}))})},m=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],h=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:m.find((function(t){return t.id===e.userId}))||null})})),b={id:0,name:"None",username:"None",email:"None",address:{street:"None",suite:"None",city:"None",zipcode:"None",geo:{lat:"None",lng:"None"}},phone:"None",website:"None",company:{name:"None",catchPhrase:"None",bs:"None"}},p=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(b),o=Object(s.a)(i,2),l=o[0],u=o[1],p=Object(r.useState)(!1),g=Object(s.a)(p,2),j=g[0],y=g[1],f=Object(r.useState)(!1),O=Object(s.a)(f,2),x=O[0],k=O[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Add todo form"}),Object(c.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),l!==b?""!==a?(h.push({userId:l.id,id:h.length+1,title:a,completed:!1,user:l}),n("")):k(!0):y(!0)}(e)},className:"App__form",children:[Object(c.jsx)("input",{type:"text",name:"title",value:a,onChange:function(e){n(e.target.value),k(!1)},placeholder:"Enter Title"}),x&&"You should enter some title",Object(c.jsxs)("select",{onChange:function(e){return function(e){var t=m.find((function(t){return t.name===e.target.value}));t?(u(t),y(!1)):u(b)}(e)},children:[Object(c.jsx)("option",{value:b.name,defaultChecked:!0,children:"Choose a user"}),m.map((function(e){return Object(c.jsx)("option",{value:e.name,children:e.name})}))]}),j&&"You should choose a user",Object(c.jsx)("button",{type:"submit",children:"Add"})]}),Object(c.jsx)(d,{todos:h})]})};i.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.efea55c9.chunk.js.map