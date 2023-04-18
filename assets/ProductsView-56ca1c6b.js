import{_ as m,o as c,c as l,d as e,n as p,A as n,F as u,z as y,t as _,p as $,h as b,a as k,r as h,e as v,f as P,w as x}from"./index-00e1f58c.js";const V={props:["pages"],emits:["change-page"],data(){return{}}},f=s=>($("data-v-1150e341"),s=s(),b(),s),w={"aria-label":"Page navigation example",class:"nav_block"},E={class:"pagination justify-content-center"},I=f(()=>e("span",{"aria-hidden":"true"},"«",-1)),L=[I],R=["onClick"],S=f(()=>e("span",{"aria-hidden":"true"},"»",-1)),T=[S];function N(s,t,a,C,d,i){return c(),l("nav",w,[e("ul",E,[e("li",{class:p(["page-item",{disabled:!a.pages.has_pre}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=n(r=>s.$emit("change-page",a.pages.current_page-1),["prevent"]))},L)],2),(c(!0),l(u,null,y(a.pages.total_pages,r=>(c(),l("li",{class:p(["page-item",{active:r===a.pages.current_page}]),key:r+"page"},[e("a",{class:"page-link",href:"#",onClick:n(g=>s.$emit("change-page",r),["prevent"])},_(r),9,R)],2))),128)),e("li",{class:p(["page-item",{disabled:!a.pages.has_next}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=n(r=>s.$emit("change-page",a.pages.current_page+1),["prevent"]))},T)],2)])])}const A=m(V,[["render",N],["__scopeId","data-v-1150e341"]]),B="/bloom_every_day/assets/products_banner-febc812a.jpg";const{VITE_URL:D,VITE_PATH:U}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"bloom-api",BASE_URL:"/bloom_every_day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},j={data(){return{products:[],page:{},currentCategory:"all",isLoading:!1}},components:{RouterLink:k,Pagination:A},methods:{getProducts(s=1){const t=this.currentCategory==="all"?"all":`&category=${this.currentCategory}`;this.$http.get(`${D}v2/api/${U}/products/?page=${s}&${t}`).then(a=>{this.products=a.data.products,this.page=a.data.pagination,this.$router.push({query:{page:this.page.current_page,category:this.currentCategory}})}).catch(a=>{console.log(a)})},filterCategory(s){this.currentCategory=s,this.getProducts()}},mounted(){this.getProducts();const s=this.currentCategory==="all"?"all":`&category=${this.currentCategory}`;this.$router.push({query:{page:1,category:s}})}},q={class:"products_wrapper"},z=P('<div class="products_banner"><div class="products_banner_position"><div class="img_group"><img src="'+B+'" alt=""><div class="img_cover"></div></div><div class="banner_text"><h2 class="text-primary banner_h2_pc">走進有花的日子裡</h2><h3 class="text-primary banner_h3_mobile">走進有花的日子裡</h3></div></div></div>',1),F={class:"container"},H={class:"products_menu"},M={class:"products_menu_list"},O={class:"products_group"},G={class:"row mx-auto"},J={class:"products_card_head"},K={class:"head_img"},Q=["src"],W={class:"products_card_body"},X={class:"product_title"},Y={class:"badge_group"},Z={class:"badge_item text-primary"},ee={class:"price_group"},te={class:"product_origin_price"},se={class:"product_price text-primary"};function ae(s,t,a,C,d,i){const r=h("RouterLink"),g=h("Pagination");return c(),l(u,null,[e("div",q,[z,e("div",F,[e("div",H,[e("ul",M,[e("li",null,[e("a",{href:"",class:"products_menu_item fs-6",onClick:t[0]||(t[0]=n(o=>i.filterCategory("all"),["prevent"]))},"所有商品")]),e("li",null,[e("a",{href:"",class:"products_menu_item fs-6",onClick:t[1]||(t[1]=n(o=>i.filterCategory("小型花束"),["prevent"]))},"小型花束")]),e("li",null,[e("a",{href:"",class:"products_menu_item fs-6",onClick:t[2]||(t[2]=n(o=>i.filterCategory("季節花束"),["prevent"]))},"季節花束")]),e("li",null,[e("a",{href:"",class:"products_menu_item fs-6",onClick:t[3]||(t[3]=n(o=>i.filterCategory("經典花束"),["prevent"]))},"經典花束")]),e("li",null,[e("a",{href:"",class:"products_menu_item fs-6",onClick:t[4]||(t[4]=n(o=>i.filterCategory("好日特選"),["prevent"]))},"好日特選")])])]),e("div",O,[e("div",G,[(c(!0),l(u,null,y(d.products,o=>(c(),l("div",{class:"col-md-6 col-lg-4",key:o.id},[v(r,{to:`/products/${o.id}`,class:"products_card"},{default:x(()=>[e("div",J,[e("div",K,[e("img",{class:"img_hover",src:o.imageUrl,alt:""},null,8,Q)])]),e("div",W,[e("h5",X,_(o.title),1),e("div",Y,[e("h6",Z,_(o.category),1)]),e("div",ee,[e("h6",te,"NT $"+_(o.origin_price),1),e("h6",se,"NT $"+_(o.price),1)])])]),_:2},1032,["to"])]))),128))])])])]),v(g,{pages:d.page,onChangePage:i.getProducts},null,8,["pages","onChangePage"])],64)}const re=m(j,[["render",ae]]);export{re as default};