import{_ as a,o as s,c as o,a as n,t as c,b as _}from"./index-a50af67c.js";const r={data(){return{data:{}}},mounted(){this.$http.get("https://randomuser.me/api/").then(t=>{console.log(t),this.data=t.data.results[0]})}},i={class:"about"},d=_("h1",null,"This is an about page",-1);function u(t,p,l,h,e,m){return s(),o("div",i,[d,n(" "+c(e.data),1)])}const b=a(r,[["render",u]]);export{b as default};
