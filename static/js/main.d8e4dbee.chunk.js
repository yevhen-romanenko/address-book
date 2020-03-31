(this["webpackJsonpaddress-book"]=this["webpackJsonpaddress-book"]||[]).push([[0],{128:function(e,a,t){e.exports=t(161)},133:function(e,a,t){},157:function(e,a,t){},158:function(e,a,t){},161:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),i=t.n(l),o=(t(133),t(165)),c=t(46),s=t.n(c),u=t(66),d=t(70),m=t(118),p=t(117),E=t(47),h=t(38),b=t(126),g=t(15),C=t(5),y=t(19),v=t(115),f=t(114),S=["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],k="http://localhost:3000",I=t(137),w=function(){return I.get("".concat(k,"/contacts"))},A=function(e){return I.put("".concat(k,"/contacts/").concat(e.id),e)},N=function(e){return I.delete("".concat(k,"/contacts/").concat(e))},B=g.b({firstName:g.c().required("First name is required"),lastName:g.c().required("Last name is required"),address:g.c().required("Address is required"),city:g.c().required("City is required"),region:g.c().required("Region is required"),country:g.c().required("Country is required").default("Afghanistan"),postalCode:g.c().when("country",{is:"United States",then:g.c().matches(/^[0-9]{5}(?:-[0-9]{4})?$/,"Invalid postal code")}).when("country",{is:"Canada",then:g.c().matches(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,"Invalid postal code")}).required(),phone:g.c().when("country",{is:function(e){return["United States","Canada"].includes(e)},then:g.c().matches(/^[2-9]\d{2}[2-9]\d{2}\d{4}$/,"Invalid phone nunber")}).required(),email:g.c().email("Invalid email").required("Email is required"),age:g.a().required("Age is required").min(0,"Minimum age is 0").max(200,"Maximum age is 200")}),x=function(e){var a=e.edit,t=e.onSave,n=e.contact,l=e.onCancelAdd,i=e.onCancelEdit,o=e.contactsStore,c=function(){var e=Object(u.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.validate(n);case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:if(a){e.next=10;break}return e.next=8,l=n,I.post("".concat(k,"/contacts"),l);case 8:e.next=12;break;case 10:return e.next=12,A(n);case 12:return e.next=14,w();case 14:r=e.sent,o.setContacts(r.data),t();case 17:case"end":return e.stop()}var l}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{validationSchema:B,onSubmit:c,initialValues:n||{}},(function(e){var t=e.handleSubmit,n=e.handleChange,o=(e.handleBlur,e.values),c=e.touched,s=(e.isInvalid,e.errors);return r.a.createElement(C.a,{noValidate:!0,onSubmit:t},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,{as:y.a,md:"12",controlId:"firstName"},r.a.createElement(C.a.Label,null,"First name"),r.a.createElement(C.a.Control,{type:"text",name:"firstName",placeholder:"First Name",value:o.firstName||"",onChange:n,isInvalid:c.firstName&&s.firstName}),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},s.firstName)),r.a.createElement(C.a.Group,{as:y.a,md:"12",controlId:"lastName"},r.a.createElement(C.a.Label,null,"Last name"),r.a.createElement(C.a.Control,{type:"text",name:"lastName",placeholder:"Last Name",value:o.lastName||"",onChange:n,isInvalid:c.firstName&&s.lastName}),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},s.lastName)),r.a.createElement(C.a.Group,{as:y.a,md:"12",controlId:"address"},r.a.createElement(C.a.Label,null,"Address"),r.a.createElement(v.a,null,r.a.createElement(C.a.Control,{type:"text",placeholder:"Address","aria-describedby":"inputGroupPrepend",name:"address",value:o.address||"",onChange:n,isInvalid:c.address&&s.address}),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},s.address)))),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,{as:y.a,md:"12",controlId:"city"},r.a.createElement(C.a.Label,null,"City"),r.a.createElement(C.a.Control,{type:"text",placeholder:"City",name:"city",value:o.city||"",onChange:n,isInvalid:c.city&&s.city}),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},s.city)),r.a.createElement(C.a.Group,{as:y.a,md:"12",controlId:"region"},r.a.createElement(C.a.Label,null,"Region"),r.a.createElement(C.a.Control,{type:"text",placeholder:"Region",name:"region",value:o.region||"",onChange:n,isInvalid:c.region&&s.region}),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},s.region)),r.a.createElement(C.a.Group,{as:y.a,md:"12",controlId:"country"},r.a.createElement(C.a.Label,null,"Country"),r.a.createElement(f.a,{as:"select",placeholder:"Country",name:"country",onChange:n,value:o.country||"",isInvalid:c.region&&s.country},S.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},s.country)),r.a.createElement(C.a.Group,{as:y.a,md:"12",controlId:"postalCode"},r.a.createElement(C.a.Label,null,"Postal Code"),r.a.createElement(C.a.Control,{type:"text",placeholder:"Postal Code",name:"postalCode",value:o.postalCode||"",onChange:n,isInvalid:c.postalCode&&s.postalCode}),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},s.postalCode)),r.a.createElement(C.a.Group,{as:y.a,md:"12",controlId:"phone"},r.a.createElement(C.a.Label,null,"Phone"),r.a.createElement(C.a.Control,{type:"text",placeholder:"Phone",name:"phone",value:o.phone||"",onChange:n,isInvalid:c.phone&&s.phone}),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},s.phone)),r.a.createElement(C.a.Group,{as:y.a,md:"12",controlId:"email"},r.a.createElement(C.a.Label,null,"Email"),r.a.createElement(C.a.Control,{type:"text",placeholder:"Email",name:"email",value:o.email||"",onChange:n,isInvalid:c.email&&s.email}),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},s.email)),r.a.createElement(C.a.Group,{as:y.a,md:"12",controlId:"age"},r.a.createElement(C.a.Label,null,"Age"),r.a.createElement(C.a.Control,{type:"text",placeholder:"Age",name:"age",value:o.age||"",onChange:n,isInvalid:c.age&&s.age}),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},s.age))),r.a.createElement(E.a,{type:"submit",style:{marginRight:"10px"}},"Save"),a?r.a.createElement(E.a,{type:"button",onClick:i},"Cancel"):r.a.createElement(E.a,{type:"button",onClick:l},"Cancel"))})))},L=(t(157),t(127)),G=Object(L.a)((function(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(!1),c=Object(d.a)(o,2),b=c[0],g=c[1],C=Object(n.useState)(!1),y=Object(d.a)(C,2),v=y[0],f=y[1],S=Object(n.useState)({}),k=Object(d.a)(S,2),I=k[0],A=k[1],B=function(){i(!1),g(!1),G()},L=function(e){A(e),g(!0)},G=function(){var a=Object(u.a)(s.a.mark((function a(){var t;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w();case 2:t=a.sent,e.contactsStore.setContacts(t.data),f(!0);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(a);case 2:G();case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v||G()})),r.a.createElement("div",{className:"home-page"},r.a.createElement("h1",null,"Contacts"),r.a.createElement(h.a,{show:l,onHide:B},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,null,"Add Contact")),r.a.createElement(h.a.Body,null,r.a.createElement(x,{edit:!1,onSave:B.bind(void 0),onCancelAdd:function(){i(!1)},contactsStore:e.contactsStore}))),r.a.createElement(h.a,{show:b,onHide:B},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,null,"Edit Contact")),r.a.createElement(h.a.Body,null,r.a.createElement(x,{edit:!0,onSave:B.bind(void 0),contact:I,onCancelEdit:function(){g(!1)},contactsStore:e.contactsStore}))),r.a.createElement(p.a,{onClick:function(){i(!0)}},r.a.createElement(E.a,{variant:"outline-primary"},"Add Contact")),r.a.createElement("br",null),r.a.createElement(m.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"City"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Postal Code"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Edit"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,e.contactsStore.contacts.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.address),r.a.createElement("td",null,e.city),r.a.createElement("td",null,e.country),r.a.createElement("td",null,e.postalCode),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.age),r.a.createElement("td",null,r.a.createElement(E.a,{variant:"outline-primary",onClick:L.bind(void 0,e)},"Edit")),r.a.createElement("td",null,r.a.createElement(E.a,{variant:"outline-primary",onClick:M.bind(void 0,e.id)},"Delete")))})))))})),M=t(31),j=t(71),F=t(97),q=(t(158),Object(M.a)());var O=function(e){return e.contactsStore,r.a.createElement("div",{className:"App"},r.a.createElement(o.b,{history:q},r.a.createElement(j.a,{bg:"primary",expand:"lg",variant:"dark"},r.a.createElement(j.a.Brand,{href:"#home"},"Address Book App"),r.a.createElement(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(F.a,{className:"mr-auto"},r.a.createElement(F.a.Link,{href:"/"},"Home")))),r.a.createElement(o.a,{path:"/",exact:!0,component:function(e){return r.a.createElement(G,Object.assign({},e,{contactsStore:e.contactsStore}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P,z,T=t(122),R=t(123),U=t(124),H=t(125),K=(t(160),t(7)),V=new(P=function(){function e(){Object(R.a)(this,e),Object(T.a)(this,"contacts",z,this)}return Object(U.a)(e,[{key:"setContacts",value:function(e){this.contacts=e}}]),e}(),z=Object(H.a)(P.prototype,"contacts",[K.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),P);i.a.render(r.a.createElement(O,{contactsStore:V}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.d8e4dbee.chunk.js.map