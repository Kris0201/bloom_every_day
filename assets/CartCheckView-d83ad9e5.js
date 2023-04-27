import{_ as x,D as w,E,G as S,b as k,m as F,r as n,o as v,c as f,d as s,F as C,z as I,t as _,e as a,w as b,f as T,n as m,B as U,H as L,p as P,h as B}from"./index-3718144b.js";import{S as h,c as g}from"./cartStore-f649d807.js";import{_ as N,a as D}from"./logo_flower-86cc868b.js";const{VITE_URL:q,VITE_PATH:M}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"bloom-api",BASE_URL:"/bloom_every_day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={data(){return{isLoading:!1,fullPage:!0,order:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{VForm:w,VField:E,ErrorMessage:S},computed:{...k(g,["carts","final_total"])},methods:{...F(g,["getCarts"]),isPhone(l){return/^(09)[0-9]{8}$/.test(l)?!0:"需要正確的電話號碼"},onSubmit(){this.isLoading=!0;const l=this.order;this.$http.post(`${q}/v2/api/${M}/order`,{data:l}).then(e=>{const u=e.data.orderId;setTimeout(()=>{this.isLoading=!1},1e3),u===void 0?h.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,title:"請填妥表單再按送出！",background:"#F2E7E8"}):(this.$router.push(`/cartPay/${u}`),h.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,title:"成功送單！",background:"#F2E7E8"}))}).catch(e=>{console.log(e)})}},mounted(){}},r=l=>(P("data-v-4cb39148"),l=l(),B(),l),A={class:"cart_check_wrapper"},H={class:"container"},O=T('<div class="step_group" data-v-4cb39148><div class="step_item" data-v-4cb39148><div class="caption" data-v-4cb39148>訂單資訊</div></div><div class="step_item active" data-v-4cb39148><div class="caption" data-v-4cb39148>填寫資訊</div></div><div class="step_item" data-v-4cb39148><div class="caption" data-v-4cb39148>完成訂單</div></div></div>',1),z={class:"row mx-auto"},j={class:"order_info col-lg-5"},G=r(()=>s("h5",{class:"cart_h5 bg-bg-2"},"訂單明細",-1)),J={class:"cart_table"},K={class:"table"},Q=r(()=>s("tr",{class:"row mx-auto d-md-flex cart_table_title"},[s("td",{class:"col-7 col-sm-6"},"商品資訊"),s("td",{class:"col-2 col-sm-2"},"數量"),s("td",{class:"col-3 col-sm-4"},"小計")],-1)),W={class:"col-7 col-sm-6"},X={class:"cart_product_info"},Y={class:"cart_product_img"},Z=["src"],$={class:"cart_product_title"},ss={class:"col-2 col-sm-2 order_2 order_md_0 selected_qty"},es={class:"col-3 col-sm-4 order_2 order_md_0 selected_subtotal"},ts={class:"cart_count"},os=r(()=>s("div",{class:"cart_total_text"},"總計：",-1)),ls={class:"cart_total_price"},as=r(()=>s("div",{class:"loading_brand"},[s("img",{src:N,alt:""}),s("div",{class:"loading_flower"},[s("img",{src:D,alt:""})])],-1)),rs={class:"buyer_form col-lg-7"},ds=r(()=>s("h5",{class:"cart_h5 bg-bg-2"},"訂購人資訊",-1)),is={class:"form-group"},cs=r(()=>s("label",{for:"name",class:"form-label label_style"},"收件人姓名",-1)),ns={class:"form-group"},_s=r(()=>s("label",{for:"tel",class:"form-label label_style"},"電話",-1)),ms={class:"form-group"},us=r(()=>s("label",{for:"email",class:"form-label label_style"},"信箱",-1)),ps={class:"form-group"},vs=r(()=>s("label",{for:"address",class:"form-label label_style"},"地址",-1)),fs={class:"cart_textarea"},bs=r(()=>s("label",{for:"message",class:"form-label label_style"},"備註",-1)),hs={class:"d-flex justify-content-end py-4 mb-3"};function gs(l,e,u,Vs,o,p){const V=n("vue-loading"),i=n("VField"),c=n("ErrorMessage"),y=n("VForm");return v(),f("div",A,[s("div",H,[O,s("div",z,[s("div",j,[G,s("div",J,[s("table",K,[Q,(v(!0),f(C,null,I(l.carts,t=>(v(),f("tr",{class:"row mx-auto order_control",key:t.id},[s("td",W,[s("div",X,[s("div",Y,[s("img",{src:t.product.imageUrl,alt:""},null,8,Z)]),s("h6",$,_(t.product.title),1)])]),s("td",ss,[s("div",null,"x "+_(t.qty),1)]),s("td",es,[s("div",null,"NT $"+_(t.total),1)])]))),128)),s("tr",null,[s("div",ts,[os,s("div",ls,"NT $"+_(l.final_total),1)])])])])]),a(V,{active:o.isLoading,"onUpdate:active":e[0]||(e[0]=t=>o.isLoading=t),"is-full-page":o.fullPage,opacity:1},{default:b(()=>[as]),_:1},8,["active","is-full-page"]),s("div",rs,[ds,a(y,{class:"cart_form"},{default:b(({errors:t})=>[s("div",is,[cs,a(i,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.order.user.name,"onUpdate:modelValue":e[1]||(e[1]=d=>o.order.user.name=d)},null,8,["class","modelValue"]),a(c,{name:"姓名",class:"invalid_feedback"})]),s("div",ns,[_s,a(i,{id:"tel",name:"電話",type:"text",class:m(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入手機號碼",modelValue:o.order.user.tel,"onUpdate:modelValue":e[2]||(e[2]=d=>o.order.user.tel=d),rules:p.isPhone},null,8,["class","modelValue","rules"]),a(c,{name:"電話",class:"invalid_feedback"})]),s("div",ms,[us,a(i,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入信箱",rules:"email|required",modelValue:o.order.user.email,"onUpdate:modelValue":e[3]||(e[3]=d=>o.order.user.email=d)},null,8,["class","modelValue"]),a(c,{name:"email",class:"invalid_feedback"})]),s("div",ps,[vs,a(i,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.order.user.address,"onUpdate:modelValue":e[4]||(e[4]=d=>o.order.user.address=d)},null,8,["class","modelValue"]),a(c,{name:"地址",class:"invalid_feedback"})]),s("div",fs,[bs,U(s("textarea",{name:"備註",id:"message",class:"w-100 form-control",cols:"10",rows:"10","onUpdate:modelValue":e[5]||(e[5]=d=>o.order.message=d)},null,512),[[L,o.order.message]])])]),_:1})]),s("div",hs,[s("button",{type:"button",class:"btn btn-outline-neutral cart_btn",onClick:e[6]||(e[6]=(...t)=>p.onSubmit&&p.onSubmit(...t))}," 送出訂單 ")])])])])}const Es=x(R,[["render",gs],["__scopeId","data-v-4cb39148"]]);export{Es as default};
