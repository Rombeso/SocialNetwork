(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{302:function(e,t,s){e.exports={centerContainer:"ProfileInfo_centerContainer__36H7_",imageBlock:"ProfileInfo_imageBlock__Jf9M5",avatar:"ProfileInfo_avatar__JY-Pn",avatarButton:"ProfileInfo_avatarButton__3ACRj",friendsContainer:"ProfileInfo_friendsContainer__1PR6z",friendsTitle:"ProfileInfo_friendsTitle__19NTy",friendBlock:"ProfileInfo_friendBlock__1krx8",rightContainer:"ProfileInfo_rightContainer__35_pw",descriptionBlock:"ProfileInfo_descriptionBlock__1gOJZ",profileBlock:"ProfileInfo_profileBlock__WdJVM",profileHeaders:"ProfileInfo_profileHeaders__7GaME",profileLogin:"ProfileInfo_profileLogin__YmbUf",profileOnline:"ProfileInfo_profileOnline__2NXyT",status:"ProfileInfo_status__2D4Nh",line:"ProfileInfo_line__1JWbh",profileBody:"ProfileInfo_profileBody__2FW1u",profileBodyTitle:"ProfileInfo_profileBodyTitle__3pbpe",profileBodyDescription:"ProfileInfo_profileBodyDescription__36IhQ",myPhotosContainer:"ProfileInfo_myPhotosContainer__3TL3e",myPhotosBlock:"ProfileInfo_myPhotosBlock__ZzSbB",myPhotosTitle:"ProfileInfo_myPhotosTitle__1V-Qk",profileBodyButton:"ProfileInfo_profileBodyButton__1SIMd",photos:"ProfileInfo_photos__24K-g",myPostsContainer:"ProfileInfo_myPostsContainer__2yhvq",myPostsBlock:"ProfileInfo_myPostsBlock__24r7Y",contactsTitle:"ProfileInfo_contactsTitle__1R-Sn",formSubmit:"ProfileInfo_formSubmit__fPUOb",divBodyButton:"ProfileInfo_divBodyButton__3c33L"}},303:function(e,t,s){e.exports={postBlock:"MyPosts_postBlock__YjCh1",addPosts:"MyPosts_addPosts__2grjD",myPostsBlock:"MyPosts_myPostsBlock__3bJHi",userPhoto:"MyPosts_userPhoto__1pMNO",line:"MyPosts_line__3q-lS",myPostsTitle:"MyPosts_myPostsTitle__1kOb2",fieldBlock:"MyPosts_fieldBlock__Bnfcs",fieldButton:"MyPosts_fieldButton__3ueea"}},304:function(e,t,s){e.exports={title:"Post_title__3L9aY",avatar:"Post_avatar__49n4v",name:"Post_name__1_dkk",massage:"Post_massage__102Og",line:"Post_line__GnsFa",footer:"Post_footer__WkYd9",love:"Post_love__Di3m7",eye:"Post_eye__-ys5D"}},306:function(e,t,s){"use strict";s.r(t);var o=s(43),i=s(44),c=s(47),n=s(46),a=s(1),r=s.n(a),l=s(72),j=s(302),d=s.n(j),b=s(51),f=s(38),h=s(0),p=function(e){var t=Object(a.useState)(!1),s=Object(l.a)(t,2),o=s[0],i=s[1],c=Object(a.useState)(e.status),n=Object(l.a)(c,2),r=n[0],j=n[1];Object(a.useEffect)((function(){j(e.status)}),[e.status]);return Object(h.jsxs)("div",{children:[!o&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{"data-testid":"status",onDoubleClick:function(){i(!0)},children:e.status||"Enter your status"})}),o&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{"data-testid":"status-input",autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(r)},onChange:function(e){j(e.currentTarget.value)},value:r,style:{width:300}})})]})},u=s(28),O=s(30),m=s(135),x=s(29),_=s.n(x),v=Object(m.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.error;Object(u.a)(e,["handleSubmit","error"]);return Object(h.jsxs)("form",{onSubmit:t,className:d.a.formSubmit,children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Full name:"})," ",Object(O.c)("Full name","fullName",O.a,[])]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Looking for a job:"})," ",Object(O.c)("","lookingForAJob",O.a,[],{type:"checkbox"})]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"My professional skills:"})," ",Object(O.c)("My professional skills","lookingForAJobDescription",O.b,[])]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"About me:"})," ",Object(O.c)("About me","aboutMe",O.a,[])]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Facebook:"}),Object(O.c)("Facebook","contacts.facebook",O.a,[])]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Website:"}),Object(O.c)("Web site","contacts.website",O.a,[])]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"VK:"}),Object(O.c)("VK","contacts.vk",O.a,[])]}),s&&Object(h.jsx)("div",{className:_.a.formSummeryError,children:s}),Object(h.jsx)("div",{className:d.a.divBodyButton,children:Object(h.jsx)("button",{className:d.a.profileBodyButton,children:"Save"})})]})})),P=s(17),g=s(103),y=s(303),k=s.n(y),B=s(304),N=s.n(B),I=function(e){return Object(h.jsx)(h.Fragment,{children:e.massageMyPost.map((function(t){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:N.a.title,children:[Object(h.jsx)("img",{className:N.a.avatar,src:e.profile.photos.large||f.a}),Object(h.jsxs)("div",{className:N.a.name,children:[e.login,Object(h.jsx)("p",{children:"today"})]})]}),Object(h.jsx)("div",{className:N.a.massage,children:t.massage}),Object(h.jsxs)("div",{className:N.a.footer,children:[Object(h.jsxs)("div",{className:N.a.love,children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:Object(h.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Object(h.jsx)("span",{children:t.likesCounter})]}),Object(h.jsxs)("div",{className:N.a.eye,children:[Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:[Object(h.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),Object(h.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),Object(h.jsx)("span",{children:t.viewers})]})]}),Object(h.jsx)("div",{className:N.a.line})]})}))})},w=s(97),M=s(75),S=s(35),C=function(e){return Object(P.c)()(Object(S.a)("myPostAddNewForm")),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:k.a.postBlock,children:Object(h.jsxs)("div",{className:k.a.addPosts,children:[Object(h.jsx)("div",{className:k.a.userPhoto,children:Object(h.jsx)("img",{src:e.profile.photos.large||f.a})}),Object(h.jsx)("div",{className:k.a.fieldBlock,children:Object(h.jsx)(F,{onSubmit:function(t){e.addPost(t.newPostText)}})})]})}),Object(h.jsx)("div",{className:k.a.postBlock,children:Object(h.jsxs)("div",{className:k.a.myPostsBlock,children:[Object(h.jsx)("div",{className:k.a.myPostsTitle,children:"All entries"}),Object(h.jsx)("div",{className:k.a.line}),Object(h.jsx)(I,{massageMyPost:e.massageMyPost,profile:e.profile,login:e.login})]})})]})},T=Object(M.a)(100),F=Object(m.a)({form:"myPostAddNewForm"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(w.a,{name:"newPostText",placeholder:"What's new with you?",component:O.b,validate:[M.b,T]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:k.a.fieldButton,children:"Add post"})})]})})),A=function(e){var t=Object(P.d)((function(e){return e.profilePage})),s=Object(P.c)();return Object(h.jsx)(C,{massageMyPost:t.massageMyPost,newPostText:t.newPostText,addPost:function(e){s(Object(g.a)(e))},profile:t.profile,login:e.login})},J=s(98),D=s(14),L=s.p+"static/media/1.c0db5a4b.jpg",z=s.p+"static/media/2.fa603d76.jpg",E=s.p+"static/media/3.e8fccc9b.jpg",U=function(e){var t=e.profile,s=e.updateStatus,o=e.status,i=e.isOwner,c=e.savePhoto,n=e.saveProfile,r=e.login,j=Object(a.useState)(!1),u=Object(l.a)(j,2),O=u[0],m=u[1];if(!t)return Object(h.jsx)(b.a,{});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:d.a.centerContainer,children:[Object(h.jsxs)("div",{className:d.a.imageBlock,children:[Object(h.jsx)("div",{className:d.a.avatar,children:Object(h.jsx)("img",{src:t.photos.large||f.a})}),i&&Object(h.jsxs)("div",{className:d.a.avatarButton,children:[Object(h.jsx)("p",{children:"Edit avatar"}),Object(h.jsx)("input",{type:"file",onChange:function(e){e.target.files&&c(e.target.files[0])}})]})]}),Object(h.jsxs)("div",{className:d.a.friendsContainer,children:[Object(h.jsx)("div",{className:d.a.friendsTitle,children:Object(h.jsx)(D.b,{to:"/friends",children:"Friends"})}),Object(h.jsx)("div",{className:d.a.friendBlock,children:Object(h.jsx)(J.a,{})})]})]}),Object(h.jsxs)("div",{className:d.a.rightContainer,children:[Object(h.jsx)("div",{className:d.a.descriptionBlock,children:Object(h.jsxs)("div",{className:d.a.profileBlock,children:[Object(h.jsxs)("div",{className:d.a.profileHeaders,children:[Object(h.jsx)("div",{className:d.a.profileLogin,children:r}),Object(h.jsx)("div",{className:d.a.profileOnline,children:"online"})]}),Object(h.jsx)("div",{className:d.a.status,children:Object(h.jsx)(p,{status:o,updateStatus:s})}),Object(h.jsx)("div",{className:d.a.line}),Object(h.jsx)("div",{className:d.a.profileBody,children:O?Object(h.jsx)(v,{initialValues:t,onSubmit:function(e){n(e).then((function(){m(!1)}))}}):Object(h.jsx)(W,{goToEditMode:function(){m(!0)},profile:t,isOwner:i})})]})}),Object(h.jsx)("div",{className:d.a.myPhotosContainer,children:Object(h.jsxs)("div",{className:d.a.myPhotosBlock,children:[Object(h.jsxs)("p",{className:d.a.myPhotosTitle,children:["My photos ",Object(h.jsx)("span",{children:"4"})]}),Object(h.jsxs)("div",{className:d.a.photos,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:t.photos.large||f.a})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:L})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:z})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:E})})]})]})}),Object(h.jsx)(A,{login:r})]})]})},W=function(e){var t=e.profile,s=e.isOwner,o=e.goToEditMode;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:d.a.profileBodyTitle,children:[Object(h.jsx)("p",{children:"Full name:"}),Object(h.jsx)("p",{children:"Looking for a job:"}),Object(h.jsx)("p",{children:"My professional skills:"}),Object(h.jsx)("p",{children:"About me:"}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:d.a.contactsTitle,children:"Contacts"})}),Object(h.jsx)("p",{children:"Facebook:"}),Object(h.jsx)("p",{children:"Website:"}),Object(h.jsx)("p",{children:"VK:"})]}),Object(h.jsxs)("div",{className:d.a.profileBodyDescription,children:[Object(h.jsx)("p",{children:t.fullName}),Object(h.jsxs)("p",{children:[" ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(h.jsxs)("p",{children:[" ",t.lookingForAJobDescription]}),Object(h.jsxs)("p",{children:[" ",t.aboutMe]}),Object(h.jsx)("div",{className:d.a.line}),Object(h.jsxs)("p",{children:[" ",t.contacts.facebook]}),Object(h.jsx)("p",{children:t.contacts.website}),Object(h.jsx)("p",{children:t.contacts.vk})]}),s&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:o,className:d.a.profileBodyButton,children:"Edit profile"})})]})},V=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(U,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile,login:e.login})})},Y=s(11),H=s(9),K=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=null!==this.props.autorizedUserId?String(this.props.autorizedUserId):"")||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(V,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,login:this.props.login})})}}]),s}(r.a.Component);t.default=Object(H.d)(Object(P.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.userId,isAuth:e.auth.isAuth,login:e.auth.login}}),{getUserProfile:g.d,getStatus:g.c,updateStatus:g.g,savePhoto:g.e,saveProfile:g.f}),Y.g)(K)}}]);
//# sourceMappingURL=3.e353b269.chunk.js.map