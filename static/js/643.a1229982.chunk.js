"use strict";(self.webpackChunkrental_car_test_task=self.webpackChunkrental_car_test_task||[]).push([[643],{136:function(e,t,n){n.d(t,{R:function(){return u}});var r,a=n(683),i=n(439),o=n(135),s=n(93),c=n(535),l=n(184),d=function(e){var t=e.item,n=e.changeFavoriteList,r=e.onOpenModal,d=t.id,x=t.img,p=t.model,u=t.make,f=t.year,g=t.rentalPrice,h=t.address,m=t.rentalCompany,v=t.type,j=t.mileage,k=t.functionalities,y=t.isFavorite,S=h.split(", ").slice(-2),F=(0,i.Z)(S,2),O=F[0],L=F[1];return(0,l.jsxs)(s.W2,{children:[(0,l.jsx)(s.Lr,{onClick:function(){var e=JSON.parse(localStorage.getItem("favorite"))||[];if(y){var r=e.findIndex((function(e){return e.id===d}));-1!==r&&e.splice(r,1)}else e.unshift((0,a.Z)((0,a.Z)({},t),{},{isFavorite:!y}));localStorage.setItem("favorite",JSON.stringify(e)),n(d)},children:y?(0,l.jsx)(o.$0H,{style:{color:"var(--primary-color)"}}):(0,l.jsx)(o.BgW,{style:{color:"var(--secondary-text-color)"}})}),(0,l.jsx)(s.Yo,{src:x,alt:p,imageWidth:"274px",imageHeight:"268px"}),(0,l.jsxs)(s.c7,{children:[(0,l.jsxs)(s.Dx,{fontSize:"16px",children:[u," ",(0,l.jsx)("span",{children:p}),", ",f]}),(0,l.jsxs)(s.Dx,{fontSize:"16px",children:["$",g]})]}),(0,l.jsxs)(s.NF,{marginBottom:"28px",children:[(0,l.jsxs)(s.dk,{children:[O," | ",L," | ",m]}),(0,l.jsxs)(s.dk,{children:[v," | ",j," | ",k[0]]})]}),(0,l.jsx)(c.z,{buttonWidth:"274 px",toogleModal:function(){return r(t)},children:"Learn more"})]})},x=n(168),p=n(686).Z.section(r||(r=(0,x.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tcolumn-gap: 29px;\n\trow-gap: 50px;\n\n\tmargin-bottom: 100px;\n"]))),u=function(e){var t=e.catalog,n=e.changeFavoriteList,r=e.onOpenModal;return(0,l.jsx)(p,{children:t.map((function(e){return(0,l.jsx)(d,{item:e,changeFavoriteList:n,onOpenModal:r},e.id)}))})}},643:function(e,t,n){n.r(t);var r=n(439),a=n(791),i=n(136),o=n(184);t.default=function(e){var t=e.onOpenModal,n=(0,a.useState)([]),s=(0,r.Z)(n,2),c=s[0],l=s[1];(0,a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorite"))||[];l(e)}),[]);return(0,o.jsxs)("main",{children:[(0,o.jsx)("p",{children:"Favorite Page"}),(0,o.jsx)(i.R,{catalog:c,changeFavoriteList:function(e){var t=c.filter((function(t){return t.id!==e}));l(t)},onOpenModal:t})]})}}}]);
//# sourceMappingURL=643.a1229982.chunk.js.map