(this["webpackJsonpreact-multi-page-website"]=this["webpackJsonpreact-multi-page-website"]||[]).push([[0],{56:function(e,t,a){e.exports=a(70)},61:function(e,t,a){},62:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=(a(61),a(17)),i=a(18),s=a(21),m=a(19),u=a(22),d=a(25),g=a(7),p=(a(62),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navigation"},l.a.createElement("nav",{className:"navbar navbar-expand-lg",style:{backgroundColor:"orange",color:"white",height:"4rem"}},l.a.createElement("div",{className:"container"},l.a.createElement(d.b,{className:"navbar-brand",to:"/ReactMultiPageWebsite",style:{color:"white"}},l.a.createElement("b",null," Bun-Bun Bake Shop")),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item  ".concat("/ReactMultiPageWebsite"===this.props.location.pathname?"active":"")},l.a.createElement(d.b,{className:"nav-link",to:"/ReactMultiPageWebsite",style:{color:"white"}},"Home",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item  ".concat("/ReactMultiPageWebsite/about"===this.props.location.pathname?"active":"")},l.a.createElement(d.b,{className:"nav-link",to:"/ReactMultiPageWebsite/about",style:{color:"white"}},"Products")),l.a.createElement("li",{className:"nav-item  ".concat("/ReactMultiPageWebsite/contact"===this.props.location.pathname?"active":"")},l.a.createElement(d.b,{className:"nav-link",to:"/ReactMultiPageWebsite/contact",style:{color:"white"}},"Shopping Cart ",l.a.createElement("span",{className:"dot",style:{textAlign:"center"}},this.props.cartItemCount))))))))}}]),t}(n.Component)),E=Object(g.f)(p);var h=a(78);var v=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row align-items-center my-3"},l.a.createElement("div",{class:"col-12"},l.a.createElement(h.a,null,l.a.createElement(h.a.Item,{interval:2e3},l.a.createElement("img",{className:"d-block w-100",src:"https://images-gmi-pmc.edge-generalmills.com/165f3d2f-0610-40a6-abf8-478fb850be7c.jpg",alt:"Third slide",style:{height:"36rem"}})),l.a.createElement(h.a.Item,{interval:2e3},l.a.createElement("img",{className:"d-block w-100",src:"https://www.tastesoflizzyt.com/wp-content/uploads/2020/07/blueberry-blackberry-pie-1200-2.jpg",alt:"Third slide",style:{height:"36rem"}})),l.a.createElement(h.a.Item,{interval:2e3},l.a.createElement("img",{className:"d-block w-100",src:"https://natashaskitchen.com/wp-content/uploads/2014/11/Cinnamon-Apple-Pie-6-500x375.jpg",alt:"First slide",style:{height:"36rem"}}))))),l.a.createElement("div",{class:"row align-items-center my-2"},l.a.createElement("div",{class:"col-12"},l.a.createElement("h1",{class:"font-weight-light"},"About Us"),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")))))},b=a(53),y=a(49),f=a(76),w=a(79),k=[];function C(){var e=localStorage.getItem("todoList");return e&&JSON.parse(e)}function x(e){localStorage.setItem("todoList",JSON.stringify(e))}C();var S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a.toggleDone=function(e,t){var n=a.state.todoList;n[t].finished=!n[t].finished,a.setState({todoList:n}),x(n)},a.addItem=function(e,t,n,l,r){var c=a.state.todoList,o=l*n;c.push({foodType:e,glazing:t,quantity:n,total:o,image:r}),a.setState({todoList:c}),x(c),a.props.increase()},a.deleteItem=function(e,t){e.stopPropagation();var n=a.state.todoList;n.splice(t,1),a.setState({todoList:n}),x(n)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=C();this.setState({todoList:e||k,newTodoContent:""})}},{key:"render",value:function(){for(var e=this,t=[],a=[],n="1",r="None",c=function(t){var a=t.title,c=t.price,o=t.image,m=l.a.useState(!1),u=Object(b.a)(m,2),d=u[0],g=u[1],p=function(){return g(!1)};return l.a.createElement("div",null,l.a.createElement(y.a,{class:"titleButtons",onClick:function(){return g(!0)},variant:"light",size:"lg",style:{backgroundColor:"white",color:"black",paddingLeft:0,border:"none"}},l.a.createElement("u",null,a)),l.a.createElement(f.a,{show:d,onHide:p,backdrop:"static",animation:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(f.a.Header,{closeButton:!0,style:{backgroundColor:"orange",color:"white",fontSize:"large"}},l.a.createElement(f.a.Title,null,a)),l.a.createElement(f.a.Body,null,l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-7"},l.a.createElement(w.a.Img,{style:{height:"28rem"},variant:"top",src:o})),l.a.createElement("div",{class:"col-lg-5"},l.a.createElement(i,{title:"Glazing",button1:"None",button2:"Vanilla-Milk",button3:"Sugar-Milk",button4:"Double",price:c}),l.a.createElement(i,{title:"Quantity",button1:"1",button2:"2",button3:"6",button4:"12",price:c}),l.a.createElement(s,{title:"Order",button1:"1",button2:"2",button3:"6",button4:"12",price:c})))),l.a.createElement(f.a.Footer,null,l.a.createElement(y.a,{variant:"link",style:{color:"black"},onClick:p}," Continue Browsing "),l.a.createElement(y.a,{variant:"outline-light",style:{color:"white",backgroundColor:"orange"},onClick:function(){return e.addItem(a,r,n,c,o)}}," Add to Cart "))))},o=function(e){var t=e.title,a=(e.text,e.price),n=(e.link,e.image);return l.a.createElement("div",{class:"shadow card border-dark mb-3 rounded-0",style:{height:"32rem"}},l.a.createElement(w.a.Img,{style:{height:"24rem"},onClick:function(){return function(e){var t=e.myTitle,a=e.myPrice;return console.log("Enter here"),l.a.createElement("div",{class:"col-lg-9 text-left"},l.a.createElement(c,{title:t,price:a}))}(t)},src:n}),l.a.createElement("div",{class:"card-body"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-9 text-left"},l.a.createElement(c,{title:t,price:a,image:n})),l.a.createElement("div",{class:"col-lg-3 text-right"},l.a.createElement(w.a.Title,{style:{marginTop:"5px"}},"$",a))),l.a.createElement(w.a.Text,null,l.a.createElement("i",null,"Made with ",t," and fluffy dough"))))},i=function(e){var t=e.title,a=e.button1,c=e.button2,o=e.button3,i=e.button4,s=e.price,m=function(e){"Quantity"==t?(n=e,console.log("Quantity: "+n),document.getElementById("currentQuatity").innerHTML="x"+n):(r=e,console.log("Glazing: "+r),document.getElementById("currentGlaze").innerHTML=r),document.getElementById("currentTotal").innerHTML="$"+s*n};return l.a.createElement("div",{class:"row",style:{marginBottom:"20px"}},l.a.createElement("p",null,t),l.a.createElement("div",{class:"row align-items-center"}),l.a.createElement("div",null,l.a.createElement("div",{class:"row align-items-center"},l.a.createElement("div",{class:"col-lg-6"},l.a.createElement(y.a,{onClick:function(){return m(a)},size:"sm",variant:"light",style:{width:"9rem",backgroundColor:"#FEBA4F",color:"white"},value:a},a)),l.a.createElement("div",{class:"col-lg-6"},l.a.createElement(y.a,{onClick:function(){return m(c)},size:"sm",variant:"light",style:{width:"9rem",backgroundColor:"#FEBA4F",color:"white"},value:c},c))),l.a.createElement("div",{class:"row my-2 align-items-center"},l.a.createElement("div",{class:"col-lg-6"},l.a.createElement(y.a,{onClick:function(){return m(o)},size:"sm",variant:"light",style:{width:"9rem",backgroundColor:"#FEBA4F",color:"white"},value:o},o)),l.a.createElement("div",{class:"col-lg-6"},l.a.createElement(y.a,{onClick:function(){return m(i)},size:"sm",variant:"light",style:{width:"9rem",backgroundColor:"#FEBA4F",color:"white"},value:i},i)))))},s=function(e){e.title,e.button1,e.button2,e.button3,e.button4;var t=e.price;return l.a.createElement("div",{class:"row",style:{marginTop:"80px"}},l.a.createElement("div",{class:"row align-items-center"},l.a.createElement("div",{class:"col-lg-6"},l.a.createElement(y.a,{size:"sm",variant:"light",style:{border:"none",width:"9rem",backgroundColor:"white",color:"black",textAlign:"left"}},"Glazing")),l.a.createElement("div",{class:"col-lg-6"},l.a.createElement(y.a,{size:"sm",id:"currentGlaze",variant:"light",style:{border:"none",width:"9rem",backgroundColor:"white",color:"black",textAlign:"right"},value:r},r))),l.a.createElement("div",{class:"row my-2 align-items-center"},l.a.createElement("div",{class:"col-lg-6"},l.a.createElement(y.a,{size:"sm",variant:"light",style:{border:"none",width:"9rem",backgroundColor:"white",color:"black",textAlign:"left"}},"Quantity")),l.a.createElement("div",{class:"col-lg-6"},l.a.createElement(y.a,{size:"sm",id:"currentQuatity",variant:"light",style:{border:"none",width:"9rem",backgroundColor:"white",color:"black",textAlign:"right"},value:n},"x",n))),l.a.createElement("div",{class:"row my-2 align-items-center"},l.a.createElement("div",{class:"col-lg-6"},l.a.createElement(y.a,{size:"sm",variant:"light",style:{fontSize:"22px",border:"none",width:"9rem",backgroundColor:"white",color:"black",textAlign:"left"}},"Total")),l.a.createElement("div",{class:"col-lg-6"},l.a.createElement(y.a,{size:"sm",id:"currentTotal",variant:"light",style:{fontSize:"22px",border:"none",width:"9rem",backgroundColor:"white",color:"black",textAlign:"right"},value:t},"$",t))))},m=0,u=[{type:"Original",price:1,image:"https://www.faithfullyglutenfree.com/wp-content/uploads/2011/01/Cinnamon-Buns-2181483.jpg"},{type:"Original; Gluten-Free",price:2,image:"https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg"},{type:"Blackberry",price:1.5,image:"https://kristineskitchenblog.com/wp-content/uploads/2018/05/blackberry-pie-700-0066.jpg"}];m<u.length;m++){var d=u[m];t.push(l.a.createElement("div",{class:"col-lg-4"},l.a.createElement(o,{title:d.type,price:d.price,image:d.image})))}for(var g=0,p=[{type:"Walnut",price:3,image:"https://www.bearnakedfood.com/wp-content/uploads/2018/05/DSCF1980-800x1200.jpg"},{type:"Pecan",price:2,image:"https://images.ctfassets.net/uw7yiu2kuigc/4BjBKP0HEN9htyhktAiWa0/8e9fa4d10df96a36525af327c243b65d/Classic-Pecan-Pie-Lead.jpg"},{type:"Pumpkin Spice",price:1,image:"https://tastesbetterfromscratch.com/wp-content/uploads/2015/10/Pumpkin-Pie-5-500x500.jpg"}];g<p.length;g++){var E=p[g];a.push(l.a.createElement("div",{class:"col-lg-4"},l.a.createElement(o,{title:E.type,price:E.price,image:E.image})))}return console.log(this.state.todoList),l.a.createElement("div",{className:"products"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{className:"contact"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row align-items-center my-4"},t),l.a.createElement("div",{class:"row align-items-center my-4"},a),l.a.createElement("div",{class:"row align-items-center my-5"})))))}}]),t}(n.Component),z=a(77),L=a(75),N=[];function O(e){localStorage.setItem("todoList",JSON.stringify(e))}var j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a.toggleDone=function(e,t){var n=a.state.todoList;n[t].finished=!n[t].finished,a.setState({todoList:n}),O(n)},a.addItem=function(){var e=a.state.todoList;e.push({content:a.state.newTodoContent,finished:!1}),a.setState({todoList:e}),O(e)},a.deleteItem=function(e,t){e.stopPropagation();var n=a.state.todoList;n.splice(t,1),a.setState({todoList:n}),O(n),a.props.decrease()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=function(){var e=localStorage.getItem("todoList");return e&&JSON.parse(e)}();this.setState({todoList:e||N,newTodoContent:""})}},{key:"render",value:function(){var e=this,t=((this.state.todoList||N).length,function(e){var t=e.activeQuantity,a=[1,2,6,12],n=[];for(var r in a)a[r]==t?n.push(l.a.createElement(z.a.Item,{eventKey:"quantityValues[index]",active:!0},a[r])):n.push(l.a.createElement(z.a.Item,{id:"Sometest",eventKey:"quantityValues[index]"},a[r]));return l.a.createElement(z.a,{as:L.a},l.a.createElement(z.a.Toggle,{style:{width:"120px",textAlign:"right",backgroundColor:"white",color:"black",border:"1px solid black",borderRadius:"2px"}}," ",t),l.a.createElement(z.a.Menu,{a:!0},n))}),a=function(t){var a=t.foodType,n=t.glazing,r=t.i,c="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.";return"Original; Gluten-Free"==a&&(c="Lorem ipsum dolor sit amet, consectetur adipiscing."),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("b",null,a),l.a.createElement("br",null),"Glazing: ",n,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",null,"Description:",c),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{style:{marginRight:"0px",backgroundColor:"white",border:"none"},className:"DeleteIcon",onClick:function(t){return e.deleteItem(t,r)}},l.a.createElement("u",null,"Remove")),l.a.createElement("button",{style:{backgroundColor:"white",border:"none"},onClick:function(t){return e.deleteItem(t,{i:r})}},"|"),l.a.createElement("button",{style:{backgroundColor:"white",border:"none"},onClick:function(t){return e.deleteItem(t,{i:r})}},l.a.createElement("u",null,"Edit"))))},n=function(e){var n=e.i,r=e.foodType,c=e.glazing,o=e.quantity,i=e.total,s=e.image;return l.a.createElement("div",null,l.a.createElement("div",{class:"shadow card border-dark mb-3 rounded-0",style:{height:"18rem"}},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-5"},l.a.createElement(w.a.Img,{variant:"top",src:s,style:{height:"17.9rem",width:"18rem"}})),l.a.createElement("div",{class:"col-lg-3"},l.a.createElement(a,{foodType:r,glazing:c,i:n})),l.a.createElement("div",{class:"col-lg-1"}," "),l.a.createElement("div",{class:"col-lg-2"},l.a.createElement("br",null),"Quantity ",l.a.createElement("br",null),l.a.createElement(t,{activeQuantity:o}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y.a,{style:{width:"120px",fontSize:"20px",textAlign:"right",backgroundColor:"white",color:"black",border:"none",borderRadius:"2px"}},"$",i)))))};console.log("rerender");var r=0,c=[];if(void 0!=this.state.todoList)for(var o=0;o<this.state.todoList.length;o++){var i=this.state.todoList[o];c.push(l.a.createElement("div",null,l.a.createElement("div",{class:"col-lg-12"},l.a.createElement(n,{i:o,foodType:i.foodType,glazing:i.glazing,quantity:i.quantity,total:i.total,image:i.image})))),r+=i.total,console.log(i)}return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"Header"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row my-3"},l.a.createElement("div",{class:"col-8"},c),l.a.createElement("div",{class:"col-4"},l.a.createElement((function(e){var t=e.itemCount,a=e.finalTotal;return l.a.createElement("div",{class:"shadow card border-dark mb-3 rounded-0",style:{height:"10.5rem"}},l.a.createElement("div",{class:"row my-3"},l.a.createElement("div",{class:"col-1"}," "),l.a.createElement("b",null,l.a.createElement("u",null,l.a.createElement("p",null,"Order Summary")),"   "),"    ",l.a.createElement("br",null),l.a.createElement("div",{class:"col-12"}," "),l.a.createElement("div",{class:"col-1"}," "),l.a.createElement("p",{style:{fontSize:"20px"}},"Subtotal (",t,"): "),l.a.createElement("div",{class:"col-4"}," "),l.a.createElement("div",{class:"col-3"},l.a.createElement("p",{style:{fontSize:"20px",textAlign:"right"}},"$",a)),l.a.createElement(y.a,{variant:"lg",style:{width:"320px",fontSize:"20px",textAlign:"center",backgroundColor:"orange",color:"white",border:"1px solid black",borderRadius:"2px",marginLeft:"30px"}},"Checkout")))}),{finalTotal:r,itemCount:c.length}))))))}}]),t}(n.Component);function I(e){localStorage.setItem("count",JSON.stringify(e))}var T=function(){var e=localStorage.getItem("count");return e<0&&I(0),e&&JSON.parse(e)}(),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={count:T||0},a.incrementCount=function(){I(T+=1),console.log("There"+a.state.count),a.setState((function(e){return{count:a.state.count+1}}))},a.decrementCount=function(){I(T-=1),0!=a.state.count&&(a.state.count<0&&a.setState((function(e){return{count:0}})),a.setState((function(e){return{count:a.state.count-1}})))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(E,{cartItemCount:this.state.count}),l.a.createElement(g.c,null,l.a.createElement(g.a,{path:"/ReactMultiPageWebsite/",exact:!0,component:function(){return l.a.createElement(v,null)}}),l.a.createElement(g.a,{path:"/ReactMultiPageWebsite/about",exact:!0,component:function(){return l.a.createElement(S,{increase:e.incrementCount})}}),l.a.createElement(g.a,{path:"/ReactMultiPageWebsite/contact",exact:!0,component:function(){return l.a.createElement(j,{decrease:e.decrementCount})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(69);c.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.f2788acc.chunk.js.map