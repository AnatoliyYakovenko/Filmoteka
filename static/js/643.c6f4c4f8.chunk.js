"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[643],{3840:function(e,t,r){r.d(t,{e:function(){return O}});var i,n=r(9439),o=r(2791),a=r(1087),l=r(7689),s=["title","titleId"];function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},f.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function v(e,t){var r=e.title,n=e.titleId,a=c(e,s);return o.createElement("svg",f({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?o.createElement("title",{id:n},r):null,i||(i=o.createElement("path",{d:"M4.66683 2C2.82616 2 1.3335 3.47733 1.3335 5.3C1.3335 6.77133 1.91683 10.2633 7.65883 13.7933C7.76168 13.8559 7.87976 13.889 8.00016 13.889C8.12056 13.889 8.23864 13.8559 8.3415 13.7933C14.0835 10.2633 14.6668 6.77133 14.6668 5.3C14.6668 3.47733 13.1742 2 11.3335 2C9.49283 2 8.00016 4 8.00016 4C8.00016 4 6.5075 2 4.66683 2Z",stroke:"#4440F7",strokeLinecap:"round",strokeLinejoin:"round"})))}var u,m=o.forwardRef(v),_=(r.p,["title","titleId"]);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function g(e,t){var r=e.title,i=e.titleId,n=p(e,_);return o.createElement("svg",d({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},n),r?o.createElement("title",{id:i},r):null,u||(u=o.createElement("path",{d:"M4.66683 2C2.82616 2 1.3335 3.47733 1.3335 5.3C1.3335 6.77133 1.91683 10.2633 7.65883 13.7933C7.76168 13.8559 7.87976 13.889 8.00016 13.889C8.12056 13.889 8.23864 13.8559 8.3415 13.7933C14.0835 10.2633 14.6668 6.77133 14.6668 5.3C14.6668 3.47733 13.1742 2 11.3335 2C9.49283 2 8.00016 4 8.00016 4C8.00016 4 6.5075 2 4.66683 2Z",fill:"#4B48DA"})))}var h=o.forwardRef(g),j=(r.p,{wrapper:"Movie_wrapper__ab4g-",films__img:"Movie_films__img__oRpl4",films__description:"Movie_films__description__jdGN4",films__name:"Movie_films__name__a5NeB",films__container:"Movie_films__container__Cc0lZ",films__info:"Movie_films__info__y7jS6",films__rating:"Movie_films__rating__wPIad",active:"Movie_active__hKu-v",films:"Movie_films__Z29iz",favoriteBtn:"Movie_favoriteBtn__K068G"}),w=r(184),y=function(e){var t,r=e.movie,i=e.onRemoveFromFavorites,s=(0,o.useState)(!1),f=(0,n.Z)(s,2),c=f[0],v=f[1],u=(0,l.TH)();(0,o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favoriteMovies"))||[];v(e.some((function(e){return e.id===r.id})))}),[r.id]);var _=function(){var e=JSON.parse(localStorage.getItem("favoriteMovies"))||[];e.push(r),localStorage.setItem("favoriteMovies",JSON.stringify(e)),v(!0)},d=function(){var e=localStorage.getItem("favoriteMovies"),t=[];e&&(t=(t=JSON.parse(e)).filter((function(t){return t!==e.id})),localStorage.setItem("favoriteMovies",JSON.stringify(t.filter((function(t){return t!==e.id}))))),i(r.id),v(!1)};return(0,w.jsxs)("div",{className:j.wrapper,children:[(0,w.jsx)(a.rU,{to:"/movies/".concat(r.id),className:j.films__item,state:{from:u},children:(0,w.jsx)("div",{className:j.films__img,children:(0,w.jsx)("img",{src:r.poster_path?"https://image.tmdb.org/t/p/w500".concat(r.poster_path):"https://www.drupal.org/files/project-images/broken-image.jpg",alt:r.original_title,loading:"lazy"})})},r.id),(0,w.jsxs)("div",{className:j.films__description,children:[(0,w.jsx)("p",{className:j.films__name,children:r.title||r.name}),(0,w.jsxs)("div",{className:j.films__container,children:[(0,w.jsx)("p",{className:j.films__info,children:r.release_date||r.first_air_date}),(0,w.jsx)("span",{className:j.films__rating,children:null===(t=r.vote_average)||void 0===t?void 0:t.toFixed(2)})]})]}),(0,w.jsxs)("button",{className:j.favoriteBtn,type:"button",onClick:function(){c?d():_()},children:[c?"Remove from Favorites":"Add to Favorites",c?(0,w.jsx)(h,{}):(0,w.jsx)(m,{})]})]})},b="MovieList_films__YHG2-",x=r(5984),O=function(e){var t=e.movies,r=e.onRemoveFromFavorites,i=t.filter((function(e,r){return t.findIndex((function(t){return t.id===e.id}))===r}));return(0,w.jsx)("ul",{className:b,children:null===i||void 0===i?void 0:i.map((function(e){return(0,w.jsx)(y,{movie:e,onRemoveFromFavorites:r},(0,x.x0)())}))})}},9643:function(e,t,r){r.r(t);var i=r(9439),n=r(2791),o=r(3840),a=r(184);t.default=function(){var e=(0,n.useState)([]),t=(0,i.Z)(e,2),r=t[0],l=t[1];(0,n.useEffect)((function(){var e=localStorage.getItem("favoriteMovies");e&&l(JSON.parse(e))}),[]);return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Favorite Movies"}),(0,a.jsx)(o.e,{movies:r,onRemoveFromFavorites:function(e){var t=r.filter((function(t){return t.id!==e}));l(t),localStorage.setItem("favoriteMovies",JSON.stringify(t))}})]})}},5984:function(e,t,r){r.d(t,{x0:function(){return i}});var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=643.c6f4c4f8.chunk.js.map