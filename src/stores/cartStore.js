import { defineStore } from 'pinia'
const { VITE_URL, VITE_PATH } = import.meta.env
import axios from 'axios'
import Swal from 'sweetalert2'

export default defineStore('cart', {
    state: () => {
        return {
            carts: [],  // 購物車中的所有品項
            final_total: 0, //購物車中所有品項的總金額

        }

    },

    actions: {
        // 加入購物車
        addToCart(id, qty = 1) {

            // 判斷購物車中是否已有相同的商品：
            // 有 → 判斷既有數量與要再加入的數量是否超過上限
            // 沒有 → 執行加入購物車 api

            // 1. 檢視傳入的商品是否已經在購物車中，並找出其索引
            const cartItemIndex = this.carts.findIndex((el) => {
                // this.carts.findIndex 檢視傳入的商品是否已經在購物車中，並找出其索引，將該索引的值傳給 cartItemIndex (得到第一筆符合的索引值)

                return id === el.product_id
                // 透過 id 來判斷，如果傳入的 id 與 購物車中既有商品的 id (el.product_id) 有相符合者，回傳符合者的索引值給 cartItemIndex 

            })


            // 2. 若購物車中有既存的相同商品，判斷其既存數量
            const isProductInCart = cartItemIndex > -1
            // .findIndex 方法會回傳陣列中符合的元素的 index。如果沒有符合的對象，將返回 -1；因此若索引值大於 -1，表示購物車中有這筆商品 (若 cartItemIndex >-1 ，isProductInCart 為 true)

            // 
            if (isProductInCart) {
                //商品已存在於購物車中，找出其既存數量
                const cartItemQty = this.carts[cartItemIndex].qty
                // console.log('cartItemQty', cartItemQty)

                const maxQty = 5 // 限制選購數量上限

                // maxQty - cartItemQty = optionNum 的總數


                console.log('cartItemQty',cartItemQty)
                console.log('maxQty-cartItemQty=',maxQty-cartItemQty)

                for (var i = 0; i <= maxQty - cartItemQty; i++) {
                    console.log('i', i)
                }

                // this.optionNum=maxQty-cartItemQty

                // console.log('this.optionNum', this.optionNum)


            }


            // 若商品不曾被加到購物車中，則打 api
            const data = {
                "product_id": id,
                "qty": qty  // api 中的 qty 數量
            }

            // optionNum 維持數量上限 5



            axios.post(`${VITE_URL}v2/api/${VITE_PATH}/cart`, { data })
                .then((res) => {

                    Swal.fire({
                        toast: true,
                        position: 'center',
                        timer: 2000,
                        title: `<h6 class="mb-0" style="color:#ff3d33; text-align:center;">商品${res.data.message}囉！
                        </h6>`,
                        showConfirmButton: false,
                        background: 'white'
                    })
                    this.getCarts();
                    // 更新後再重新取得購物車內品項資訊
                })
                .catch((err) => {
                    console.log(err)
                })


        },

        // 取得當前購物車中的所有品項
        getCarts() {
            axios.get(`${VITE_URL}v2/api/${VITE_PATH}/cart`)
                .then((res) => {
                    // console.log('最外層資料', res.data.data) //可看到所有商品總金額
                    //console.log('當前購物車中品項', res.data.data)

                    this.carts = res.data.data.carts // 取得當前購物車中的所有品項
                    this.final_total = res.data.data.final_total
                    // 取得當前購物車中所有品項的總金額

                    // this.addDisable=false;
                })
                .catch((err) => {
                    console.log(err)
                })

        },

        // 調整購物車頁面 select 數量
        updateCartItem(item) {

            const data = {
                product_id: item.product.id, // 產品的 id
                qty: item.qty,
            }


            axios.put(`${VITE_URL}v2/api/${VITE_PATH}/cart/${item.id}`, { data })
                // api 要輸入購物車品項的 id
                .then(() => {
                    // 取得更新後的數量並更新 carts 的資料
                    this.getCarts();
                })
                .catch((err) => {
                    console.log(err)
                })

        },

        // 刪除購物車品項
        deleteCartItem(item) {
            axios.delete(`${VITE_URL}v2/api/${VITE_PATH}/cart/${item.id}`)
                .then((res) => {
                    const deleteMessage = res.data.message
                    Swal.fire({
                        toast: true,
                        position: 'center',
                        timer: 2000,
                        showConfirmButton: false,
                        title: `<span style="color:#FF3D33;">商品${deleteMessage}~<span>`,
                        background: 'white'

                    })
                    this.getCarts();
                })
                .catch((err) => {
                    console.log(err)
                })

        }
    },



})