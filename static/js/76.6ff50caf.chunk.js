"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{378:function(e,r,t){t.d(r,{Fb:function(){return i},IQ:function(){return v},JN:function(){return p},Jh:function(){return l},Ks:function(){return o},Ph:function(){return f},t2:function(){return m}});var n=t(5861),a=t(4687),c=t.n(a),s=t(1243),u=t(8009);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"fcf8166cc673f1c39affaebc2a2648bc"};var o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/genre/movie/list");case 3:t=e.sent,n=t.data,r(n.genres),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r,t,n){var a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/discover/movie",{params:{page:r}});case 3:a=e.sent,o=a.data,t(o.results),n(o.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u.Am.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day",{params:{page:1}});case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),u.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r,t,n,a){var o,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie",{params:{query:t,page:r}});case 3:o=e.sent,i=o.data,n(i.results),a(i.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u.Am.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,t,n,a){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),u.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),u.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),u.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},8076:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var n=t(9439),a=t(7689),c=t(2791),s=t(378),u={castContainer:"Cast_castContainer__NIXqj",actorImg:"Cast_actorImg__T6qL2",actorItem:"Cast_actorItem__fXEWx",ActorInfo:"Cast_ActorInfo__hn1gA",actorName:"Cast_actorName__XabVA",actorChar:"Cast_actorChar__VY6Sx",noCast:"Cast_noCast__SInMN"},o=t(184);function i(){var e=(0,c.useState)(null),r=(0,n.Z)(e,2),t=r[0],i=r[1],p=(0,a.UO)().id;if((0,c.useEffect)((function(){p&&(0,s.IQ)(p).then((function(e){i(e.cast)}))}),[p]),!t)return null;var f=!!t.length;return(0,o.jsx)(o.Fragment,{children:f?(0,o.jsx)("ul",{className:u.castContainer,children:t.map((function(e){var r=e.id,t=e.profile_path,n=e.original_name,a=e.character;return(0,o.jsxs)("li",{className:u.actorItem,children:[(0,o.jsx)("div",{className:u.actorImg,children:(0,o.jsx)("img",{className:u.image,src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://www.drupal.org/files/project-images/broken-image.jpg",alt:n})}),(0,o.jsxs)("div",{className:u.ActorInfo,children:[(0,o.jsx)("p",{className:u.actorName,children:n}),(0,o.jsx)("p",{className:u.actorChar,children:a})]})]},r)}))}):(0,o.jsx)("p",{className:u.noCast,children:"There is no cast!"})})}}}]);
//# sourceMappingURL=76.6ff50caf.chunk.js.map