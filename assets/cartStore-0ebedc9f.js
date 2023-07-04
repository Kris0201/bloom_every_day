import{K as d,L as s}from"./index-782f2019.js";import{S as i}from"./sweetalert2.all-f7397e70.js";const{VITE_URL:r,VITE_PATH:c}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"bloom-api",BASE_URL:"/bloom_every_day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},m=d("cart",{state:()=>({carts:[],final_total:0,maxProductNum:5}),actions:{addToCart(t,a=1){if(a===0){i.fire({toast:!0,position:"center",timer:2e3,title:`<h6 class="mb-0" style="color:white; text-align:center;">請選擇數量
                    </h6>`,showConfirmButton:!1,background:"#ff3d33"});return}const o=this.carts.findIndex(e=>t===e.product_id);if(o>-1){const e=this.carts[o].qty,l=5;if(e+a>l)return}const n={product_id:t,qty:a};s.post(`${r}v2/api/${c}/cart`,{data:n}).then(e=>{i.fire({toast:!0,position:"center",timer:2e3,title:`<h6 class="mb-0" style="color:#ff3d33; text-align:center;">商品${e.data.message}囉！
                        </h6>`,showConfirmButton:!1,background:"white"}),this.getCarts()}).catch(e=>{console.log(e)})},getCarts(){s.get(`${r}v2/api/${c}/cart`).then(t=>{this.carts=t.data.data.carts,this.final_total=t.data.data.final_total}).catch(t=>{console.log(t)})},updateCartItem(t){const a={product_id:t.product.id,qty:t.qty};s.put(`${r}v2/api/${c}/cart/${t.id}`,{data:a}).then(()=>{this.getCarts()}).catch(o=>{console.log(o)})},deleteCartItem(t){s.delete(`${r}v2/api/${c}/cart/${t.id}`).then(a=>{const o=a.data.message;i.fire({toast:!0,position:"center",timer:2e3,showConfirmButton:!1,title:`<span style="color:#FF3D33;">商品${o}~<span>`,background:"white"}),this.getCarts()}).catch(a=>{console.log(a)})}}});export{m as c};
