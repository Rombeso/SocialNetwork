(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={header:"header_header__XKB1_",headerContainer:"header_headerContainer__31chl",headerContainerItems:"header_headerContainerItems__3gaXa",leftSide:"header_leftSide__1kjCG",logoBlock:"header_logoBlock__27LNs",notificationBlock:"header_notificationBlock__1goNT",playerBlock:"header_playerBlock__3YuCU",rightSide:"header_rightSide__2fhJr",loginBlock:"header_loginBlock__3xY9M",userBlock:"header_userBlock__3KTQ0",userName:"header_userName__EoRwq",userPhoto:"header_userPhoto__2txrH",downIcon:"header_downIcon__1dq-w",loginLink:"header_loginLink__3H5V0",dropDownContainer:"header_dropDownContainer__34AXU",dropDown:"header_dropDown__2STC6",dropDownBlock:"header_dropDownBlock__3uDtG",line:"header_line__1EKLD"}},100:function(e,t,n){e.exports={appBody:"App_appBody__3I9Te",appWrapper:"App_appWrapper__26Jwk"}},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return w}));var r=n(7),a=n.n(r),s=n(15),o=n(40),c=n(4),i=n(13),u=n(35),l="ADD_POST",d="DELETE_POST",j="SET_USER_PROFILE",h="SET_STATUS",p="SAVE_PHOTO_SUCCESS",f={massageMyPost:[{id:"1",massage:'Avoiding the phrase "I don\'t have time...", will soon help you to realize that you do have the time needed for just about anything you choose to accomplish in life.',likesCounter:"5",viewers:"20"},{id:"2",massage:"Experience shows that success is due less to ability than to zeal. The winner is he who gives himself to his work, body and soul.",likesCounter:"12",viewers:"56"}],newPostText:"it-kamasutra.com",profile:"",status:""},b=function(e){return{type:l,newPostText:e}},g=function(e){return{type:h,payload:{status:e}}},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:j,payload:{profile:a}}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,payload:{photo:a}}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,o,c,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=9;break}n(O(s)),t.next=13;break;case 9:return c=o.data.messages.length>0?o.data.messages[0]:"Some error!",l=Object(u.b)("edit-profile",{_error:c}),n(l),t.abrupt("return",Promise.reject(o.data.messages[0]));case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:"5",massage:t.newPostText,likesCounter:"0",viewers:"0"};return e.massageMyPost.unshift(n),Object(c.a)(Object(c.a)({},e),{},{massageMyPost:Object(o.a)(e.massageMyPost)});case h:return Object(c.a)(Object(c.a)({},e),{},{status:t.payload.status});case j:return Object(c.a)(Object(c.a)({},e),{},{profile:t.payload.profile});case d:return Object(c.a)(Object(c.a)({},e),{},{massageMyPost:e.massageMyPost.filter((function(e){return e.id!=t.postId}))});case p:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.payload.photo})});default:return e}}},104:function(e,t,n){},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(139),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"d6f0e227-87d6-4128-94b7-d0624916d5da"}}),s={getUsers:function(e,t){return a.get("users",{params:{page:e,count:t}}).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileIPA object"),c.getProfile(e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(40),a=n(4),s="ADD_MASSAGE",o={dialogDat:[{name:"Dima",id:"1"},{name:"Roma",id:"2"},{name:"Petya",id:"3"},{name:"Sasha",id:"4"}],massageData:[{massage:"Hello, how are you?",id:"1"},{massage:"I'm fine, and you?",id:"2"},{massage:"I'am ok. Today is bad wather.",id:"3"}]},c=function(e){return{type:s,newMassageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={massage:t.newMassageText,id:"4"};return e.massageData.push(n),Object(a.a)(Object(a.a)({},e),{},{massageData:Object(r.a)(e.massageData)});default:return e}}},140:function(e,t,n){e.exports={preloader:"Preloader_preloader__1sbiN"}},173:function(e,t,n){},19:function(e,t,n){e.exports={container:"Navbar_container__3PRGM",navContainer:"Navbar_navContainer__2ufoZ",item:"Navbar_item__3Ni0a",icon:"Navbar_icon__h5Tgj",active:"Navbar_active__WiIEV",line:"Navbar_line__2gIqT",footer:"Navbar_footer__Urc36"}},23:function(e,t,n){"use strict";n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return w})),n.d(t,"i",(function(){return _})),n.d(t,"h",(function(){return C})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return P})),n.d(t,"b",(function(){return N})),n.d(t,"j",(function(){return S}));var r=n(7),a=n.n(r),s=n(15),o=n(40),c=n(4),i=n(13),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(c.a)(Object(c.a)({},e),r):e}))},l="FOLLOW",d="UNFOLLOW",j="SET_USERS",h="SET_CURREN_PAGE",p="SET_TOTAL_USERS_COUNT",f="TOGGLE_IS_FETCHING",b="TOGGLE_IS_FOLLOWING_PROGRESS",g={users:[],pageSize:10,totalUsersCount:0,currentPage:2,isFetching:!0,followingInProgress:[]},O=function(e){return{type:l,payload:{userId:e}}},m=function(e){return{type:d,payload:{userId:e}}},x=function(e){return{type:j,payload:{users:e}}},v=function(e){return{type:h,payload:{currentPage:e}}},w=function(e){return{type:p,payload:{totalUsersCount:e}}},_=function(e){return{type:f,payload:{isFetching:e}}},C=function(e,t){return{type:b,payload:{isFetching:e,userId:t}}},k=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(_(!0)),r(v(e)),n.next=4,i.d.getUsers(e,t);case 4:s=n.sent,r(_(!1)),r(x(s.items)),r(w(s.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},P=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(_(!0)),r(v(e)),n.next=4,i.d.getUsers(e,t);case 4:s=n.sent,r(_(!1)),r(x(s.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(s(n)),t(C(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),N=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=i.d.follow.bind(i.d),y(n,e,r,O);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=i.d.unfollow.bind(i.d),y(n,e,r,m);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{users:u(e.users,t.payload.userId,"id",{followed:!0})});case d:return Object(c.a)(Object(c.a)({},e),{},{users:u(e.users,t.payload.userId,"id",{followed:!1})});case j:return Object(c.a)(Object(c.a)({},e),{},{users:Object(o.a)(t.payload.users)});case h:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.payload.currentPage});case p:return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.payload.totalUsersCount});case f:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.payload.isFetching});case b:return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:t.payload.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.payload.userId]):[e.followingInProgress.filter((function(e){return e!=t.payload.userId}))]});default:return e}}},25:function(e,t,n){e.exports={userContainer:"users_userContainer__37lcI",line:"users_line__2I5mF",avatarBlock:"users_avatarBlock__1qd0P",usersBlock:"users_usersBlock__3in5S",mainBlock:"users_mainBlock__1ThtG",status:"users_status__171ae",name:"users_name__2O20F"}},29:function(e,t,n){e.exports={children:"FormsControls_children__3Wbtv",formControl:"FormsControls_formControl__194iG",error:"FormsControls_error__3Z6nB",formSummeryError:"FormsControls_formSummeryError__29bQ-",title:"FormsControls_title__1yxal",loginContainer:"FormsControls_loginContainer__22QiB",loginBottom:"FormsControls_loginBottom__5N8pr"}},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(4),a=n(28),s=(n(1),n(29)),o=n.n(s),c=n(97),i=n(0),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,s=e.children,c=(Object(a.a)(e,["input","meta","children"]),n&&r);return Object(i.jsxs)("div",{className:o.a.formControl+" "+(c?o.a.error:""),children:[Object(i.jsx)("div",{children:s}),c&&Object(i.jsxs)("span",{children:[" ",r]})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsxs)(u,Object(r.a)(Object(r.a)({},e),{},{children:[Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({className:o.a.children},t),n))," "]}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsxs)(u,Object(r.a)(Object(r.a)({},e),{},{children:[Object(i.jsx)("input",Object(r.a)(Object(r.a)({className:o.a.children},t),n))," "]}))},j=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.a,Object(r.a)({placeholder:e,name:t,component:n,validate:a},s))," ",o]})}},300:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=(n(104),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,305)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))}),o=n(73),c=n.n(o),i=n(43),u=n(44),l=n(47),d=n(46),j=(n(173),n(14)),h=n(19),p=n.n(h),f=n(0),b=function(){return Object(f.jsx)("nav",{className:p.a.container,children:Object(f.jsxs)("div",{className:p.a.navContainer,children:[Object(f.jsxs)("div",{className:p.a.item,children:[Object(f.jsx)("div",{className:p.a.icon,children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:Object(f.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{to:"/profile",activeClassName:p.a.active,children:"Profile"})})]}),Object(f.jsxs)("div",{className:p.a.item,children:[Object(f.jsx)("div",{className:p.a.icon,children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:Object(f.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"})})}),Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{to:"/users",activeClassName:p.a.active,children:"Users"})})]}),Object(f.jsxs)("div",{className:p.a.item,children:[Object(f.jsx)("div",{className:p.a.icon,children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:Object(f.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"})})}),Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{to:"/friends",activeClassName:p.a.active,children:"Friends"})})]}),Object(f.jsx)("div",{className:p.a.line}),Object(f.jsx)("div",{className:p.a.footer,children:Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"#",children:"Write to developer"})})})]})})},g=n(11),O=function(){return Object(f.jsx)("div",{children:"Music"})},m=function(){return Object(f.jsx)("div",{children:"News"})},x=function(){return Object(f.jsx)("div",{children:"Settings"})},v=n(100),w=n.n(v),_=n(98),C=n(72),k=n(10),P=n.n(k),y=n(38),N=function(e){var t=e.login,n=e.isAuth,a=e.logout,s=e.profile,o=Object(r.useState)(!1),c=Object(C.a)(o,2),i=c[0],u=c[1];return Object(f.jsx)("header",{className:P.a.header,children:Object(f.jsx)("div",{className:P.a.headerContainer,children:Object(f.jsxs)("div",{className:P.a.headerContainerItems,children:[Object(f.jsxs)("div",{className:P.a.leftSide,children:[Object(f.jsx)("div",{className:P.a.logoBlock,children:Object(f.jsx)(j.b,{to:"/profile",children:Object(f.jsxs)("svg",{viewBox:"0 0 276 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(f.jsx)("path",{d:"M83.4343 29.7801C83.4343 33.4241 80.0416 36.0629 75.2667 36.0629H64.0835V13.4451H74.8897C79.539 13.4451 82.806 15.9582 82.806 19.4765C82.806 21.8639 81.5495 23.3718 79.6646 24.2514C81.6751 25.0053 83.4343 27.0157 83.4343 29.7801ZM68.984 17.5917V22.4922H74.7641C76.5233 22.4922 77.6542 21.487 77.6542 20.1048C77.6542 18.7226 76.3976 17.5917 74.7641 17.5917H68.984ZM75.2667 31.9163C77.1516 31.9163 78.5338 30.7854 78.5338 29.1519C78.5338 27.5184 77.2772 26.3875 75.2667 26.3875H68.984V31.9163H75.2667Z",fill:"black"}),Object(f.jsx)("path",{d:"M101.905 35.9372L94.1148 27.0158H92.8582V35.9372H87.832V13.4451H92.8582V22.1152H94.1148L101.654 13.4451H107.56L98.1357 24.2514L108.439 35.9372H101.905Z",fill:"black"}),Object(f.jsx)("path",{d:"M108.439 24.754C108.439 17.9686 113.466 13.0681 120.502 13.0681C127.539 13.0681 132.565 17.9686 132.565 24.754C132.565 31.5393 127.539 36.4398 120.502 36.4398C113.466 36.4398 108.439 31.5393 108.439 24.754ZM127.288 24.754C127.288 20.4817 124.523 17.5917 120.502 17.5917C116.481 17.5917 113.717 20.4817 113.717 24.754C113.717 29.0262 116.481 31.9163 120.502 31.9163C124.523 31.9163 127.288 29.0262 127.288 24.754Z",fill:"black"}),Object(f.jsx)("path",{d:"M151.79 13.4451H156.817V35.9372H151.79V26.8901H141.738V35.9372H136.712V13.4451H141.738V22.3665H151.79V13.4451Z",fill:"black"}),Object(f.jsx)("path",{d:"M167.623 35.9372V17.9686H159.832V13.4451H180.314V17.9686H172.523V35.9372H167.623Z",fill:"black"}),Object(f.jsx)("path",{d:"M201.926 23.3718V35.9372H198.282L197.277 32.4189C196.146 34.3037 193.759 36.4398 190.115 36.4398C185.591 36.4398 182.324 33.4241 182.324 29.2775C182.324 25.1309 185.591 22.2409 192.251 22.2409H197.151C196.9 19.3508 195.392 17.3404 192.628 17.3404C190.366 17.3404 188.858 18.5969 188.104 19.9791L183.581 19.2252C184.712 15.3299 188.607 13.0681 192.879 13.0681C198.408 13.0681 201.926 16.8377 201.926 23.3718ZM197.026 26.1362H192.377C188.607 26.1362 187.35 27.3927 187.35 29.0262C187.35 30.911 188.858 32.1676 191.371 32.1676C194.638 32.1676 197.026 29.7802 197.026 26.1362Z",fill:"black"}),Object(f.jsx)("path",{d:"M221.277 35.9372L213.487 27.0158H212.23V35.9372H207.204V13.4451H212.23V22.1152H213.487L221.026 13.4451H226.932L217.508 24.2514L227.811 35.9372H221.277Z",fill:"black"}),Object(f.jsx)("path",{d:"M236.858 35.9372V17.9686H229.068V13.4451H249.55V17.9686H241.759V35.9372H236.858Z",fill:"black"}),Object(f.jsx)("path",{d:"M274.68 26.1362H256.586C257.089 29.6545 259.602 31.9163 263.371 31.9163C266.01 31.9163 268.021 30.7854 269.152 29.1519L273.801 29.9058C272.167 34.1781 267.769 36.4398 262.994 36.4398C256.209 36.4398 251.309 31.5393 251.309 24.754C251.309 17.9686 256.209 13.0681 262.994 13.0681C269.78 13.0681 274.68 17.9686 274.68 24.5027C274.806 25.1309 274.68 25.6336 274.68 26.1362ZM256.963 22.2409H269.403C268.523 19.4765 266.261 17.466 263.12 17.466C260.104 17.3404 257.717 19.3508 256.963 22.2409Z",fill:"black"}),Object(f.jsx)("path",{d:"M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96V23.04Z",fill:"#0077FF"}),Object(f.jsx)("path",{d:"M25.54 34.5801C14.6 34.5801 8.3601 27.0801 8.1001 14.6001H13.5801C13.7601 23.7601 17.8 27.6401 21 28.4401V14.6001H26.1602V22.5001C29.3202 22.1601 32.6398 18.5601 33.7598 14.6001H38.9199C38.0599 19.4801 34.4599 23.0801 31.8999 24.5601C34.4599 25.7601 38.5601 28.9001 40.1201 34.5801H34.4399C33.2199 30.7801 30.1802 27.8401 26.1602 27.4401V34.5801H25.54Z",fill:"white"})]})})}),Object(f.jsx)("div",{className:P.a.notificationBlock,children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:Object(f.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})}),Object(f.jsx)("div",{className:P.a.playerBlock,children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:Object(f.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"})})})]}),Object(f.jsx)("div",{className:P.a.rightSide,children:Object(f.jsx)("div",{className:P.a.loginBlock,children:n&&s.photos?Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:P.a.userBlock,onClick:function(){u(!i)},children:[Object(f.jsx)("div",{className:P.a.userName,children:t}),Object(f.jsx)("div",{className:P.a.userPhoto,children:Object(f.jsx)("img",{src:s.photos.large||y.a})}),Object(f.jsx)("div",{className:P.a.downIcon,children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:Object(f.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"})})})]}),i&&Object(f.jsx)("div",{className:P.a.dropDownContainer,onMouseLeave:function(){u(!1)},children:Object(f.jsxs)("div",{className:P.a.dropDown,children:[Object(f.jsx)("div",{className:P.a.dropDownBlock,children:Object(f.jsxs)(j.b,{to:"/profile",children:[Object(f.jsx)("div",{className:P.a.userPhoto,children:Object(f.jsx)("img",{src:s.photos.large||y.a})}),Object(f.jsxs)("div",{className:P.a.userName,children:[t,Object(f.jsx)("p",{children:"Go to profile"})]})]})}),Object(f.jsx)("div",{className:P.a.line}),Object(f.jsx)("div",{className:P.a.dropDownBlock,children:Object(f.jsx)("button",{onClick:function(){return a(),Object(f.jsx)(g.a,{to:"/login"})},children:"Log out"})})]})})]}):Object(f.jsx)("div",{className:P.a.loginLink,children:Object(f.jsx)(j.b,{to:"/login",children:"Login"})})})})]})})})},S=n(17),I=n(7),H=n.n(I),M=n(15),B=n(4),U=n(13),F=n(35),T="auth/SET_USER_DATA",E="auth/GET_CAPTCHA_URL_SUCCESS",A={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},L=function(e,t,n,r){return{type:T,payload:{userId:e,login:t,email:n,isAuth:r}}},V=function(e){return{type:E,payload:{captchaUrl:e}}},z=function(){return function(){var e=Object(M.a)(H.a.mark((function e(t){var n,r,a,s,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,o=r.email,t(L(a,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var e=Object(M.a)(H.a.mark((function e(t){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(V(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:case T:return Object(B.a)(Object(B.a)({},e),t.payload);default:return e}},G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(N,{isAuth:this.props.isAuth,profile:this.props.profile,login:this.props.login,logout:this.props.logout})}}]),n}(a.a.Component),R=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.userId,email:e.auth.email,profile:e.profilePage.profile}}),{logout:function(){return function(){var e=Object(M.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,U.a.logout();case 3:0===e.sent.data.resultCode&&t(L(null,null,null,!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(G),W=n(135),X=n(30),q=n(75),K=n(29),J=n.n(K),Q=Object(W.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(f.jsxs)("form",{onSubmit:t,children:[Object(X.c)("Email","email",X.a,[q.b]),Object(X.c)("Password","password",X.a,[q.b],{type:"password"}),Object(X.c)(null,"rememberMe",X.a,[],{type:"checkbox"},"remember me"),r&&Object(f.jsx)("img",{src:r}),r&&Object(X.c)("Symbols from image","captchaUrl",X.a,[q.b]),n&&Object(f.jsx)("div",{className:J.a.formSummeryError,children:n}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:J.a.loginBottom,children:"Login"})})]})})),Y=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(M.a)(H.a.mark((function a(s){var o,c,i;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,U.a.login(e,t,n,r);case 2:0===(o=a.sent).data.resultCode?(s(z()),s(V(null))):(10===o.data.resultCode&&s(D()),c=o.data.messages.length>0?o.data.messages[0]:"Some error!",i=Object(F.b)("login",{_error:c}),s(i));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return Object(S.d)((function(e){return e.auth.isAuth}))?Object(f.jsx)(g.a,{to:"/profile"}):Object(f.jsxs)("div",{className:J.a.loginContainer,children:[Object(f.jsx)("div",{className:J.a.title,children:"Sign In"}),Object(f.jsx)("p",{children:"login: larionovra@gmail.com"}),Object(f.jsx)("p",{children:"password: qwerty1234"}),Object(f.jsx)(Q,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captchaUrl)},captchaUrl:e.captchaUrl})]})})),$=n(9),ee={initialized:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(B.a)(Object(B.a)({},e),{},{initialized:!0});default:return e}},ne=n(103),re=n(134),ae=n(23),se=n(142),oe=n(136),ce=Object($.c)({profilePage:ne.b,dialogPage:re.b,usersPage:ae.a,auth:Z,app:te,form:oe.a}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,ue=Object($.e)(ce,ie(Object($.a)(se.a)));window.store=ue;var le=ue,de=n(51),je=a.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),he=a.a.lazy((function(){return n.e(3).then(n.bind(null,306))})),pe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:w.a.appBody,children:[Object(f.jsx)(R,{}),Object(f.jsxs)("div",{className:w.a.appWrapper,children:[Object(f.jsx)(b,{}),Object(f.jsxs)(g.d,{children:[Object(f.jsx)(g.b,{path:"/dialogs",render:function(){return Object(f.jsx)(a.a.Suspense,{fallback:Object(f.jsx)(de.a,{}),children:Object(f.jsx)(je,{})})}}),Object(f.jsx)(g.b,{path:"/profile/:userId?",render:function(){return Object(f.jsx)(a.a.Suspense,{fallback:Object(f.jsx)(de.a,{}),children:Object(f.jsx)(he,{})})}}),Object(f.jsx)(g.b,{path:"/music",render:function(){return Object(f.jsx)(O,{})}}),Object(f.jsx)(g.b,{path:"/news",render:function(){return Object(f.jsx)(m,{})}}),Object(f.jsx)(g.b,{path:"/settings",render:function(){return Object(f.jsx)(x,{})}}),Object(f.jsx)(g.b,{path:"/users",render:function(){return Object(f.jsx)(_.a,{})}}),Object(f.jsx)(g.b,{path:"/friends",render:function(){return Object(f.jsx)(_.a,{})}}),Object(f.jsx)(g.b,{path:"/login",render:function(){return Object(f.jsx)(Y,{})}}),Object(f.jsx)(g.b,{path:"/",exact:!0,children:Object(f.jsx)(g.a,{to:"/profile"})}),Object(f.jsx)(g.b,{path:"*",render:function(){return Object(f.jsx)("div",{style:{fontSize:"xx-large",margin:"0 auto"},children:"404 PAGE NOT FOUND"})}})]})]})]}):Object(f.jsx)(de.a,{})}}]),n}(a.a.Component),fe=Object($.d)(g.g,Object(S.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(z()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(pe),be=function(){return Object(f.jsx)(j.a,{children:Object(f.jsx)(S.a,{store:le,children:Object(f.jsx)(fe,{})})})};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(be,{})}),document.getElementById("root")),s()},38:function(e,t,n){"use strict";t.a=n.p+"static/media/pngwing.com.157e4958.png"},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(1);var r=n.p+"static/media/loading-waiting.ccaed95b.gif",a=n(140),s=n.n(a),o=n(0),c=function(){return Object(o.jsx)("div",{className:s.a.preloader,children:Object(o.jsx)("img",{src:r})})}},61:function(e,t,n){e.exports={paginator:"Paginator_paginator__x3JVP",selectedPage:"Paginator_selectedPage__3XK0K",page:"Paginator_page__12C5g"}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length ".concat(e," symbols")}}},79:function(e,t,n){e.exports={friendBlock:"FriendsForProfile_friendBlock__15Xt6",usersPhoto:"FriendsForProfile_usersPhoto__3BuzU",userName:"FriendsForProfile_userName__1CCvR"}},98:function(e,t,n){"use strict";var r=n(43),a=n(44),s=n(47),o=n(46),c=n(1),i=n.n(c),u=n(17),l=n(23),d=n(28),j=n(72),h=n(61),p=n.n(h),f=n(0),b=function(e){for(var t=e.pageSize,n=e.totalItemsCount,r=e.onPageChanged,a=e.currentPage,s=e.portionSize,o=(Object(d.a)(e,["pageSize","totalItemsCount","onPageChanged","currentPage","portionSize"]),Math.ceil(n/t)),i=[],u=1;u<=o;u++)i.push(u);var l=Math.ceil(o/s),h=Object(c.useState)(1),b=Object(j.a)(h,2),g=b[0],O=b[1],m=(g-1)*s+1,x=g*s;return Object(f.jsxs)("div",{className:p.a.paginator,children:[g>1&&Object(f.jsx)("button",{onClick:function(){O(g-1)},children:"\u2190"}),i.filter((function(e){return e>=m&&e<=x})).map((function(e){return Object(f.jsx)("span",{className:a===e?p.a.selectedPage+" "+p.a.page:p.a.page,onClick:function(t){r(e)},children:e},e)})),l>g&&Object(f.jsx)("button",{onClick:function(){O(g+1)},children:"\u2192"})]})},g=n(25),O=n.n(g),m=n(38),x=n(14),v=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:O.a.userContainer,children:[Object(f.jsx)("div",{className:O.a.avatarBlock,children:Object(f.jsx)(x.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!=t.photos.small?t.photos.small:m.a,className:O.a.usersPhoto})})}),Object(f.jsxs)("div",{className:O.a.mainBlock,children:[Object(f.jsx)("div",{className:O.a.name,children:t.name}),Object(f.jsx)("div",{className:O.a.status,children:t.status?t.status:" "}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]})]})})},w=function(e){var t=e.pageSize,n=e.totalUsersCount,r=e.onPageChanged,a=e.currentPage,s=e.users,o=e.follow,c=e.unfollow,i=e.followingInProgress;e.toggleFollowingInProgress,Object(d.a)(e,["pageSize","totalUsersCount","onPageChanged","currentPage","users","follow","unfollow","followingInProgress","toggleFollowingInProgress"]);return Object(f.jsxs)("div",{className:O.a.usersBlock,children:[Object(f.jsx)(b,{onPageChanged:r,pageSize:t,totalItemsCount:n,currentPage:a,portionSize:10}),Object(f.jsx)("div",{children:s.map((function(e){return Object(f.jsx)(v,{user:e,follow:o,unfollow:c,followingInProgress:i},e.id)}))})]})},_=n(51),C=n(9),k=n(143),P=Object(k.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),y=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.totalUsersCount},S=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},H=function(e){return e.usersPage.followingInProgress},M=function(e){return e.auth.userId},B=n(11),U=function(e){var t=e.users,n=e.follow,r=e.unfollow,a=e.followingInProgress,s=e.isAuth;Object(d.a)(e,["users","follow","unfollow","followingInProgress","isAuth"]);return s?Object(f.jsx)("div",{className:O.a.usersBlock,children:Object(f.jsx)("div",{children:t.map((function(e){return 0!=e.followed?Object(f.jsx)(v,{user:e,follow:n,unfollow:r,followingInProgress:a},e.id):""}))})}):Object(f.jsx)(B.a,{to:"/login"})},F=n(79),T=n.n(F),E=function(e){var t=e.users;return Object(f.jsx)(f.Fragment,{children:t.map((function(e,t){return 0!=e.followed?Object(f.jsx)("div",{className:T.a.friendBlock,children:Object(f.jsxs)(x.b,{to:"/profile/"+e.id,children:[Object(f.jsx)("img",{src:null!=e.photos.small?e.photos.small:m.a,className:T.a.usersPhoto}),Object(f.jsx)("div",{className:T.a.userName,children:e.name})]})},e.id):""}))})},A=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.onPageChangedThunkCreator(t,n)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;"/friends"==this.props.match.url||"/profile"==this.props.match.url?this.props.getUsersThunkCreator(1,100):this.props.getUsersThunkCreator(t,n)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(_.a,{}):null,"/users"===this.props.match.url&&Object(f.jsx)(w,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,toggleFollowingInProgress:this.props.toggleFollowingInProgress,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress}),"/friends"===this.props.match.url&&Object(f.jsx)(U,{unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth}),"/profile"===this.props.match.url&&Object(f.jsx)(E,{users:this.props.users})]})}}]),n}(i.a.PureComponent);t.a=Object(C.d)(Object(u.b)((function(e){return{users:P(e),pageSize:y(e),totalUsersCount:N(e),currentPage:S(e),isFetching:I(e),followingInProgress:H(e),isAuth:M(e)}}),{follow:l.b,unfollow:l.j,setUsers:l.g,setCurrentPage:l.e,setTotalUsersCount:l.f,toggleIsFetching:l.i,toggleFollowingInProgress:l.h,getUsersThunkCreator:l.c,onPageChangedThunkCreator:l.d}),B.g)(A)}},[[300,1,2]]]);
//# sourceMappingURL=main.00668e8c.chunk.js.map