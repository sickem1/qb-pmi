(function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],d=0,v=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}]},[n("v-container",{staticStyle:{padding:"7%","max-height":"100vh"},attrs:{fluid:""}},[n("v-system-bar",{attrs:{color:"primary",dark:""}},[n("v-spacer"),t.duty?n("v-icon",{attrs:{color:"green"}},[t._v("mdi-checkbox-blank-circle")]):n("v-icon",{attrs:{color:"red"}},[t._v("mdi-checkbox-blank-circle")]),t.duty?n("span",{staticClass:"pr-1"},[t._v("On Duty")]):n("span",{staticClass:"pr-1"},[t._v("Off Duty")]),n("span",{staticClass:"pr-1"},[t._v("#"+t._s(t.identifier))]),n("span",[t._v(t._s(t.time))])],1),n("v-card",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"calc(100vh - 39%)"},attrs:{tile:""}},[n("v-row",{class:t.layout},[n("v-col",{staticClass:"ma-0 pl-3 pr-10",staticStyle:{"background-color":"#2a2a2a"},attrs:{cols:"auto"}},[n("NavBar",{staticStyle:{position:"fixed"}})],1),n("v-col",{class:t.layout},[n("router-view",{staticStyle:{"background-color":"#2a2a2a"}})],1)],1)],1)],1)],1)},i=[],o=n("5530"),c=n("1da1"),s=(n("96cf"),n("d3b7"),{send:function(t){var e=arguments;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.length>1&&void 0!==e[1]?e[1]:{},n.next=3,fetch("http://nag-mdt/".concat(t),{method:"post",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},emulate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;window.dispatchEvent(new MessageEvent("message",{data:{type:t,data:e}}))}}),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{dark:"",elevation:"0"}},[n("v-navigation-drawer",{attrs:{"mini-variant":"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",{staticClass:"px-2"},[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://i.imgur.com/LU4u0b5.jpg"}})],1),n("v-list-item-title",[t._v("John Leider")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[n("v-icon",[t._v("mdi-chevron-left")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(n){return t.pageTo(e.link)}}},[n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on,i=a.attrs;return[n("v-list-item-icon",t._g(t._b({},"v-list-item-icon",i,!1),r),[n("v-icon",{attrs:{color:t.activeItemColor(e.link)}},[t._v(t._s(e.icon))])],1)]}}],null,!0)},[n("span",[t._v(t._s(e.title))])]),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},u=[],d={data:function(){return{drawer:!0,items:[{title:"Duty",icon:"mdi-police-badge",link:"/"},{title:"Person",icon:"mdi-account",link:"/person"},{title:"Vehicles",icon:"mdi-car",link:"/vehicles"},{title:"Warrants",icon:"mdi-alarm-light",link:"/warrants"},{title:"Firearms",icon:"mdi-pistol",link:"/firearms"},{title:"Impound",icon:"mdi-lock",link:"/impound"}],mini:!0}},methods:{pageTo:function(t){this.$router.push(t).catch((function(){}))},activeItemColor:function(t){return t==this.currentRouteName?"primary":"white"}},computed:{currentRouteName:function(){return this.$route.path}}},v=d,f=n("2877"),p=n("6544"),m=n.n(p),h=n("8336"),y=n("b0af"),g=n("ce7e"),b=n("132d"),_=n("adda"),w=n("8860"),V=n("da13"),k=n("8270"),x=n("5d23"),O=n("34c3"),j=n("f774"),C=n("3a2f"),I=Object(f["a"])(v,l,u,!1,null,null,null),S=I.exports;m()(I,{VBtn:h["a"],VCard:y["a"],VDivider:g["a"],VIcon:b["a"],VImg:_["a"],VList:w["a"],VListItem:V["a"],VListItemAvatar:k["a"],VListItemContent:x["a"],VListItemIcon:O["a"],VListItemTitle:x["b"],VNavigationDrawer:j["a"],VTooltip:C["a"]});var D=n("2f62"),P={name:"App",components:{NavBar:S},data:function(){return{layout:"pa-0 ma-0",display:!1}},methods:Object(o["a"])(Object(o["a"])({},Object(D["b"])(["setMdtData","updateDuty","updatePvehicles","recordRequest"])),{},{closeMDT:function(){s.send("close"),this.display=!1}}),computed:Object(o["a"])(Object(o["a"])({},Object(D["c"])(["identifier","duty"])),{},{time:function(){return(new Date).toLocaleString("en-GB").substring(11,17)}}),destroyed:function(){window.removeEventListener("message",this.listener)},mounted:function(){var t=this;this.$vuetify.theme.themes.light={primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},document.onreadystatechange=function(){"complete"==document.readyState&&window.addEventListener("message",(function(e){var n=e.data;n.open&&(t.display=!0,t.setMdtData(n)),n.close&&(t.display=!1),"dutyUpdate"==n.type&&t.updateDuty(n),"pvehiclesUpdate"==n.type&&t.updatePvehicles(n),"recordRequestResult"==n.type&&t.recordRequest(n)}))}}},F=P,R=(n("034f"),n("7496")),T=n("62ad"),E=n("a523"),$=n("0fd9"),L=n("2fa4"),N=n("afd9"),M=Object(f["a"])(F,r,i,!1,null,null,null),z=M.exports;m()(M,{VApp:R["a"],VCard:y["a"],VCol:T["a"],VContainer:E["a"],VIcon:b["a"],VRow:$["a"],VSpacer:L["a"],VSystemBar:N["a"]});var B=n("8c4f"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"min-height":"71vh"},attrs:{fluid:""}},[n("v-row",[n("v-col",[n("v-card",{staticClass:"elevation-1 ml-4 mr-4",attrs:{dark:""}},[n("v-card-title",[t._v(" Officers "),n("v-spacer"),n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:t.toggleDuty}},[t._v(" On/Off Duty ")])],1),n("v-data-table",{attrs:{headers:t.officerHeaders,items:t.officers,"items-per-page":10,"sort-by":"onDuty",dark:"","sort-desc":""},scopedSlots:t._u([{key:"item.onDuty",fn:function(e){var a=e.item;return[a.onDuty?n("v-icon",{attrs:{color:"green"}},[t._v("mdi-checkbox-blank-circle")]):n("v-icon",{attrs:{color:"red"}},[t._v("mdi-checkbox-blank-circle")])]}}],null,!0)})],1)],1),n("v-col",[n("v-card",{staticClass:"elevation-1 ml-4 mr-4",attrs:{dark:""}},[n("v-card-title",[t._v(" Vehicles in service "),n("v-spacer")],1),n("v-data-table",{attrs:{headers:t.pvehicleHeaders,items:t.pvehicles,"single-expand":!1,expanded:t.expanded,"item-key":"plate","show-expand":"",dark:""},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"expanded-item",fn:function(e){var a=e.headers,r=e.item;return[n("td",{staticStyle:{"background-color":"#333333"},attrs:{colspan:a.length}},[n("v-simple-table",{staticStyle:{"background-color":"#333333"},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Duty")]),n("th",{staticClass:"text-left"},[t._v("Callsign")]),n("th",{staticClass:"text-left"},[t._v("Name")])])]),n("tbody",t._l(r.occupants,(function(e){return n("tr",{key:e},[n("td",[t.officerFromId(e).onDuty?n("v-icon",{attrs:{color:"green"}},[t._v("mdi-checkbox-blank-circle")]):n("v-icon",{attrs:{color:"red"}},[t._v("mdi-checkbox-blank-circle")])],1),n("td",[t._v(t._s(t.officerFromId(e).callsign))]),n("td",[t._v(" "+t._s(t.officerFromId(e).firstname+" "+t.officerFromId(e).lastname)+" ")])])})),0)]},proxy:!0}],null,!0)})],1)]}},{key:"item.actions",fn:function(e){var a=e.item;return[t.inVehicle(a)?n("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(e){return t.toggleInVehicle(a,!1)}}},[n("v-icon",[t._v("mdi-car-arrow-right")])],1):n("v-btn",{attrs:{icon:"",color:"green"},on:{click:function(e){return t.toggleInVehicle(a,!0)}}},[n("v-icon",[t._v("mdi-car-arrow-left")])],1),n("v-btn",{attrs:{icon:"",color:"orange"},on:{click:function(e){return t.storeVehicle(a)}}},[n("v-icon",[t._v("mdi-garage-alert")])],1)]}}],null,!0)})],1)],1)],1)],1)},A=[],H=n("b85c"),J={name:"Duty",data:function(){return{officerHeaders:[{text:"Duty",align:"start",value:"onDuty"},{text:"Callsign",value:"callsign"},{text:"First Name",value:"firstname"},{text:"Last Name",value:"lastname"},{text:"Phone",value:"phone"},{text:"ID",value:"citizenid"}],pvehicleHeaders:[{text:"Plate",align:"start",value:"plate"},{text:"Vehicle",value:"model"},{text:"Owner Name",value:"ownerName"},{text:"Owner Callsign",value:"ownerCallSign"},{text:"",value:"actions",align:"end",sortable:!1},{text:"",value:"data-table-expand"}],expanded:[]}},computed:Object(o["a"])({},Object(D["c"])(["officers","citizenId","pvehicles"])),methods:{toggleDuty:function(){s.send("dutyToggle")},officerFromId:function(t){var e,n=Object(H["a"])(this.officers);try{for(n.s();!(e=n.n()).done;){var a=e.value;if(a.citizenid==t)return a}}catch(r){n.e(r)}finally{n.f()}},inVehicle:function(t){var e,n=Object(H["a"])(t.occupants);try{for(n.s();!(e=n.n()).done;){var a=e.value;if(this.citizenId==a)return!0}}catch(r){n.e(r)}finally{n.f()}return!1},storeVehicle:function(t){s.send("storeVehicle",t.plate)},toggleInVehicle:function(t,e){t.getIn=e,s.send("toggleInVehicle",t)}},components:{}},U=J,W=n("99d9"),G=n("8fea"),K=n("1f4f"),Q=Object(f["a"])(U,q,A,!1,null,null,null),X=Q.exports;m()(Q,{VBtn:h["a"],VCard:y["a"],VCardTitle:W["a"],VCol:T["a"],VContainer:E["a"],VDataTable:G["a"],VIcon:b["a"],VRow:$["a"],VSimpleTable:K["a"],VSpacer:L["a"]});var Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"min-height":"71vh"},attrs:{fluid:""}},[n("v-row")],1)},Z=[],tt={name:"Person",data:function(){return{}},computed:{},methods:{},components:{}},et=tt,nt=Object(f["a"])(et,Y,Z,!1,null,null,null),at=nt.exports;m()(nt,{VContainer:E["a"],VRow:$["a"]});var rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"min-height":"71vh"},attrs:{fluid:""}},[n("v-row")],1)},it=[],ot={name:"Vehicles",data:function(){return{}},computed:{},methods:{},components:{}},ct=ot,st=Object(f["a"])(ct,rt,it,!1,null,null,null),lt=st.exports;m()(st,{VContainer:E["a"],VRow:$["a"]});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"min-height":"71vh"},attrs:{fluid:""}},[n("v-row")],1)},dt=[],vt={name:"Warrants",data:function(){return{}},computed:{},methods:{},components:{}},ft=vt,pt=Object(f["a"])(ft,ut,dt,!1,null,null,null),mt=pt.exports;m()(pt,{VContainer:E["a"],VRow:$["a"]});var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"min-height":"71vh"},attrs:{fluid:""}},[n("v-row")],1)},yt=[],gt={name:"Firearms",data:function(){return{}},computed:{},methods:{},components:{}},bt=gt,_t=Object(f["a"])(bt,ht,yt,!1,null,null,null),wt=_t.exports;m()(_t,{VContainer:E["a"],VRow:$["a"]});var Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"min-height":"71vh"},attrs:{fluid:""}},[n("v-row")],1)},kt=[],xt={name:"Impound",data:function(){return{}},computed:{},methods:{},components:{}},Ot=xt,jt=Object(f["a"])(Ot,Vt,kt,!1,null,null,null),Ct=jt.exports;m()(jt,{VContainer:E["a"],VRow:$["a"]}),a["a"].use(B["a"]);var It=[{path:"/",name:"Duty",component:X},{path:"/person",name:"Person",component:at},{path:"/vehicles",name:"Vehicles",component:lt},{path:"/warrants",name:"Warrants",component:mt},{path:"/firearms",name:"Firearms",component:wt},{path:"/impound",name:"Impound",component:Ct}],St=new B["a"]({routes:It}),Dt=St;n("07ac");a["a"].use(D["a"]);var Pt=new D["a"].Store({state:{officers:[],duty:!1,identifier:"0",citizenId:"",pvehicles:[],activePerson:{}},mutations:{},actions:{setMdtData:function(t,e){var n=t.state;n.officers=Object.values(e.officers),n.duty=e.duty,n.identifier=e.identifier,n.citizenId=e.citizenId,n.pvehicles=Object.values(e.pvehicles)},updateDuty:function(t,e){var n=t.state;n.citizenId==e.citId&&(n.duty=e.duty);var a,r=Object(H["a"])(n.officers);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(i.citizenid==e.citId)return void(i.onDuty=e.duty)}}catch(o){r.e(o)}finally{r.f()}},updatePvehicles:function(t,e){var n=t.state;n.pvehicles=Object.values(e.pvehicles)},recordRequest:function(t,e){var n=t.state;console.log(e),n.activePerson=e.activePerson}},modules:{}}),Ft=n("f309");a["a"].use(Ft["a"]);var Rt=new Ft["a"]({});a["a"].config.productionTip=!1;var Tt=new a["a"]({router:Dt,store:Pt,vuetify:Rt,render:function(t){return t(z)}}).$mount("#app");document.onkeyup=function(t){"Escape"==t.code&&Tt.$children[0].closeMDT()}},"85ec":function(t,e,n){}});