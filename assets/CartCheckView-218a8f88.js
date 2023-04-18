import{_ as V,D as y,E as S,G as x,b as E,m as w,r as p,o as f,c as b,d as s,F as k,z as F,t as m,e as a,w as C,f as I,n as u,p as T,h as U}from"./index-a4dbd06b.js";import{S as v,c as h}from"./cartStore-c72fce8a.js";const{VITE_URL:N,VITE_PATH:B}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"bloom-api",BASE_URL:"/bloom_every_day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},D={data(){return{order:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{VForm:y,VField:S,ErrorMessage:x},computed:{...E(h,["carts","final_total"])},methods:{...w(h,["getCarts"]),isPhone(o){return/^(09)[0-9]{8}$/.test(o)?!0:"需要正確的電話號碼"},onSubmit(){const o=this.order;this.$http.post(`${N}/api/${B}/order`,{data:o}).then(e=>{console.log("表單",e.data);const c=e.data.orderId;console.log("isOrderId",c),c&&v.fire({toast:!0,position:"top-star",showConfirmButton:!1,timer:1500,title:"成功送單！",background:"#F2E7E8"})}).catch(e=>{console.log(e),e.response.data.success===!1&&v.fire({toast:!0,position:"top-star",showConfirmButton:!1,timer:1500,title:"請填妥表單再按送出！",background:"#F2E7E8"})})}},mounted(){}},l=o=>(T("data-v-bd317f83"),o=o(),U(),o),P={class:"cart_check_wrapper"},R={class:"container"},q=I('<div class="step_group" data-v-bd317f83><div class="step_item" data-v-bd317f83><div class="caption" data-v-bd317f83>訂單資訊</div></div><div class="step_item active" data-v-bd317f83><div class="caption" data-v-bd317f83>填寫資訊</div></div><div class="step_item" data-v-bd317f83><div class="caption" data-v-bd317f83>完成訂單</div></div></div>',1),A={class:"row mx-auto"},L={class:"order_info col-lg-5"},M=l(()=>s("h5",{class:"cart_h5 bg-bg-2"},"訂單明細",-1)),O={class:"cart_table"},z={class:"table"},H=l(()=>s("tr",{class:"row mx-auto d-md-flex cart_table_title"},[s("td",{class:"col-7 col-sm-6"},"商品資訊"),s("td",{class:"col-2 col-sm-2"},"數量"),s("td",{class:"col-3 col-sm-4"},"小計")],-1)),j={class:"col-7 col-sm-6"},G={class:"cart_product_info"},J={class:"cart_product_img"},K=["src"],Q={class:"cart_product_title"},W={class:"col-2 col-sm-2 order_2 order_md_0 cart_select"},X={class:"col-3 col-sm-4 order_2 order_md_0 cart_subtotal"},Y={class:"cart_count"},Z=l(()=>s("div",{class:"cart_total_text"},"總計：",-1)),$={class:"cart_total_price"},ss={class:"buyer_form col-lg-7"},es=l(()=>s("h5",{class:"cart_h5 bg-bg-2"},"訂購人資訊",-1)),ts={class:"form-group"},os=l(()=>s("label",{for:"name",class:"form-label label_style"},"姓名",-1)),as={class:"form-group"},ls=l(()=>s("label",{for:"tel",class:"form-label label_style"},"電話",-1)),rs={class:"form-group"},ds=l(()=>s("label",{for:"email",class:"form-label label_style"},"信箱",-1)),cs={class:"form-group"},is=l(()=>s("label",{for:"address",class:"form-label label_style"},"地址",-1)),ns=l(()=>s("div",{class:"cart_textarea"},[s("label",{for:"message",class:"form-label label_style"},"備註"),s("textarea",{name:"備註",id:"message",class:"w-100 form-control",cols:"10",rows:"10"})],-1)),_s={class:"d-flex justify-content-end py-4 mb-3"};function ms(o,e,c,us,r,i){const n=p("VField"),_=p("ErrorMessage"),g=p("VForm");return f(),b("div",P,[s("div",R,[q,s("div",A,[s("div",L,[M,s("div",O,[s("table",z,[H,(f(!0),b(k,null,F(o.carts,t=>(f(),b("tr",{class:"row mx-auto order_control",key:t.id},[s("td",j,[s("div",G,[s("div",J,[s("img",{src:t.product.imageUrl,alt:""},null,8,K)]),s("h6",Q,m(t.product.title),1)])]),s("td",W,[s("div",null,"x "+m(t.qty),1)]),s("td",X,[s("div",null,"NT $"+m(t.total),1)])]))),128)),s("tr",null,[s("div",Y,[Z,s("div",$,"NT $"+m(o.final_total),1)])])])])]),s("div",ss,[es,a(g,{class:"cart_form",onSubmit:i.onSubmit},{default:C(({errors:t})=>[s("div",ts,[os,a(n,{id:"name",name:"姓名",type:"text",class:u(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:r.order.user.name,"onUpdate:modelValue":e[0]||(e[0]=d=>r.order.user.name=d)},null,8,["class","modelValue"]),a(_,{name:"姓名",class:"invalid_feedback"})]),s("div",as,[ls,a(n,{id:"tel",name:"電話",type:"text",class:u(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入手機號碼",modelValue:r.order.user.tel,"onUpdate:modelValue":e[1]||(e[1]=d=>r.order.user.tel=d),rules:i.isPhone},null,8,["class","modelValue","rules"]),a(_,{name:"電話",class:"invalid_feedback"})]),s("div",rs,[ds,a(n,{id:"email",name:"email",type:"email",class:u(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入信箱",rules:"email|required",modelValue:r.order.user.email,"onUpdate:modelValue":e[2]||(e[2]=d=>r.order.user.email=d)},null,8,["class","modelValue"]),a(_,{name:"email",class:"invalid_feedback"})]),s("div",cs,[is,a(n,{id:"address",name:"地址",type:"text",class:u(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:r.order.user.address,"onUpdate:modelValue":e[3]||(e[3]=d=>r.order.user.address=d)},null,8,["class","modelValue"]),a(_,{name:"地址",class:"invalid_feedback"})]),ns]),_:1},8,["onSubmit"])]),s("div",_s,[s("button",{type:"submit",class:"btn btn-outline-neutral cart_btn",onClick:e[4]||(e[4]=(...t)=>i.onSubmit&&i.onSubmit(...t))},"送出訂單")])])])])}const bs=V(D,[["render",ms],["__scopeId","data-v-bd317f83"]]);export{bs as default};
