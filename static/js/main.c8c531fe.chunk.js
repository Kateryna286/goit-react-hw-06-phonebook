(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),s=n(2),o=(n(24),n(25),n(26),n(32)),u=(n(27),n(1));var l=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},b=Object(s.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:l(n,a)}}),(function(e){return{onDeleteContact:function(t){return e({type:"phonebook/Delete",payload:t})}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(u.jsx)("ul",{className:"contactsList",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(u.jsxs)("li",{className:"item",children:[Object(u.jsxs)("span",{className:"itemText",children:[Object(u.jsxs)("span",{className:"itemName",children:[a,":"]}),Object(u.jsx)("span",{className:"itemNum",children:c})]}),Object(u.jsx)("button",{type:"button",onClick:function(){return n(t)},className:"button",children:"Delete"})]},t)}))})})),j=(n(29),Object(s.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e({type:"phonebook/updateFilter",payload:t.target.value})}}}))((function(e){var t=e.value,n=e.onChange;return Object(u.jsx)("div",{className:"filter",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{className:"filterText",children:"Filter"}),Object(u.jsx)("input",{type:"text",value:t,onChange:n})]})})}))),m=n(5),d=n(10),h=n(11),O=n(15),p=n(14),f=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(m.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("h2",{children:"Name"}),Object(u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("h2",{children:"Number"}),Object(u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(u.jsx)("button",{type:"submit",className:"button",children:"Add contact"})]})}}]),n}(a.Component),v=Object(s.b)(null,(function(e){return{onSubmit:function(t){return e((n=t,{type:"phonebook/Save",payload:{id:Object(o.a)(),name:n.name,number:n.number}}));var n}}}))(f);var x=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"formsContainer",children:Object(u.jsx)(v,{})}),Object(u.jsx)("div",{className:"contactsContainer",children:Object(u.jsxs)("div",{className:"contacts",children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(j,{}),Object(u.jsx)(b,{})]})})]})},C=n(13),N=n(3),g=n(6),y=n(12),k={items:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},S=Object(g.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"phonebook/Save":return Object(N.a)(Object(N.a)({},e),{},{items:[].concat(Object(C.a)(e.items),[a])});case"phonebook/Delete":return Object(N.a)(Object(N.a)({},e),{},{items:e.items.filter((function(e){return e.id!==a}))});case"phonebook/updateFilter":return Object(N.a)(Object(N.a)({},e),{},{filter:a});default:return e}}}),w=Object(g.createStore)(S,Object(y.composeWithDevTools)());i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(s.a,{store:w,children:Object(u.jsx)(x,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c8c531fe.chunk.js.map