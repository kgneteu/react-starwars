(this["webpackJsonpreact-html5"]=this["webpackJsonpreact-html5"]||[]).push([[0],{14:function(e,t,a){e.exports={mobileMenu:"mobileMenu_mobileMenu__2GWri",menuCheckbox:"mobileMenu_menuCheckbox__3iEkh",menuButton:"mobileMenu_menuButton__2VqWe",background:"mobileMenu_background__26uKo",mobileMenu__nav:"mobileMenu_mobileMenu__nav__3gRJV",mobileMenu__list:"mobileMenu_mobileMenu__list__2BitI",mobileMenu__item:"mobileMenu_mobileMenu__item__191V7",mobileMenu__link:"mobileMenu_mobileMenu__link__1xw0_",menuIcon:"mobileMenu_menuIcon__2UBoW",header:"mobileMenu_header__6aVDV",header__logo_box:"mobileMenu_header__logo_box__2xYMC",header__logo:"mobileMenu_header__logo__3MR-V",header__text_box:"mobileMenu_header__text_box__2lTRD"}},22:function(e,t,a){e.exports={sky:"starsParallax_sky__3quaq",stars:"starsParallax_stars__2-gdl",animStar:"starsParallax_animStar__l6nJ-",stars2:"starsParallax_stars2__2X1lL",stars3:"starsParallax_stars3__JVEtE"}},23:function(e,t,a){e.exports={body:"crawl_body__s-ZWE",fade:"crawl_fade__3plzW",starWars:"crawl_starWars__1j9YL",crawl:"crawl_crawl__1d6em",title:"crawl_title__35cCx"}},27:function(e,t,a){e.exports={container:"neonButton_container__L4WnV",button:"neonButton_button__3aacq",smallButton:"neonButton_smallButton__M82gj",small:"neonButton_small__1XTt9"}},28:function(e,t,a){e.exports={"font-star-wars":"header_font-star-wars__kvvYJ","font-sans":"header_font-sans__2KJM0","text-shadow":"header_text-shadow__GSpnd",header:"header_header__3MbuP",earthSpin:"header_earthSpin__272Rx",logo:"header_logo__3-9wg",logoTitle:"header_logoTitle__2N4k2"}},43:function(e,t,a){e.exports={flipCard:"flipCard_flipCard__3vLUo"}},49:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(17),s=a.n(r),i=(a(49),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))}),l=a(7),o=a(18),u=a(3),p="GET_CHARACTER_PAGE",j="GET_CHARACTERS",b={dataEnd:!1,next:"",items:new Map};var d="GLOBAL_SUCCESS",h="GLOBAL_ERROR",m="CLEAR_TOAST",x={error:!1,success:!1,msg:""};var f="GET_STARSHIP_PAGE",O="GET_STARSHIPS",v={dataEnd:!1,next:"",items:new Map};var g="GET_FILM_PAGE",_="GET_FILMS",y={dataEnd:!1,next:"",items:new Map};var S="GET_VEHICLE_PAGE",w="GET_VEHICLES",N={dataEnd:!1,next:"",items:new Map};var k="GET_SPECIES_PAGE",T="GET_SPECIES",E={dataEnd:!1,next:"",items:new Map};var A="GET_PLANET_PAGE",M="GET_PLANETS",I={dataEnd:!1,next:"",items:new Map};var C=Object(o.combineReducers)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),t.payload);case _:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)(Object(u.a)({},e),t.payload);case j:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},planets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(u.a)(Object(u.a)({},e),t.payload);case M:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},species:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(u.a)(Object(u.a)({},e),t.payload);case T:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},starships:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(u.a)(Object(u.a)({},e),t.payload);case O:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}},toasts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),{},{error:!0,msg:t.payload});case d:return Object(u.a)(Object(u.a)({},e),{},{success:!0,msg:t.payload});case m:return{};default:return e}},vehicles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(u.a)(Object(u.a)({},e),t.payload);case w:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});default:return e}}}),D=C,P=a(42),G=a(41),R=Object(G.composeWithDevTools)(Object(o.applyMiddleware)(P.a)),L=Object(o.createStore)(D,R),B=a(0),W=function(e){var t=e.children;return Object(B.jsx)(l.a,{store:L,children:t})},F=a(22),H=a.n(F),V=function(){return Object(B.jsxs)("div",{className:H.a.sky,children:[Object(B.jsx)("div",{className:H.a.stars}),Object(B.jsx)("div",{className:H.a.stars2}),Object(B.jsx)("div",{className:H.a.stars3})]})},q=a(11),z=a(2),J=a(20),U=function(e){return{type:h,payload:e}},K=function(){return function(e){e({type:m})}};a(54);function Y(){var e=Object(l.c)((function(e){return e.toasts})),t=Object(l.b)();return Object(c.useEffect)((function(){function a(e,t){switch(e){case"SUCCESS":J.b.success(t,{position:J.b.POSITION.BOTTOM_RIGHT,theme:"dark"});break;case"ERROR":J.b.error(t,{position:J.b.POSITION.BOTTOM_RIGHT,theme:"dark"});break;default:return!1}}e&&e.error&&(a("ERROR",e.msg?e.msg:"Error"),t(K()));e&&e.success&&(a("SUCCESS",e.msg?e.msg:"OK!"),t(K()))}),[e,t]),Object(B.jsx)(J.a,{})}var X=a(12),Z=a(9),Q=a.p+"static/media/loader.c44865d4.png";function $(){return Object(B.jsx)("div",{className:"text-center w-auto opacity-0 animate-delay-appear",children:Object(B.jsxs)("div",{className:"w-auto inline-block overflow-hidden",children:[Object(B.jsx)("img",{src:Q,className:"animate-spin-slow inline w-24",alt:"Loading..."}),Object(B.jsx)("p",{className:"inline uppercase animate-pulse-slow",children:"Loading..."})]})})}var ee={average_height:{type:String,label:"Average height",suffix:"cm"},average_lifespan:{type:String,label:"Average lifespan",suffix:"y"},birth_year:{type:String,label:"Birth year"},cargo_capacity:{type:String,label:"Cargo capacity"},classification:{type:String,label:"Classification"},characters:{type:Array,label:"characters"},consumables:{type:String,label:"Consumables"},cost_in_credits:{type:String,label:"Cost in Credits"},climate:{type:String,label:"Climate"},crew:{type:String,label:"Crew"},designation:{type:String,label:"Designation"},diameter:{type:String,label:"Diameter"},director:{type:String,label:"Director"},episode_id:{type:String,label:"Episode Id"},eye_color:{type:String,label:"Eye color"},eye_colors:{type:String,label:"Eye colors"},films:{type:Array,label:"films"},gender:{type:String,label:"Gender"},gravity:{type:String,label:"Gravity"},hair_color:{type:String,label:"Hair color"},hair_colors:{type:String,label:"Hair colors"},height:{type:String,label:"Height",suffix:"cm"},homeworld:{type:String,label:"home world",link:!0},hyperdrive_rating:{type:String,label:"Hyperdrive rating"},language:{type:String,label:"Language"},length:{type:String,label:"Length"},max_atmosphering_speed:{type:String,label:"Max speed"},manufacturer:{type:String,label:"Manufacturer"},mass:{type:String,label:"Mass",suffix:"kg"},MGLT:{type:String,label:"MGLT"},model:{type:String,label:"Model"},opening_crawl:{type:String,label:"Opening Crawl"},orbital_period:{type:String,label:"Orbital period"},passengers:{type:String,label:"Passengers"},people:{type:Array,label:"People"},pilots:{type:Array,label:"Pilots"},planets:{type:Array,label:"planets"},population:{type:String,label:"Population"},producer:{type:String,label:"Producer"},release_date:{type:String,label:"Release date"},residents:{type:Array,label:"Residents"},rotation_period:{type:String,label:"Rotation period"},skin_color:{type:String,label:"Skin color"},skin_colors:{type:String,label:"Skin colors"},species:{type:Array,label:"species"},surface_water:{type:String,label:"Surface water"},starships:{type:Array,label:"starships"},starship_class:{type:String,label:"Starship class"},terrain:{type:String,label:"Terrain"},vehicle_class:{type:String,label:"Vehicle class"},vehicles:{type:Array,label:"vehicles"}};function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=[];for(var r in e){if(t>=0&&n.length===t)break;if(void 0!==ee[r])if(ee[r].type===Array)!a&&e[r].length>0?n.push(Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:ee[r].label}),Object(B.jsx)("td",{children:"Array"})]},r)):a||n.push(Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:ee[r].label}),Object(B.jsx)("td",{children:"Array"})]},r));else{var s=["n/a","unknown","N/A",null];try{s.includes(e[r])||c.includes(r)||n.push(Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{className:"w-1/3",children:Object(B.jsx)("div",{className:"overflow-hidden h-6",children:ee[r].label})}),Object(B.jsx)("td",{children:Object(B.jsx)("div",{className:"overflow-hidden h-6",children:Object(B.jsxs)("p",{className:"overflow-ellipsis",children:[e[r].toString(),ee[r].suffix]})})})]},r))}catch(i){console.log("Unknown key",r)}}}return Object(B.jsx)("table",{children:Object(B.jsx)("tbody",{children:n})})}var ae=a(43),ce=a.n(ae),ne=function(e){var t=e.children;return Object(B.jsx)("article",{className:ce.a.flipCard,children:t})},re=a.p+"static/media/jedi.d534cef7.svg";function se(e){var t,a=e.category,c=e.preset,n=e.imgId,r=e.title,s=e.className;switch(c){case"circle":t="/w_96,c_fill,ar_1:1,g_auto,r_max";break;case"card":t="/c_crop,c_fill,w_350,h_320,g_face";break;case"page":t="/c_crop,w_500,c_fill,h_350,g_face";break;default:t=""}return Object(B.jsx)("img",{className:s,title:r,alt:r,src:"".concat("https://res.cloudinary.com/di6qjuwyo/image/upload").concat(t,"/starwars/").concat(a,"/").concat(n,".jpg"),style:{},onError:function(e){e.currentTarget.src=re}})}var ie=a(27),le=a.n(ie),oe=a(13),ue=function(e){var t=e.small,a=e.className,c=e.children;return Object(B.jsx)("div",{className:Object(oe.a)([le.a.container,a]),children:Object(B.jsx)("div",{className:t?le.a.smallButton:le.a.button,children:c})})};ue.defaultProps={className:""};var pe=ue;function je(e){var t=e.category,a=e.item,c=te(a,5,!0),n=void 0!==a.name?a.name:a.title;return Object(B.jsxs)(ne,{children:[Object(B.jsxs)("section",{children:[Object(B.jsx)("div",{className:"overflow-hidden flex-grow",children:Object(B.jsx)(se,{category:t,imgId:a.id,preset:"card",title:n})}),Object(B.jsx)("div",{className:"text-2xl text-center py-4 bg-black",children:n})]}),Object(B.jsx)("section",{children:Object(B.jsxs)("div",{className:"flex flex-col",children:[Object(B.jsxs)("div",{className:"flex items-center p-2 gap-4",children:[Object(B.jsx)(se,{className:"w-24 h-24 rounded-full",category:t,imgId:a.id,preset:"circle"}),Object(B.jsx)("p",{className:"text-lg",children:n})]}),c,Object(B.jsx)("div",{className:"text-center",children:Object(B.jsx)(q.b,{to:"/".concat(t,"/").concat(a.id),children:Object(B.jsx)(pe,{small:!0,children:"more"})})})]})})]})}var be=a(16),de=a.n(be),he=function(e){var t=e.title,a=e.stateSlice,n=e.getDataAction,r=Object(l.c)((function(e){return e[a].items})),s=Object(l.b)(),i=Object(c.useState)(!0),o=Object(Z.a)(i,2),u=o[0],p=o[1];return Object(c.useEffect)((function(){s(n()).finally(p(!1))}),[s,n]),u?Object(B.jsx)($,{}):Object(B.jsx)("section",{className:"bg-black bg-opacity-75 my-24 w-full animate-appear",children:Object(B.jsxs)("div",{className:"container mx-auto",children:[Object(B.jsx)("h2",{children:t}),Object(B.jsxs)("div",{className:"flex gap-8 justify-center",children:[u&&Object(B.jsx)($,{}),Object(B.jsx)(de.a,{maxWidth:814,children:r.size>0&&Object(X.a)(r.values()).slice(0,1).map((function(e){return Object(B.jsx)(je,{item:e,category:a},e.id)}))}),Object(B.jsx)(de.a,{maxWidth:1279,minWidth:815,children:r.size>0&&Object(X.a)(r.values()).slice(0,2).map((function(e){return Object(B.jsx)(je,{item:e,category:a},e.id)}))}),Object(B.jsx)(de.a,{maxWidth:1549,minWidth:1280,children:r.size>0&&Object(X.a)(r.values()).slice(0,3).map((function(e){return Object(B.jsx)(je,{item:e,category:a},e.id)}))}),Object(B.jsx)(de.a,{minWidth:1550,children:r.size>0&&Object(X.a)(r.values()).slice(0,4).map((function(e){return Object(B.jsx)(je,{item:e,category:a},e.id)}))})]}),Object(B.jsx)("div",{className:"text-center mt-1 py-4",children:Object(B.jsx)(q.b,{to:"/".concat(a),className:"text-center",children:Object(B.jsx)(pe,{className:"w-60",children:"more"})})})]})})},me=a(5),xe=a(4),fe=a.n(xe),Oe=a(26),ve=a(31),ge=a.n(ve),_e="https://react-star-wars-84cf7-default-rtdb.europe-west1.firebasedatabase.app/";function ye(e,t){return Se.apply(this,arguments)}function Se(){return Se=Object(me.a)(fe.a.mark((function e(t,a){var c,n,r,s,i,l,o,p=arguments;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=p.length>2&&void 0!==p[2]?p[2]:10,n=""!==a?"&startAt=".concat(a+1):"",r="".concat(_e).concat(t,'.json/?orderBy="id"').concat(n,"&limitToFirst=").concat(c),e.next=5,ge.a.get(r);case 5:for(o in s=e.sent,i=new Map,l=null,s.data)i.set(s.data[o].id,Object(u.a)(Object(u.a)({},s.data[o]),{},{dbId:o})),l=s.data[o].id;return console.log("Loading Page",i),e.abrupt("return",{dataEnd:i.size<c,next:l,items:i});case 11:case"end":return e.stop()}}),e)}))),Se.apply(this,arguments)}var we={films:"films",characters:"people",planets:"planets",species:"species",starships:"starships",vehicles:"vehicles"};function Ne(e,t){return ke.apply(this,arguments)}function ke(){return(ke=Object(me.a)(fe.a.mark((function e(t,a){var c,n,r,s,i,l;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=we[t],n="".concat(_e).concat(c,'.json/?orderBy="id"&equalTo=').concat(a),e.next=5,ge.a.get(n);case 5:if(r=e.sent,0===Object.keys(r.data).length){e.next=11;break}return s=Object(Z.a)(Object.entries(r.data)[0],2),i=s[0],l=s[1],e.abrupt("return",Object(u.a)(Object(u.a)({},l),{},{dbId:i}));case 11:return e.abrupt("return",null);case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function Te(e){return Ee.apply(this,arguments)}function Ee(){return(Ee=Object(me.a)(fe.a.mark((function e(t){var a,c,n,r;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(a=t.oldState).dataEnd){e.next=10;break}return e.next=5,ye(t.resourceType,a.next);case 5:return c=e.sent,n=new Map([].concat(Object(X.a)(a.items),Object(X.a)(c.items))),r={dataEnd:c.dataEnd,next:c.next,items:n},t.dispatch({type:t.actionType,payload:r}),e.abrupt("return",r);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t.dispatch(U(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function Ae(e){return Me.apply(this,arguments)}function Me(){return(Me=Object(me.a)(fe.a.mark((function e(t){var a,c,n,r,s,i,l;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!((a=t.selectedItems.filter((function(e){return!t.oldState.items.has(+e)}))).length>0)){e.next=26;break}c=new Map,n=Object(Oe.a)(a),e.prev=5,n.s();case 7:if((r=n.n()).done){e.next=15;break}return s=r.value,e.next=11,Ne(t.resourceType,s);case 11:(i=e.sent)&&c.set(i.id,i);case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:return l=new Map([].concat(Object(X.a)(t.oldState.items),Object(X.a)(c))),t.dispatch({type:t.actionType,payload:l}),e.abrupt("return",l);case 26:e.next=32;break;case 28:e.prev=28,e.t1=e.catch(0),console.error(e.t1.message),t.dispatch(U(e.t1.message));case 32:case"end":return e.stop()}}),e,null,[[0,28],[5,17,20,23]])})))).apply(this,arguments)}function Ie(){return function(){var e=Object(me.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().films,dispatch:t,resourceType:"films",actionType:g},e.next=3,Te(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Ce(e){return function(){var t=Object(me.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().films,dispatch:a,resourceType:"films",actionType:_,selectedItems:e},t.next=3,Ae(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function De(){return function(){var e=Object(me.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().characters,dispatch:t,resourceType:"people",actionType:p},e.next=3,Te(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Pe(e){return function(){var t=Object(me.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().characters,dispatch:a,resourceType:"characters",actionType:j,selectedItems:e},t.next=3,Ae(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function Ge(){return function(){var e=Object(me.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().planets,dispatch:t,resourceType:"planets",actionType:A},e.next=3,Te(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Re(e){return function(){var t=Object(me.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().planets,dispatch:a,resourceType:"planets",actionType:M,selectedItems:e},t.next=3,Ae(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function Le(){return function(){var e=Object(me.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().starships,dispatch:t,resourceType:"starships",actionType:f},e.next=3,Te(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Be(e){return function(){var t=Object(me.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().starships,dispatch:a,resourceType:"starships",actionType:O,selectedItems:e},t.next=3,Ae(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function We(){return function(){var e=Object(me.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().vehicles,dispatch:t,resourceType:"vehicles",actionType:S},e.next=3,Te(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Fe(e){return function(){var t=Object(me.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().vehicles,dispatch:a,resourceType:"vehicles",actionType:w,selectedItems:e},t.next=3,Ae(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function He(){return function(){var e=Object(me.a)(fe.a.mark((function e(t,a){var c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={oldState:a().species,dispatch:t,resourceType:"species",actionType:k},e.next=3,Te(c);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}function Ve(e){return function(){var t=Object(me.a)(fe.a.mark((function t(a,c){var n;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={oldState:c().species,dispatch:a,resourceType:"species",actionType:T,selectedItems:e},t.next=3,Ae(n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}var qe=function(e){var t=e.children;return Object(B.jsx)("main",{className:"flex flex-col items-stretch",children:t})};function ze(){return Object(B.jsxs)(qe,{children:[Object(B.jsx)(he,{title:"films",stateSlice:"films",getDataAction:Ie}),Object(B.jsx)(he,{title:"characters",stateSlice:"characters",getDataAction:De}),Object(B.jsx)(he,{title:"starships",stateSlice:"starships",getDataAction:Le}),Object(B.jsx)(he,{title:"vehicles",stateSlice:"vehicles",getDataAction:We}),Object(B.jsx)(he,{title:"planets",stateSlice:"planets",getDataAction:Ge}),Object(B.jsx)(he,{title:"species",stateSlice:"species",getDataAction:He})]})}var Je=a(44),Ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"0px",r=Object(c.useState)(t),s=Object(Z.a)(r,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){var t=e,c=new IntersectionObserver((function(e){var t=Object(Z.a)(e,1)[0];a?t.isIntersecting&&l((function(e){return Number(e)+1})):l(t.isIntersecting)}),{rootMargin:n});return t.current&&c.observe(t.current),function(){t.current&&c.unobserve(t.current)}}),[e,a,n]),i},Ke=function(e){var t=e.title;return Object(B.jsx)("h1",{className:"absolute right-4 top-36 opacity-75 max-w-3/4 text-right leading-none lowercase",children:t})},Ye=["title","stateSlice","getDataAction"],Xe=function(e){var t=e.title,a=void 0===t?"":t,n=e.stateSlice,r=e.getDataAction,s=(Object(Je.a)(e,Ye),""!==a?a:n),i=Object(l.c)((function(e){return e[n].items})),o=Object(l.b)(),u=Object(c.useRef)(null),p=Ue(u,!1,!0);return Object(c.useEffect)((function(){p&&o(r()).finally()}),[p,o,r]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Ke,{title:s}),Object(B.jsx)("div",{className:"container mx-auto ",children:Object(B.jsxs)("div",{className:"flex flex-wrap justify-center gap-8 relative",children:[i.size>0&&Object(X.a)(i.values()).map((function(e){return Object(B.jsx)(je,{item:e,category:n},e.id+(new Date).getMilliseconds())})),Object(B.jsx)("div",{ref:u,className:"absolute w-0 h-0 bottom-96"})]})})]})},Ze=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{className:"container mx-auto text-center pt-64",children:[Object(B.jsx)("span",{className:"text-9xl font-sans font-extrabold text-red-600",children:"404"}),Object(B.jsx)("span",{className:"font-star-wars text-4xl",children:"This planet not exists!"})]})})},Qe=a(23),$e=a.n(Qe),et=function(e){var t=e.children;return Object(B.jsxs)("div",{className:$e.a.body,children:[Object(B.jsx)("div",{className:$e.a.fade}),Object(B.jsx)("section",{className:$e.a.starWars,children:Object(B.jsx)("div",{className:$e.a.crawl,children:t})})]})};function tt(e){var t=e.title,a=e.items,n=e.stateSlice,r=e.getDataAction,s=Object(l.c)((function(e){return e[n].items})),i=Object(l.b)(),o=a?a.map((function(e){return function(e){var t=e.slice(0,-1);return+t.substring(t.lastIndexOf("/")+1)}(e)})):void 0;Object(c.useEffect)((function(){if(o){var e=o.filter((function(e){return!s.has(e)}));i(r(e))}}),[i,o,s,r]);var u=o?o.filter((function(e){return s.has(e)})).map((function(e){return s.get(e)})):void 0;return u?Object(B.jsxs)("div",{children:[Object(B.jsx)("p",{className:"font-star-wars text-3xl my-2 lowercase",children:t}),Object(B.jsx)("div",{className:"flex flex-wrap gap-4",children:u.map((function(e){return Object(B.jsx)(q.b,{to:"/".concat(n,"/").concat(e.id),children:Object(B.jsx)("div",{className:"border-2 p-2 rounded-lg bg-gray-900 border-gray-400",children:e.name?e.name:e.title})},e.id)}))})]}):null}var at=function(){var e=parseInt(Object(z.g)().id),t=Object(l.c)((function(t){return t.films.items.get(e)})),a=Object(l.b)();return Object(c.useEffect)((function(){a(Ce([e]))}),[e,a]),t?Object(B.jsxs)("div",{children:[Object(B.jsx)(Ke,{title:t.title}),Object(B.jsx)("div",{className:"bg-black bg-opacity-75 py-8",children:Object(B.jsxs)("div",{className:"flex h-96 container mx-auto",children:[Object(B.jsx)(se,{className:"w-auto",category:"films",imgId:t.id,preset:"page",title:t.title}),t.opening_crawl&&Object(B.jsx)(et,{children:Object(B.jsx)("div",{children:t.opening_crawl})})]})}),Object(B.jsx)("div",{className:"container mx-auto bg-black",children:te(t,void 0,!0,["opening_crawl"])}),Object(B.jsxs)("div",{className:"container mx-auto",children:[Object(B.jsx)(tt,{title:"characters",stateSlice:"characters",items:t.characters,getDataAction:Pe}),Object(B.jsx)(tt,{title:"starships",stateSlice:"starships",items:t.starships,getDataAction:Be}),Object(B.jsx)(tt,{title:"vehicles",stateSlice:"vehicles",items:t.vehicles,getDataAction:Fe}),Object(B.jsx)(tt,{title:"planets",stateSlice:"planets",items:t.planets,getDataAction:Re}),Object(B.jsx)(tt,{title:"species",stateSlice:"species",items:t.species,getDataAction:Ve})]})]}):Object(B.jsx)($,{})},ct=a(28),nt=a.n(ct),rt=a.p+"static/media/star_wars_logo.e3b54fcc.svg",st=a(14),it=a.n(st);function lt(e){e.id;var t=e.title,a=e.link,c=e.onClose;return Object(B.jsx)("li",{className:it.a.mobileMenu__item,children:Object(B.jsx)(q.c,{to:a,className:it.a.mobileMenu__link,onClick:c,children:t})})}var ot=function(e){var t=e.links,a=Object(c.useRef)(null);return Object(B.jsxs)("div",{className:it.a.mobileMenu,children:[Object(B.jsx)("input",{ref:a,type:"checkbox",className:it.a.menuCheckbox,id:"navi-toggle"}),Object(B.jsx)("label",{htmlFor:"navi-toggle",className:it.a.menuButton,children:Object(B.jsx)("span",{className:it.a.menuIcon,children:"\xa0"})}),Object(B.jsx)("div",{className:it.a.background,children:"\xa0"}),Object(B.jsx)("nav",{className:it.a.mobileMenu__nav,children:Object(B.jsx)("ul",{className:it.a.mobileMenu__list,children:t().map((function(e,t){return Object(B.jsx)(lt,{id:t,link:e.to,title:e.title,onClose:function(){a.current.click()}},t)}))})})]})};function ut(){var e=Object(be.useMediaQuery)({query:"(max-width: 1024px)"});return Object(B.jsx)("header",{className:nt.a.header,children:Object(B.jsxs)("div",{className:"flex container mx-auto",children:[Object(B.jsx)("div",{className:"w-48 text-center",children:Object(B.jsxs)(q.b,{to:"/",className:"",children:[Object(B.jsx)("img",{src:rt,className:nt.a.logo,alt:"StarWars Fandom"}),Object(B.jsx)("div",{className:nt.a.logoTitle,children:"Fandom"})]})}),Object(B.jsx)("div",{className:" flex-grow"}),!e&&Object(B.jsx)("nav",{children:[{to:"/",title:"Home"},{to:"/films",title:"Films"},{to:"/characters",title:"Characters"},{to:"/starships",title:"Starships"},{to:"/vehicles",title:"Vehicles"},{to:"/planets",title:"Planets"},{to:"/species",title:"Species"}].map((function(e,t){return Object(B.jsx)(q.c,{to:e.to,children:e.title},t)}))}),e&&Object(B.jsx)(ot,{links:function(){return[{to:"/",title:"Home"},{to:"/films",title:"Films"},{to:"/characters",title:"Characters"},{to:"/starships",title:"Starships"},{to:"/vehicles",title:"Vehicles"},{to:"/planets",title:"Planets"},{to:"/species",title:"Species"}]}})]})})}var pt=n.a.memo(ut),jt={films:Ce,characters:Pe,planets:Re,species:Ve,starships:Be,vehicles:Fe};function bt(e){var t=e.id,a=e.stateSlice,n=Object(l.c)((function(e){return e[a].items.get(t)})),r=Object(l.b)();if(Object(c.useEffect)((function(){r(jt[a]([t]))}),[t,r,a]),!n)return Object(B.jsx)($,{});var s=n.title?n.title:n.name;return Object(B.jsxs)("div",{children:[Object(B.jsx)(Ke,{title:s}),Object(B.jsx)("div",{className:"bg-black bg-opacity-75 py-8",children:Object(B.jsxs)("div",{className:"flex container mx-auto gap-x-8 flex-wrap",children:[Object(B.jsx)(se,{className:"object-cover",category:a,imgId:n.id,preset:"page",title:s}),Object(B.jsx)("div",{className:"bg-red",children:te(n,void 0,!0,["opening_crawl"])})]})}),Object(B.jsxs)("div",{className:"container mx-auto",children:[Object(B.jsx)(tt,{title:"films",stateSlice:"films",items:n.films,getDataAction:Ce}),Object(B.jsx)(tt,{title:"people",stateSlice:"characters",items:n.people,getDataAction:Pe}),Object(B.jsx)(tt,{title:"pilots",stateSlice:"characters",items:n.pilots,getDataAction:Pe}),Object(B.jsx)(tt,{title:"residents",stateSlice:"characters",items:n.residents,getDataAction:Pe}),Object(B.jsx)(tt,{title:"starships",stateSlice:"starships",items:n.starships,getDataAction:Be}),Object(B.jsx)(tt,{title:"vehicles",stateSlice:"vehicles",items:n.vehicles,getDataAction:Fe}),Object(B.jsx)(tt,{title:"planets",stateSlice:"planets",items:n.planets,getDataAction:Re}),Object(B.jsx)(tt,{title:"species",stateSlice:"species",items:n.species,getDataAction:Ve})]})]})}var dt=function(){var e=parseInt(Object(z.g)().id);return Object(B.jsx)(bt,{id:e,stateSlice:"characters"})},ht=function(){var e=parseInt(Object(z.g)().id);return Object(B.jsx)(bt,{id:e,stateSlice:"planets"})},mt=function(){var e=parseInt(Object(z.g)().id);return Object(B.jsx)(bt,{id:e,stateSlice:"starships"})},xt=function(){var e=parseInt(Object(z.g)().id);return Object(B.jsx)(bt,{id:e,stateSlice:"species"})},ft=function(){return Object(B.jsx)("footer",{className:"p-4 mt-24 bg-black text-center text-gray-400 opacity-75",children:Object(B.jsx)("p",{children:"(C) 2021 by Micha\u0142 Zdolski"})})},Ot=function(){var e=parseInt(Object(z.g)().id);return Object(B.jsx)(bt,{id:e,stateSlice:"vehicles"})};function vt(){var e=Object(z.e)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var gt=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(V,{}),Object(B.jsxs)(q.a,{basename:"",children:[Object(B.jsx)(pt,{}),Object(B.jsx)(vt,{}),Object(B.jsxs)(z.c,{children:[Object(B.jsx)(z.a,{path:"/",element:Object(B.jsx)(ze,{})}),Object(B.jsx)(z.a,{path:"/films",element:Object(B.jsx)(Xe,{stateSlice:"films",getDataAction:Ie})}),Object(B.jsx)(z.a,{path:"/films/:id",element:Object(B.jsx)(at,{})}),Object(B.jsx)(z.a,{path:"/characters",element:Object(B.jsx)(Xe,{stateSlice:"characters",getDataAction:De})}),Object(B.jsx)(z.a,{path:"/characters/:id",element:Object(B.jsx)(dt,{})}),Object(B.jsx)(z.a,{path:"/planets",element:Object(B.jsx)(Xe,{stateSlice:"planets",getDataAction:Ge})}),Object(B.jsx)(z.a,{path:"/planets/:id",element:Object(B.jsx)(ht,{})}),Object(B.jsx)(z.a,{path:"/starships",element:Object(B.jsx)(Xe,{stateSlice:"starships",getDataAction:Le})}),Object(B.jsx)(z.a,{path:"/starships/:id",element:Object(B.jsx)(mt,{})}),Object(B.jsx)(z.a,{path:"/vehicles",element:Object(B.jsx)(Xe,{stateSlice:"vehicles",getDataAction:We})}),Object(B.jsx)(z.a,{path:"/vehicles/:id",element:Object(B.jsx)(Ot,{})}),Object(B.jsx)(z.a,{path:"/species",element:Object(B.jsx)(Xe,{stateSlice:"species",getDataAction:He})}),Object(B.jsx)(z.a,{path:"/species/:id",element:Object(B.jsx)(xt,{})}),Object(B.jsx)(z.a,{path:"*",element:Object(B.jsx)(Ze,{})})]})]}),Object(B.jsx)(ft,{}),Object(B.jsx)(Y,{})]})};s.a.render(Object(B.jsx)(n.a.StrictMode,{children:Object(B.jsx)(W,{children:Object(B.jsx)(gt,{})})}),document.getElementById("root")),i()}},[[74,1,2]]]);
//# sourceMappingURL=main.b513c6bb.chunk.js.map