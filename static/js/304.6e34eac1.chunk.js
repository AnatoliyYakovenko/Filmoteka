"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{378:function(e,t,r){r.d(t,{Fb:function(){return s},IQ:function(){return p},JN:function(){return u},Jh:function(){return v},Ks:function(){return c},Ph:function(){return l},t2:function(){return f}});var n=r(5861),a=r(4687),i=r.n(a),o=r(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"fcf8166cc673f1c39affaebc2a2648bc"};var s=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/discover/movie");case 3:r=e.sent,n=r.data,t(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/genre/movie/list");case 3:r=e.sent,n=r.data,t(n.genres),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/trending/movie/day",{params:{page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1459:function(e,t,r){r.d(t,{e:function(){return N}});var n,a=r(9439),i=r(2791),o=r(1087),s=r(7689),c=["title","titleId"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function f(e,t){var r=e.title,a=e.titleId,o=l(e,c);return i.createElement("svg",u({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),r?i.createElement("title",{id:a},r):null,n||(n=i.createElement("path",{d:"M4.66683 2C2.82616 2 1.3335 3.47733 1.3335 5.3C1.3335 6.77133 1.91683 10.2633 7.65883 13.7933C7.76168 13.8559 7.87976 13.889 8.00016 13.889C8.12056 13.889 8.23864 13.8559 8.3415 13.7933C14.0835 10.2633 14.6668 6.77133 14.6668 5.3C14.6668 3.47733 13.1742 2 11.3335 2C9.49283 2 8.00016 4 8.00016 4C8.00016 4 6.5075 2 4.66683 2Z",stroke:"#4440F7",strokeLinecap:"round",strokeLinejoin:"round"})))}var v=i.forwardRef(f),p=(r.p,"Movie_films__item__XjYQD"),d="Movie_films__img__oRpl4",m="Movie_films__description__jdGN4",h="Movie_films__name__a5NeB",_="Movie_films__container__Cc0lZ",g="Movie_films__info__y7jS6",x="Movie_films__rating__wPIad",w="Movie_favoriteBtn__K068G",j=r(184),b=function(e){var t,r=e.movie,n=e.onRemoveFromFavorites,c=(0,i.useState)(!1),u=(0,a.Z)(c,2),l=u[0],f=u[1],b=(0,s.TH)();(0,i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favoriteMovies"))||[];f(e.some((function(e){return e.id===r.id})))}),[r.id]);var y=function(){var e=JSON.parse(localStorage.getItem("favoriteMovies"))||[];e.push(r),localStorage.setItem("favoriteMovies",JSON.stringify(e)),f(!0)},k=function(){var e=localStorage.getItem("favoriteMovies"),t=[];e&&(t=(t=JSON.parse(e)).filter((function(t){return t!==e.id})),localStorage.setItem("favoriteMovies",JSON.stringify(t.filter((function(t){return t!==e.id}))))),n(r.id),f(!1)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.rU,{to:"/movies/".concat(r.id),className:p,state:{from:b},children:(0,j.jsx)("div",{className:d,children:(0,j.jsx)("img",{src:r.poster_path?"https://image.tmdb.org/t/p/w500".concat(r.poster_path):"https://www.drupal.org/files/project-images/broken-image.jpg",alt:r.original_title,loading:"lazy"})})},r.id),(0,j.jsxs)("div",{className:m,children:[(0,j.jsx)("p",{className:h,children:r.title||r.name}),(0,j.jsxs)("div",{className:_,children:[(0,j.jsxs)("button",{className:w,type:"button",onClick:function(){l?k():y()},children:[" ",l?"Remove from Favorites":"Add to Favorites",(0,j.jsx)(v,{})]}),(0,j.jsx)("p",{className:g,children:r.release_date||r.first_air_date}),(0,j.jsx)("span",{className:x,children:null===(t=r.vote_average)||void 0===t?void 0:t.toFixed(2)})]})]})]})},y="MovieList_films__YHG2-",k=r(5984),N=function(e){var t=e.movies,r=e.onRemoveFromFavorites,n=t.filter((function(e,r){return t.findIndex((function(t){return t.id===e.id}))===r}));return(0,j.jsx)("ul",{className:y,children:null===n||void 0===n?void 0:n.map((function(e){return(0,j.jsx)(b,{movie:e,onRemoveFromFavorites:r},(0,k.x0)())}))})}},6304:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(9439),a=r(2791),i=r(7689),o=r(1459),s=r(378),c={title:"Home_title__qAdt+"},u=r(62),l=r(184);function f(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],f=t[1];return(0,a.useEffect)((function(){(0,s.JN)().then((function(e){var t=e.results;f(t)}))}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("section",{className:c.gallery,children:(0,l.jsxs)("div",{className:c.container,children:[(0,l.jsx)("h1",{className:c.title,children:"Trending today"}),(0,l.jsx)(o.e,{movies:r})]})}),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(u.Z,{}),children:(0,l.jsx)(i.j3,{})})]})}},5984:function(e,t,r){r.d(t,{x0:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=304.6e34eac1.chunk.js.map