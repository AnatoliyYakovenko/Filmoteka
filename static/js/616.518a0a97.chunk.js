"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{378:function(e,t,r){r.d(t,{Fb:function(){return o},IQ:function(){return d},JN:function(){return l},Jh:function(){return p},Ks:function(){return u},Ph:function(){return v},t2:function(){return m}});var a=r(5861),n=r(4687),s=r.n(n),i=r(1243),c=r(8009);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"fcf8166cc673f1c39affaebc2a2648bc"};var o=function(){var e=(0,a.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/discover/movie");case 3:r=e.sent,a=r.data,t(a.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/genre/movie/list");case 3:r=e.sent,a=r.data,t(a.genres),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/trending/movie/day",{params:{page:1}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),c.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/search/movie",{params:{query:t}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),c.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),c.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/reviews"));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),c.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),c.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},1616:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var a=r(9439),n=r(1087),s=r(7689),i=r(2791),c=r(378),o=r(62),u={backContainer:"MovieDetails_backContainer__kUVN0",goBack:"MovieDetails_goBack__A3SmA",detailLink:"MovieDetails_detailLink__qEwhv",movie:"MovieDetails_movie__e4Hw7",image:"MovieDetails_image__E07wX",movieDescription:"MovieDetails_movieDescription__blLzU",movieName:"MovieDetails_movieName__SDlMp",gridContainer:"MovieDetails_gridContainer__VvA59",movieItemTitle:"MovieDetails_movieItemTitle__5zjoM",voteFocus:"MovieDetails_voteFocus__SWCOU",votesUnactive:"MovieDetails_votesUnactive__jh8MO",aboutTitle:"MovieDetails_aboutTitle__BBuI0",aboutText:"MovieDetails_aboutText__+zYxI",btnContainer:"MovieDetails_btnContainer__rRwbE"},l=r(184);function v(){var e,t,r=(0,s.TH)(),v=(0,i.useState)(null),m=(0,a.Z)(v,2),p=m[0],d=m[1],h=(0,s.UO)().id;if((0,i.useEffect)((function(){h&&(0,c.t2)(h).then((function(e){d(e)}))}),[h]),!p)return null;var f=p.poster_path,_=p.original_title,x=p.title,g=p.name,b=p.vote_average,j=p.vote_count,w=p.popularity,k=p.overview,N=null!==(e=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:u.backContainer,children:(0,l.jsx)(n.rU,{className:u.goBack,to:N,children:"Go back"})}),(0,l.jsxs)("div",{className:u.movie,children:[(0,l.jsx)("div",{className:u.imgContainer,width:"240",children:(0,l.jsx)("img",{className:u.image,src:f?"https://image.tmdb.org/t/p/w500".concat(f):"https://www.drupal.org/files/project-images/broken-image.jpg",alt:_})}),(0,l.jsxs)("div",{className:u.movieDescription,children:[(0,l.jsx)("h2",{className:u.movieName,children:x||g}),(0,l.jsxs)("div",{className:u.gridContainer,children:[(0,l.jsx)("i",{className:u.movieItemTitle,children:"Vote / Votes"}),(0,l.jsxs)("div",{className:u.value,children:[(0,l.jsx)("span",{className:u.voteFocus,children:b}),(0,l.jsx)("span",{children:" / "}),(0,l.jsx)("span",{className:u.votesUnactive,children:j})]}),(0,l.jsx)("i",{className:u.movieItemTitle,children:"Popularity"}),(0,l.jsx)("span",{className:u.value,children:w}),(0,l.jsx)("i",{className:u.movieItemTitle,children:"Original Title"}),(0,l.jsx)("span",{className:u.value,children:_})]}),(0,l.jsx)("h3",{className:u.aboutTitle,children:"About"}),(0,l.jsx)("article",{className:u.aboutText,children:k}),(0,l.jsxs)("div",{className:u.btnContainer,children:[(0,l.jsx)(n.rU,{className:u.detailLink,to:"reviews",state:{from:N},children:"Go through the reviews"}),(0,l.jsx)(n.rU,{className:u.detailLink,to:"cast",state:{from:N},children:"Get to know the team"})]})]}),(0,l.jsx)("div",{children:(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(o.Z,{}),children:(0,l.jsx)(s.j3,{})})})]})]})}}}]);
//# sourceMappingURL=616.518a0a97.chunk.js.map