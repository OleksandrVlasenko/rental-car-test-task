"use strict";(self.webpackChunkrental_car_test_task=self.webpackChunkrental_car_test_task||[]).push([[643],{136:function(n,e,t){t.d(e,{R:function(){return x}});var r,i=t(683),o=t(439),a=t(135),c=t(93),s=t(535),l=t(184),u=function(n){var e=n.item,t=n.changeFavoriteList,r=n.onOpenModal,u=e.id,f=e.img,d=e.model,x=e.make,p=e.year,g=e.rentalPrice,h=e.address,v=e.rentalCompany,m=e.type,j=e.mileage,y=e.functionalities,Z=e.isFavorite,k=h.split(", ").slice(-2),S=(0,o.Z)(k,2),b=S[0],F=S[1];return(0,l.jsxs)(c.W2,{children:[(0,l.jsx)(c.Lr,{onClick:function(){var n=JSON.parse(localStorage.getItem("favorite"))||[];if(Z){var r=n.findIndex((function(n){return n.id===u}));-1!==r&&n.splice(r,1)}else n.unshift((0,i.Z)((0,i.Z)({},e),{},{isFavorite:!Z}));localStorage.setItem("favorite",JSON.stringify(n)),t(u)},children:Z?(0,l.jsx)(a.$0H,{style:{color:"var(--primary-color)"}}):(0,l.jsx)(a.BgW,{style:{color:"var(--secondary-text-color)"}})}),(0,l.jsx)(c.Yo,{src:f,alt:d,imageWidth:"274px",imageHeight:"268px"}),(0,l.jsxs)(c.c7,{children:[(0,l.jsxs)(c.Dx,{fontSize:"16px",children:[x," ",(0,l.jsx)("span",{children:d}),", ",p]}),(0,l.jsxs)(c.Dx,{fontSize:"16px",children:["$",g]})]}),(0,l.jsxs)(c.NF,{marginBottom:"28px",children:[(0,l.jsxs)(c.dk,{children:[b," | ",F," | ",v]}),(0,l.jsxs)(c.dk,{children:[m," | ",j," | ",y[0]]})]}),(0,l.jsx)(s.z,{buttonWidth:"274 px",toogleModal:function(){return r(e)},children:"Learn more"})]})},f=t(168),d=t(686).Z.section(r||(r=(0,f.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tcolumn-gap: 29px;\n\trow-gap: 50px;\n\n\tmargin-bottom: 100px;\n"]))),x=function(n){var e=n.catalog,t=n.changeFavoriteList,r=n.onOpenModal;return(0,l.jsx)(d,{children:e.map((function(n){return(0,l.jsx)(u,{item:n,changeFavoriteList:t,onOpenModal:r},n.id)}))})}},300:function(n,e,t){t.d(e,{f:function(){return c}});var r,i=t(168),o=t(686).Z.button(r||(r=(0,i.Z)(["\n  border: 0;\n  background-color: inherit;\n  padding-inline: 0;\n  padding-block: 0;\n\n  margin-bottom: 150px;\n  color: var(--primary-color);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  text-decoration-line: underline;\n\n  &:hover {\n    color: var(--secondary-color);\n  }\n"]))),a=t(184),c=function(n){var e=n.setPage;return(0,a.jsx)(o,{type:"button",onClick:function(){e((function(n){return n+1}))},children:"Load More"})}},67:function(n,e,t){t.d(e,{W:function(){return o}});var r,i=t(168),o=t(686).Z.main(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])))},643:function(n,e,t){t.r(e);var r=t(439),i=t(791),o=t(136),a=t(300),c=t(67),s=t(184);e.default=function(n){var e=n.onOpenModal,t=(0,i.useState)([]),l=(0,r.Z)(t,2),u=l[0],f=l[1],d=(0,i.useState)([]),x=(0,r.Z)(d,2),p=x[0],g=x[1],h=(0,i.useState)(1),v=(0,r.Z)(h,2),m=v[0],j=v[1],y=(0,i.useState)(0),Z=(0,r.Z)(y,2),k=Z[0],S=Z[1],b=(0,i.useState)(!1),F=(0,r.Z)(b,2),O=F[0],L=F[1];(0,i.useEffect)((function(){var n=JSON.parse(localStorage.getItem("favorite"))||[];f(n),S(n.length)}),[]),(0,i.useEffect)((function(){p.length>0&&L(!0),p.length===k&&L(!1)}),[p,k]),(0,i.useEffect)((function(){if(0!==k){var n=8*(m-1)+8<=k?8*(m-1)+8:k,e=u.slice(0,n);g(e)}}),[m,k,u]);return(0,s.jsxs)(c.W,{children:[(0,s.jsx)("p",{children:"Favorite Page"}),(0,s.jsx)(o.R,{catalog:p,changeFavoriteList:function(n){var e=u.filter((function(e){return e.id!==n}));S(e.length),f(e)},onOpenModal:e}),O&&(0,s.jsx)(a.f,{setPage:j})]})}}}]);
//# sourceMappingURL=643.9cbe1305.chunk.js.map