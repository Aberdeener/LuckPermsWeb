(function(e){function t(t){for(var o,i,a=t[0],d=t[1],c=t[2],u=0,p=[];u<a.length;u++)i=a[u],r[i]&&p.push(r[i][0]),r[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);l&&l(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],o=!0,a=1;a<s.length;a++){var d=s[a];0!==r[d]&&(o=!1)}o&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var o={},r={app:0},n=[];function i(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=o,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=d;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},3773:function(e,t,s){},3953:function(e,t,s){},"455f":function(e,t,s){"use strict";var o=s("3953"),r=s.n(o);r.a},5197:function(e,t,s){"use strict";var o=s("ea97"),r=s.n(o);r.a},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var o=s("2b0e"),r=s("2f62"),n=s("ecee"),i=s("ad3d"),a=s("c074"),d=(s("ac6a"),s("bc3a")),c=s.n(d);o["a"].use(r["a"]);var l=new r["a"].Store({state:{editor:{}},getters:{sessionSet:function(e){return e.editor.sessionList.map(function(t){return e.editor.sessions[t]})},currentSession:function(e){return e.editor.sessions[e.editor.currentSession]},currentNodes:function(e){return e.editor.nodes.filter(function(t){return t.sessionId===e.editor.currentSession})}},mutations:{initEditorData:function(e){e.editor={sessions:{},sessionList:[],nodes:[],knownPermissions:[],currentSession:null,modal:{type:null,object:null},errors:{load:!1}}},setKnownPermissions:function(e,t){e.editor.knownPermissions=t},addEditorSession:function(e,t){e.editor.sessions[t.id]=t,e.editor.sessionList.push(t.id)},addEditorNode:function(e,t){e.editor.nodes.push(t)},setCurrentSession:function(e,t){e.editor.currentSession=t},setModal:function(e,t){var s=t.type,o=t.object;e.editor.modal.type=s||null,e.editor.modal.object=o||null},toggleNodeValue:function(e,t){t.value=!t.value},setLoadError:function(e){e.editor.errors.load=!0}},actions:{getEditorData:function(e,t){var s=e.state,o=e.commit;o("initEditorData"),c.a.get("https://bytebin.lucko.me/".concat(t)).then(function(e){e.data.sessions.forEach(function(e,t){e.id=t+1,e.nodes.forEach(function(t,r){t.id=s.editor.nodes.length+r+1,t.sessionId=e.id,o("addEditorNode",t)}),o("addEditorSession",{id:e.id,who:e.who})}),o("setKnownPermissions",e.data.knownPermissions)}).catch(function(){console.error("Error loading data from bytebin - session ID: ".concat(t)),o("setLoadError")})},changeCurrentSession:function(e,t){var s=e.commit;s("setCurrentSession",t)},addNewGroup:function(e,t){var s=e.state;e.commit,s.editor.sessionList.length}}}),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1),s("footer",[s("div",{staticClass:"footer"},[s("a",{staticClass:"github-corner",attrs:{href:"https://github.com/lucko/LuckPermsWeb"}},[s("svg",{attrs:{width:"60",height:"60",viewBox:"0 0 250 250"}},[s("path",{attrs:{d:"M0 0l115 115h15l12 27 108 108v-250z"}}),s("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3 109c-14.5-9.3-9.3-19.4-9.3-19.4 3-6.9 1.5-11 1.5-11-1.3-6.6 2.9-2.3 2.9-2.3 3.9 4.6 2.1 11 2.1 11-2.6 10.3 5.1 14.6 8.9 15.9"}}),s("path",{staticClass:"octo-body",attrs:{d:"M115 115c-.1.1 3.7 1.5 4.8.4l13.9-13.8c3.2-2.4 6.2-3.2 8.5-3-8.4-10.6-14.7-24.2 1.6-40.6 4.7-4.6 10.2-6.8 15.9-7 .6-1.6 3.5-7.4 11.7-10.9 0 0 4.7 2.4 7.4 16.1 4.3 2.4 8.4 5.6 12.1 9.2 3.6 3.6 6.8 7.8 9.2 12.2 13.7 2.6 16.2 7.3 16.2 7.3-3.6 8.2-9.4 11.1-10.9 11.7-.3 5.8-2.4 11.2-7.1 15.9-16.4 16.4-30 10-40.6 1.6.2 2.8-1 6.8-5 10.8l-11.7 11.6c-1.2 1.2.6 5.4.8 5.3z"}})])]),s("ul",[e._m(0),s("li",[s("a",{attrs:{href:"https://github.com/lucko/LuckPermsWeb/blob/master/LICENSE.txt",target:"_blank"}},[e._v("\n          Copyright © 2017-"+e._s((new Date).getFullYear().toString())+" LuckPerms contributors\n          ")])])])])])],1)},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("a",{attrs:{href:"https://github.com/lucko",target:"_blank"}},[e._v("lucko")]),e._v("\n          /\n          "),s("a",{attrs:{href:"https://github.com/lucko/LuckPermsWeb",target:"_blank"}},[e._v("LuckPermsWeb")])])}],m=(s("5c0b"),s("2877")),f={},v=Object(m["a"])(f,u,p,!1,null,null,null),h=v.exports,g=s("8c4f"),_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},w=[],x={name:"Home"},b=x,y=Object(m["a"])(b,_,w,!1,null,null,null),N=y.exports,C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{staticClass:"editor"},[e.sessionId?o("div",{staticClass:"editor-container"},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[e.sessions.length?o("div",{key:e.sessionId,staticClass:"editor-wrap"},[o("nav",[e.groups.length?o("div",{staticClass:"groups"},[o("h2",[e._v("\n              Groups\n              "),o("font-awesome",{attrs:{icon:"plus-circle"},on:{click:e.createGroup}})],1),o("ul",e._l(e.groups,function(t){return o("li",{key:t.id,class:{active:e.currentSession==t},on:{click:function(s){return e.changeCurrentSession(t.id)}}},[e._v("\n                "+e._s(t.who.friendly)+" "),e.displayGroupName(t)?o("span",[e._v(e._s(e.displayGroupName(t)))]):e._e()])}),0)]):e._e(),e.users.length?o("div",{staticClass:"users"},[o("h2",[e._v("Users")]),o("ul",e._l(e.users,function(t){return o("li",{key:t.id,class:{active:e.currentSession==t},on:{click:function(s){return e.changeCurrentSession(t.id)}}},[o("img",{attrs:{src:"https://minotar.net/helm/"+t.who.uuid+"/100.png"}}),e._v(" "+e._s(t.who.friendly)+"\n              ")])}),0)]):e._e()]),o("div",{staticClass:"editor-main"},[o("nav",[o("div",{staticClass:"logo"},[o("img",{attrs:{alt:"LuckPerms logo",src:s("cf05")}}),e._v("\n              Web Permissions Editor\n            ")]),o("div",{staticClass:"buttons"},[o("font-awesome",{attrs:{icon:"undo"}}),o("font-awesome",{attrs:{icon:"redo"}}),o("font-awesome",{attrs:{icon:"save"}})],1)]),o("transition",{attrs:{name:"fade",mode:"in-out"}},[e.currentSession?e._e():o("div",{staticClass:"editor-no-session"},[o("h1",[e._v("Choose a group or user from the side bar")])])]),o("transition",{attrs:{name:"fade",mode:"out-in"}},[e.currentSession?o("div",{key:"session_"+e.currentSession.who.id,staticClass:"editor-session"},[o("Header",{attrs:{session:e.currentSession,sessionData:e.currentSessionData}}),o("Meta",{attrs:{session:e.currentSession,sessionData:e.currentSessionData}}),o("NodeList",{attrs:{nodes:e.currentNodes}})],1):e._e()])],1)]):o("div",{key:"loading",staticClass:"editor-intro"},[o("div",[o("img",{attrs:{alt:"LuckPerms logo",src:s("cf05")}}),o("div",{staticClass:"text"},[o("h1",[e._v("LuckPerms")]),o("p",[e._v("Web Permissions Editor")]),e.errors.load?o("div",{staticClass:"error"},[o("p",[o("strong",[e._v("There was an error loading the data.")]),e._v(" Either the URL was copied wrong or the session has expired.")]),o("p",[e._v("Please generate another editor session with "),o("code",[e._v("/lp editor")]),e._v(".")])]):o("p",[o("font-awesome",{attrs:{icon:"asterisk",spin:!0}}),e._v("\n              Loading data...\n            ")],1)])])])])],1):o("div",{staticClass:"editor-intro"},[e._m(0)]),o("transition",{attrs:{name:"fade"}},[e.modal.type?o("Modal",{attrs:{modal:e.modal}}):e._e()],1)],1)},k=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{attrs:{alt:"LuckPerms logo",src:s("cf05")}}),o("div",{staticClass:"text"},[o("h1",[e._v("LuckPerms")]),o("p",[e._v("Web Permissions Editor")]),o("p",[e._v("To start a new editor session, use one of the following commands:")]),o("ul",[o("li",[o("code",[e._v("/lp editor")])]),o("li",[o("code",[e._v("/lp user <user> editor")])]),o("li",[o("code",[e._v("/lp group <group> editor")])])])])])}],S=(s("28a5"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editor-header"},[s("h1",[s("small",[e._v(e._s(e.sessionData.type)+":")]),s("code",[e._v(e._s(e.session.who.friendly))]),"group"==e.sessionData.type&&e.displayGroupName(e.session)?s("span",[e._v(e._s(e.displayGroupName(e.session)))]):e._e(),"user"==e.sessionData.type?s("img",{attrs:{src:"https://minotar.net/helm/"+e.session.who.uuid+"/100.png"}}):e._e()])])}),P=[],O={name:"Header",props:{session:Object,sessionData:Object},methods:{displayGroupName:function(e){var t=e.who.friendly,s=e.who.id.split("/").pop();return t!=s?s:null}}},E=O,$=(s("5197"),Object(m["a"])(E,S,P,!1,null,null,null)),j=$.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editor-meta"},["group"==e.sessionData.type?s("div",{staticClass:"meta-weight"},[s("strong",[e._v("Weight: ")]),s("code",[e._v(e._s(e.formatWeight(e.sessionData.weight)))])]):e._e(),e.sessionData.parents.length>0?s("div",{staticClass:"meta-parents"},[s("strong",[e._v("Parent groups:")]),s("ul",e._l(e.sessionData.parents,function(t){return s("li",{on:{click:function(s){return e.$emit("changeCurrentSession",t)}}},[s("code",[e._v(e._s(e.formatParent(t)))])])}),0)]):e._e()])},D=[],M={name:"Meta",props:{session:Object,sessionData:Object},methods:{formatWeight:function(e){return 0==e.length?"N/A":1==e.length?e[0].permission.split(".").pop():"Multiple"},formatParent:function(e){var t=e.permission.split(".").pop();return e.server||e.world||e.expiry||e.context?t+" *":t}}},G=M,W=(s("b9f5"),Object(m["a"])(G,L,D,!1,null,null,null)),I=W.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"node-list"},[s("h2",[e._v("Permission nodes "),s("span",[e._v("("+e._s(e.nodes.length)+")")])]),s("div",{staticClass:"node-list-header"},[s("span",{class:{active:"permission"==e.sort.method},on:{click:function(t){return e.changeSort("permission")}}},[e._v("\n      Permission\n      "),"permission"==e.sort.method?s("font-awesome",{class:{reverse:!e.sort.desc},attrs:{icon:"chevron-circle-down"}}):e._e()],1),s("span",{class:{active:"value"==e.sort.method},on:{click:function(t){return e.changeSort("value")}}},[e._v("\n      Value\n      "),"value"==e.sort.method?s("font-awesome",{class:{reverse:!e.sort.desc},attrs:{icon:"chevron-circle-down"}}):e._e()],1),s("span",{class:{active:"expiry"==e.sort.method},on:{click:function(t){return e.changeSort("expiry")}}},[e._v("\n      Expiry\n      "),"expiry"==e.sort.method?s("font-awesome",{class:{reverse:!e.sort.desc},attrs:{icon:"chevron-circle-down"}}):e._e()],1),s("span",{class:{active:"server"==e.sort.method},on:{click:function(t){return e.changeSort("server")}}},[e._v("\n      Server\n      "),"server"==e.sort.method?s("font-awesome",{class:{reverse:!e.sort.desc},attrs:{icon:"chevron-circle-down"}}):e._e()],1),s("span",{class:{active:"world"==e.sort.method},on:{click:function(t){return e.changeSort("world")}}},[e._v("\n      World\n      "),"world"==e.sort.method?s("font-awesome",{class:{reverse:!e.sort.desc},attrs:{icon:"chevron-circle-down"}}):e._e()],1),s("span",{class:{active:"contexts"==e.sort.method},on:{click:function(t){return e.changeSort("contexts")}}},[e._v("\n      Contexts\n      "),"contexts"==e.sort.method?s("font-awesome",{class:{reverse:!e.sort.desc},attrs:{icon:"chevron-circle-down"}}):e._e()],1)]),s("ul",e._l(e.sortedNodes,function(e,t){return s("Node",{key:"node_"+e.id,attrs:{node:e}})}),1),s("div",{staticClass:"add-node"},[e.addNode.list&&e.sortedKnownPermissions?s("ul",{staticClass:"known-permissions"},e._l(e.sortedKnownPermissions,function(t,o){return s("li",{key:o+"_"+t,on:{click:function(s){e.addNode.permission=t,e.addNode.list=!1}}},[e._v(e._s(t))])}),0):e._e(),s("div",{staticClass:"row"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"permission"}},[e._v("Add permission")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.addNode.permission,expression:"addNode.permission"}],attrs:{type:"text",id:"permission",name:"permission"},domProps:{value:e.addNode.permission},on:{focus:function(t){e.addNode.list=!0},input:function(t){t.target.composing||e.$set(e.addNode,"permission",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"value"}},[e._v("Value")]),s("code",{class:{true:e.addNode.value},on:{click:function(t){e.addNode.value=!e.addNode.value}}},[e._v(e._s(e.addNode.value))])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"expiry"}},[e._v("Expiry")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.addNode.expiry,expression:"addNode.expiry"}],attrs:{type:"text",id:"expiry",name:"expiry",placeholder:"never"},domProps:{value:e.addNode.expiry},on:{input:function(t){t.target.composing||e.$set(e.addNode,"expiry",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"server"}},[e._v("Server")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.addNode.server,expression:"addNode.server"}],attrs:{type:"text",id:"server",name:"server",placeholder:"global"},domProps:{value:e.addNode.server},on:{input:function(t){t.target.composing||e.$set(e.addNode,"server",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"world"}},[e._v("World")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.addNode.world,expression:"addNode.world"}],attrs:{type:"text",id:"world",name:"world",placeholder:"global"},domProps:{value:e.addNode.world},on:{input:function(t){t.target.composing||e.$set(e.addNode,"world",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"contexts"}},[e._v("Contexts")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.addNode.contexts,expression:"addNode.contexts"}],attrs:{type:"text",id:"contexts",name:"contexts",placeholder:"none"},domProps:{value:e.addNode.contexts},on:{input:function(t){t.target.composing||e.$set(e.addNode,"contexts",t.target.value)}}})])])])])},A=[],H=(s("55dd"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"permission-node"},[s("div",{staticClass:"permission"},[s("code",[e._v(e._s(e.node.permission))])]),s("div",{staticClass:"value",on:{click:function(t){return e.toggleValue(e.node)}}},[s("code",{class:{true:e.node.value}},[e._v(e._s(e.node.value))])]),s("div",{staticClass:"expiry"},[e.node.expiry?s("code",[e._v(e._s(e._f("moment")(e.node.expiry,"from")))]):s("code",{attrs:{disabled:""}},[e._v("never")])]),s("div",{staticClass:"server"},[e.node.server?s("code",[e._v(e._s(e.node.server))]):s("code",{attrs:{disabled:""}},[e._v("global")])]),s("div",{staticClass:"world"},[e.node.world?s("code",[e._v(e._s(e.node.world))]):s("code",{attrs:{disabled:""}},[e._v("global")])]),s("div",{staticClass:"contexts"},[e.node.contexts?s("code",[e._v(e._s(e.node.contexts))]):s("code",{attrs:{disabled:""}},[e._v("none")])])])}),K=[],T={name:"Node",props:{node:Object},computed:{session:function(){return this.$store.getters.currentSession}},methods:{toggleValue:function(e){this.$store.commit("toggleNodeValue",e)}}},z=T,J=(s("8475"),Object(m["a"])(z,H,K,!1,null,null,null)),U=J.exports,Y=s("9b22"),B={name:"NodeList",components:{Node:U},props:{nodes:Array},data:function(){return{sort:{method:null,desc:!0},addNode:{permission:"",list:!1,value:!0,expiry:null,server:null,world:null,contexts:null}}},computed:{sortedNodes:function(){var e=Y(this.nodes,[this.sort.method]);return this.sort.desc?e:e.reverse()},knownPermissions:function(){return this.$store.state.editor.knownPermissions},sortedKnownPermissions:function(){var e=this;return""!=this.addNode.permission?this.knownPermissions.filter(function(t){return t.indexOf(e.addNode.permission)>=0}):null}},methods:{changeSort:function(e){this.sort.method==e?this.sort.desc=!this.sort.desc:this.sort.desc=!0,this.sort.method=e}}},F=B,R=(s("71b1"),Object(m["a"])(F,V,A,!1,null,null,null)),q=R.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal",on:{click:e.closeModal}},[s("div",{staticClass:"modal-box",on:{click:function(e){e.stopPropagation()}}},[s("div",{staticClass:"close",on:{click:e.closeModal}},[s("font-awesome",{attrs:{icon:"times-circle"}})],1),"createGroup"==e.modal.type?s("CreateGroup",{attrs:{groups:e.modal.object}}):e._e()],1)])},X=[],Z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Create a group")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"groupName"}},[e._v("Group name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.groupName,expression:"groupName"}],attrs:{type:"text",id:"groupName",autofocus:""},domProps:{value:e.groupName},on:{input:function(t){t.target.composing||(e.groupName=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"displayName"}},[e._v("Display name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.displayName,expression:"displayName"}],attrs:{type:"text",id:"displayName"},domProps:{value:e.displayName},on:{input:function(t){t.target.composing||(e.displayName=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"parent"}},[e._v("Parent")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.parent,expression:"parent"}],attrs:{name:"parent",id:"parent"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.parent=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"0"}},[e._v("None")]),e._l(e.groups,function(t){return s("option",{key:t.id,domProps:{value:t.id}},[e._v("\n            "+e._s(t.who.friendly)+"\n          ")])})],2)])]),s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"weight"}},[e._v("Weight")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],attrs:{type:"number",id:"weight"},domProps:{value:e.weight},on:{input:function(t){t.target.composing||(e.weight=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"prefix"}},[e._v("Prefix")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.prefix,expression:"prefix"}],attrs:{type:"text",id:"prefix"},domProps:{value:e.prefix},on:{input:function(t){t.target.composing||(e.prefix=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"suffix"}},[e._v("Suffix")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.suffix,expression:"suffix"}],attrs:{type:"text",id:"suffix"},domProps:{value:e.suffix},on:{input:function(t){t.target.composing||(e.suffix=t.target.value)}}})])])]),s("button",{attrs:{type:"button"}},[s("font-awesome",{attrs:{icon:"plus-circle"}}),e._v("\n    Add group\n  ")],1)])},ee=[],te={name:"CreateGroup",data:function(){return{groupName:"",displayName:"",weight:0,parent:0,prefix:"",suffix:""}},props:{groups:Array},computed:{},methods:{}},se=te,oe=Object(m["a"])(se,Z,ee,!1,null,null,null),re=oe.exports,ne={name:"Modal",components:{CreateGroup:re},props:{modal:Object},computed:{sortedNodes:function(){}},methods:{closeModal:function(){this.$store.commit("setModal",{type:null,object:null})}}},ie=ne,ae=(s("455f"),Object(m["a"])(ie,Q,X,!1,null,null,null)),de=ae.exports,ce={name:"Editor",components:{Header:j,Meta:I,NodeList:q,Modal:de},data:function(){return{sessionId:""}},computed:{sessions:function(){return this.$store.getters.sessionSet},groups:function(){return this.sessions.filter(function(e){return 0==e.who.id.indexOf("group")})},users:function(){return this.sessions.filter(function(e){return 0==e.who.id.indexOf("user")})},currentSession:function(){return this.$store.getters.currentSession||null},currentNodes:function(){return this.$store.getters.currentNodes||null},currentSessionData:function(){if(this.currentNodes.length){var e={};return 0==this.currentSession.who.id.indexOf("group")?e.type="group":0==this.currentSession.who.id.indexOf("user")?e.type="user":e.type=null,e.parents=this.currentNodes.filter(function(e){return 0==e.permission.indexOf("group")}),e.displayname=this.currentNodes.filter(function(e){return 0==e.permission.indexOf("displayname")}),e.weight=this.currentNodes.filter(function(e){return 0==e.permission.indexOf("weight")}),e.prefixes=this.currentNodes.filter(function(e){return 0==e.permission.indexOf("prefix")}),e.suffixes=this.currentNodes.filter(function(e){return 0==e.permission.indexOf("suffix")}),e.meta=this.currentNodes.filter(function(e){return 0==e.permission.indexOf("meta")}),e}return null},modal:function(){return this.$store.state.editor.modal},errors:function(){return this.$store.state.editor.errors}},created:function(){this.$route.params.id&&(this.sessionId=this.$route.params.id,this.$store.dispatch("getEditorData",this.sessionId))},methods:{changeCurrentSession:function(e){this.$store.commit("setCurrentSession",e)},displayGroupName:function(e){var t=e.who.friendly,s=e.who.id.split("/").pop();return t!=s?s:null},createGroup:function(){this.$store.commit("setModal",{type:"createGroup",object:this.groups})}}},le=ce,ue=(s("b395"),Object(m["a"])(le,C,k,!1,null,null,null)),pe=ue.exports;o["a"].use(g["a"]);var me=new g["a"]({routes:[{path:"/",name:"home",component:N},{path:"/editor",name:"editor-home",component:pe},{path:"/editor/:id",name:"editor",component:pe}]});o["a"].use(r["a"]),o["a"].config.productionTip=!1,n["c"].add(a["e"],a["g"],a["d"],a["c"],a["f"],a["b"],a["a"]),o["a"].component("font-awesome",i["a"]),o["a"].use(s("2ead")),new o["a"]({router:me,store:l,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var o=s("5e27"),r=s.n(o);r.a},"5e27":function(e,t,s){},"6f13":function(e,t,s){},"70b1":function(e,t,s){},"71b1":function(e,t,s){"use strict";var o=s("6f13"),r=s.n(o);r.a},8475:function(e,t,s){"use strict";var o=s("9225"),r=s.n(o);r.a},9225:function(e,t,s){},b395:function(e,t,s){"use strict";var o=s("70b1"),r=s.n(o);r.a},b9f5:function(e,t,s){"use strict";var o=s("3773"),r=s.n(o);r.a},cf05:function(e,t,s){e.exports=s.p+"img/logo.bd59d771.png"},ea97:function(e,t,s){}});
//# sourceMappingURL=app.b18d3583.js.map