import{_ as p,b as u,m as v,o as d,c,d as t,t as i,C as h,D as f,F as m,y as b,f as _,E as y,z as g}from"./index-782f2019.js";import{c as n}from"./cartStore-0ebedc9f.js";import"./sweetalert2.all-f7397e70.js";const{VITE_URL:P,VITE_PATH:T}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"bloom-api",BASE_URL:"/bloom_every_day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},x={data(){return{perProduct:{},selectQty:0}},components:{},computed:{productData(){const{id:a}=this.$route.params,e=this.carts.findIndex(r=>r.product_id===a);return e<0?null:this.carts[e]},optionNum(){let a=this.maxProductNum;return this.productData&&(a=a-this.productData.qty),a},...u(n,["carts","maxProductNum"])},methods:{scrollToTop(){window.scrollTo(0,0)},getSingleProduct(){const{id:a}=this.$route.params;this.$http.get(`${P}v2/api/${T}/product/${a}`).then(e=>{this.perProduct=e.data.product}).catch(e=>{console.log(e)})},...v(n,["getCarts","addToCart"])},mounted(){this.getCarts(),this.getSingleProduct(),this.scrollToTop()}},N={class:"product_detail_wrapper"},V={class:"product_detail_group"},D={class:"product_detail_card container"},S={class:"product_detail_left"},E={class:"detail_img"},k=["src"],C={class:"product_detail_right"},I={class:"detail_title"},w={class:"detail_description"},q={class:"detail_content"},Q={class:"detail_price_group"},R={key:0,class:"text-primary"},U={key:1,class:"final_price_display"},A={class:"detail_origin_price text-neutral",style:{"text-decoration":"line-through"}},B={class:"detail_price text-primary"},L={class:"detail_purchase_group"},F={class:"detail_quantity"},H={value:"0",disabled:"",selected:""},M=["value"],O={key:0,class:"qty_limit_info"},z={class:"text-primary"},j={class:"detail_purchase"},G=["disabled"],J=g('<div class="bg-bg-2" style="margin-top:50px;" data-v-6a07b8f7><div class="purchase_notice container" data-v-6a07b8f7><h5 class="notice_h5" data-v-6a07b8f7>購買須知</h5><ul data-v-6a07b8f7><li data-v-6a07b8f7><div class="list_style" data-v-6a07b8f7> 商品均需要時間進行製作，製作天數約 3~5 天不等，如超過此製作時間請至粉絲專頁私訊詢問。 </div></li><li data-v-6a07b8f7><div class="list_style" data-v-6a07b8f7> 商品因拍攝效果、光源差異及不同行動裝置產生的色差，以實物為準。尺寸可能因測量不同而存在誤差，1~2 公分屬正常範圍。 </div></li><li data-v-6a07b8f7><div class="list_style" data-v-6a07b8f7>花材皆因市場供應做調整，若花材短缺，將更換等價花材使用。</div></li><li data-v-6a07b8f7><div class="list_style" data-v-6a07b8f7>出售商品僅含花束部分，無附贈裝瓶。</div></li></ul></div></div><div class="storage_notice container" data-v-6a07b8f7><h5 class="storage_h5" data-v-6a07b8f7>保存方式</h5><div class="storage_quote" data-v-6a07b8f7> 乾燥花維持良好狀態可半年至一年，材質均為自然乾燥，因此有剝落、褪色現象均屬正常。 </div><ul data-v-6a07b8f7><li data-v-6a07b8f7><div class="list_style" data-v-6a07b8f7>絕對不要澆水。</div></li><li data-v-6a07b8f7><div class="list_style" data-v-6a07b8f7>請置於乾燥通風的環境，避免潮濕及陽光直射。</div></li><li data-v-6a07b8f7><div class="list_style" data-v-6a07b8f7> 花朵沾染灰塵，可用柔軟的毛筆輕輕揮去或用吹風機弱冷風輕吹，千萬不可大力抖弄，或用濕布擦拭。 </div></li><li data-v-6a07b8f7><div class="list_style" data-v-6a07b8f7>請避免家中寵物接觸或誤食乾燥花材。</div></li></ul></div>',2);function K(a,e,r,W,s,l){return d(),c("div",N,[t("div",V,[t("div",D,[t("div",S,[t("div",E,[t("img",{src:s.perProduct.imageUrl,alt:""},null,8,k)])]),t("div",C,[t("h5",I,i(s.perProduct.title),1),t("div",w,i(s.perProduct.description),1),t("div",q,i(s.perProduct.content),1),t("div",Q,[s.perProduct.origin_price==s.perProduct.price?(d(),c("div",R," NT $ "+i(s.perProduct.price),1)):(d(),c("div",U,[t("div",A," NT $ "+i(s.perProduct.origin_price),1),t("div",B,"NT $ "+i(s.perProduct.price),1)]))]),t("div",L,[t("div",F,[h(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":e[0]||(e[0]=o=>s.selectQty=o)},[t("option",H,i(l.optionNum?"請選擇數量":"已達選購數量上限"),1),(d(!0),c(m,null,b(l.optionNum,o=>(d(),c("option",{value:o,key:`${o}1235`},i(o),9,M))),128))],512),[[f,s.selectQty]]),l.productData?(d(),c("div",O,[_(" 商品已有 "),t("span",z,i(l.productData.qty),1),_(" 筆在購物車中 ")])):y("",!0)]),t("div",j,[t("button",{disabled:l.optionNum===0,class:"btn fs-6 text-center add_btn",onClick:e[1]||(e[1]=o=>(a.addToCart(s.perProduct.id,s.selectQty),s.selectQty=0))}," 加入購物車 ",8,G)])])])]),J])])}const $=p(x,[["render",K],["__scopeId","data-v-6a07b8f7"]]);export{$ as default};