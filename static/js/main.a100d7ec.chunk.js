(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(34),a=n(4),s="ADD_MASSAGE",o={dialogDat:[{name:"Dima",id:"1"},{name:"Roma",id:"2"},{name:"Petya",id:"3"},{name:"Sasha",id:"4"}],massageData:[{massage:"Hello, how are you?",id:"1"},{massage:"I'm fine, and you?",id:"2"},{massage:"I'am ok. Today is bad wather.",id:"3"}]},c=function(e){return{type:s,newMassageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={massage:t.newMassageText,id:"4"};return e.massageData.push(n),Object(a.a)(Object(a.a)({},e),{},{massageData:Object(r.a)(e.massageData)});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(133),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"d6f0e227-87d6-4128-94b7-d0624916d5da"}}),s={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileIPA object"),c.getProfile(e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}}},134:function(e,t,n){e.exports={usersPhoto:"users_usersPhoto__QwenH",selectedPage:"users_selectedPage__nbLyG",page:"users_page__28p0w"}},167:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__2bQqn",item:"Navbar_item__3Ni0a",active:"Navbar_active__WiIEV"}},294:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=(n(97),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,299)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))}),o=n(68),c=n.n(o),i=n(37),u=n(38),l=n(41),d=n(40),j=(n(167),n(14)),f=n(17),p=n.n(f),b=n(1),g=function(){return Object(b.jsxs)("nav",{className:p.a.nav,children:[Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(j.b,{to:"/profile",activeClassName:p.a.active,children:"Profil"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(j.b,{to:"/dialogs",activeClassName:p.a.active,children:"Messages"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(j.b,{to:"/users",activeClassName:p.a.active,children:"Users"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(j.b,{to:"/news",activeClassName:p.a.active,children:"News"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(j.b,{to:"/music",activeClassName:p.a.active,children:"Music"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(j.b,{to:"/settings",activeClassName:p.a.active,children:"Settings"})})]})},h=n(10),O=function(){return Object(b.jsx)("div",{children:"Music"})},m=function(){return Object(b.jsx)("div",{children:"News"})},v=function(){return Object(b.jsx)("div",{children:"Settings"})},x=n(19),w=n(8),P=n.n(w),y=n(15),_=n(34),C=n(4),S=n(13),I=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(C.a)(Object(C.a)({},e),r):e}))},k="FOLLOW",N="UNFOLLOW",E="SET_USERS",T="SET_CURREN_PAGE",F="SET_TOTAL_USERS_COUNT",U="TOGGLE_IS_FETCHING",A="TOGGLE_IS_FOLLOWING_PROGRESS",z={users:[],pageSize:10,totalUsersCount:0,currentPage:2,isFetching:!0,followingInProgress:[]},M=function(e){return{type:k,payload:{userId:e}}},L=function(e){return{type:N,payload:{userId:e}}},D=function(e){return{type:E,payload:{users:e}}},R=function(e){return{type:T,payload:{currentPage:e}}},G=function(e){return{type:F,payload:{totalUsersCount:e}}},B=function(e){return{type:U,payload:{isFetching:e}}},H=function(e,t){return{type:A,payload:{isFetching:e,userId:t}}},J=function(){var e=Object(y.a)(P.a.mark((function e(t,n,r,a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(H(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(C.a)(Object(C.a)({},e),{},{users:I(e.users,t.payload.userId,"id",{followed:!0})});case N:return Object(C.a)(Object(C.a)({},e),{},{users:I(e.users,t.payload.userId,"id",{followed:!1})});case E:return Object(C.a)(Object(C.a)({},e),{},{users:Object(_.a)(t.payload.users)});case T:return Object(C.a)(Object(C.a)({},e),{},{currentPage:t.payload.currentPage});case F:return Object(C.a)(Object(C.a)({},e),{},{totalUsersCount:t.payload.totalUsersCount});case U:return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.payload.isFetching});case A:return Object(C.a)(Object(C.a)({},e),{},{followingInProgress:t.payload.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.payload.userId]):[e.followingInProgress.filter((function(e){return e!=t.payload.userId}))]});default:return e}},W=n(25),X=n(129),Q=n(57),V=n.n(Q),Z=function(e){for(var t=e.pageSize,n=e.totalItemsCount,a=e.onPageChanged,s=e.currentPage,o=e.portionSize,c=(Object(W.a)(e,["pageSize","totalItemsCount","onPageChanged","currentPage","portionSize"]),Math.ceil(n/t)),i=[],u=1;u<=c;u++)i.push(u);var l=Math.ceil(c/o),d=Object(r.useState)(1),j=Object(X.a)(d,2),f=j[0],p=j[1],g=(f-1)*o+1,h=f*o;return Object(b.jsxs)("div",{className:V.a.paginator,children:[f>1&&Object(b.jsx)("button",{onClick:function(){p(f-1)},children:"Prev"}),i.filter((function(e){return e>=g&&e<=h})).map((function(e){return Object(b.jsx)("span",{className:s===e?V.a.selectedPage+" "+V.a.page:V.a.page,onClick:function(t){a(e)},children:e},e)})),l>f&&Object(b.jsx)("button",{onClick:function(){p(f+1)},children:"Next"})]})},q=n(134),Y=n.n(q),$=n.p+"static/media/pngwing.com.157e4958.png",ee=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(j.b,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:$,className:Y.a.usersPhoto})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:"user.location.country"}),Object(b.jsx)("div",{children:"user.location.city"})]})]})]})},te=function(e){var t=e.pageSize,n=e.totalUsersCount,r=e.onPageChanged,a=e.currentPage,s=e.users,o=e.follow,c=e.unfollow,i=e.followingInProgress;e.toggleFollowingInProgress,Object(W.a)(e,["pageSize","totalUsersCount","onPageChanged","currentPage","users","follow","unfollow","followingInProgress","toggleFollowingInProgress"]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(Z,{onPageChanged:r,pageSize:t,totalItemsCount:n,currentPage:a,portionSize:10}),Object(b.jsx)("div",{children:s.map((function(e){return Object(b.jsx)(ee,{user:e,follow:o,unfollow:c,followingInProgress:i},e.id)}))})]})},ne=n(45),re=n(9),ae=n(137),se=Object(ae.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),oe=function(e){return e.usersPage.pageSize},ce=function(e){return e.usersPage.totalUsersCount},ie=function(e){return e.usersPage.currentPage},ue=function(e){return e.usersPage.isFetching},le=function(e){return e.usersPage.followingInProgress},de=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.onPageChangedThunkCreator(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsersThunkCreator(t,n)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(ne.a,{}):null,Object(b.jsx)(te,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,toggleFollowingInProgress:this.props.toggleFollowingInProgress,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),je=Object(re.d)(Object(x.b)((function(e){return{users:se(e),pageSize:oe(e),totalUsersCount:ce(e),currentPage:ie(e),isFetching:ue(e),followingInProgress:le(e)}}),{follow:function(e){return function(){var t=Object(y.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=S.c.follow.bind(S.c),J(n,e,r,M);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(y.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=S.c.unfollow.bind(S.c),J(n,e,r,L);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:D,setCurrentPage:R,setTotalUsersCount:G,toggleIsFetching:B,toggleFollowingInProgress:H,getUsersThunkCreator:function(e,t){return function(){var n=Object(y.a)(P.a.mark((function n(r){var a;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(B(!0)),r(R(e)),n.next=4,S.c.getUsers(e,t);case 4:a=n.sent,r(B(!1)),r(D(a.items)),r(G(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},onPageChangedThunkCreator:function(e,t){return function(){var n=Object(y.a)(P.a.mark((function n(r){var a;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(B(!0)),r(R(e)),n.next=4,S.c.getUsers(e,t);case 4:a=n.sent,r(B(!1)),r(D(a.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(de),fe=n(93),pe=n.n(fe),be=function(e){return Object(b.jsxs)("header",{className:pe.a.header,children:[Object(b.jsx)("img",{src:"https://w7.pngwing.com/pngs/941/692/png-transparent-black-small-apple-logo-logo-material-apple-logo-black.png"}),Object(b.jsx)("div",{className:pe.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[" ",e.login," - ",Object(b.jsx)("button",{onClick:e.logout,children:"Lod out"})]}):Object(b.jsx)(j.b,{to:"/login",children:"Login"})})]})},ge=n(46),he="auth/SET_USER_DATA",Oe={userId:null,email:null,login:null,isAuth:!1},me=function(e,t,n,r){return{type:he,payload:{userId:e,login:t,email:n,isAuth:r}}},ve=function(){return function(){var e=Object(y.a)(P.a.mark((function e(t){var n,r,a,s,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,o=r.email,t(me(a,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(C.a)(Object(C.a)({},e),t.payload);default:return e}},we=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)(be,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(a.a.Component),Pe=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.userId,email:e.auth.email}}),{logout:function(){return function(){var e=Object(y.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(me(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(we),ye=n(128),_e=n(33),Ce=n(88),Se=n(54),Ie=n.n(Se),ke=Object(ye.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;Object(W.a)(e,["handleSubmit","error"]);return Object(b.jsxs)("form",{onSubmit:t,children:[Object(_e.c)("Email","email",_e.a,[Ce.b]),Object(_e.c)("Password","password",_e.a,[Ce.b],{type:"password"}),Object(_e.c)(null,"rememberMe",_e.a,[],{type:"checkbox"},"remember me"),n&&Object(b.jsx)("div",{className:Ie.a.formSummeryError,children:n}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})})),Ne=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(y.a)(P.a.mark((function r(a){var s,o,c;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(ve()):(o=s.data.messages.length>0?s.data.messages[0]:"Some error!",c=Object(ge.a)("login",{_error:o}),a(c));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(b.jsx)(h.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(ke,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ee={initialized:!1},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},Fe=n(96),Ue=n(127),Ae=n(136),ze=n(130),Me=Object(re.c)({profilePage:Fe.b,dialogPage:Ue.b,usersPage:K,auth:xe,app:Te,form:ze.a}),Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,De=Object(re.e)(Me,Le(Object(re.a)(Ae.a)));window.store=De;var Re=De,Ge=a.a.lazy((function(){return n.e(4).then(n.bind(null,301))})),Be=a.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),He=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(Pe,{}),Object(b.jsx)(g,{}),Object(b.jsxs)("div",{className:"app-wrapper-content",children:[Object(b.jsx)(h.b,{path:"/dialogs",render:function(){return Object(b.jsx)(a.a.Suspense,{fallback:Object(b.jsx)(ne.a,{}),children:Object(b.jsx)(Ge,{})})}}),Object(b.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(a.a.Suspense,{fallback:Object(b.jsx)(ne.a,{}),children:Object(b.jsx)(Be,{})})}}),Object(b.jsx)(h.b,{path:"/music",render:function(){return Object(b.jsx)(O,{})}}),Object(b.jsx)(h.b,{path:"/news",render:function(){return Object(b.jsx)(m,{})}}),Object(b.jsx)(h.b,{path:"/settings",render:function(){return Object(b.jsx)(v,{})}}),Object(b.jsx)(h.b,{path:"/users",render:function(){return Object(b.jsx)(je,{})}}),Object(b.jsx)(h.b,{path:"/login",render:function(){return Object(b.jsx)(Ne,{})}})]})]}):Object(b.jsx)(ne.a,{})}}]),n}(a.a.Component),Je=Object(re.d)(h.f,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(ve()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(He),Ke=function(){return Object(b.jsx)(j.a,{children:Object(b.jsx)(x.a,{store:Re,children:Object(b.jsx)(Je,{})})})};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Ke,{})}),document.getElementById("root")),s()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(4),a=n(25),s=(n(0),n(54)),o=n.n(s),c=n(91),i=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,s=e.children,c=(Object(a.a)(e,["input","meta","children"]),n&&r);return Object(i.jsxs)("div",{className:o.a.formControl+" "+(c?o.a.error:""),children:[Object(i.jsx)("div",{children:s}),c&&Object(i.jsxs)("span",{children:[" ",r]})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsxs)(u,Object(r.a)(Object(r.a)({},e),{},{children:[Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))," "]}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsxs)(u,Object(r.a)(Object(r.a)({},e),{},{children:[Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))," "]}))},j=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.a,Object(r.a)({placeholder:e,name:t,component:n,validate:a},s))," ",o]})}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var r=n.p+"static/media/loading-waiting.ccaed95b.gif",a=n(1),s=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},54:function(e,t,n){e.exports={"form-control":"FormsControls_form-control__yOJD0",formControl:"FormsControls_formControl__194iG",error:"FormsControls_error__3Z6nB",formSummeryError:"FormsControls_formSummeryError__29bQ-"}},57:function(e,t,n){e.exports={paginator:"Paginator_paginator__x3JVP",selectedPage:"Paginator_selectedPage__3XK0K",page:"Paginator_page__12C5g"}},88:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length ".concat(e," symbols")}}},93:function(e,t,n){e.exports={header:"header_header__XKB1_",loginBlock:"header_loginBlock__3xY9M"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(8),a=n.n(r),s=n(15),o=n(34),c=n(4),i=n(13),u="ADD_POST",l="DELETE_POST",d="SET_USER_PROFILE",j="SET_STATUS",f={massageMyPost:[{id:"1",massage:"Hi, how are you?",likesCounter:"5"},{id:"2",massage:"It's my first post",likesCounter:"12"}],newPostText:"it-kamasutra.com",profile:"",status:""},p=function(e){return{type:u,newPostText:e}},b=function(e){return{type:j,payload:{status:e}}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,payload:{profile:a}}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:"5",massage:t.newPostText,likesCounter:"0"};return e.massageMyPost.push(n),Object(c.a)(Object(c.a)({},e),{},{massageMyPost:Object(o.a)(e.massageMyPost)});case j:return Object(c.a)(Object(c.a)({},e),{},{status:t.payload.status});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)({},t.payload.profile)});case l:return Object(c.a)(Object(c.a)({},e),{},{massageMyPost:e.massageMyPost.filter((function(e){return e.id!=t.postId}))});default:return e}}},97:function(e,t,n){}},[[294,1,2]]]);
//# sourceMappingURL=main.a100d7ec.chunk.js.map