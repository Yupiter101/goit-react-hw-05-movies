"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[157],{866:function(e,r,n){n.d(r,{a:function(){return a}});var t=n(691),i=n(602),s=n(184),a=function(){return(0,s.jsx)("span",{className:i.Z.LoaderWrap,children:(0,s.jsx)(t.ko,{height:"140",width:"140",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#F4442E",barColor:"#51E5FF"})})}},517:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(439),i=n(689),s=n(87),a=n(791),o="MovieDet_DetalisWrap__n9qQv",c="MovieDet_DescrMovieWrap__zleFr",l="MovieDet_ImgWrap__2ZFr-",d=n(565),h=n.p+"static/media/no-poster.5e3899f9dc84a1b48522.jpg",u=n(866),v=n(180),p=n(184);var f=function(){var e,r,n=(0,i.UO)(),f="/movie/"+n.movieId+"?",j=(0,a.useState)(null),x=(0,t.Z)(j,2),m=x[0],_=x[1],g=(0,a.useState)(!1),w=(0,t.Z)(g,2),b=w[0],k=w[1],D=(0,a.useState)(!1),M=(0,t.Z)(D,2),Z=M[0],C=M[1],S=(0,i.TH)(),F=(0,a.useRef)(null!==(e=null===(r=S.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,a.useEffect)((function(){!function(e){k(!0),C(!1),d.Z.getMovieData(e).then((function(e){_(e)})).catch((function(e){console.log(e),C(!0)})).finally((function(){return k(!1)}))}(f)}),[f]),b?(0,p.jsx)(u.a,{}):Z?(0,p.jsxs)("h3",{children:["\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e \u0444\u0438\u043b\u044c\u043c\u0443 \u0441 ID: ",n.movieId]}):m?(0,p.jsxs)("div",{children:[(0,p.jsx)(s.rU,{to:F.current,children:"go back"}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("div",{className:l,children:(0,p.jsx)("img",{src:m.poster_path?"".concat("https://image.tmdb.org/t/p/w300/").concat(m.poster_path):h,alt:m.title||m.name})}),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("h1",{children:m.title||m.name}),(0,p.jsxs)("h4",{children:["User Score: ",Math.round(10*m.vote_average)," %"]}),(0,p.jsx)("h2",{children:"Overview "}),(0,p.jsx)("p",{children:m.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("div",{children:m.genres.map((function(e,r){return(0,p.jsxs)("span",{children:[e.name," "]},"".concat(m.id,"-").concat(r))}))})]})]}),(0,p.jsx)("h4",{children:"Addition information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"review",children:"Review"})})]}),(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(v.M,{}),children:(0,p.jsx)(i.j3,{})})]}):void 0}},565:function(e,r){var n={getMovieData:function(e){return fetch("https://api.themoviedb.org/3"+e+"api_key=7e2311f4f0ec2e3fb8119bae191edcda").then((function(e){if(!e.ok)throw new Error("\u041f\u043e\u0439\u043c\u0430\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0443 API");return e.json()}))}};r.Z=n}}]);
//# sourceMappingURL=157.c0011642.chunk.js.map