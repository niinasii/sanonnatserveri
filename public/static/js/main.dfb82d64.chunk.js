(this.webpackJsonpsanontareact=this.webpackJsonpsanontareact||[]).push([[0],{17:function(t,e,a){t.exports=a(42)},22:function(t,e,a){},23:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(16),r=a.n(i),u=(a(22),a(23),a(2)),l=a(3),c=a(5),s=a(4),p=a(6),h=function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).poista=function(){console.log("Poista nappia klikattu"),a.props.poista(a.props.id)},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("p",{id:"sitaatti"},o.a.createElement("b",null,this.props.id),o.a.createElement("br",null)," ",this.props.quotetext,o.a.createElement("br",null),o.a.createElement("i",null,"- ",this.props.author),o.a.createElement("button",{className:"nappi",id:"poistanappi",type:"button",onClick:this.poista},"X"))}}]),e}(n.Component),m=function(t){function e(){return Object(u.a)(this,e),Object(c.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.quotes.map((function(e){return o.a.createElement(h,{key:e.id,author:e.author,quotetext:e.quotetext,id:e.id,poista:t.props.poista,update:t.props.update})}));return o.a.createElement("div",{id:"sitaatit"},e)}}]),e}(n.Component),d=function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={author:"",quotetext:""},a.authorMuuttunut=function(t){a.setState({author:t.target.value})},a.sitaattiMuuttunut=function(t){a.setState({quotetext:t.target.value})},a.nappiaKlikattu=function(){a.props.addQuote(a.state),a.setState({quotetext:"",author:""}),console.log("Nappia klikattu")},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{id:"lomake"},o.a.createElement("form",null,o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("label",{htmlFor:"author"},"Author: ")),o.a.createElement("td",null,o.a.createElement("input",{type:"text",name:"author",value:this.state.author,onChange:this.authorMuuttunut}))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("label",{htmlFor:"quote"},"Sitaatti: ")),o.a.createElement("td",null,o.a.createElement("input",{type:"text",name:"quotetext",value:this.state.quotetext,onChange:this.sitaattiMuuttunut}))))),o.a.createElement("button",{type:"button",id:"nappi",onClick:this.nappiaKlikattu},"Lis\xe4\xe4 uusi sitaatti")))}}]),e}(n.Component),f="http://localhost:4000/api/quotes",E=a(24);function b(t){return E.get(f).then((function(e){t(e.data)}))}function v(t,e){E.post(f,t).then((function(t){console.dir(t),e(t.status)}))}function j(t){return E.delete(f+"/"+t).then((function(t){console.log("Rest: Deletoitu"),console.dir(t)}))}var k=function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={sanonnat:[],msg:"Haetaan dataa..."},a.componentDidMount=function(){a.haeJaPaivita()},a.haeJaPaivita=function(){b((function(t){a.setState({sanonnat:t,msg:null})}))},a.addNewQuote=function(t){v(t,(function(){a.haeJaPaivita()}))},a.poista=function(t){j(t).then((function(t){a.haeJaPaivita()}))},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("h2",null,"Lis\xe4\xe4 sanonta"),o.a.createElement(d,{addQuote:this.addNewQuote}),o.a.createElement("h2",null,"Sanonnat"),o.a.createElement(m,{quotes:this.state.sanonnat,poista:this.poista}))}}]),e}(n.Component);var O=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"Sanonnat App"),o.a.createElement("h2",null,"Lis\xe4\xe4 suosikkisi")),o.a.createElement("main",null,o.a.createElement(k,null)),o.a.createElement("footer",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.dfb82d64.chunk.js.map