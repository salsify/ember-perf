"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/items-list-item",["exports","ember"],function(e,t){var n=t["default"].Component;e["default"]=n.extend({tagName:"li"})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/company/building",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({emberPerf:t["default"].inject.service(),editing:!1,actions:{edit:function(){var e=this.get("emberPerf");e.measureRender(),this.set("editing",!0)}}})}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/ember-perf",["exports","ember","ember-perf/services/ember-perf","ember-perf/ext/router","ember-perf/ext/route","dummy/config/environment","ember-perf/instance-initializers/ember-perf"],function(e,t,n,a,r,i,l){function o(e,t){var a=e.injectionFactories;t.register("config:ember-perf",e,{instantiate:!1}),t.register("service:ember-perf",n["default"]),t.inject("service:ember-perf","defaults","config:ember-perf"),a.forEach(function(e){t.inject(e,"perfService","service:ember-perf")})}function d(){var e=arguments[1]||arguments[0],t=e.__container__,n=i["default"].emberPerf;o(n,e),m.reopen(r["default"]),u.reopen(a["default"]),e.instanceInitializer||l["default"].initialize(t)}e.initialize=d;var u=t["default"].Router,m=t["default"].Route;t["default"].Application.instanceInitializer&&t["default"].Application.instanceInitializer(l["default"]),e["default"]={name:"ember-perf-setup",initialize:d}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/models/building",["exports","ember-data"],function(e,t){var n=t["default"].belongsTo,a=t["default"].hasMany,r=t["default"].attr;e["default"]=t["default"].Model.extend({name:r("string"),company:n("company"),floors:a("floor")})}),define("dummy/models/company",["exports","ember-data"],function(e,t){var n=t["default"].hasMany,a=t["default"].attr;e["default"]=t["default"].Model.extend({name:a("string"),buildings:n("building")})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("companies",function(){this.route("info")}),this.route("company",{path:"company/:id"},function(){this.route("buildings",{path:"buildings"}),this.route("building",{path:"building/:building_id"},function(){this.route("floors"),this.route("floor",{path:"floor/:id"})})})}),e["default"]=a}),define("dummy/routes/base",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/routes/companies/info",["exports","dummy/routes/base"],function(e,t){e["default"]=t["default"].extend({})}),define("dummy/routes/companies",["exports","ember","dummy/utils/random-wait","dummy/utils/sample-data","dummy/routes/base"],function(e,t,n,a,r){e["default"]=r["default"].extend({model:function(){return(0,n["default"])(t["default"].testing?4:3e3,t["default"].testing?2:300).then(function(){return t["default"].A(a.COMPANIES)})}})}),define("dummy/routes/company/building",["exports","ember","dummy/utils/random-wait","dummy/utils/sample-data"],function(e,t,n,a){e["default"]=t["default"].Route.extend({model:function(e){var r=t["default"].get(this.modelFor("company"),"buildings");return r.indexOf(parseInt(e.building_id,10))<0?null:(0,n["default"])(t["default"].testing?4:2400,t["default"].testing?2:300).then(function(){return a.BUILDINGS.filter(function(t){return""+t.id===e.building_id})[0]})},setupController:function(e){this._super.apply(this,arguments),e.set("editing",!1)}})}),define("dummy/routes/company/buildings",["exports","ember","dummy/utils/random-wait","dummy/utils/sample-data"],function(e,t,n,a){e["default"]=t["default"].Route.extend({model:function(){var e=t["default"].get(this.modelFor("company"),"buildings");return(0,n["default"])(t["default"].testing?4:2400,t["default"].testing?2:300).then(function(){return t["default"].A(a.BUILDINGS.filter(function(t){return e.indexOf(t.id)>=0}))})}})}),define("dummy/routes/company/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({redirect:function(){this.transitionTo("company.buildings")}})}),define("dummy/routes/company",["exports","ember","dummy/routes/base","dummy/utils/random-wait","dummy/utils/sample-data"],function(e,t,n,a,r){var i=t["default"].A;e["default"]=n["default"].extend({model:function(e){return(0,a["default"])(t["default"].testing?4:3e3,t["default"].testing?2:300).then(function(){var t=new i(r.COMPANIES).findBy("id",parseInt(e.id,10));return t.buildingIds=new i(t.buildings.map(function(e){return{id:e,name:"Building ("+e+")"}})),t})}})}),define("dummy/routes/index",["exports","dummy/routes/base"],function(e,t){e["default"]=t["default"].extend({redirect:function(){this.transitionTo("companies")}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/ember-perf",["exports","ember-perf/services/ember-perf"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:10}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("Ember.js Performance Instrumentation");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/companies/info",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:1,column:13}},moduleName:"dummy/templates/companies/info.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h4"),a=e.createTextNode("Info");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/companies",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:2,column:2},end:{line:4,column:2}},moduleName:"dummy/templates/companies.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","items-list-item",[],["class","company","content",["subexpr","@mut",[["get","company",["loc",[null,[3,47],[3,54]]]]],[],[]],"itemRoute","company"],["loc",[null,[3,4],[3,76]]]]],locals:["company"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"dummy/templates/companies.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("ul");e.setAttribute(n,"class","companies-list");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[0]),1,1),a[1]=e.createMorphAt(t,2,2,n),a},statements:[["block","each",[["get","model",["loc",[null,[2,10],[2,15]]]]],[],0,null,["loc",[null,[2,2],[4,11]]]],["content","outlet",["loc",[null,[7,0],[7,10]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/company/building",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:2,column:0},end:{line:2,column:83}},moduleName:"dummy/templates/company/building.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("< Back to company");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/company/building.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("h4"),a=e.createTextNode("Building: ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(e.childAt(t,[2]),1,1),e.insertBoundary(t,0),a},statements:[["block","link-to",["company",["get","content.companyId",["loc",[null,[2,40],[2,57]]]]],["class","back-to-company"],0,null,["loc",[null,[2,0],[2,83]]]],["content","content.name",["loc",[null,[3,14],[3,30]]]]],locals:[],templates:[e]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:4,column:0},end:{line:6,column:0}},moduleName:"dummy/templates/company/building.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("Building not found");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:8,column:0},end:{line:10,column:0}},moduleName:"dummy/templates/company/building.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","input",[],["value",["subexpr","@mut",[["get","content.name",["loc",[null,[9,18],[9,30]]]]],[],[]]],["loc",[null,[9,4],[9,32]]]]],locals:[],templates:[]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:10,column:0},end:{line:12,column:0}},moduleName:"dummy/templates/company/building.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"class","btn-edit");var a=e.createTextNode("Show more");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(1);return r[0]=e.createElementMorph(a),r},statements:[["element","action",["edit"],[],["loc",[null,[11,10],[11,27]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:13,column:0}},moduleName:"dummy/templates/company/building.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","if",[["get","content",["loc",[null,[1,6],[1,13]]]]],[],0,1,["loc",[null,[1,0],[6,7]]]],["block","if",[["get","editing",["loc",[null,[8,6],[8,13]]]]],[],2,3,["loc",[null,[8,0],[12,7]]]]],locals:[],templates:[e,t,n,a]}}())}),define("dummy/templates/company/buildings",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:3,column:2},end:{line:5,column:2}},moduleName:"dummy/templates/company/buildings.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","items-list-item",[],["content",["subexpr","@mut",[["get","building",["loc",[null,[4,30],[4,38]]]]],[],[]],"class","building","itemRoute","company.building"],["loc",[null,[4,4],[4,86]]]]],locals:["building"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"dummy/templates/company/buildings.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3"),a=e.createTextNode("Buildings");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("ul");e.setAttribute(n,"class","buildings-list");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[2]),1,1),a[1]=e.createMorphAt(t,4,4,n),a},statements:[["block","each",[["get","content",["loc",[null,[3,10],[3,17]]]]],[],0,null,["loc",[null,[3,2],[5,11]]]],["content","outlet",["loc",[null,[9,0],[9,10]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/company/loading",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:12}},moduleName:"dummy/templates/company/loading.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h4"),a=e.createTextNode("Company data is loading...");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["content","my-thing",["loc",[null,[2,0],[2,12]]]]],locals:[],templates:[]}}())}),define("dummy/templates/company",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:2,column:2},end:{line:4,column:2}},moduleName:"dummy/templates/company.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    < Back to Companies\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:9,column:4},end:{line:11,column:4}},moduleName:"dummy/templates/company.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","items-list-item",[],["content",["subexpr","@mut",[["get","buildingId",["loc",[null,[10,32],[10,42]]]]],[],[]],"class","building-id","itemRoute","company.building"],["loc",[null,[10,6],[10,93]]]]],locals:["buildingId"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:16,column:0}},moduleName:"dummy/templates/company.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("p"),a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("ul");e.setAttribute(a,"class","buildings-list horiz-list");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(4);return a[0]=e.createMorphAt(e.childAt(t,[0]),1,1),a[1]=e.createMorphAt(e.childAt(t,[2]),0,0),a[2]=e.createMorphAt(e.childAt(t,[4,1]),1,1),a[3]=e.createMorphAt(t,6,6,n),a},statements:[["block","link-to",["companies.info"],[],0,null,["loc",[null,[2,2],[4,14]]]],["content","content.name",["loc",[null,[6,4],[6,20]]]],["block","each",[["get","content.buildingIds",["loc",[null,[9,12],[9,31]]]]],[],1,null,["loc",[null,[9,4],[11,13]]]],["content","outlet",["loc",[null,[15,0],[15,10]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/components/items-list-item",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"dummy/templates/components/items-list-item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","content.name",["loc",[null,[2,2],[2,18]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/components/items-list-item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","link-to",[["get","itemRoute",["loc",[null,[1,11],[1,20]]]],["get","content.id",["loc",[null,[1,21],[1,31]]]]],[],0,null,["loc",[null,[1,0],[3,12]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/components/my-thing",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/my-thing.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("This is a useless component\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/loading",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:12}},moduleName:"dummy/templates/loading.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3"),a=e.createTextNode("loading...");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["content","my-thing",["loc",[null,[2,0],[2,12]]]]],locals:[],templates:[]}}())}),define("dummy/utils/performance",["exports","ember-perf/utils/performance-now"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/utils/random-wait",["exports","ember"],function(e,t){e["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?2e3:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1];return new t["default"].RSVP.Promise(function(t){var a=n+Math.random()*(e-n);setTimeout(t,a)})}}),define("dummy/utils/sample-data",["exports"],function(e){function t(e){var t={name:e,id:a.building++,companyId:this.company.id};r.push(t),this.company.buildings.push(t.id)}function n(e,n){var r={name:e,buildings:[],id:a.company++};i.push(r);var l={company:r};l.building=t.bind(l),n.apply(l)}var a={company:1,building:1},r=[];e.BUILDINGS=r;var i=[];e.COMPANIES=i,n("Yahoo",function(){this.building("Yahoo - Building A"),this.building("Yahoo - Building B"),this.building("Yahoo - Building C"),this.building("Yahoo - Building D")}),n("Flurry",function(){this.building("Flurry HQ")}),n("Tumblr",function(){this.building("Tumblr HQ")})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({LOG_TRANSITIONS:!0,LOG_TRANSITIONS_INTERNAL:!0,name:"ember-perf",version:"0.1.2+7f75bf6f"});