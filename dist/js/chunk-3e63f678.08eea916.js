(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3e63f678"],{5285:function(e,t,c){"use strict";c("ee8b")},c58e:function(e,t,c){"use strict";c.r(t),c("b0c0");var n=c("7a23");Object(n.pushScopeId)("data-v-80fd7cb4");var o={class:"profit-history-case"},s={class:"profit-history-case-title"},i={class:"case"},r={class:"case-card-avatar"},a=["src"],l={class:"case-card-info"},d={class:"case-card-info-name"},b={class:"case-card-info-profit"},u={class:"number"},m={class:"case-card-info-desc"},O={class:"history"},j=["src"],p=["src"],f=["src"],v=Object(n.createElementVNode)("div",{id:"contact-us",class:"anchor"},null,-1);Object(n.popScopeId)();var y=c("5502"),E=c("d899"),g={setup:function(){var e=Object(y.b)(),t=Object(E.useI18n)().t,c=Object(n.computed)((function(){return e.getters.siteStyle})),o=Object(n.computed)((function(){var t,c;return null===(t=e.state.info)||void 0===t||null===(c=t.siteInfo)||void 0===c?void 0:c.name})),s=Object(n.computed)((function(){return[{name:"Alvis",profit:"26,472",desc:t("views_memberProfitHistoryDescStyle".concat(c.value))}]}));return{siteStyle:c,siteName:o,historyList:s,openLightbox:function(t){e.commit("SET_LIGHT_BOX_IMG_URL","history/".concat(t,".png")),e.commit("SET_SHOW_LIGHT_BOX",!0)}}}},N=(c("5285"),c("d959"));const V=c.n(N)()(g,[["render",function(e,t,y,E,g,N){return Object(n.openBlock)(),Object(n.createElementBlock)("div",o,[Object(n.createElementVNode)("div",s,Object(n.toDisplayString)(e.$t("views_memberProfitHistoryTitle")),1),Object(n.createElementVNode)("div",i,[(Object(n.openBlock)(!0),Object(n.createElementBlock)(n.Fragment,null,Object(n.renderList)(E.historyList,(function(t,c){return Object(n.openBlock)(),Object(n.createElementBlock)("div",{class:"case-card",key:"case".concat(c)},[Object(n.createElementVNode)("div",r,[Object(n.createElementVNode)("img",{src:e.$requireSafe("avatar/style".concat(E.siteStyle,"/4.png"))},null,8,a)]),Object(n.createElementVNode)("div",l,[Object(n.createElementVNode)("div",d,Object(n.toDisplayString)(t.name),1),Object(n.createElementVNode)("div",b,[Object(n.createTextVNode)(Object(n.toDisplayString)(e.$t("views_successfulCaseProfit"))+": ",1),Object(n.createElementVNode)("span",u,Object(n.toDisplayString)(t.profit),1)]),Object(n.createElementVNode)("div",m,Object(n.toDisplayString)(t.desc),1)])])})),128))]),Object(n.createElementVNode)("div",O,[Object(n.createElementVNode)("div",{class:"history-img is-btn",onClick:t[0]||(t[0]=function(e){return E.openLightbox("day")})},[Object(n.createElementVNode)("img",{src:c("963c")},null,8,j)]),Object(n.createElementVNode)("div",{class:"history-img is-btn",onClick:t[1]||(t[1]=function(e){return E.openLightbox("week")})},[Object(n.createElementVNode)("img",{src:c("4e5e")},null,8,p)]),Object(n.createElementVNode)("div",{class:"history-img is-btn",onClick:t[2]||(t[2]=function(e){return E.openLightbox("week")})},[Object(n.createElementVNode)("img",{src:c("8b04")},null,8,f)])]),v])}],["__scopeId","data-v-80fd7cb4"]]);t.default=V},ee8b:function(e,t,c){}}]);