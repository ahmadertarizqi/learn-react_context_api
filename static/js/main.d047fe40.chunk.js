(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(65)},41:function(e,a,t){},63:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(32),c=t.n(l),o=(t(41),t(4)),i=t(5),s=t(7),m=t(6),u=t(8),p=t(11),d=t(13),h=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark mb-3 bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},"Simple React Context API"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},"About"))))))};h.defaultProps={headtitle:"Learn React"};var b=h,E=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"This Match Params Route [ ",e.match.params.id," ]"))},v=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"This project is only for learning React Context API"))},f=t(12),C=t.n(f),y=t(35),N=t(17),g=r.a.createContext(),j=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(N.a)({},e,{allContacts:e.allContacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(N.a)({},e,{allContacts:[a.payload].concat(Object(y.a)(e.allContacts))});case"UPDATE_CONTACT":return Object(N.a)({},e,{allContacts:e.allContacts.map(function(e){return e.id===a.payload.id?a.payload:e})});default:return e}},O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={allContacts:[],dispatch:function(e){t.setState(function(a){return j(a,e)})}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://jsonplaceholder.typicode.com/users").then(function(a){e.setState({allContacts:a.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=g.Consumer,w=(t(63),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(e,a){C.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)).then(function(t){alert("berhasil di hapus"),a({type:"DELETE_CONTACT",payload:e}),console.log(t+"Delete Working")}).catch(function(e){console.log(e)})},t.onShowClick=function(){t.setState({showContactInfo:!t.state.showContactInfo})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.id,n=a.name,l=a.email,c=a.phone,o=this.state.showContactInfo;return r.a.createElement(k,null,function(a){var i=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h5",{className:"c-name"}," ",n,r.a.createElement("div",{style:{float:"right"}},r.a.createElement("span",{className:"csr-pointer",onClick:e.onShowClick},r.a.createElement("i",{className:"icon ion-md-arrow-dropdown"})),r.a.createElement(p.b,{to:"/contact/edit/".concat(t),className:"a_csr-pointer"},r.a.createElement("span",{className:"csr-pointer",style:{color:"black"}},r.a.createElement("i",{className:"icon ion-md-create"}))),r.a.createElement("span",{className:"csr-pointer",onClick:e.onDeleteClick.bind(e,t,i)},r.a.createElement("i",{className:"icon ion-md-trash"})))),o?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",l," "),r.a.createElement("li",{className:"list-group-item"},"Telfon: ",c," ")):null)})}}]),a}(r.a.Component)),A=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var a=e.allContacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(p.b,{to:"/contact/add",className:"btn btn-primary"},r.a.createElement("i",{className:"icon ion-md-add"})," Add Data")),r.a.createElement("hr",null),a.map(function(e,a){return r.a.createElement(w,{key:a,id:e.id,name:e.name,email:e.email,phone:e.phone})}))})}}]),a}(r.a.Component),S=t(14),T=function(e){var a=e.label,t=e.type,n=e.name,l=e.value,c=e.onChange,o=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,a),r.a.createElement("input",{type:t,name:n,className:o?"is-invalid form-control":"form-control",value:l,onChange:c}),o&&r.a.createElement("div",{className:"invalid-feedback"}," ",o," "))};T.defaultProps={type:"text"};var D=T,H=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmitHandler=function(e,a){a.preventDefault();var n=t.state,r=n.name,l=n.email,c=n.phone;if(""!==r&&""!==l&&""!==c){var o={name:r,email:l,phone:c};C.a.post("https://jsonplaceholder.typicode.com/users",o).then(function(a){e({type:"ADD_CONTACT",payload:a.data}),console.log(a.data)}),t.setState({name:"",email:"",phone:""}),t.props.history.push("/"),alert("berhasil ditambahkan")}else t.setState({errors:{name:"Name is required!!",email:"Email is required!!",phone:"Phone is required!!"}})},t.onChangeHandler=function(e){t.setState(Object(S.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,l=a.phone,c=a.errors;return r.a.createElement(k,null,function(a){var o=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmitHandler.bind(e,o)},r.a.createElement(D,{label:"Name",type:"text",name:"name",value:t,onChange:e.onChangeHandler,error:c.name}),r.a.createElement(D,{label:"Email",type:"email",name:"email",value:n,onChange:e.onChangeHandler,error:c.email}),r.a.createElement(D,{label:"Phone",type:"phone",name:"phone",value:l,onChange:e.onChangeHandler,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-primary btn-block"}))))})}}]),a}(r.a.Component),P=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmitHandler=function(e,a){a.preventDefault();var n=t.state,r=n.name,l=n.email,c=n.phone;if(""!==r&&""!==l&&""!==c){var o={name:r,email:l,phone:c},i=t.props.match.params.id;C.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),o).then(function(a){e({type:"UPDATE_CONTACT",payload:a.data}),console.log(a.data)}),t.setState({name:"",email:"",phone:""}),t.props.history.push("/"),alert("berhasil di Edit")}else t.setState({errors:{name:"Name is required!!",email:"Email is required!!",phone:"Phone is required!!"}})},t.onChangeHandler=function(e){t.setState(Object(S.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;C.a.get("https://jsonplaceholder.typicode.com/users/".concat(a)).then(function(a){var t=a.data;e.setState({name:t.name,email:t.email,phone:t.phone})})}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,l=a.phone,c=a.errors;return r.a.createElement(k,null,function(a){var o=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmitHandler.bind(e,o)},r.a.createElement(D,{label:"Name",type:"text",name:"name",value:t,onChange:e.onChangeHandler,error:c.name}),r.a.createElement(D,{label:"Email",type:"email",name:"email",value:n,onChange:e.onChangeHandler,error:c.email}),r.a.createElement(D,{label:"Phone",type:"phone",name:"phone",value:l,onChange:e.onChangeHandler,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-primary btn-block"}))))})}}]),a}(r.a.Component),x=(t(64),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(b,{headtitle:"Contact Manager"}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{path:"/contact/add",component:H}),r.a.createElement(d.a,{path:"/contact/edit/:id",component:P}),r.a.createElement(d.a,{path:"/about/:id",component:E}),r.a.createElement(d.a,{path:"/about",component:v}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.d047fe40.chunk.js.map