(this["webpackJsonpreact-html5"]=this["webpackJsonpreact-html5"]||[]).push([[0],{14:function(e,t,a){e.exports={mobileMenu:"mobileMenu_mobileMenu__3mFBf",menuCheckbox:"mobileMenu_menuCheckbox__2ex1D",menuButton:"mobileMenu_menuButton__11jzt",background:"mobileMenu_background__1xBTc",mobileMenu__nav:"mobileMenu_mobileMenu__nav__3miUN",mobileMenu__list:"mobileMenu_mobileMenu__list__3NxIl",mobileMenu__item:"mobileMenu_mobileMenu__item__e0dBW",mobileMenu__link:"mobileMenu_mobileMenu__link__8bLUY",menuIcon:"mobileMenu_menuIcon__2MdRF",header:"mobileMenu_header__9wRlG",header__logo_box:"mobileMenu_header__logo_box__2V6qd",header__logo:"mobileMenu_header__logo__3nUf6",header__text_box:"mobileMenu_header__text_box__3LxN8"}},20:function(e,t,a){e.exports={sky:"starsParallax_sky__3quaq",stars:"starsParallax_stars__2-gdl",animStar:"starsParallax_animStar__l6nJ-",stars2:"starsParallax_stars2__2X1lL",stars3:"starsParallax_stars3__JVEtE"}},22:function(e,t,a){e.exports={body:"crawl_body__39vlD",fade:"crawl_fade__3NjnM",starWars:"crawl_starWars__3_hR6",crawl:"crawl_crawl__2FyMY",title:"crawl_title__3ASW0"}},26:function(e,t,a){e.exports={container:"neonButon_container__3Tq91",button:"neonButon_button__QYuwE",smallButton:"neonButon_smallButton__3W_bS",small:"neonButon_small__2BMsM"}},27:function(e,t,a){e.exports={"font-star-wars":"header_font-star-wars__2uq16","font-sans":"header_font-sans__2B_rw","text-shadow":"header_text-shadow___czMq",header:"header_header__3STq7",earthSpin:"header_earthSpin__2LPis",logo:"header_logo__2JJrf",logoTitle:"header_logoTitle__2SNkV"}},42:function(e,t,a){e.exports={flipCard:"flipCard_flipCard__3vLUo"}},48:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(15),s=a.n(r),i=(a(48),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))}),l=a(6),o=a(17),u=a(4),j="GET_CHARACTER_PAGE",d="GET_CHARACTERS",b="GET_STARSHIP_PAGE",p="GET_STARSHIPS",h="GET_VEHICLE_PAGE",x="GET_VEHICLES",m="GET_SPECIES_PAGE",f="GET_SPECIES",O="GET_PLANET_PAGE",v="GET_PLANETS",g="GET_FILM_PAGE",_="GET_FILMS",y="GLOBAL_SUCCESS",S="GLOBAL_ERROR",w="CLEAR_TOAST",N={dataEnd:!1,next:"",items:new Map};var T={error:!1,success:!1,msg:""};var k={dataEnd:!1,next:"",items:new Map};var A={dataEnd:!1,next:"",items:new Map};var E={dataEnd:!1,next:"",items:new Map};var M={dataEnd:!1,next:"",items:new Map};var I={dataEnd:!1,next:"",items:new Map};var C=Object(o.combineReducers)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),t.payload);case _:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),t.payload);case d:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},planets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(u.a)(Object(u.a)({},e),t.payload);case v:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},species:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)(Object(u.a)({},e),t.payload);case f:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},starships:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),t.payload);case p:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},toasts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(u.a)(Object(u.a)({},e),{},{error:!0,msg:t.payload});case y:return Object(u.a)(Object(u.a)({},e),{},{success:!0,msg:t.payload});case w:return{};default:return e}},vehicles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),t.payload);case x:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}}}),D=C,P=a(41),G=a(40),R=Object(G.composeWithDevTools)(Object(o.applyMiddleware)(P.a)),B=Object(o.createStore)(D,R),L=a(0),F=function(e){var t=e.children;return Object(L.jsx)(l.a,{store:B,children:t})},H=a(20),W=a.n(H),q=function(){return Object(L.jsxs)("div",{className:W.a.sky,children:[Object(L.jsx)("div",{className:W.a.stars}),Object(L.jsx)("div",{className:W.a.stars2}),Object(L.jsx)("div",{className:W.a.stars3})]})},z=a(7),U=a(2),V=a(18),J=function(e){return{type:S,payload:e}},Y=function(){return function(e){e({type:w})}};a(56);function K(){var e=Object(l.c)((function(e){return e.toasts})),t=Object(l.b)();return Object(c.useEffect)((function(){function a(e,t){switch(e){case"SUCCESS":V.b.success(t,{position:V.b.POSITION.BOTTOM_RIGHT,theme:"dark"});break;case"ERROR":V.b.error(t,{position:V.b.POSITION.BOTTOM_RIGHT,theme:"dark"});break;default:return!1}}e&&e.error&&(a("ERROR",e.msg?e.msg:"Error"),t(Y()));e&&e.success&&(a("SUCCESS",e.msg?e.msg:"OK!"),t(Y()))}),[e,t]),Object(L.jsx)(V.a,{})}var Q=a(12),X=a(11),Z=a.p+"static/media/loader.c44865d4.png";function $(){return Object(L.jsx)("div",{className:"text-center w-auto opacity-0 animate-delay-appear",children:Object(L.jsxs)("div",{className:"w-auto inline-block overflow-hidden",children:[Object(L.jsx)("img",{src:Z,className:"animate-spin-slow inline w-24"}),Object(L.jsx)("p",{className:"inline uppercase animate-pulse-slow",children:"Loading..."})]})})}var ee={average_height:{type:String,label:"Average height",suffix:"cm"},average_lifespan:{type:String,label:"Average lifespan",suffix:"y"},birth_year:{type:String,label:"Birth year"},cargo_capacity:{type:String,label:"Cargo capacity"},classification:{type:String,label:"Classification"},characters:{type:Array,label:"Characters"},consumables:{type:String,label:"Consumables"},cost_in_credits:{type:String,label:"Cost in Credits"},climate:{type:String,label:"Climate"},crew:{type:String,label:"Crew"},designation:{type:String,label:"Designation"},diameter:{type:String,label:"Diameter"},director:{type:String,label:"Director"},episode_id:{type:String,label:"Episode Id"},eye_color:{type:String,label:"Eye color"},eye_colors:{type:String,label:"Eye colors"},films:{type:Array,label:"Films"},gender:{type:String,label:"Gender"},gravity:{type:String,label:"Gravity"},hair_color:{type:String,label:"Hair color"},hair_colors:{type:String,label:"Hair colors"},height:{type:String,label:"Height",suffix:"cm"},homeworld:{type:String,label:"Home world",link:!0},hyperdrive_rating:{type:String,label:"Hyperdrive rating"},language:{type:String,label:"Language"},length:{type:String,label:"Length"},max_atmosphering_speed:{type:String,label:"Max speed"},manufacturer:{type:String,label:"Manufacturer"},mass:{type:String,label:"Mass",suffix:"kg"},MGLT:{type:String,label:"MGLT"},model:{type:String,label:"Model"},opening_crawl:{type:String,label:"Opening Crawl"},orbital_period:{type:String,label:"Orbital period"},passengers:{type:String,label:"Passengers"},people:{type:Array,label:"People"},pilots:{type:Array,label:"Pilots"},planets:{type:Array,label:"Planets"},population:{type:String,label:"Population"},producer:{type:String,label:"Producer"},release_date:{type:String,label:"Release date"},residents:{type:Array,label:"Residents"},rotation_period:{type:String,label:"Rotation period"},skin_color:{type:String,label:"Skin color"},skin_colors:{type:String,label:"Skin colors"},species:{type:Array,label:"Species"},surface_water:{type:String,label:"Surface water"},starships:{type:Array,label:"Starships"},starship_class:{type:String,label:"Starship class"},terrain:{type:String,label:"Terrain"},vehicle_class:{type:String,label:"Vehicle class"},vehicles:{type:Array,label:"Vehicles"}};function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=[];for(var r in e){if(t>=0&&n.length===t)break;if(void 0!==ee[r])if(ee[r].type===Array)!a&&e[r].length>0?n.push(Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:ee[r].label}),Object(L.jsx)("td",{children:"Array"})]},r)):a||n.push(Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:ee[r].label}),Object(L.jsx)("td",{children:"Array"})]},r));else{var s=["n/a","unknown","N/A",null];try{s.includes(e[r])||c.includes(r)||n.push(Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"w-1/3",children:Object(L.jsx)("div",{className:"overflow-hidden h-6",children:ee[r].label})}),Object(L.jsx)("td",{children:Object(L.jsx)("div",{className:"overflow-hidden h-6",children:Object(L.jsxs)("p",{className:"overflow-ellipsis",children:[e[r].toString(),ee[r].suffix]})})})]},r))}catch(i){console.log("Unknown key",r)}}}return Object(L.jsx)("table",{children:Object(L.jsx)("tbody",{children:n})})}var ae=a(42),ce=a.n(ae),ne=function(e){var t=e.children;return Object(L.jsx)("div",{className:ce.a.flipCard,children:t})},re=a.p+"static/media/jedi.d534cef7.svg";function se(e){var t,a=e.category,c=e.preset,n=e.imgId,r=e.title,s=e.className;switch(c){case"circle":t="/w_96,c_fill,ar_1:1,g_auto,r_max";break;case"card":t="/c_crop,c_fill,w_350,h_320,g_face";break;case"page":t="/c_crop,w_500,c_fill,h_350,g_face";break;default:t=""}return Object(L.jsx)("img",{className:s,title:r,alt:r,src:"".concat("https://res.cloudinary.com/di6qjuwyo/image/upload").concat(t,"/starwars/").concat(a,"/").concat(n,".jpg"),style:{},onError:function(e){e.target.src=re}})}var ie=a(26),le=a.n(ie),oe=a(13),ue=function(e){var t=e.children,a=e.small,c=e.className,n=void 0===c?"":c;return Object(L.jsx)("div",{className:Object(oe.a)([le.a.container,n]),children:Object(L.jsx)("div",{className:a?le.a.smallButton:le.a.button,children:t})})},je=function(e){var t=e.category,a=e.item,c=te(a,5,!0),n=void 0!==a.name?a.name:a.title;return Object(L.jsxs)(ne,{children:[Object(L.jsxs)("section",{children:[Object(L.jsx)("div",{className:"overflow-hidden flex-grow",children:Object(L.jsx)(se,{category:t,imgId:a.id,preset:"card",title:n})}),Object(L.jsx)("div",{className:"text-2xl text-center py-4 bg-black",children:n})]}),Object(L.jsx)("section",{children:Object(L.jsxs)("div",{className:"flex flex-col",children:[Object(L.jsxs)("div",{className:"flex items-center p-2 gap-4",children:[Object(L.jsx)(se,{className:"w-24 h-24 rounded-full",category:t,imgId:a.id,preset:"circle"}),Object(L.jsx)("p",{className:"text-lg",children:n})]}),c,Object(L.jsx)("div",{className:"text-center",children:Object(L.jsx)(z.b,{to:"/".concat(t,"/").concat(a.id),children:Object(L.jsx)(ue,{small:!0,children:"more"})})})]})})]})},de=a(21),be=a.n(de),pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"0px",r=Object(c.useState)(t),s=Object(X.a)(r,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){var t=e,c=new IntersectionObserver((function(e){var t=Object(X.a)(e,1)[0];a?t.isIntersecting&&l((function(e){return Number(e)+1})):l(t.isIntersecting)}),{rootMargin:n});return t.current&&c.observe(t.current),function(){t.current&&c.unobserve(t.current)}}),[e,a,n]),i};function he(e){var t=e.children,a=Object(c.useRef)();return Object(L.jsx)(c.Suspense,{children:Object(L.jsx)("div",{ref:a,children:t})})}var xe=function(e){var t=e.title,a=e.stateSlice,n=e.getDataAction,r=Object(l.c)((function(e){return e[a].items})),s=Object(l.b)(),i=Object(c.useState)(!0),o=Object(X.a)(i,2),u=o[0],j=o[1];return Object(c.useEffect)((function(){s(n()).finally(j(!1))}),[s,n]),u?Object(L.jsx)($,{}):Object(L.jsx)(he,{children:Object(L.jsx)("section",{className:"bg-black bg-opacity-75 my-24 w-full animate-appear",children:Object(L.jsxs)("div",{className:"container mx-auto",children:[Object(L.jsx)("h2",{children:t}),Object(L.jsxs)("div",{className:"flex gap-8 justify-center",children:[u&&Object(L.jsx)($,{}),Object(L.jsx)(be.a,{maxWidth:814,children:r.size>0&&Object(Q.a)(r.values()).slice(0,1).map((function(e){return Object(L.jsx)(je,{item:e,category:a},e.id)}))}),Object(L.jsx)(be.a,{maxWidth:1279,minWidth:815,children:r.size>0&&Object(Q.a)(r.values()).slice(0,2).map((function(e){return Object(L.jsx)(je,{item:e,category:a},e.id)}))}),Object(L.jsx)(be.a,{maxWidth:1549,minWidth:1280,children:r.size>0&&Object(Q.a)(r.values()).slice(0,3).map((function(e){return Object(L.jsx)(je,{item:e,category:a},e.id)}))}),Object(L.jsx)(be.a,{minWidth:1550,children:r.size>0&&Object(Q.a)(r.values()).slice(0,4).map((function(e){return Object(L.jsx)(je,{item:e,category:a},e.id)}))})]}),Object(L.jsx)("div",{className:"text-center mt-1 py-4",children:Object(L.jsx)(z.b,{to:"/".concat(a),className:"text-center",children:Object(L.jsx)(ue,{className:"w-60",children:"more"})})})]})})})},me=a(3),fe=a.n(me),Oe=a(5),ve=a(25),ge=a(30),_e=a.n(ge),ye="https://react-star-wars-84cf7-default-rtdb.europe-west1.firebasedatabase.app/";function Se(e,t){return we.apply(this,arguments)}function we(){return we=Object(Oe.a)(fe.a.mark((function e(t,a){var c,n,r,s,i,l,o,j=arguments;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.length>2&&void 0!==j[2]?j[2]:10,n=""!==a?"&startAt=".concat(a+1):"",r="".concat(ye).concat(t,'.json/?orderBy="id"').concat(n,"&limitToFirst=").concat(c),e.next=5,_e.a.get(r);case 5:for(o in s=e.sent,i=new Map,l=null,s.data)i.set(s.data[o].id,Object(u.a)(Object(u.a)({},s.data[o]),{},{dbId:o})),l=s.data[o].id;return console.log("Loading Page",i),e.abrupt("return",{dataEnd:i.size<c,next:l,items:i});case 11:case"end":return e.stop()}}),e)}))),we.apply(this,arguments)}var Ne={films:"films",characters:"people",planets:"planets",species:"species",starships:"starships",vehicles:"vehicles"};function Te(e,t){return ke.apply(this,arguments)}function ke(){return(ke=Object(Oe.a)(fe.a.mark((function e(t,a){var c,n,r,s,i,l;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=Ne[t],n="".concat(ye).concat(c,'.json/?orderBy="id"&equalTo=').concat(a),e.next=5,_e.a.get(n);case 5:if(r=e.sent,0===Object.keys(r.data).length){e.next=11;break}return s=Object(X.a)(Object.entries(r.data)[0],2),i=s[0],l=s[1],e.abrupt("return",Object(u.a)(Object(u.a)({},l),{},{dbId:i}));case 11:return e.abrupt("return",null);case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function Ae(e){return Ee.apply(this,arguments)}function Ee(){return(Ee=Object(Oe.a)(fe.a.mark((function e(t){var a,c,n,r;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(a=t.oldState).dataEnd){e.next=10;break}return e.next=5,Se(t.resourceType,a.next);case 5:return c=e.sent,n=new Map([].concat(Object(Q.a)(a.items),Object(Q.a)(c.items))),r={dataEnd:c.dataEnd,next:c.next,items:n},t.dispatch({type:t.actionType,payload:r}),e.abrupt("return",r);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t.dispatch(J(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function Me(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=Object(Oe.a)(fe.a.mark((function e(t){var a,c,n,r,s,i,l;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!((a=t.selectedItems.filter((function(e){return!t.oldState.items.has(+e)}))).length>0)){e.next=26;break}c=new Map,n=Object(ve.a)(a),e.prev=5,n.s();case 7:if((r=n.n()).done){e.next=15;break}return s=r.value,e.next=11,Te(t.resourceType,s);case 11:(i=e.sent)&&c.set(i.id,i);case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:return l=new Map([].concat(Object(Q.a)(t.oldState.items),Object(Q.a)(c))),t.dispatch({type:t.actionType,payload:l}),e.abrupt("return",l);case 26:e.next=32;break;case 28:e.prev=28,e.t1=e.catch(0),console.error(e.t1.message),t.dispatch(J(e.t1.message));case 32:case"end":return e.stop()}}),e,null,[[0,28],[5,17,20,23]])})))).apply(this,arguments)}function Ce(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().films,dispatch:t,resourceType:"films",actionType:g},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function De(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().films,dispatch:a,resourceType:"films",actionType:_,selectedItems:e},t.next=3,Me(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function Pe(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().characters,dispatch:t,resourceType:"people",actionType:j},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Ge(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().characters,dispatch:a,resourceType:"characters",actionType:d,selectedItems:e},t.next=3,Me(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function Re(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().planets,dispatch:t,resourceType:"planets",actionType:O},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Be(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().planets,dispatch:a,resourceType:"planets",actionType:v,selectedItems:e},t.next=3,Me(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function Le(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().starships,dispatch:t,resourceType:"starships",actionType:b},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Fe(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().starships,dispatch:a,resourceType:"starships",actionType:p,selectedItems:e},t.next=3,Me(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function He(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().vehicles,dispatch:t,resourceType:"vehicles",actionType:h},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function We(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().vehicles,dispatch:a,resourceType:"vehicles",actionType:x,selectedItems:e},t.next=3,Me(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function qe(){return function(){var e=Object(Oe.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().species,dispatch:t,resourceType:"species",actionType:m},e.next=3,Ae(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function ze(e){return function(){var t=Object(Oe.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().species,dispatch:a,resourceType:"species",actionType:f,selectedItems:e},t.next=3,Me(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}var Ue=function(e){var t=e.children;return Object(L.jsx)("main",{className:"flex flex-col items-center",children:t})};function Ve(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(Ue,{children:[Object(L.jsx)(xe,{title:"films",stateSlice:"films",getDataAction:Ce}),Object(L.jsx)(xe,{title:"characters",stateSlice:"characters",getDataAction:Pe}),Object(L.jsx)(xe,{title:"starships",stateSlice:"starships",getDataAction:Le}),Object(L.jsx)(xe,{title:"vehicles",stateSlice:"vehicles",getDataAction:He}),Object(L.jsx)(xe,{title:"planets",stateSlice:"planets",getDataAction:Re}),Object(L.jsx)(xe,{title:"species",stateSlice:"species",getDataAction:qe})]})})}var Je=a(43),Ye=function(e){var t=e.title;return Object(L.jsx)("h1",{className:"absolute right-4 top-36 opacity-75 max-w-3/4 text-right leading-none lowercase",children:t})},Ke=["title","stateSlice","getDataAction"],Qe=function(e){var t=e.title,a=void 0===t?"":t,n=e.stateSlice,r=e.getDataAction,s=(Object(Je.a)(e,Ke),""!==a?a:n),i=Object(l.c)((function(e){return e[n].items})),o=Object(l.b)(),u=Object(c.useRef)(null),j=pe(u,!1,!0);return Object(c.useEffect)((function(){j&&o(r()).finally()}),[j,o,r]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(Ye,{title:s}),Object(L.jsx)("div",{className:"container mx-auto",children:Object(L.jsxs)("div",{className:"flex flex-wrap justify-center gap-8 relative",children:[i.size>0&&Object(Q.a)(i.values()).map((function(e){return Object(L.jsx)(je,{item:e,category:n},e.id)})),Object(L.jsx)("div",{ref:u,className:"absolute w-0 h-0 bottom-96"})]})})]})},Xe=function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{className:"container mx-auto text-center pt-64",children:[Object(L.jsx)("span",{className:"text-9xl font-sans font-extrabold text-red-600",children:"404"}),Object(L.jsx)("span",{className:"font-star-wars text-4xl",children:"This planet not exists!"})]})})},Ze=a(22),$e=a.n(Ze),et=function(e){var t=e.children;return Object(L.jsxs)("div",{className:$e.a.body,children:[Object(L.jsx)("div",{className:$e.a.fade}),Object(L.jsx)("section",{className:$e.a.starWars,children:Object(L.jsx)("div",{className:$e.a.crawl,children:t})})]})};function tt(e){var t=e.title,a=e.items,n=e.stateSlice,r=e.getDataAction,s=Object(l.c)((function(e){return e[n].items})),i=Object(l.b)(),o=a?a.map((function(e){return function(e){var t=e.slice(0,-1);return+t.substring(t.lastIndexOf("/")+1)}(e)})):void 0;Object(c.useEffect)((function(){if(o){var e=o.filter((function(e){return!s.has(e)}));i(r(e))}}),[i,o,s,r]);var u=o?o.filter((function(e){return s.has(e)})).map((function(e){return s.get(e)})):void 0;return u?Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{className:"font-star-wars text-3xl my-2 lowercase",children:t}),Object(L.jsx)("div",{className:"flex flex-wrap gap-4",children:u.map((function(e){return Object(L.jsx)(z.b,{to:"/".concat(n,"/").concat(e.id),children:Object(L.jsx)("div",{className:"border-2 p-2 rounded-lg bg-gray-900 border-gray-400",children:e.name?e.name:e.title})},e.id)}))})]}):null}var at=function(){var e=parseInt(Object(U.g)().id),t=Object(l.c)((function(t){return t.films.items.get(e)})),a=Object(l.b)();return Object(c.useEffect)((function(){a(De([e]))}),[e,a]),t?Object(L.jsxs)("div",{children:[Object(L.jsx)(Ye,{title:t.title}),Object(L.jsx)("div",{className:"bg-black bg-opacity-75 py-8",children:Object(L.jsxs)("div",{className:"flex h-96 container mx-auto",children:[Object(L.jsx)(se,{className:"w-auto",category:"films",imgId:t.id,preset:"page",title:t.title}),t.opening_crawl&&Object(L.jsx)(et,{children:Object(L.jsx)("div",{children:t.opening_crawl})})]})}),Object(L.jsx)("div",{className:"container mx-auto bg-black",children:te(t,void 0,!0,["opening_crawl"])}),Object(L.jsxs)("div",{className:"container mx-auto",children:[Object(L.jsx)(tt,{title:"characters",stateSlice:"characters",items:t.characters,getDataAction:Ge}),Object(L.jsx)(tt,{title:"starships",stateSlice:"starships",items:t.starships,getDataAction:Fe}),Object(L.jsx)(tt,{title:"vehicles",stateSlice:"vehicles",items:t.vehicles,getDataAction:We}),Object(L.jsx)(tt,{title:"planets",stateSlice:"planets",items:t.planets,getDataAction:Be}),Object(L.jsx)(tt,{title:"species",stateSlice:"species",items:t.species,getDataAction:ze})]})]}):Object(L.jsx)($,{})},ct=a(27),nt=a.n(ct),rt=a.p+"static/media/star_wars_logo.e3b54fcc.svg",st=a(14),it=a.n(st);function lt(e){var t=e.id,a=e.title,c=e.link;return Object(L.jsx)("li",{className:it.a.navigation__item,children:Object(L.jsxs)("a",{href:c,className:it.a.navigation__link,children:[Object(L.jsx)("span",{children:t}),a]})})}var ot=function(){return Object(L.jsxs)("div",{className:it.a.mobileMenu,children:[Object(L.jsx)("input",{type:"checkbox",className:it.a.menuCheckbox,id:"navi-toggle"}),Object(L.jsx)("label",{htmlFor:"navi-toggle",className:it.a.menuButton,children:Object(L.jsx)("span",{className:it.a.menuIcon,children:"\xa0"})}),Object(L.jsx)("div",{className:it.a.background,children:"\xa0"}),Object(L.jsx)("nav",{className:it.a.navigation__nav,children:Object(L.jsx)("ul",{className:it.a.navigation__list,children:Object(L.jsx)(lt,{id:"01",title:"About Natours",link:"#"})})})]})};function ut(){return Object(L.jsx)("header",{className:nt.a.header,children:Object(L.jsxs)("div",{className:"flex container mx-auto",children:[Object(L.jsx)("div",{className:"w-48 text-center",children:Object(L.jsxs)(z.b,{to:"/",className:"",children:[Object(L.jsx)("img",{src:rt,className:nt.a.logo,alt:"StarWars Fandom"}),Object(L.jsx)("div",{className:nt.a.logoTitle,children:"Fandom"})]})}),Object(L.jsx)("div",{className:" flex-grow"}),Object(L.jsxs)("nav",{children:[Object(L.jsx)(z.c,{to:"/",children:"Home"}),Object(L.jsx)(z.c,{to:"/films",children:"Films"}),Object(L.jsx)(z.c,{to:"/characters",children:"Characters"}),Object(L.jsx)(z.c,{to:"/starships",children:"Starships "}),Object(L.jsx)(z.c,{to:"/vehicles",children:"Vehicles "}),Object(L.jsx)(z.c,{to:"/planets",children:"Planets"}),Object(L.jsx)(z.c,{to:"/species",children:"Species "})]}),Object(L.jsx)(ot,{})]})})}var jt=n.a.memo(ut),dt={films:De,characters:Ge,planets:Be,species:ze,starships:Fe,vehicles:We};function bt(e){var t=e.id,a=e.stateSlice,n=Object(l.c)((function(e){return e[a].items.get(t)})),r=Object(l.b)();if(Object(c.useEffect)((function(){r(dt[a]([t]))}),[t,r,a]),!n)return Object(L.jsx)($,{});var s=n.title?n.title:n.name;return Object(L.jsxs)("div",{children:[Object(L.jsx)(Ye,{title:s}),Object(L.jsx)("div",{className:"bg-black bg-opacity-75 py-8",children:Object(L.jsxs)("div",{className:"flex container mx-auto gap-x-8 flex-wrap",children:[Object(L.jsx)(se,{className:"object-cover",category:a,imgId:n.id,preset:"page",title:s}),Object(L.jsx)("div",{className:"bg-red",children:te(n,void 0,!0,["opening_crawl"])})]})}),Object(L.jsxs)("div",{className:"container mx-auto",children:[Object(L.jsx)(tt,{title:"films",stateSlice:"films",items:n.films,getDataAction:De}),Object(L.jsx)(tt,{title:"people",stateSlice:"characters",items:n.people,getDataAction:Ge}),Object(L.jsx)(tt,{title:"pilots",stateSlice:"characters",items:n.pilots,getDataAction:Ge}),Object(L.jsx)(tt,{title:"residents",stateSlice:"characters",items:n.residents,getDataAction:Ge}),Object(L.jsx)(tt,{title:"starships",stateSlice:"starships",items:n.starships,getDataAction:Fe}),Object(L.jsx)(tt,{title:"vehicles",stateSlice:"vehicles",items:n.vehicles,getDataAction:We}),Object(L.jsx)(tt,{title:"planets",stateSlice:"planets",items:n.planets,getDataAction:Be}),Object(L.jsx)(tt,{title:"species",stateSlice:"species",items:n.species,getDataAction:ze})]})]})}var pt=function(){var e=parseInt(Object(U.g)().id);return Object(L.jsx)(bt,{id:e,stateSlice:"characters"})},ht=function(){var e=parseInt(Object(U.g)().id);return Object(L.jsx)(bt,{id:e,stateSlice:"planets"})},xt=function(){var e=parseInt(Object(U.g)().id);return Object(L.jsx)(bt,{id:e,stateSlice:"starships"})},mt=function(){var e=parseInt(Object(U.g)().id);return Object(L.jsx)(bt,{id:e,stateSlice:"species"})},ft=function(){return Object(L.jsx)("footer",{className:"p-4 mt-24 bg-black text-center text-gray-400 opacity-75",children:Object(L.jsx)("p",{children:"(C) 2021 by Michael Zdolski"})})},Ot=function(){var e=parseInt(Object(U.g)().id);return Object(L.jsx)(bt,{id:e,stateSlice:"vehicles"})};function vt(){var e=Object(U.e)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var gt=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(q,{}),Object(L.jsxs)(z.a,{basename:"",children:[Object(L.jsx)(jt,{}),Object(L.jsx)(vt,{}),Object(L.jsxs)(U.c,{children:[Object(L.jsx)(U.a,{path:"/",element:Object(L.jsx)(Ve,{}),exact:!0}),Object(L.jsx)(U.a,{path:"/films",element:Object(L.jsx)(Qe,{stateSlice:"films",getDataAction:Ce})}),Object(L.jsx)(U.a,{path:"/films/:id",element:Object(L.jsx)(at,{})}),Object(L.jsx)(U.a,{path:"/characters",element:Object(L.jsx)(Qe,{stateSlice:"characters",getDataAction:Pe})}),Object(L.jsx)(U.a,{path:"/characters/:id",element:Object(L.jsx)(pt,{})}),Object(L.jsx)(U.a,{path:"/planets",element:Object(L.jsx)(Qe,{stateSlice:"planets",getDataAction:Re})}),Object(L.jsx)(U.a,{path:"/planets/:id",element:Object(L.jsx)(ht,{})}),Object(L.jsx)(U.a,{path:"/starships",element:Object(L.jsx)(Qe,{stateSlice:"starships",getDataAction:Le})}),Object(L.jsx)(U.a,{path:"/starships/:id",element:Object(L.jsx)(xt,{})}),Object(L.jsx)(U.a,{path:"/vehicles",element:Object(L.jsx)(Qe,{stateSlice:"vehicles",getDataAction:He})}),Object(L.jsx)(U.a,{path:"/vehicles/:id",element:Object(L.jsx)(Ot,{})}),Object(L.jsx)(U.a,{path:"/species",element:Object(L.jsx)(Qe,{stateSlice:"species",getDataAction:qe})}),Object(L.jsx)(U.a,{path:"/species/:id",element:Object(L.jsx)(mt,{})}),Object(L.jsx)(U.a,{path:"*",element:Object(L.jsx)(Xe,{})}),"} />"]})]}),Object(L.jsx)(ft,{}),Object(L.jsx)(K,{})]})};s.a.render(Object(L.jsx)(n.a.StrictMode,{children:Object(L.jsx)(F,{children:Object(L.jsx)(gt,{})})}),document.getElementById("root")),i()}},[[76,1,2]]]);
//# sourceMappingURL=main.ff333569.chunk.js.map