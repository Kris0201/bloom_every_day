<template>
  <div class="product_detail_wrapper">
    <div class="product_detail_group">
      <!--包覆整個三區塊的外層-->
      <div class="product_detail_card container">
        <div class="product_detail_left">
          <div class="detail_img">
            <img :src="perProduct.imageUrl" alt="" />
          </div>
        </div>
        <div class="product_detail_right">
          <h5 class="detail_title">{{ perProduct.title }}</h5>
          <div class="detail_description">{{ perProduct.description }}</div>
          <div class="detail_content">{{ perProduct.content }}</div>
          <div class="detail_price_group">
            <div v-if="perProduct.origin_price == perProduct.price" class="text-primary">
              <!-- 如果前後價格一樣，顯示此區 -->
              NT $ {{ perProduct.price }}
            </div>
            <div v-else class="final_price_display">
              <div class="detail_origin_price text-neutral" style="text-decoration: line-through">
                NT $ {{ perProduct.origin_price }}
              </div>
              <div class="detail_price text-primary">NT $ {{ perProduct.price }}</div>
            </div>
          </div>

          <div class="detail_purchase_group">
            <div class="detail_quantity">
              <select name="" id="" class="form-select" v-model="selectQty">
                <option value="0" disabled selected>
                  {{ optionNum ? '請選擇數量' : '已達選購數量上限' }}
                </option>
                <option :value="i" v-for="i in optionNum" :key="`${i}1235`">
                  {{ i }}
                </option>
              </select>

              <div class="qty_limit_info" v-if="productData">
                商品已有 <span class="text-primary">{{ productData.qty }}</span> 筆在購物車中
              </div>
            </div>

            <div class="detail_purchase">
              <button
                :disabled="optionNum === 0"
                class="btn fs-6 text-center add_btn"
                @click="addToCart(perProduct.id, selectQty), (selectQty = 0)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-bg-2" style="margin-top: 50px">
        <div class="purchase_notice container">
          <h5 class="notice_h5">購買須知</h5>
          <ul>
            <li>
              <div class="list_style">
                商品均需要時間進行製作，製作天數約 3~5
                天不等，如超過此製作時間請至粉絲專頁私訊詢問。
              </div>
            </li>
            <li>
              <div class="list_style">
                商品因拍攝效果、光源差異及不同行動裝置產生的色差，以實物為準。尺寸可能因測量不同而存在誤差，1~2
                公分屬正常範圍。
              </div>
            </li>
            <li>
              <div class="list_style">花材皆因市場供應做調整，若花材短缺，將更換等價花材使用。</div>
            </li>
            <li>
              <div class="list_style">出售商品僅含花束部分，無附贈裝瓶。</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="storage_notice container">
        <h5 class="storage_h5">保存方式</h5>
        <div class="storage_quote">
          乾燥花維持良好狀態可半年至一年，材質均為自然乾燥，因此有剝落、褪色現象均屬正常。
        </div>
        <ul>
          <li>
            <div class="list_style">絕對不要澆水。</div>
          </li>
          <li>
            <div class="list_style">請置於乾燥通風的環境，避免潮濕及陽光直射。</div>
          </li>
          <li>
            <div class="list_style">
              花朵沾染灰塵，可用柔軟的毛筆輕輕揮去或用吹風機弱冷風輕吹，千萬不可大力抖弄，或用濕布擦拭。
            </div>
          </li>
          <li>
            <div class="list_style">請避免家中寵物接觸或誤食乾燥花材。</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product_detail_group {
  padding: 60px 0 0 0;
}

.detail_img {
  width: 100%;
  height: 380px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product_detail_left {
  margin-bottom: 12px;
}

h5.detail_title {
  margin-bottom: 0;
  padding: 12px 0;
}

.detail_description {
  padding: 12px 0;
}

.detail_content {
  padding: 12px 0;
}

.detail_price_group {
  padding: 30px 0 12px 0;
}

.final_price_display {
  display: flex;
  justify-content: space-between;
}

.detail_quantity {
  padding: 12px 0;
}

.detail_purchase {
  padding: 12px 0;
}

.form-select {
  color: #121212;
  border: 1px solid #ffcd49;

  &:focus {
    border-color: #ffcd49;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(255, 205, 73, 0.25);
  }
}

.add_btn {
  padding: 16px 24px;
  border-radius: 8px;
  background: #ff3d33;
  color: white;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    border: 1px solid #ff3d33;
    background: white;
    color: #ff3d33;
  }
}

.purchase_notice {
  padding: 30px 15px 30px 15px;
}

.notice_h5 {
  margin-bottom: 0;
  padding: 12px 0;
}

.purchase_notice {
  > ul {
    padding: 12px 0;

    > li {
      padding: 0 0 16px 0;
    }
  }
}

.list_style::before {
  content: '※';
  padding: 0 4px 0 0;
}

.storage_notice {
  padding: 30px 15px 30px 15px;
}

.storage_notice {
  > ul {
    padding: 12px 0;

    > li {
      padding: 0 0 16px 0;
    }
  }
}

.storage_h5 {
  margin-bottom: 0;
  padding: 12px 0;
}

.storage_quote {
  margin-bottom: 0;
  padding: 20px 0;
  border-top: 1px solid #f2e7e8;
  border-bottom: 1px solid #f2e7e8;
}

@media screen and (min-width: 576px) {
  .detail_img {
    width: 500px;
    height: 420px;
    margin: auto;
  }

  .product_detail_right {
    width: 500px;
    margin: auto;
  }

  .purchase_notice {
    width: 500px;
    padding: 30px 0;
  }

  .storage_notice {
    width: 500px;
    padding: 30px 0;
  }
}

@media screen and (min-width: 768px) {
  .product_detail_card {
    display: flex;
    justify-content: space-around;
  }

  .product_detail_left {
    width: 40%;
  }

  .detail_img {
    width: 100%;
    margin: 0;
  }

  .product_detail_right {
    width: 50%;
    margin: 0;
  }

  .detail_purchase_group {
    display: flex;
    justify-content: space-between;
  }

  .detail_quantity {
    // width: 210px;
    align-self: center;
  }

  .fs-6.text-center {
    padding: 8px 24px;
  }

  .purchase_notice,
  .storage_notice {
    width: 600px;
  }

  .storage_quote {
    margin-bottom: 12px;
  }
}

@media screen and (min-width: 992px) {
  .purchase_notice,
  .storage_notice {
    width: 900px;
  }
  .storage_notice {
    padding: 30px 0 80px 0;
  }
}

@media screen and (min-width: 1200px) {
  .product_detail_card.container {
    width: 1200px;
  }
  .detail_quantity {
    width: 400px;
  }

  .detail_purchase {
    width: 180px;
  }

  .purchase_notice,
  .storage_notice {
    width: 1000px;
  }
}
</style>

<script>
import { mapState, mapActions } from 'pinia'
import cartStore from '../../stores/cartStore.js'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data() {
    return {
      perProduct: {},
      selectQty: 0 // 來自下拉選單所選的數值 (受 optionNum 影響)
    }
  },
  components: {},

  computed: {
    // productData 取得當前頁面的商品的物件資料，確認是否已存在於購物車內
    productData() {
      const { id } = this.$route.params

      const cartIndex = this.carts.findIndex((i) => i.product_id === id)

      if (cartIndex < 0) {
        // 若 cartIndex = -1 表示此商品未曾被加入到購物車內
        return null
      } else {
        return this.carts[cartIndex]
      }
    },

    // optionNum：下拉選單選項數
    optionNum() {
      let displayProductNum = this.maxProductNum

      if (this.productData) {
        displayProductNum = displayProductNum - this.productData.qty
      }

      return displayProductNum
    },

    ...mapState(cartStore, ['carts', 'maxProductNum'])
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },

    getSingleProduct() {
      // 取得產品 id
      const { id } = this.$route.params

      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.perProduct = res.data.product
        })
        .catch((err) => {
          console.log(err)
        })
    },

    ...mapActions(cartStore, ['getCarts', 'addToCart'])
  },

  mounted() {
    this.getCarts()
    this.getSingleProduct()
    this.scrollToTop()
  }
}
</script>

