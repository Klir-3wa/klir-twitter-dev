(this["webpackJsonpklir-twitter"]=this["webpackJsonpklir-twitter"]||[]).push([[0],{22:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),m=(a(27),a(5)),o=a(6),s=a(8),i=a(7),u=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Feed Twitter"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01 "},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Favoris tweets")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Live Tweets")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"About"))))))}}]),a}(n.Component),d=a(20),h=a.n(d),p=a(21),v=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).gettwitte=function(e,t){if(""==e)alert("merci de mettre un mot pour la recherche");else{var a="https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=".concat(e,"&result_type=mixed&count=").concat(t);h.a.get(a,{headers:{Authorization:"Bearer ".concat("AAAAAAAAAAAAAAAAAAAAAAs5%2FAAAAAAA%2BFhxtLDRr2AuKh5zdIHTczhg0Jg%3DltF0dqGzLFlmXH9wjI8HkO1gEzGlnCYUegwIOVVu1Umn8Yi1sX")}}).then((function(e){n.setState({tweet:e.data.statuses})}))}},n.handleChange=function(e){},n.handleSubmit=function(e){e.preventDefault(),n.setState({search:e.target[0].value}),n.setState({count:e.target[1].value})},n.state={tweet:[],search:"",result_type:"mixed",count:1},n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.gettwitte(this.state.search,this.state.count)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Search component"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline my-2 my-lg-0 mt-5"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search",onChange:this.handleChange}),r.a.createElement("select",{className:"mdb-select md-form mr-2"},r.a.createElement("option",{value:this.state.count,disabled:!0,selected:!0},"Number of tweets"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"30"},"30")),r.a.createElement("button",{className:"btn btn-primary my-2 my-sm-0",type:"submit"},"Search")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-5"},this.state.tweet.map((function(e){return r.a.createElement("div",{className:"col-md-4 mt-4",key:e.id_str},r.a.createElement(p.a,{tweetId:e.id_str}),r.a.createElement("a",{href:"",className:"btn btn-danger btn-blocl"},"Ajouter au favoris"))})))))}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"page-footer font-small blue pt-4 bg-primary text-white mt-5"},r.a.createElement("div",{className:"text-center text-md-left"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-md-0 mt-3"},r.a.createElement("h5",{className:"text-uppercase"},"Footer Content"),r.a.createElement("p",null,"Here you can use rows and columns to organize your footer content.")),r.a.createElement("hr",{className:"clearfix w-100 d-md-none pb-3"}),r.a.createElement("div",{className:"col-md-3 mb-md-0 mb-3 "},r.a.createElement("h5",{className:"text-uppercase"},"Links")),r.a.createElement("div",{className:"col-md-3 mb-md-0 mb-3"},r.a.createElement("h5",{className:"text-uppercase"},"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 1")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 2")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 3")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 4")))))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",r.a.createElement("a",{href:"https://mdbootstrap.com/"}," MDBootstrap.com"))))}}]),a}(n.Component),f=(a(47),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("div",{className:"App container mt-5"},r.a.createElement(E,null),r.a.createElement(b,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.73040693.chunk.js.map