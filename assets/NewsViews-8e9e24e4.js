import{_ as u,a as g,r as d,o as i,c,d as s,e as r,w as l,F as v,z as f,t as n,g as w}from"./index-c37bb4ad.js";import{_ as L,a as x}from"./logo_flower-86cc868b.js";import{_ as y}from"./BgSec2-9464b0c7.js";const{VITE_URL:V,VITE_PATH:E}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"bloom-api",BASE_URL:"/bloom_every_day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={data(){return{articles:[],isLoading:!1,fullPage:!0}},components:{RouterLink:g},mounted(){this.isLoading=!0,this.$http.get(`${V}v2/api/${E}/articles`).then(o=>{this.articles=o.data.articles,setTimeout(()=>{this.isLoading=!1},1e3),this.articles=o.data.articles.map(a=>{const _=a.create_at,e=new Date(_*1e3).toLocaleDateString();return{...a,dateString:e}})}).catch(o=>{console.log(o)})}},T={class:"wrapper"},S={class:"container"},b=s("div",{class:"news_head"},[s("h2",{class:"text-primary news_h2_pc"},"最新消息"),s("h3",{class:"text-primary text-center news_h3_mobile"},"最新消息")],-1),k=s("div",{class:"loading_brand"},[s("img",{src:L,alt:""}),s("div",{class:"loading_flower"},[s("img",{src:x,alt:""})])],-1),D=s("div",{class:"deco"},[s("img",{src:y,alt:""})],-1),N={class:"news_body"},P={class:"row mx-auto"},U={class:"news_card_group"},B={class:"news_card_head"},I={class:"news_img"},$=["src"],A={class:"news_card_body"},C={class:"card_title"},F={class:"card_title_h5"},H={class:"card_time caption"},O={class:"card_content"},z={class:"card_detail text-end caption"};function M(o,a,_,p,e,j){const h=d("vue-loading"),m=d("RouterLink");return i(),c("div",T,[s("div",S,[b,r(h,{active:e.isLoading,"onUpdate:active":a[0]||(a[0]=t=>e.isLoading=t),"is-full-page":e.fullPage,opacity:1},{default:l(()=>[k]),_:1},8,["active","is-full-page"]),D,s("div",N,[s("div",P,[(i(!0),c(v,null,f(e.articles,t=>(i(),c("div",{class:"col-md-6 col-lg-12",key:t.id},[s("div",U,[s("div",B,[s("div",I,[s("img",{src:t.imageUrl,alt:""},null,8,$)])]),s("div",A,[s("div",C,[s("h5",F,n(t.title),1),s("div",H,n(t.dateString),1)]),s("div",O,n(t.description),1),s("div",z,[r(m,{to:`/news/${t.id}`,class:"fs-6"},{default:l(()=>[w("more")]),_:2},1032,["to"])])])])]))),128))])])])])}const K=u(R,[["render",M]]);export{K as default};
