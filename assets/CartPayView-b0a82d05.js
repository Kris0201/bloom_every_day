import{_ as n,D as p,E as u,G as h,b as m,m as v,o as r,c as d,d as t,F as f,z as b,t as c,f as g,p as y,h as E,g as S}from"./index-63009616.js";import{S as i,c as l}from"./cartStore-7eb3b9d7.js";const{VITE_URL:x,VITE_PATH:V}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"bloom-api",BASE_URL:"/bloom_every_day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},$={data(){return{order:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{VForm:p,VField:u,ErrorMessage:h},computed:{...m(l,["carts","final_total"])},methods:{...v(l,["getCarts"]),isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"需要正確的電話號碼"},onSubmit(){const s=this.order;this.$http.post(`${x}/v2/api/${V}/order`,{data:s}).then(o=>{console.log("表單",o.data),console.log("this.$router",this.$router),o.data.orderId===void 0?i.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,title:"請填妥表單再按送出！",background:"#F2E7E8"}):i.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,title:"成功送單！",background:"#F2E7E8"})}).catch(o=>{console.log(o)})}},mounted(){}},a=s=>(y("data-v-bf591e98"),s=s(),E(),s),I={class:"cart_check_wrapper"},w={class:"container"},T=g('<div class="step_group" data-v-bf591e98><div class="step_item" data-v-bf591e98><div class="caption" data-v-bf591e98>訂單資訊</div></div><div class="step_item" data-v-bf591e98><div class="caption" data-v-bf591e98>填寫資訊</div></div><div class="step_item active" data-v-bf591e98><div class="caption" data-v-bf591e98>完成訂單</div></div></div>',1),F={class:"row mx-auto"},N={class:"order_info col-lg-5"},k=a(()=>t("h5",{class:"cart_h5 bg-bg-2"},[S(" 訂單明細 "),t("span",{class:"caption text-primary"},"(未付款)"),t("span",{class:"caption"},"(已付款)")],-1)),B={class:"cart_table"},P={class:"table"},C=a(()=>t("tr",{class:"row mx-auto d-md-flex cart_table_title"},[t("td",{class:"col-7 col-sm-6"},"商品資訊"),t("td",{class:"col-2 col-sm-2"},"數量"),t("td",{class:"col-3 col-sm-4"},"小計")],-1)),D={class:"col-7 col-sm-6"},R={class:"cart_product_info"},A={class:"cart_product_img"},L=["src"],O={class:"cart_product_title"},U={class:"col-2 col-sm-2 order_2 order_md_0 cart_select"},H={class:"col-3 col-sm-4 order_2 order_md_0 cart_subtotal"},M={class:"cart_count"},j=a(()=>t("div",{class:"cart_total_text"},"總計：",-1)),q={class:"cart_total_price"},z=a(()=>t("div",{class:"buyer_form col-lg-7"},[t("h5",{class:"cart_h5 bg-bg-2"},"訂購人資訊")],-1)),G=a(()=>t("div",{class:"d-flex justify-content-end py-4 mb-3"},[t("button",{type:"submit",class:"btn btn-outline-neutral cart_btn"}," 信用卡付款 ")],-1));function J(s,o,_,K,Q,W){return r(),d("div",I,[t("div",w,[T,t("div",F,[t("div",N,[k,t("div",B,[t("table",P,[C,(r(!0),d(f,null,b(s.carts,e=>(r(),d("tr",{class:"row mx-auto order_control",key:e.id},[t("td",D,[t("div",R,[t("div",A,[t("img",{src:e.product.imageUrl,alt:""},null,8,L)]),t("h6",O,c(e.product.title),1)])]),t("td",U,[t("div",null,"x "+c(e.qty),1)]),t("td",H,[t("div",null,"NT $"+c(e.total),1)])]))),128)),t("tr",null,[t("div",M,[j,t("div",q,"NT $"+c(s.final_total),1)])])])])]),z,G])])])}const Z=n($,[["render",J],["__scopeId","data-v-bf591e98"]]);export{Z as default};
