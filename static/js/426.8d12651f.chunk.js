"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[426],{378:function(e,n,t){t.d(n,{Fb:function(){return c},IQ:function(){return h},JN:function(){return i},Jh:function(){return l},Ks:function(){return o},Ph:function(){return f},t2:function(){return p}});var r=t(5861),a=t(4687),u=t.n(a),s=t(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"fcf8166cc673f1c39affaebc2a2648bc"};var c=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/discover/movie");case 3:t=e.sent,r=t.data,n(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/genre/movie/list");case 3:t=e.sent,r=t.data,n(r.genres),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{params:{page:1}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie",{params:{query:n}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},8426:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(9439),a=t(7689),u=t(2791),s=t(378),c={reviewContainer:"Comments_reviewContainer__6boFx",authorContainer:"Comments_authorContainer__TaM+s",author:"Comments_author__N3New",authorName:"Comments_authorName__WWZse",ContentTitle:"Comments_ContentTitle__17SIB",Content:"Comments_Content__cKLto",noReview:"Comments_noReview__8ukTf"},o=t(184);function i(){var e=(0,u.useState)(null),n=(0,r.Z)(e,2),t=n[0],i=n[1],f=(0,a.UO)().id;if((0,u.useEffect)((function(){f&&(0,s.Jh)(f).then((function(e){var n=e.results;i(n)}))}),[f]),!t)return null;var p=!!t.length;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Reviews"}),p?(0,o.jsx)("ul",{children:t.map((function(e){return(0,o.jsxs)("li",{className:c.reviewContainer,children:[(0,o.jsxs)("p",{className:c.author,children:["Author:",(0,o.jsx)("span",{className:c.authorName,children:e.author})]}),(0,o.jsxs)("div",{className:c.ContentContainer,children:[(0,o.jsx)("p",{className:c.ContentTitle,children:"Content:"}),(0,o.jsx)("span",{className:c.Content,children:e.content})]})]},e.id)}))}):(0,o.jsx)("p",{className:c.noReview,children:"There are no reviews!"})]})}}}]);
//# sourceMappingURL=426.8d12651f.chunk.js.map