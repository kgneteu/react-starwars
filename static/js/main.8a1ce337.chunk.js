(this["webpackJsonpreact-html5"]=this["webpackJsonpreact-html5"]||[]).push([[0],{19:function(e,t,a){e.exports={sky:"starsParallax_sky__3quaq",stars:"starsParallax_stars__2-gdl",animStar:"starsParallax_animStar__l6nJ-",stars2:"starsParallax_stars2__2X1lL",stars3:"starsParallax_stars3__JVEtE"}},21:function(e,t,a){e.exports={body:"crawl_body__39vlD",fade:"crawl_fade__3NjnM",starWars:"crawl_starWars__3_hR6",crawl:"crawl_crawl__2FyMY",title:"crawl_title__3ASW0"}},25:function(e,t,a){e.exports={"font-star-wars":"header_font-star-wars__2uq16","font-sans":"header_font-sans__2B_rw","text-shadow":"header_text-shadow___czMq",header:"header_header__3STq7",earthSpin:"header_earthSpin__2LPis",logo:"header_logo__2JJrf",logoTitle:"header_logoTitle__2SNkV"}},28:function(e,t,a){e.exports={loader:"loader_loader__2MnQR",AnimationName:"loader_AnimationName__1AQ4v",content:"loader_content__m6zY5"}},29:function(e,t,a){e.exports={container:"neonButon_container__19pph",button:"neonButon_button__VvAEZ"}},42:function(e,t,a){e.exports={flipCard:"flipCard_flipCard__3vLUo"}},48:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(14),n=a.n(s),i=(a(48),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),r(e),s(e),n(e)}))}),l=a(6),o=a(16),u=a(4),j="GET_CHARACTER_PAGE",p="GET_CHARACTERS",d="GET_STARSHIP_PAGE",b="GET_STARSHIPS",h="GET_VEHICLE_PAGE",x="GET_VEHICLES",f="GET_SPECIES_PAGE",O="GET_SPECIES",m="GET_PLANET_PAGE",v="GET_PLANETS",g="GET_FILM_PAGE",y="GET_FILMS",S="GLOBAL_SUCCESS",_="GLOBAL_ERROR",w="CLEAR_TOAST",N={total:0,next:"",items:new Map};var A={error:!1,success:!1,msg:""};var T={total:0,next:"",items:new Map};var E={total:0,next:"",items:new Map};var k={total:0,next:"",items:new Map};var D={total:0,next:"",items:new Map};var I={total:0,next:"",items:new Map};var C=Object(o.combineReducers)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),t.payload);case y:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),t.payload);case p:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},planets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)(Object(u.a)({},e),t.payload);case v:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},species:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(u.a)(Object(u.a)({},e),t.payload);case O:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},starships:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),t.payload);case b:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},toasts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(u.a)(Object(u.a)({},e),{},{error:!0,msg:t.payload});case S:return Object(u.a)(Object(u.a)({},e),{},{success:!0,msg:t.payload});case w:return{};default:return e}},vehicles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),t.payload);case x:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}}}),P=C,M=a(41),G=a(40),R=Object(G.composeWithDevTools)(Object(o.applyMiddleware)(M.a)),L=Object(o.createStore)(P,R),F=a(0),H=function(e){var t=e.children;return Object(F.jsx)(l.a,{store:L,children:t})},W=a(19),B=a.n(W),q=function(){return Object(F.jsxs)("div",{className:B.a.sky,children:[Object(F.jsx)("div",{className:B.a.stars}),Object(F.jsx)("div",{className:B.a.stars2}),Object(F.jsx)("div",{className:B.a.stars3})]})},z=a(7),V=a(2),J=a(17),U=function(e){return{type:_,payload:e}},Q=function(){return function(e){e({type:w})}};a(56);function Y(){var e=Object(l.c)((function(e){return e.toasts})),t=Object(l.b)();return Object(c.useEffect)((function(){function a(e,t){switch(e){case"SUCCESS":J.b.success(t,{position:J.b.POSITION.BOTTOM_RIGHT,theme:"dark"});break;case"ERROR":J.b.error(t,{position:J.b.POSITION.BOTTOM_RIGHT,theme:"dark"});break;default:return!1}}e&&e.error&&(a("ERROR",e.msg?e.msg:"Error"),t(Q()));e&&e.success&&(a("SUCCESS",e.msg?e.msg:"OK!"),t(Q()))}),[e,t]),Object(F.jsx)(J.a,{})}var Z=a(12),K=a(11),X=a(28),$=a.n(X);function ee(){return Object(F.jsx)("div",{className:$.a.loader,children:Object(F.jsx)("div",{className:$.a.content,children:"Loading..."})})}var te={average_height:{type:String,label:"Average height",suffix:"cm"},average_lifespan:{type:String,label:"Average lifespan",suffix:"y"},birth_year:{type:String,label:"Birth year"},cargo_capacity:{type:String,label:"Cargo capacity"},classification:{type:String,label:"Classification"},characters:{type:Array,label:"Characters"},consumables:{type:String,label:"Consumables"},cost_in_credits:{type:String,label:"Cost in Credits"},climate:{type:String,label:"Climate"},crew:{type:String,label:"Crew"},designation:{type:String,label:"Designation"},diameter:{type:String,label:"Diameter"},director:{type:String,label:"Director"},episode_id:{type:String,label:"Episode Id"},eye_color:{type:String,label:"Eye color"},eye_colors:{type:String,label:"Eye colors"},films:{type:Array,label:"Films"},gender:{type:String,label:"Gender"},gravity:{type:String,label:"Gravity"},hair_color:{type:String,label:"Hair color"},hair_colors:{type:String,label:"Hair colors"},height:{type:String,label:"Height",suffix:"cm"},homeworld:{type:String,label:"Home world",link:!0},hyperdrive_rating:{type:String,label:"Hyperdrive rating"},language:{type:String,label:"Language"},length:{type:String,label:"Length"},max_atmosphering_speed:{type:String,label:"Max speed"},manufacturer:{type:String,label:"Manufacturer"},mass:{type:String,label:"Mass",suffix:"kg"},MGLT:{type:String,label:"MGLT"},model:{type:String,label:"Model"},opening_crawl:{type:String,label:"Opening Crawl"},orbital_period:{type:String,label:"Orbital period"},passengers:{type:String,label:"Passengers"},people:{type:Array,label:"People"},pilots:{type:Array,label:"Pilots"},planets:{type:Array,label:"Planets"},population:{type:String,label:"Population"},producer:{type:String,label:"Producer"},release_date:{type:String,label:"Release date"},residents:{type:Array,label:"Residents"},rotation_period:{type:String,label:"Rotation period"},skin_color:{type:String,label:"Skin color"},skin_colors:{type:String,label:"Skin colors"},species:{type:Array,label:"Species"},surface_water:{type:String,label:"Surface water"},starships:{type:Array,label:"Starships"},starship_class:{type:String,label:"Starship class"},terrain:{type:String,label:"Terrain"},vehicle_class:{type:String,label:"Vehicle class"},vehicles:{type:Array,label:"Vehicles"}};function ae(e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=[];for(var r in e)if(void 0!==te[r])if(te[r].type===Array)!t&&e[r].length>0?c.push(Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:te[r].label}),Object(F.jsx)("td",{children:"Array"})]},r)):t||c.push(Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:te[r].label}),Object(F.jsx)("td",{children:"Array"})]},r));else{var s=["n/a","unknown","N/A",null];try{s.includes(e[r])||a.includes(r)||c.push(Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"w-1/3",children:Object(F.jsx)("div",{className:"overflow-hidden h-6",children:te[r].label})}),Object(F.jsx)("td",{children:Object(F.jsx)("div",{className:"overflow-hidden h-6",children:Object(F.jsxs)("p",{className:"overflow-ellipsis",children:[e[r].toString(),te[r].suffix]})})})]},r))}catch(n){console.log(r)}}return Object(F.jsx)("table",{children:Object(F.jsx)("tbody",{children:c})})}var ce=a(42),re=a.n(ce),se=function(e){var t=e.children;return Object(F.jsx)("div",{className:re.a.flipCard,children:t})},ne=a.p+"static/media/jedi.d534cef7.svg";function ie(e){var t=e.src,a=(e.title,e.className);return Object(F.jsx)("img",{className:a,src:t,onError:function(e){e.target.onerror=null,e.target.style.width="50%",e.target.style.opacity="0.8",e.target.style.transform="translate(50%,50%)",e.target.src=ne}})}var le=a(29),oe=a.n(le),ue=a(13),je=function(e){var t=e.children,a=e.className,c=void 0===a?"":a;return Object(F.jsx)("div",{className:Object(ue.a)([oe.a.container,c,"transform scale-50"]),children:Object(F.jsx)("div",{className:oe.a.button,children:t})})},pe=function(e){var t=e.category,a=e.item,c=ae(a,void 0,!0),r=void 0!==a.name?a.name:a.title;return Object(F.jsxs)(se,{children:[Object(F.jsxs)("section",{children:[Object(F.jsx)("div",{className:"overflow-hidden flex-grow",children:Object(F.jsx)(ie,{src:"https://res.cloudinary.com/di6qjuwyo/starwars/".concat(t,"/").concat(a.id,".jpg"),title:r})}),Object(F.jsx)("div",{className:"text-2xl text-center py-4 bg-black",children:r})]}),Object(F.jsx)("section",{children:Object(F.jsxs)("div",{className:"flex flex-col",children:[Object(F.jsxs)("div",{className:"flex items-center p-2 gap-4",children:[Object(F.jsx)(ie,{className:"w-24 h-24 rounded-full",src:"https://res.cloudinary.com/di6qjuwyo/starwars/".concat(t,"/").concat(a.id,".jpg")}),Object(F.jsx)("p",{className:"text-lg",children:r})]}),c,Object(F.jsx)(z.b,{to:"/".concat(t,"/").concat(a.id),children:Object(F.jsx)(je,{className:"font-bold",children:"more"})})]})})]})},de=a(20),be=a.n(de),he=function(e){var t=e.title,a=e.stateSlice,r=e.getDataAction,s=Object(l.c)((function(e){return e[a].items})),n=Object(l.b)(),i=Object(c.useState)(!0),o=Object(K.a)(i,2),u=o[0],j=o[1];return Object(c.useEffect)((function(){n(r()).finally(j(!1))}),[n,r]),Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("section",{className:"bg-black bg-opacity-75 my-24 w-full",children:Object(F.jsxs)("div",{className:"container mx-auto",children:[Object(F.jsx)("h2",{children:t}),Object(F.jsxs)("div",{className:"flex gap-8 justify-center",children:[u&&Object(F.jsx)(ee,{}),Object(F.jsx)(be.a,{maxWidth:814,children:s.size>0&&Object(Z.a)(s.values()).slice(0,1).map((function(e){return Object(F.jsx)(pe,{item:e,category:a},e.id)}))}),Object(F.jsx)(be.a,{maxWidth:1279,minWidth:815,children:s.size>0&&Object(Z.a)(s.values()).slice(0,2).map((function(e){return Object(F.jsx)(pe,{item:e,category:a},e.id)}))}),Object(F.jsx)(be.a,{maxWidth:1549,minWidth:1280,children:s.size>0&&Object(Z.a)(s.values()).slice(0,3).map((function(e){return Object(F.jsx)(pe,{item:e,category:a},e.id)}))}),Object(F.jsx)(be.a,{minWidth:1550,children:s.size>0&&Object(Z.a)(s.values()).slice(0,4).map((function(e){return Object(F.jsx)(pe,{item:e,category:a},e.id)}))})]}),Object(F.jsx)(z.b,{to:"/".concat(a),className:"text-center bg-red-500",children:Object(F.jsx)(je,{children:"more"})})]})})})},xe=a(3),fe=a.n(xe),Oe=a(5),me=a(24),ve=a(30),ge=a.n(ve);function ye(e){return Se.apply(this,arguments)}function Se(){return(Se=Object(Oe.a)(fe.a.mark((function e(t){var a,c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=new Map,e.next=4,ge.a.get(t);case 4:return(c=e.sent).data.results.forEach((function(e){var t=e.url.slice(0,-1),c=t.substring(t.lastIndexOf("/")+1);e.id=+c,a.set(+c,e)})),e.abrupt("return",{total:c.data.count,next:c.data.next,items:a});case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var _e={films:"films",characters:"people",planets:"planets",species:"species",starships:"starships",vehicles:"vehicles"};function we(e,t){return Ne.apply(this,arguments)}function Ne(){return(Ne=Object(Oe.a)(fe.a.mark((function e(t,a){var c,r;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=_e[t],e.next=4,ge.a.get("https://swapi.dev/api/".concat(c,"/").concat(a));case 4:return(r=e.sent).data.id=+a,e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Ae(e){return Te.apply(this,arguments)}function Te(){return(Te=Object(Oe.a)(fe.a.mark((function e(t){var a,c,r,s,n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a="https://swapi.dev/api/".concat(t.resourceType,"/"),!(0===(c=t.oldState).total||c.items.size<c.total)){e.next=11;break}return e.next=6,ye(""!==c.next?c.next:a);case 6:return r=e.sent,s=new Map([].concat(Object(Z.a)(c.items),Object(Z.a)(r.items))),n={total:r.total,next:r.next,items:s},t.dispatch({type:t.actionType,payload:n}),e.abrupt("return",n);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t.dispatch(U(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function Ee(e){return ke.apply(this,arguments)}function ke(){return(ke=Object(Oe.a)(fe.a.mark((function e(t){var a,c,r,s,n,i;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!((a=t.selectedItems.filter((function(e){return!t.oldState.items.has(e)}))).length>0)){e.next=28;break}c=new Map,r=Object(me.a)(a),e.prev=5,r.s();case 7:if((s=r.n()).done){e.next=17;break}return n=s.value,e.t0=c,e.t1=n,e.next=13,we(t.resourceType,n);case 13:e.t2=e.sent,e.t0.set.call(e.t0,e.t1,e.t2);case 15:e.next=7;break;case 17:e.next=22;break;case 19:e.prev=19,e.t3=e.catch(5),r.e(e.t3);case 22:return e.prev=22,r.f(),e.finish(22);case 25:return i=new Map([].concat(Object(Z.a)(t.oldState.items),Object(Z.a)(c))),t.dispatch({type:t.actionType,payload:i}),e.abrupt("return",i);case 28:e.next=33;break;case 30:e.prev=30,e.t4=e.catch(0),t.dispatch(U(e.t4.message));case 33:case"end":return e.stop()}}),e,null,[[0,30],[5,19,22,25]])})))).apply(this,arguments)}function De(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().films,dispatch:t,resourceType:"films",actionType:g},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Ie(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var r;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={oldState:c().films,dispatch:a,resourceType:"films",actionType:y,selectedItems:e},t.next=3,Ee(r);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function Ce(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().characters,dispatch:t,resourceType:"people",actionType:j},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Pe(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var r;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={oldState:c().characters,dispatch:a,resourceType:"characters",actionType:p,selectedItems:e},t.next=3,Ee(r);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function Me(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().planets,dispatch:t,resourceType:"planets",actionType:m},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Ge(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var r;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={oldState:c().planets,dispatch:a,resourceType:"planets",actionType:v,selectedItems:e},t.next=3,Ee(r);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function Re(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().starships,dispatch:t,resourceType:"starships",actionType:d},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Le(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var r;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={oldState:c().starships,dispatch:a,resourceType:"starships",actionType:b,selectedItems:e},t.next=3,Ee(r);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function Fe(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().vehicles,dispatch:t,resourceType:"vehicles",actionType:h},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function He(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var r;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={oldState:c().vehicles,dispatch:a,resourceType:"vehicles",actionType:x,selectedItems:e},t.next=3,Ee(r);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function We(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().species,dispatch:t,resourceType:"species",actionType:f},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Be(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var r;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={oldState:c().species,dispatch:a,resourceType:"species",actionType:O,selectedItems:e},t.next=3,Ee(r);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}var qe=function(e){var t=e.children;return Object(F.jsx)("main",{className:"flex flex-col items-center",children:t})};function ze(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(qe,{children:[Object(F.jsx)(he,{title:"films",stateSlice:"films",getDataAction:De}),Object(F.jsx)(he,{title:"characters",stateSlice:"characters",getDataAction:Ce}),Object(F.jsx)(he,{title:"planets",stateSlice:"planets",getDataAction:Me}),Object(F.jsx)(he,{title:"starships",stateSlice:"starships",getDataAction:Re}),Object(F.jsx)(he,{title:"vehicles",stateSlice:"vehicles",getDataAction:Fe}),Object(F.jsx)(he,{title:"species",stateSlice:"species",getDataAction:We})]})})}var Ve=a(43),Je=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"0px",s=Object(c.useState)(t),n=Object(K.a)(s,2),i=n[0],l=n[1];return Object(c.useEffect)((function(){var t=e,c=new IntersectionObserver((function(e){var t=Object(K.a)(e,1)[0];a?t.isIntersecting&&l((function(e){return Number(e)+1})):l(t.isIntersecting)}),{rootMargin:r});return t.current&&c.observe(t.current),function(){console.log("--- Unmount",t.current),t.current&&c.unobserve(t.current)}}),[e,a,r]),i},Ue=function(e){var t=e.title;return Object(F.jsx)("h1",{className:"absolute right-4 top-36 opacity-75 max-w-3/4 text-right leading-none lowercase",children:t})},Qe=["title","stateSlice","getDataAction"],Ye=function(e){var t=e.title,a=void 0===t?"":t,r=e.stateSlice,s=e.getDataAction,n=(Object(Ve.a)(e,Qe),""!==a?a:r),i=Object(l.c)((function(e){return e[r].items})),o=Object(l.b)(),u=Object(c.useRef)(null),j=Object(c.useState)(!0),p=Object(K.a)(j,2),d=p[0],b=p[1],h=Je(u,!0,!0);return Object(c.useEffect)((function(){h&&(b(!0),o(s()).finally(b(!1)))}),[h,o,s]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Ue,{title:n}),Object(F.jsxs)("div",{className:"container mx-auto",children:[Object(F.jsxs)("div",{className:"flex flex-wrap justify-center gap-8 relative",children:[i.size>0&&Object(Z.a)(i.values()).map((function(e){return Object(F.jsx)("div",{className:"animate-appear",children:Object(F.jsx)(pe,{item:e,category:r},e.id)})})),Object(F.jsx)("div",{ref:u,className:"bg-red-500 p-0 w-0 h-5 "})]}),d&&Object(F.jsx)(ee,{})]})]})},Ze=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"container mx-auto text-center pt-64",children:[Object(F.jsx)("span",{className:"text-9xl font-sans font-extrabold text-red-600",children:"404"}),Object(F.jsx)("span",{className:"font-star-wars text-4xl",children:"This planet not exists!"})]})})},Ke=a(21),Xe=a.n(Ke),$e=function(e){var t=e.children;return Object(F.jsxs)("div",{className:Xe.a.body,children:[Object(F.jsx)("div",{className:Xe.a.fade}),Object(F.jsx)("section",{className:Xe.a.starWars,children:Object(F.jsx)("div",{className:Xe.a.crawl,children:t})})]})};function et(e){var t=e.title,a=e.items,r=e.stateSlice,s=e.getDataAction,n=Object(l.c)((function(e){return e[r].items})),i=Object(l.b)(),o=a?a.map((function(e){return function(e){var t=e.slice(0,-1);return t.substring(t.lastIndexOf("/")+1)}(e)})):void 0;Object(c.useEffect)((function(){if(o){var e=o.filter((function(e){return!n.has(e)}));i(s(e))}}),[i,o,n,s]);var u=o?o.filter((function(e){return n.has(e)})).map((function(e){return n.get(e)})):void 0;return u?Object(F.jsxs)("div",{children:[Object(F.jsx)("p",{className:"font-star-wars text-3xl my-2 lowercase",children:t}),Object(F.jsx)("div",{className:"flex flex-wrap gap-4",children:u.map((function(e){return Object(F.jsx)(z.b,{to:"/".concat(r,"/").concat(e.id),children:Object(F.jsx)("div",{className:"border-2 p-2 rounded-lg bg-gray-900 border-gray-400",children:e.name?e.name:e.title})},e.id)}))})]}):null}var tt=function(){var e=parseInt(Object(V.g)().id),t=Object(l.c)((function(t){return t.films.items.get(e)})),a=Object(l.b)();return Object(c.useEffect)((function(){a(Ie([e]))}),[e,a]),t?Object(F.jsxs)("div",{children:[Object(F.jsx)(Ue,{title:t.title}),Object(F.jsx)("div",{className:"bg-black bg-opacity-75 py-8",children:Object(F.jsxs)("div",{className:"flex h-96 container mx-auto",children:[Object(F.jsx)(ie,{src:"https://res.cloudinary.com/di6qjuwyo/starwars/films/".concat(t.id,".jpg"),title:t.title}),t.opening_crawl&&Object(F.jsx)($e,{children:Object(F.jsx)("div",{children:t.opening_crawl})})]})}),Object(F.jsx)("div",{className:"container mx-auto bg-black",children:ae(t,void 0,!0,["opening_crawl"])}),Object(F.jsxs)("div",{className:"container mx-auto",children:[Object(F.jsx)(et,{title:"characters",stateSlice:"characters",items:t.characters,getDataAction:Pe}),Object(F.jsx)(et,{title:"starships",stateSlice:"starships",items:t.starships,getDataAction:Le}),Object(F.jsx)(et,{title:"vehicles",stateSlice:"vehicles",items:t.vehicles,getDataAction:He}),Object(F.jsx)(et,{title:"planets",stateSlice:"planets",items:t.planets,getDataAction:Ge}),Object(F.jsx)(et,{title:"species",stateSlice:"species",items:t.species,getDataAction:Be})]})]}):Object(F.jsx)(ee,{})},at=a(25),ct=a.n(at),rt=a.p+"static/media/star_wars_logo.e3b54fcc.svg";function st(){return Object(F.jsx)("header",{className:ct.a.header,children:Object(F.jsxs)("div",{className:"flex container mx-auto",children:[Object(F.jsx)("div",{className:"w-48 text-center",children:Object(F.jsxs)(z.b,{to:"/",className:"",children:[Object(F.jsx)("img",{src:rt,className:ct.a.logo,alt:"StarWars Fandom"}),Object(F.jsx)("div",{className:ct.a.logoTitle,children:"Fandom"})]})}),Object(F.jsx)("div",{className:" flex-grow"}),Object(F.jsxs)("nav",{children:[Object(F.jsx)(z.c,{to:"/",children:"Home"}),Object(F.jsx)(z.c,{to:"/films",children:"Films"}),Object(F.jsx)(z.c,{to:"/characters",children:"Characters"}),Object(F.jsx)(z.c,{to:"/starships",children:"Starships "}),Object(F.jsx)(z.c,{to:"/vehicles",children:"Vehicles "}),Object(F.jsx)(z.c,{to:"/planets",children:"Planets"}),Object(F.jsx)(z.c,{to:"/species",children:"Species "})]})]})})}var nt=r.a.memo(st),it={films:Ie,characters:Pe,planets:Ge,species:Be,starships:Le,vehicles:He};function lt(e){var t=e.id,a=e.stateSlice,r=Object(l.c)((function(e){return e[a].items.get(t)})),s=Object(l.b)();if(Object(c.useEffect)((function(){s(it[a]([t]))}),[t,s,a]),!r)return Object(F.jsx)(ee,{});console.log(r);var n=r.title?r.title:r.name;return Object(F.jsxs)("div",{children:[Object(F.jsx)(Ue,{title:n}),Object(F.jsx)("div",{className:"bg-black bg-opacity-75 py-8",children:Object(F.jsx)("div",{className:"flex h-96 container mx-auto",children:Object(F.jsx)(ie,{className:"w-1/4 bg-red-500",src:"https://res.cloudinary.com/di6qjuwyo/starwars/".concat(a,"/").concat(r.id,".jpg"),title:n})})}),Object(F.jsx)("div",{className:"container mx-auto bg-black",children:ae(r,void 0,!0,["opening_crawl"])}),Object(F.jsxs)("div",{className:"container mx-auto",children:[Object(F.jsx)(et,{title:"films",stateSlice:"films",items:r.films,getDataAction:Ie}),Object(F.jsx)(et,{title:"people",stateSlice:"characters",items:r.people,getDataAction:Pe}),Object(F.jsx)(et,{title:"pilots",stateSlice:"characters",items:r.pilots,getDataAction:Pe}),Object(F.jsx)(et,{title:"residents",stateSlice:"characters",items:r.residents,getDataAction:Pe}),Object(F.jsx)(et,{title:"starships",stateSlice:"starships",items:r.starships,getDataAction:Le}),Object(F.jsx)(et,{title:"vehicles",stateSlice:"vehicles",items:r.vehicles,getDataAction:He}),Object(F.jsx)(et,{title:"planets",stateSlice:"planets",items:r.planets,getDataAction:Ge}),Object(F.jsx)(et,{title:"species",stateSlice:"species",items:r.species,getDataAction:Be})]})]})}var ot=function(){var e=parseInt(Object(V.g)().id);return Object(F.jsx)(lt,{id:e,stateSlice:"characters"})},ut=function(){var e=parseInt(Object(V.g)().id);return Object(F.jsx)(lt,{id:e,stateSlice:"planets"})},jt=function(){var e=parseInt(Object(V.g)().id);return Object(F.jsx)(lt,{id:e,stateSlice:"starships"})},pt=function(){var e=parseInt(Object(V.g)().id);return Object(F.jsx)(lt,{id:e,stateSlice:"species"})},dt=function(){return Object(F.jsx)("footer",{className:"p-4 mt-24 bg-black text-center text-gray-400 opacity-75",children:Object(F.jsx)("p",{children:"(C) 2021 by Michael Zdolski"})})},bt=function(){var e=parseInt(Object(V.g)().id);return Object(F.jsx)(lt,{id:e,stateSlice:"vehicles"})},ht=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(q,{}),Object(F.jsxs)(z.a,{basename:"",children:[Object(F.jsx)(nt,{}),Object(F.jsxs)(V.c,{children:[Object(F.jsx)(V.a,{path:"/",element:Object(F.jsx)(ze,{}),exact:!0}),Object(F.jsx)(V.a,{path:"/films",element:Object(F.jsx)(Ye,{stateSlice:"films",getDataAction:De})}),Object(F.jsx)(V.a,{path:"/films/:id",element:Object(F.jsx)(tt,{})}),Object(F.jsx)(V.a,{path:"/characters",element:Object(F.jsx)(Ye,{stateSlice:"characters",getDataAction:Ce})}),Object(F.jsx)(V.a,{path:"/characters/:id",element:Object(F.jsx)(ot,{})}),Object(F.jsx)(V.a,{path:"/planets",element:Object(F.jsx)(Ye,{stateSlice:"planets",getDataAction:Me})}),Object(F.jsx)(V.a,{path:"/planets/:id",element:Object(F.jsx)(ut,{})}),Object(F.jsx)(V.a,{path:"/starships",element:Object(F.jsx)(Ye,{stateSlice:"starships",getDataAction:Re})}),Object(F.jsx)(V.a,{path:"/starships/:id",element:Object(F.jsx)(jt,{})}),Object(F.jsx)(V.a,{path:"/vehicles",element:Object(F.jsx)(Ye,{stateSlice:"vehicles",getDataAction:Fe})}),Object(F.jsx)(V.a,{path:"/vehicles/:id",element:Object(F.jsx)(bt,{})}),Object(F.jsx)(V.a,{path:"/species",element:Object(F.jsx)(Ye,{stateSlice:"species",getDataAction:We})}),Object(F.jsx)(V.a,{path:"/species/:id",element:Object(F.jsx)(pt,{})}),Object(F.jsx)(V.a,{path:"*",element:Object(F.jsx)(Ze,{})}),"} />"]})]}),Object(F.jsx)(dt,{}),Object(F.jsx)(Y,{})]})};n.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(H,{children:Object(F.jsx)(ht,{})})}),document.getElementById("root")),i()}},[[76,1,2]]]);
//# sourceMappingURL=main.8a1ce337.chunk.js.map