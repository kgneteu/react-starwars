(this["webpackJsonpreact-html5"]=this["webpackJsonpreact-html5"]||[]).push([[0],{18:function(e,t,a){e.exports={sky:"starsParallax_sky__3quaq",stars:"starsParallax_stars__2-gdl",animStar:"starsParallax_animStar__l6nJ-",stars2:"starsParallax_stars2__2X1lL",stars3:"starsParallax_stars3__JVEtE"}},20:function(e,t,a){e.exports={body:"crawl_body__39vlD",fade:"crawl_fade__3NjnM",starWars:"crawl_starWars__3_hR6",crawl:"crawl_crawl__2FyMY",title:"crawl_title__3ASW0"}},25:function(e,t,a){e.exports={loader:"loader_loader__2MnQR",AnimationName:"loader_AnimationName__1AQ4v",content:"loader_content__m6zY5"}},26:function(e,t,a){e.exports={"font-star-wars":"header_font-star-wars__2uq16","font-sans":"header_font-sans__2B_rw","text-shadow":"header_text-shadow___czMq",header:"header_header__3STq7",earthSpin:"header_earthSpin__2LPis",logoTitle:"header_logoTitle__2SNkV"}},38:function(e,t,a){e.exports={flipCard:"flipCard_flipCard__3vLUo"}},45:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),s=a.n(c),i=(a(45),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))}),l=a(8),o=a(15),j=a(3),d="HERO_DATA_LOADING",u="GET_CHARACTERS",p="STARSHIP_DATA_LOADING",b="GET_STARSHIPS",h="VEHICLE_DATA_LOADING",O="GET_VEHICLES",x="SPECIES_DATA_LOADING",f="GET_SPECIES",g="PLANET_DATA_LOADING",m="GET_PLANETS",v="FILM_DATA_LOADING",y="GET_FILMS",S="GLOBAL_SUCCESS",_="GLOBAL_ERROR",w="CLEAR_TOAST",A={total:0,next:"",items:new Map,loading:!1};var T={error:!1,success:!1,msg:""};var N={total:0,next:"",items:new Map,loading:!1};var E={total:0,next:"",items:new Map,loading:!1};var D={total:0,next:"",items:new Map,loading:!1};var L={total:0,next:"",items:new Map,loading:!1};var k={total:0,next:"",items:new Map,loading:!1};var C=Object(o.combineReducers)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(j.a)(Object(j.a)({},e),t.payload);case v:return Object(j.a)(Object(j.a)({},e),{},{loading:t.payload});default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(j.a)(Object(j.a)({},e),t.payload);case d:return Object(j.a)(Object(j.a)({},e),{},{loading:t.payload});default:return e}},planets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(j.a)(Object(j.a)({},e),t.payload);case g:return Object(j.a)(Object(j.a)({},e),{},{loading:t.payload});default:return e}},species:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(j.a)(Object(j.a)({},e),t.payload);case x:return Object(j.a)(Object(j.a)({},e),{},{loading:t.payload});default:return e}},starships:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),t.payload);case p:return Object(j.a)(Object(j.a)({},e),{},{loading:t.payload});default:return e}},toasts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(j.a)(Object(j.a)({},e),{},{error:!0,msg:t.payload});case S:return Object(j.a)(Object(j.a)({},e),{},{success:!0,msg:t.payload});case w:return{};default:return e}},vehicles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(j.a)(Object(j.a)({},e),t.payload);case h:return Object(j.a)(Object(j.a)({},e),{},{loading:t.payload});default:return e}}}),I=C,M=a(37),R=a(36),P=Object(R.composeWithDevTools)(Object(o.applyMiddleware)(M.a)),G=Object(o.createStore)(I,P),F=a(1),W=function(e){var t=e.children;return Object(F.jsx)(l.a,{store:G,children:t})},H=a(18),z=a.n(H),B=function(){return Object(F.jsxs)("div",{className:z.a.sky,children:[Object(F.jsx)("div",{className:z.a.stars}),Object(F.jsx)("div",{className:z.a.stars2}),Object(F.jsx)("div",{className:z.a.stars3})]})},q=a(7),V=a(2),U=a(16),J=function(e){return{type:_,payload:e}},Q=function(){return function(e){e({type:w})}};a(53);function Y(){var e=Object(l.c)((function(e){return e.toasts})),t=Object(l.b)();return Object(r.useEffect)((function(){function a(e,t){switch(e){case"SUCCESS":U.b.success(t,{position:U.b.POSITION.BOTTOM_RIGHT,theme:"dark"});break;case"ERROR":U.b.error(t,{position:U.b.POSITION.BOTTOM_RIGHT,theme:"dark"});break;default:return!1}}e&&e.error&&(a("ERROR",e.msg?e.msg:"Error"),t(Q()));e&&e.success&&(a("SUCCESS",e.msg?e.msg:"OK!"),t(Q()))}),[e,t]),Object(F.jsx)(U.a,{})}var K=a(12),X=a(11),Z=a(25),$=a.n(Z);function ee(){return Object(F.jsx)("div",{className:$.a.loader,children:Object(F.jsx)("div",{className:$.a.content,children:"Loading..."})})}var te={birth_year:{type:String,label:"Birth year"},cargo_capacity:{type:String,label:"Cargo capacity"},characters:{type:Array,label:"Characters"},consumables:{type:String,label:"Consumables"},cost_in_credits:{type:String,label:"Cost in Credits"},climate:{type:String,label:"Climate"},crew:{type:String,label:"Crew"},diameter:{type:String,label:"Diameter"},director:{type:String,label:"Director"},episode_id:{type:String,label:"Episode Id"},eye_color:{type:String,label:"Eye color"},films:{type:Array,label:"Films"},gender:{type:String,label:"Gender"},gravity:{type:String,label:"Gravity"},hair_color:{type:String,label:"Hair color"},height:{type:String,label:"Height",suffix:"cm"},hyperdrive_rating:{type:String,label:"Hyperdrive rating"},length:{type:String,label:"Length"},max_atmosphering_speed:{type:String,label:"Max speed"},manufacturer:{type:String,label:"Manufacturer"},mass:{type:String,label:"Mass",suffix:"kg"},MGLT:{type:String,label:"MGLT"},model:{type:String,label:"Model"},opening_crawl:{type:String,label:"Opening Crawl"},orbital_period:{type:String,label:"Orbital period"},passengers:{type:String,label:"Passengers"},pilots:{type:Array,label:"Pilots"},planets:{type:Array,label:"Planets"},population:{type:String,label:"Population"},producer:{type:String,label:"Producer"},release_date:{type:String,label:"Release date"},residents:{type:Array,label:"Residents"},rotation_period:{type:String,label:"Rotation period"},skin_color:{type:String,label:"Skin color"},species:{type:Array,label:"Species"},surface_water:{type:String,label:"Surface water"},starships:{type:Array,label:"Starships"},starship_class:{type:String,label:"Starship class"},terrain:{type:String,label:"Terrain"},vehicle_class:{type:String,label:"Vehicle class"},vehicles:{type:Array,label:"Vehicles"}};var ae=a(38),re=a.n(ae),ne=function(e){var t=e.children;return Object(F.jsx)("div",{className:re.a.flipCard,children:t})};function ce(e){var t=e.src,a=e.title;return Object(F.jsx)("img",{src:t,onError:function(e){e.target.onerror=null,e.target.src="https://robohash.org/".concat(a,"?size=310x310")}})}var se=function(e){var t=e.category,a=e.item,r=function(e){var t=[];for(var a in e)void 0!==te[a]&&(te[a].type===Array?e[a].length>0&&t.push(Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:te[a].label}),Object(F.jsx)("td",{children:"Array"})]},a)):["n/a","unknown","N/A"].includes(e[a])||t.push(Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"w-1/3",children:Object(F.jsx)("div",{className:"overflow-hidden h-6",children:te[a].label})}),Object(F.jsx)("td",{children:Object(F.jsx)("div",{className:"overflow-hidden h-6",children:Object(F.jsxs)("p",{className:"overflow-ellipsis",children:[e[a].toString(),te[a].suffix]})})})]},a)));return Object(F.jsx)("table",{children:Object(F.jsx)("tbody",{children:t})})}(a),n=void 0!==a.name?a.name:a.title;return Object(F.jsxs)(ne,{children:[Object(F.jsxs)("section",{children:[Object(F.jsx)("div",{className:"overflow-hidden flex-grow",children:Object(F.jsx)(ce,{src:"https://res.cloudinary.com/di6qjuwyo/starwars/".concat(t,"/").concat(a.id,".jpg"),title:n})}),Object(F.jsx)("div",{className:"text-2xl text-center py-4 bg-black",children:n})]}),Object(F.jsxs)("section",{children:[r,Object(F.jsx)(q.b,{to:"/".concat(t,"/").concat(a.id),children:"more..."})]})]})},ie=a(19),le=a.n(ie),oe=function(e){var t=e.title,a=e.stateSlice,n=e.getDataAction,c=Object(l.c)((function(e){return e[a].items})),s=Object(l.b)(),i=Object(r.useState)(!0),o=Object(X.a)(i,2),j=o[0],d=o[1];return Object(r.useEffect)((function(){s(n()).finally(d(!1))}),[s,n]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h2",{children:t}),Object(F.jsx)("section",{className:"bg-gray-800 my-24 w-full py-16",children:Object(F.jsx)("div",{className:"container mx-auto",children:Object(F.jsxs)("div",{className:"flex gap-8 justify-center",children:[j&&Object(F.jsx)(ee,{}),Object(F.jsx)(le.a,{maxWidth:814,children:c.size>0&&Object(K.a)(c.values()).slice(0,1).map((function(e){return Object(F.jsx)(se,{item:e,category:a},e.id)}))}),Object(F.jsx)(le.a,{maxWidth:1279,minWidth:815,children:c.size>0&&Object(K.a)(c.values()).slice(0,2).map((function(e){return Object(F.jsx)(se,{item:e,category:a},e.id)}))}),Object(F.jsx)(le.a,{maxWidth:1549,minWidth:1280,children:c.size>0&&Object(K.a)(c.values()).slice(0,3).map((function(e){return Object(F.jsx)(se,{item:e,category:a},e.id)}))}),Object(F.jsx)(le.a,{minWidth:1550,children:c.size>0&&Object(K.a)(c.values()).slice(0,4).map((function(e){return Object(F.jsx)(se,{item:e,category:a},e.id)}))})]})})}),Object(F.jsx)(q.b,{to:"/".concat(a),className:"text-center text-lg z-50",children:"More..."})]})},je=a(4),de=a.n(je),ue=a(5),pe=a(39),be=a.n(pe);function he(e){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(ue.a)(de.a.mark((function e(t){var a,r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=new Map,e.next=4,be.a.get(t);case 4:return(r=e.sent).data.results.forEach((function(e){var t=e.url.slice(0,-1),r=t.substring(t.lastIndexOf("/")+1);e.id=+r,a.set(+r,e)})),e.abrupt("return",{total:r.data.count,next:r.data.next,items:a});case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function xe(e){return fe.apply(this,arguments)}function fe(){return(fe=Object(ue.a)(de.a.mark((function e(t){var a,r,n,c,s;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a="https://swapi.dev/api/".concat(t.resourceType,"/"),!(0===(r=t.oldState).items.size||r.items.size<r.total)){e.next=13;break}return t.dispatch(t.setLoading(!0)),e.next=7,he(""!==r.next?r.next:a);case 7:return n=e.sent,c=new Map([].concat(Object(K.a)(r.items),Object(K.a)(n.items))),s={total:n.total,next:n.next,items:c},t.dispatch({type:t.actionType,payload:s}),t.dispatch(t.setLoading(!1)),e.abrupt("return",s);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),t.dispatch(t.setLoading(!1)),t.dispatch(J(e.t0.message));case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function ge(e){return{type:v,payload:e}}function me(){return function(){var e=Object(ue.a)(de.a.mark((function e(t,a){var r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={oldState:a().films,dispatch:t,setLoading:ge,resourceType:"films",actionType:y},e.next=3,xe(r);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function ve(e){return{type:d,payload:e}}function ye(){return function(){var e=Object(ue.a)(de.a.mark((function e(t,a){var r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={oldState:a().characters,dispatch:t,setLoading:ve,resourceType:"people",actionType:u},e.next=3,xe(r);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Se(e){return{type:g,payload:e}}function _e(){return function(){var e=Object(ue.a)(de.a.mark((function e(t,a){var r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={oldState:a().planets,dispatch:t,setLoading:Se,resourceType:"planets",actionType:m},e.next=3,xe(r);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function we(e){return{type:p,payload:e}}function Ae(){return function(){var e=Object(ue.a)(de.a.mark((function e(t,a){var r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={oldState:a().starships,dispatch:t,setLoading:we,resourceType:"starships",actionType:b},e.next=3,xe(r);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Te(e){return{type:h,payload:e}}function Ne(){return function(){var e=Object(ue.a)(de.a.mark((function e(t,a){var r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={oldState:a().vehicles,dispatch:t,setLoading:Te,resourceType:"vehicles",actionType:O},e.next=3,xe(r);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Ee(e){return{type:x,payload:e}}function De(){return function(){var e=Object(ue.a)(de.a.mark((function e(t,a){var r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={oldState:a().species,dispatch:t,setLoading:Ee,resourceType:"species",actionType:f},e.next=3,xe(r);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}var Le=function(e){var t=e.children;return Object(F.jsx)("main",{className:"flex flex-col items-center",children:t})};function ke(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(Le,{children:[Object(F.jsx)(oe,{title:"films",stateSlice:"films",getDataAction:me}),Object(F.jsx)(oe,{title:"characters",stateSlice:"characters",getDataAction:ye}),Object(F.jsx)(oe,{title:"planets",stateSlice:"planets",getDataAction:_e}),Object(F.jsx)(oe,{title:"starships",stateSlice:"starships",getDataAction:Ae}),Object(F.jsx)(oe,{title:"vehicles",stateSlice:"vehicles",getDataAction:Ne}),Object(F.jsx)(oe,{title:"species",stateSlice:"species",getDataAction:De})]})})}var Ce=a(40),Ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"0px",c=Object(r.useState)(t),s=Object(X.a)(c,2),i=s[0],l=s[1];return Object(r.useEffect)((function(){var t=e,r=new IntersectionObserver((function(e){var t=Object(X.a)(e,1)[0];a?t.isIntersecting&&l((function(e){return Number(e)+1})):l(t.isIntersecting)}),{rootMargin:n});return t.current&&r.observe(t.current),function(){console.log("--- Unmount",t.current),t.current&&r.unobserve(t.current)}}),[e,a,n]),i},Me=["title","stateSlice","getDataAction"],Re=function(e){e.title;var t=e.stateSlice,a=e.getDataAction,n=Object(Ce.a)(e,Me),c=Object(l.c)((function(e){return e[t].items})),s=Object(l.b)(),i=Object(r.useRef)(null),o=Object(r.useState)(!0),j=Object(X.a)(o,2),d=j[0],u=j[1],p=Ie(i,!0,!0);return console.log("Redraw",p,d,n),Object(r.useEffect)((function(){p&&(u(!0),s(a()).finally(u(!1)))}),[p,s,a]),Object(F.jsxs)("div",{className:"container mx-auto",children:[Object(F.jsxs)("div",{className:"flex flex-wrap justify-center gap-8 relative",children:[c.size>0&&Object(K.a)(c.values()).map((function(e){return Object(F.jsx)(se,{item:e,category:t},e.id)})),Object(F.jsx)("div",{ref:i,className:"bg-red-500 p-0 w-0 h-5 "})]}),d&&Object(F.jsx)(ee,{})]})},Pe=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"container mx-auto text-center pt-64",children:[Object(F.jsx)("span",{className:"text-9xl font-sans font-extrabold text-red-600",children:"404"}),Object(F.jsx)("span",{className:"font-star-wars text-4xl",children:"This planet not exists!"})]})})},Ge=function(e){var t=e.title;return Object(F.jsx)("h1",{className:"absolute right-4 top-36 opacity-75 max-w-3/4 text-right leading-none",children:t})},Fe=a(20),We=a.n(Fe),He=function(e){var t=e.children;return Object(F.jsxs)("div",{className:We.a.body,children:[Object(F.jsx)("div",{className:We.a.fade}),Object(F.jsx)("section",{className:We.a.starWars,children:Object(F.jsx)("div",{className:We.a.crawl,children:t})})]})},ze=function(){var e=parseInt(Object(V.g)().id),t=Object(l.c)((function(t){return t.films.items.get(e)})),a=Object(l.b)(),n=null===t||void 0===t?void 0:t.opening_crawl;return console.log(e),console.log(n),Object(r.useEffect)((function(){a(function(){var e=Object(ue.a)(de.a.mark((function e(t,a){var r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={oldState:a().films,dispatch:t,setLoading:ge,resourceType:"films",actionType:y},e.next=3,xe(r);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}),[e,a]),Object(F.jsxs)("div",{children:[Object(F.jsx)(Ge,{title:null===t||void 0===t?void 0:t.title}),Object(F.jsx)("div",{className:"bg-black bg-opacity-75 py-8",children:Object(F.jsxs)("div",{className:"flex h-96 container mx-auto",children:[Object(F.jsx)(ce,{src:"https://res.cloudinary.com/di6qjuwyo/starwars/films/".concat(null===t||void 0===t?void 0:t.id,".jpg"),title:null===t||void 0===t?void 0:t.title}),n&&Object(F.jsx)(He,{children:Object(F.jsx)("div",{children:n})})]})})]})},Be=a(26),qe=a.n(Be);function Ve(){return Object(F.jsx)("header",{className:qe.a.header,children:Object(F.jsxs)("div",{className:"flex container mx-auto",children:[Object(F.jsx)("div",{className:"w-48 text-center",children:Object(F.jsxs)(q.b,{to:"/",children:[Object(F.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg",className:"w-64",alt:"StarWars Fandom"}),Object(F.jsx)("div",{className:qe.a.logoTitle,children:"Fandom"})]})}),Object(F.jsx)("div",{className:" flex-grow"}),Object(F.jsxs)("nav",{children:[Object(F.jsx)(q.c,{to:"/",children:"Home"}),Object(F.jsx)(q.c,{to:"/films",children:"Films"}),Object(F.jsx)(q.c,{to:"/characters",children:"Characters"}),Object(F.jsx)(q.c,{to:"/starships",children:"Starships "}),Object(F.jsx)(q.c,{to:"/vehicles",children:"Vehicles "}),Object(F.jsx)(q.c,{to:"/planets",children:"Planets"}),Object(F.jsx)(q.c,{to:"/species",children:"Species "})]})]})})}var Ue=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B,{}),Object(F.jsxs)(q.a,{children:[Object(F.jsx)(Ve,{}),Object(F.jsxs)(V.c,{children:[Object(F.jsx)(V.a,{path:"/",element:Object(F.jsx)(ke,{}),exact:!0}),Object(F.jsx)(V.a,{path:"films",element:Object(F.jsx)(Re,{stateSlice:"films",getDataAction:me})}),Object(F.jsx)(V.a,{path:"films/:id",element:Object(F.jsx)(ze,{})}),Object(F.jsx)(V.a,{path:"characters",element:Object(F.jsx)(Re,{stateSlice:"characters",getDataAction:ye})}),Object(F.jsx)(V.a,{path:"characters/:id",element:Object(F.jsx)(Re,{stateSlice:"characters",getDataAction:ye})}),Object(F.jsx)(V.a,{path:"planets",element:Object(F.jsx)(Re,{stateSlice:"planets",getDataAction:_e})}),Object(F.jsx)(V.a,{path:"planets/:id",element:Object(F.jsx)(Re,{stateSlice:"planets",getDataAction:_e})}),Object(F.jsx)(V.a,{path:"starships",element:Object(F.jsx)(Re,{stateSlice:"starships",getDataAction:Ae})}),Object(F.jsx)(V.a,{path:"starships/:id",element:Object(F.jsx)(Re,{stateSlice:"starships",getDataAction:Ae})}),Object(F.jsx)(V.a,{path:"vehicles",element:Object(F.jsx)(Re,{stateSlice:"vehicles",getDataAction:Ne})}),Object(F.jsx)(V.a,{path:"vehicles/:id",element:Object(F.jsx)(Re,{stateSlice:"vehicles",getDataAction:Ne})}),Object(F.jsx)(V.a,{path:"species",element:Object(F.jsx)(Re,{stateSlice:"species",getDataAction:De})}),Object(F.jsx)(V.a,{path:"species/:id",element:Object(F.jsx)(Re,{stateSlice:"species",getDataAction:De})}),Object(F.jsx)(V.a,{path:"*",element:Object(F.jsx)(Pe,{})}),"} />"]})]}),Object(F.jsx)(Y,{})]})};s.a.render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(W,{children:Object(F.jsx)(Ue,{})})}),document.getElementById("root")),i()}},[[73,1,2]]]);
//# sourceMappingURL=main.879113c9.chunk.js.map