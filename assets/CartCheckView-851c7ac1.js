import{_ as V,D as y,E as S,G as x,b as E,m as w,r as p,o as f,c as v,d as e,F as k,z as F,t as _,e as a,w as C,f as I,n as m,p as T,h as U}from"./index-63009616.js";import{S as h,c as b}from"./cartStore-7eb3b9d7.js";const{VITE_URL:N,VITE_PATH:B}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"bloom-api",BASE_URL:"/bloom_every_day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},P={data(){return{order:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{VForm:y,VField:S,ErrorMessage:x},computed:{...E(b,["carts","final_total"])},methods:{...w(b,["getCarts"]),isPhone(o){return/^(09)[0-9]{8}$/.test(o)?!0:"需要正確的電話號碼"},onSubmit(){const o=this.order;this.$http.post(`${N}/v2/api/${B}/order`,{data:o}).then(s=>{console.log("表單",s.data);const u=s.data.orderId;u===void 0?h.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,title:"請填妥表單再按送出！",background:"#F2E7E8"}):(this.$router.push(`/cartPay/${u}`),h.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,title:"成功送單！",background:"#F2E7E8"}))}).catch(s=>{console.log(s)})}},mounted(){}},l=o=>(T("data-v-9c33c6cf"),o=o(),U(),o),D={class:"cart_check_wrapper"},R={class:"container"},q=I('<div class="step_group" data-v-9c33c6cf><div class="step_item" data-v-9c33c6cf><div class="caption" data-v-9c33c6cf>訂單資訊</div></div><div class="step_item active" data-v-9c33c6cf><div class="caption" data-v-9c33c6cf>填寫資訊</div></div><div class="step_item" data-v-9c33c6cf><div class="caption" data-v-9c33c6cf>完成訂單</div></div></div>',1),A={class:"row mx-auto"},L={class:"order_info col-lg-5"},M=l(()=>e("h5",{class:"cart_h5 bg-bg-2"},"訂單明細",-1)),O={class:"cart_table"},z={class:"table"},H=l(()=>e("tr",{class:"row mx-auto d-md-flex cart_table_title"},[e("td",{class:"col-7 col-sm-6"},"商品資訊"),e("td",{class:"col-2 col-sm-2"},"數量"),e("td",{class:"col-3 col-sm-4"},"小計")],-1)),j={class:"col-7 col-sm-6"},G={class:"cart_product_info"},J={class:"cart_product_img"},K=["src"],Q={class:"cart_product_title"},W={class:"col-2 col-sm-2 order_2 order_md_0 cart_select"},X={class:"col-3 col-sm-4 order_2 order_md_0 cart_subtotal"},Y={class:"cart_count"},Z=l(()=>e("div",{class:"cart_total_text"},"總計：",-1)),$={class:"cart_total_price"},ee={class:"buyer_form col-lg-7"},se=l(()=>e("h5",{class:"cart_h5 bg-bg-2"},"訂購人資訊",-1)),te={class:"form-group"},oe=l(()=>e("label",{for:"name",class:"form-label label_style"},"姓名",-1)),ae={class:"form-group"},le=l(()=>e("label",{for:"tel",class:"form-label label_style"},"電話",-1)),ce={class:"form-group"},re=l(()=>e("label",{for:"email",class:"form-label label_style"},"信箱",-1)),de={class:"form-group"},ie=l(()=>e("label",{for:"address",class:"form-label label_style"},"地址",-1)),ne=l(()=>e("div",{class:"cart_textarea"},[e("label",{for:"message",class:"form-label label_style"},"備註"),e("textarea",{name:"備註",id:"message",class:"w-100 form-control",cols:"10",rows:"10"})],-1)),_e={class:"d-flex justify-content-end py-4 mb-3"};function me(o,s,u,ue,c,d){const i=p("VField"),n=p("ErrorMessage"),g=p("VForm");return f(),v("div",D,[e("div",R,[q,e("div",A,[e("div",L,[M,e("div",O,[e("table",z,[H,(f(!0),v(k,null,F(o.carts,t=>(f(),v("tr",{class:"row mx-auto order_control",key:t.id},[e("td",j,[e("div",G,[e("div",J,[e("img",{src:t.product.imageUrl,alt:""},null,8,K)]),e("h6",Q,_(t.product.title),1)])]),e("td",W,[e("div",null,"x "+_(t.qty),1)]),e("td",X,[e("div",null,"NT $"+_(t.total),1)])]))),128)),e("tr",null,[e("div",Y,[Z,e("div",$,"NT $"+_(o.final_total),1)])])])])]),e("div",ee,[se,a(g,{class:"cart_form",onSubmit:d.onSubmit},{default:C(({errors:t})=>[e("div",te,[oe,a(i,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:c.order.user.name,"onUpdate:modelValue":s[0]||(s[0]=r=>c.order.user.name=r)},null,8,["class","modelValue"]),a(n,{name:"姓名",class:"invalid_feedback"})]),e("div",ae,[le,a(i,{id:"tel",name:"電話",type:"text",class:m(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入手機號碼",modelValue:c.order.user.tel,"onUpdate:modelValue":s[1]||(s[1]=r=>c.order.user.tel=r),rules:d.isPhone},null,8,["class","modelValue","rules"]),a(n,{name:"電話",class:"invalid_feedback"})]),e("div",ce,[re,a(i,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入信箱",rules:"email|required",modelValue:c.order.user.email,"onUpdate:modelValue":s[2]||(s[2]=r=>c.order.user.email=r)},null,8,["class","modelValue"]),a(n,{name:"email",class:"invalid_feedback"})]),e("div",de,[ie,a(i,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:c.order.user.address,"onUpdate:modelValue":s[3]||(s[3]=r=>c.order.user.address=r)},null,8,["class","modelValue"]),a(n,{name:"地址",class:"invalid_feedback"})]),ne]),_:1},8,["onSubmit"])]),e("div",_e,[e("button",{type:"submit",class:"btn btn-outline-neutral cart_btn",onClick:s[4]||(s[4]=(...t)=>d.onSubmit&&d.onSubmit(...t))},"送出訂單")])])])])}const ve=V(P,[["render",me],["__scopeId","data-v-9c33c6cf"]]);export{ve as default};
