"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{378:function(e,t,r){r.d(t,{Fb:function(){return u},IQ:function(){return m},JN:function(){return l},Jh:function(){return p},Ks:function(){return c},Ph:function(){return f},t2:function(){return v}});var n=r(5861),a=r(4687),i=r.n(a),o=r(1243),s=r(8009);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"fcf8166cc673f1c39affaebc2a2648bc"};var c=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/genre/movie/list");case 3:r=e.sent,n=r.data,t(n.genres),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t,r,n,a){var c,u,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="",a&&(c="&primary_release_year=".concat(a)),e.next=5,o.Z.get("/discover/movie?page=".concat(t).concat(c));case 5:u=e.sent,l=u.data,r(l.results),n(l.total_pages),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),s.Am.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r,n,a){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/trending/movie/day",{params:{page:1}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),s.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(t,r,n,a,c){var u,l,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u="",c&&(u="&primary_release_year=".concat(c)),e.next=5,o.Z.get("/search/movie?page=".concat(t).concat(u),{params:{query:r,page:t}});case 5:l=e.sent,f=l.data,n(f.results),a(f.total_pages),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),s.Am.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r,n,a,i){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/movie/".concat(t));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),s.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/movie/".concat(t,"/reviews"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),s.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),s.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},3840:function(e,t,r){r.d(t,{e:function(){return O}});var n,a=r(5984),i=r(9439),o=r(2791),s=r(1087),c=r(7689),u=["title","titleId"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function v(e,t){var r=e.title,a=e.titleId,i=f(e,u);return o.createElement("svg",l({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),r?o.createElement("title",{id:a},r):null,n||(n=o.createElement("path",{d:"M4.66683 2C2.82616 2 1.3335 3.47733 1.3335 5.3C1.3335 6.77133 1.91683 10.2633 7.65883 13.7933C7.76168 13.8559 7.87976 13.889 8.00016 13.889C8.12056 13.889 8.23864 13.8559 8.3415 13.7933C14.0835 10.2633 14.6668 6.77133 14.6668 5.3C14.6668 3.47733 13.1742 2 11.3335 2C9.49283 2 8.00016 4 8.00016 4C8.00016 4 6.5075 2 4.66683 2Z",stroke:"#4440F7",strokeLinecap:"round",strokeLinejoin:"round"})))}var p,m=o.forwardRef(v),d=(r.p,["title","titleId"]);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _(e,t){var r=e.title,n=e.titleId,a=h(e,d);return o.createElement("svg",g({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?o.createElement("title",{id:n},r):null,p||(p=o.createElement("path",{d:"M4.66683 2C2.82616 2 1.3335 3.47733 1.3335 5.3C1.3335 6.77133 1.91683 10.2633 7.65883 13.7933C7.76168 13.8559 7.87976 13.889 8.00016 13.889C8.12056 13.889 8.23864 13.8559 8.3415 13.7933C14.0835 10.2633 14.6668 6.77133 14.6668 5.3C14.6668 3.47733 13.1742 2 11.3335 2C9.49283 2 8.00016 4 8.00016 4C8.00016 4 6.5075 2 4.66683 2Z",fill:"#4B48DA"})))}var x=o.forwardRef(_),w=(r.p,{wrapper:"Movie_wrapper__ab4g-",img:"Movie_img__WUHrV",description:"Movie_description__p079L",name:"Movie_name__+qs7c",container:"Movie_container__lWqPt",info:"Movie_info__SbDWC",rating:"Movie_rating__sRAfJ",active:"Movie_active__hKu-v",films:"Movie_films__Z29iz",favoriteBtn:"Movie_favoriteBtn__K068G"}),y=r(184),b=function(e){var t,r=e.movie,n=e.onRemoveFromFavorites,a=(0,o.useState)(!1),u=(0,i.Z)(a,2),l=u[0],f=u[1],v=(0,c.TH)();(0,o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favoriteMovies"))||[];f(e.some((function(e){return e.id===r.id})))}),[r.id]);var p=function(){var e=JSON.parse(localStorage.getItem("favoriteMovies"))||[];e.push(r),localStorage.setItem("favoriteMovies",JSON.stringify(e)),f(!0)},d=function(){var e=JSON.parse(localStorage.getItem("favoriteMovies")),t=[];e&&(t=e.filter((function(e){return e.id!==r.id})),localStorage.setItem("favoriteMovies",JSON.stringify(t))),n(r.id),f(!1)};return(0,y.jsxs)("div",{className:w.wrapper,children:[(0,y.jsxs)(s.rU,{to:"/movies/".concat(r.id),className:w.item,state:{from:v},children:[(0,y.jsx)("div",{className:w.img,children:(0,y.jsx)("img",{src:r.poster_path?"https://image.tmdb.org/t/p/w500".concat(r.poster_path):"https://www.drupal.org/files/project-images/broken-image.jpg",alt:r.original_title,loading:"lazy"})}),(0,y.jsxs)("div",{className:w.description,children:[(0,y.jsx)("p",{className:w.name,children:r.title||r.name}),(0,y.jsxs)("div",{className:w.container,children:[(0,y.jsx)("p",{className:w.info,children:r.release_date||r.first_air_date}),(0,y.jsx)("span",{className:w.rating,children:null===(t=r.vote_average)||void 0===t?void 0:t.toFixed(2)})]})]})]},r.id),(0,y.jsxs)("button",{className:w.favoriteBtn,type:"button",onClick:function(){l?d():p()},children:[l?"Remove from Favorites":"Add to Favorites",l?(0,y.jsx)(x,{}):(0,y.jsx)(m,{})]})]})},j="MovieList_films__YHG2-",O=function(e){var t=e.movies,r=e.onRemoveFromFavorites,n=t.filter((function(e,r){return t.findIndex((function(t){return t.id===e.id}))===r}));return(0,y.jsx)("ul",{className:j,children:null===n||void 0===n?void 0:n.map((function(e){return(0,y.jsx)(b,{movie:e,onRemoveFromFavorites:r},(0,a.x0)())}))})}},6304:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(9439),a=r(2791),i=r(7689),o=r(3885),s=r(3840),c=r(378),u=r(62),l={title:"Home_title__qAdt+"},f=r(184);function v(){var e=(0,a.useContext)(o.m).setIsFavorite,t=(0,a.useState)([]),r=(0,n.Z)(t,2),v=r[0],p=r[1];(0,a.useEffect)((function(){(0,c.JN)().then((function(e){var t=e.results;p(t)}))}),[]);return(0,f.jsxs)("main",{children:[(0,f.jsx)("section",{className:l.gallery,children:(0,f.jsxs)("div",{className:l.container,children:[(0,f.jsx)("h1",{className:l.title,children:"Trending today"}),(0,f.jsx)(s.e,{movies:v,onRemoveFromFavorites:function(){e(!1)}})]})}),(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)(u.Z,{}),children:(0,f.jsx)(i.j3,{})})]})}},5984:function(e,t,r){r.d(t,{x0:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=304.08a36bb3.chunk.js.map