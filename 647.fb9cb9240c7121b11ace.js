"use strict";(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[647],{9647:(n,e,t)=>{t.r(e),t.d(e,{default:()=>b});var i,r=t(7294),a=t(168),o=t(2788).ZP.ul(i||(i=(0,a.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  height: 80%;\n  border-radius: 10px;\n  background: rgb(230, 230, 230);\n  padding: 50px;\n  & .basket_items {\n    display: flex;\n    gap: 30px;\n    flex-direction: column;\n    width: 80%;\n    height: 80%;\n    overflow: auto;\n    & li {\n      position: relative;\n      width: 90%;\n      display: flex;\n      height: fit-content;\n      background: white;\n      border-radius: 10px;\n      padding: 10px;\n      @media (max-width: 500px) {\n        flex-direction: column;\n      }\n\n      & button {\n        @media (max-width: 500px) {\n          position: static;\n        }\n        position: absolute;\n        width: fit-content;\n        height: fit-content;\n        background: tomato;\n        border-radius: 6px;\n        border: none;\n        padding: 5px;\n        right: 20px;\n        top: 50%;\n        bottom: 50%;\n      }\n      & div {\n        border-radius: 0;\n        background: white;\n      }\n      & img {\n        width: 100px;\n        height: auto;\n      }\n    }\n  }\n"]))),l=t(7223),c=t(5998),d=t(5911),u=t(7462),p=t(4922),s=function(n){var e=n.item,t=n.handleRemoveItem;return r.createElement("li",{key:e.id},r.createElement("img",{src:e.images[0],alt:"item.images"}),r.createElement(p.j,(0,u.Z)({},e,{type:"basket"})),r.createElement("button",{onClick:function(){return t(String(e.id))}},"Удалить"))};const m=r.memo(s),b=function(){var n=(0,l.i)((function(n){return n.basket})).basket,e=(0,c.I0)(),t=(0,r.useCallback)((function(n){e((0,d.E)(n))}),[e]);return r.createElement(o,null,r.createElement("h2",null,"Корзина"),r.createElement("div",{className:"basket_items"},n.length>0?n.map((function(n){return r.createElement(m,{handleRemoveItem:t,key:n.id,item:n})})):"Корзина пустая"))}},4922:(n,e,t)=>{t.d(e,{j:()=>d});var i,r=t(7294),a=t(168),o=t(2788).ZP.div(i||(i=(0,a.Z)(["\n  background: rgba(128, 128, 128, 0.2);\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  & button {\n    transition: 0.3s linear;\n    border: none;\n    background: orange;\n    padding: 10px 20px;\n    font-size: 18px;\n    border-radius: 6px;\n    color: black;\n    text-decoration: none;\n    opacity: 1;\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n"]))),l=t(5998),c=t(5911),d=function(n){var e=n.currentSize,t=n.description,i=n.price,a=n.name,d=n.images,u=n.type,p=(0,l.I0)();return r.createElement(o,null,r.createElement("p",null,t),r.createElement("p",null,"Размер: ",e),r.createElement("p",null,"Цвет: ",a),r.createElement("p",null,"Цена: ",i),"basket"===u?null:r.createElement("button",{onClick:function(){p((0,c.H)({id:Date.now().toString(),name:a,price:i,currentSize:e,description:t,images:d}))},disabled:"не указан"===e},"Добавить в корзину"))}},5911:(n,e,t)=>{t.d(e,{E:()=>a,H:()=>r});var i=t(6050),r=function(n){return{type:i.r.ADD_TO_BASKET,payload:n}},a=function(n){return{type:i.r.REMOVE_FROM_BASKET,payload:n}}},7462:(n,e,t)=>{function i(){return i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},i.apply(this,arguments)}t.d(e,{Z:()=>i})}}]);