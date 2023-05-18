import{b as u}from"./bootstrap.bundle.min-b7b3b5d2.js";import{s as x}from"./setAuthFactory-2f9bf77f.js";import{d as M}from"./date-cc498b9c.js";import{P as O}from"./PaginationComponent-cce46015.js";import{S as k}from"./sweetalert2.all-39a63799.js";import{_ as L,r as p,o as d,c as a,e as m,d as t,F as _,y as h,t as l,z as w,p as C,g as E}from"./index-51853419.js";const{VITE_URL:b,VITE_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"bloom-api",BASE_URL:"/bloom_every_day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},P={data(){return{orders:[],tempOrder:{user:{}},isLoading:!1,fullPage:!0,page:{}}},components:{Pagination:O},methods:{date:M,getOrderList(n=1){this.isLoading=!0,this.$http.get(`${b}v2/api/${g}/admin/orders/?page=${n}`).then(i=>{console.log(i.data),this.orders=i.data.orders,this.page=i.data.pagination,this.isLoading=!1}).catch(i=>{console.log(i)})},openModal(n){this.tempOrder={...n},this.orderModal.show()},closeModal(){this.orderModal.hide()},openDeleteModal(n){this.tempOrder={...n},this.delModal.show()},deleteOrder(){this.$http.delete(`${b}v2/api/${g}/admin/order/${this.tempOrder.id}`).then(()=>{this.delModal.hide(),k.fire({toast:!0,position:"top",showConfirmButton:!1,timer:2e3,title:'<h6 class="mb-0" style="color:#FF3D33; text-align:center;">已刪除訂單！</h6>'}),this.getOrderList()}).catch(n=>{console.log(n)})}},mounted(){x(this.$http,this.$router),this.orderModal=new u.Modal(this.$refs.orderModal),this.delModal=new u.Modal(this.$refs.deleteModal),this.getOrderList()}},o=n=>(C("data-v-949e231a"),n=n(),E(),n),S={class:"order container"},I=o(()=>t("h5",{class:"admin_title_h5"},"訂單管理頁面",-1)),V={class:"row mx-auto"},D={class:"col-sm-12 p-0"},A={class:"table mt-4 order_table"},T=o(()=>t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")],-1)),B={"data-th":"購買時間"},F={"data-th":"Email"},R={"data-th":"購買款項"},U={class:"order_item",style:{"list-style-position":"inside","margin-bottom":"0px"}},N={"data-th":"應付金額"},q={"data-th":"是否付款"},H={key:0,class:"text-neutral"},z={key:1,class:"text-primary",style:{"font-weight":"bold"}},j={class:"btn_td","data-th":"編輯"},G=["onClick"],J=["onClick"],K={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"orderModal"},Q={class:"modal-dialog modal-xl",role:"document"},W={class:"modal-content border-0"},X=o(()=>t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Y={class:"modal-body"},Z={class:"row"},$={class:"col-md-4"},tt=o(()=>t("h4",{class:"bg-bg-2",style:{padding:"0 0 0 6px"}},"用戶資料",-1)),et={class:"table"},st=o(()=>t("th",{style:{width:"100px"}},"姓名",-1)),ot=o(()=>t("th",null,"Email",-1)),lt=o(()=>t("th",null,"電話",-1)),dt=o(()=>t("th",null,"地址",-1)),at={class:"col-md-8"},nt=o(()=>t("h4",{class:"bg-bg-2",style:{padding:"0 0 0 6px"}},"訂單細節",-1)),it={class:"table"},rt=o(()=>t("th",{style:{width:"100px"}},"訂單編號",-1)),ct=o(()=>t("th",null,"下單時間",-1)),_t=o(()=>t("th",null,"付款時間",-1)),ht=o(()=>t("th",null,"付款狀態",-1)),ut={key:0,class:"text-neutral"},pt={key:1,class:"text-primary"},mt=o(()=>t("th",null,"總金額",-1)),bt=o(()=>t("h4",{class:"bg-bg-2",style:{padding:"0 0 0 6px"}},"選購商品清單",-1)),gt={class:"table"},yt={class:"order_item",style:{"list-style-position":"inside","margin-bottom":"0px",padding:"0"}},vt={class:"text-end"},ft={key:0,class:"text-neutral"},xt={key:1,class:"text-primary"},Mt={class:"modal-footer"},Ot={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"deleteModal"},kt={class:"modal-dialog",role:"document"},Lt={class:"modal-content border-0"},wt=w('<div class="modal-header bg-primary text-white" data-v-949e231a><h5 class="modal-title" data-v-949e231a><span data-v-949e231a>刪除</span></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-949e231a></button></div><div class="modal-body" data-v-949e231a> 是否刪除這筆訂單？<strong class="text-danger" data-v-949e231a></strong> (刪除後將無法恢復)。 </div>',2),Ct={class:"modal-footer"},Et=o(()=>t("button",{type:"button",class:"btn btn_cancel btn-outline-neutral","data-bs-dismiss":"modal"}," 取消 ",-1));function Pt(n,i,St,It,e,r){const y=p("vue-loading"),v=p("Pagination");return d(),a(_,null,[m(y,{active:e.isLoading,"onUpdate:active":i[0]||(i[0]=s=>e.isLoading=s),"is-full-page":e.fullPage,opacity:1},null,8,["active","is-full-page"]),t("div",S,[I,t("div",V,[t("div",D,[t("table",A,[T,(d(!0),a(_,null,h(e.orders,s=>(d(),a("tr",{key:s.id},[t("td",B,l(r.date(s.create_at)),1),t("td",F,l(s.user.email),1),t("td",R,[t("ol",U,[(d(!0),a(_,null,h(s.products,(c,f)=>(d(),a("li",{key:f},l(c.product.title)+" 數量："+l(c.qty),1))),128))])]),t("td",N,l(s.total),1),t("td",q,[s.is_paid?(d(),a("span",H," 已付款 ")):(d(),a("span",z," 未付款 "))]),t("td",j,[t("div",null,[t("button",{class:"btn btn_edit btn-outline-neutral me-3",type:"button",onClick:c=>r.openModal(s)}," 檢視 ",8,G),t("button",{class:"btn btn_delete btn-outline-primary",type:"button",onClick:c=>r.openDeleteModal(s)}," 刪除 ",8,J)])])]))),128))])])]),m(v,{pages:e.page,onChangePage:r.getOrderList},null,8,["pages","onChangePage"]),t("div",K,[t("div",Q,[t("div",W,[X,t("div",Y,[t("div",Z,[t("div",$,[tt,t("table",et,[t("tbody",null,[t("tr",null,[st,t("td",null,l(e.tempOrder.user.name),1)]),t("tr",null,[ot,t("td",null,l(e.tempOrder.user.email),1)]),t("tr",null,[lt,t("td",null,l(e.tempOrder.user.tel),1)]),t("tr",null,[dt,t("td",null,l(e.tempOrder.user.address),1)])])])]),t("div",at,[nt,t("table",it,[t("tbody",null,[t("tr",null,[rt,t("td",null,l(e.tempOrder.id),1)]),t("tr",null,[ct,t("td",null,l(r.date(e.tempOrder.create_at)),1)]),t("tr",null,[_t,t("td",null,[t("span",null,l(r.date(e.tempOrder.paid_date)),1)])]),t("tr",null,[ht,t("td",null,[e.tempOrder.is_paid?(d(),a("span",ut,"已付款")):(d(),a("span",pt,"尚未付款"))])]),t("tr",null,[mt,t("td",null,l(e.tempOrder.total),1)])])]),bt,t("table",gt,[t("tbody",null,[t("tr",null,[t("td",null,[t("ol",yt,[(d(!0),a(_,null,h(e.tempOrder.products,(s,c)=>(d(),a("li",{key:c},l(s.product.title)+" 數量："+l(s.qty),1))),128))])])])])]),t("div",vt,[e.tempOrder.is_paid?(d(),a("span",ft,"已付款")):(d(),a("span",xt,"未付款"))])])])]),t("div",Mt,[t("button",{type:"button",class:"btn btn_confirm btn-outline-primary",onClick:i[1]||(i[1]=(...s)=>r.closeModal&&r.closeModal(...s))}," 關閉 ")])])])],512),t("div",Ot,[t("div",kt,[t("div",Lt,[wt,t("div",Ct,[Et,t("button",{type:"button",class:"btn btn-danger",onClick:i[2]||(i[2]=s=>r.deleteOrder())},"確認刪除")])])])],512)])],64)}const Rt=L(P,[["render",Pt],["__scopeId","data-v-949e231a"]]);export{Rt as default};
