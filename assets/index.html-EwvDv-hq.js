import{_ as h}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as I,a as v,c as D,b as m,t as s,u as t,d as y,e as b}from"./app-sARGZGwo.js";const B={class:"count-down"},S={class:"title"},g={class:"bar"},k={__name:"countDown",setup(w){let c=e("距离S4报名");e(""),e(""),e("");let l=e(""),i=e(""),d=e(""),n=e("");function p(){const a=Date.parse(new Date("2024-01-07 00:00:00")),f=Date.parse(new Date),o=a-f;let x=parseInt(o/1e3/60/60/24),r=parseInt(o/1e3/60/60%24),_=parseInt(o/1e3/60%60),u=parseInt(o/1e3%60);l.value=x,i.value=r>9?r:"0"+r,d.value=_>9?_:"0"+_,n.value=u>9?u:"0"+u}return I(()=>{p();let a=setInterval(()=>{n.value.toString().includes("-")?(clearTimeout(a),n.value="00",c.value="倒计时结束"):p()},1e3)}),(a,f)=>(v(),D("div",B,[m("h1",S,s(t(c)),1),m("h1",g,"还剩 "+s(t(l))+" 天 "+s(t(i))+" 小时 "+s(t(d))+" 分 "+s(t(n))+" 秒",1)]))}},N=h(k,[["__scopeId","data-v-4fc44fb3"],["__file","countDown.vue"]]),V=y({__name:"index.html",setup(w){return(c,l)=>(v(),D("div",null,[b(t(N))]))}}),M=h(V,[["__file","index.html.vue"]]);export{M as default};
