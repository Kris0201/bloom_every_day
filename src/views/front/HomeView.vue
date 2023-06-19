<template>
  <div class="wrapper">
    <section class="banner">
      <div class="container">
        <div class="banner_title">
          <h1 class="text-primary">
            用不凋的美感點綴生活
            <br />
            讓日日是好日
          </h1>
        </div>
        <RouterLink to="/products" class="btn btn-primary banner_link">
          走進有花的日子
          <i class="bi bi-chevron-right"></i>
        </RouterLink>

        <div class="banner_img"><img src="../../assets/img/ImgSec1.png" alt="" /></div>
      </div>
    </section>
    <div class="bgSec1"><img src="../../assets/img/BgSec1.svg" alt="" /></div>

    <section class="promote">
      <div class="container">
        <div class="row mx-auto">
          <div class="col-lg-6 promote_col_6">
            <div class="promote_img">
              <img src="../../assets/img/ImgSec-pc-2-2.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6 promote_text">
            <div class="promote_col_text">
              <h3 class="text-primary promote_col_h3">今天開始走入有花的日子裡...</h3>

              <p class="fs-5 promote_col_p">
                你已經看厭灰色城市的色調了嗎？
                <br />
                你渴望將自然的元素帶到你家嗎？
                <br />
                你是否無暇顧及住處環境、
                <br />
                卻又希望用一些美感妝點生活呢？
              </p>
              <div class="BgSec2"><img src="../../assets/img/BgSec2.svg" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="feature">
      <div class="container">
        <h2 class="text-primary feature_h2">自然與美的結合</h2>

        <div class="feature_group d-md-flex" 
           data-aos="fade-up" 
           data-aos-duration="3000"
        >
          <div class="feature_circle">
            <img src="../../assets/img/special-1.jpg" alt="" />
          </div>

          <div class="feature_content">
            <div class="fs-6">
              我們每日採用最新鮮的花材製作，同時也落實環保的意識，盡量以當季花草為主，減少過多資源的消耗。同時我們也注重購買者的健康，在乾燥製作的過程中特別選用品質優良的乾燥劑及染色原料，提供您安心安全的購物體驗。
            </div>
          </div>
        </div>

        <div class="feature_group d-md-flex flex-row-reverse" 
           data-aos="fade-up" 
           data-aos-duration="3000"
        >
          <div class="feature_circle">
            <img src="../../assets/img/gift.jpg" alt="" />
          </div>

          <div class="feature_content">
            <div class="fs-6">
              每一束花都承載著我們美好的理念，我們用心編製、包裝，為的是將美帶到生活中的每個角落。美感不該是遠距離的想像，而是可以輕鬆進入我們的生活中。您的生活中，絕對有這些花束的一席之地。
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="intro">
      <div class="container">
        <div class="intro_text text-center">
          <h3 class="text-primary h3_mobile">我們是 日日是好日</h3>
          <h3 class="text-primary h3_mobile">讓我們用一朵花 一株草 一片葉 來打造你的新生活</h3>
          <h2 class="text-primary h2_pc">我們是 日日是好日</h2>
          <h2 class="text-primary h2_pc">
            讓我們用一朵花 一株草 一片葉
            <br />
            來打造你的新生活
          </h2>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container about_container">
        <div class="row mx-auto">
          <div class="col-lg-10">
            <div
              class="about_img"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src="../../assets/img/ImgSec4.png" alt="" />
            </div>
          </div>

          <div class="col-lg-6 about_col_6">
            <div
              class="about_text bg-bg-2"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h6 class="about_text_title_en">about us</h6>

              <div class="about_text_pc">
                <h2 class="text-primary about_text_title_ch">關於我們</h2>
                <div class="fs-5 py-2">
                  繁忙的都市生活裡，養花蒔草常受限於各種外在條件，想要用花草點綴生活中增加美感不該是一種奢望，日日是好日正是為此而誕生的。
                </div>
                <div class="fs-5 py-2">
                  我們提供的乾燥花商品比新鮮花草更易照顧，也更能延續美好的氛圍。
                </div>
                <div class="fs-5">請讓我們以一束不凋的花，為您的每一天帶來美好的氛圍。</div>
              </div>
              <div class="about_text_mobile">
                <h3 class="text-primary about_text_title_ch_mobile">關於我們</h3>
                <div class="fs-6 py-2">
                  繁忙的都市生活裡，養花蒔草常受限於各種外在條件，想要用花草點綴生活中增加美感不該是一種奢望，日日是好日正是為此而誕生的。
                </div>
                <div class="fs-6 py-2">
                  我們提供的乾燥花商品比新鮮花草更易照顧，也更能延續美好的氛圍。
                </div>
                <div class="fs-6">請讓我們以一束不凋的花，為您的每一天帶來美好的氛圍。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="recommend">
      <div class="container">
        <div class="recommend_text text-center">
          <h6 class="recommend_text_h6">PICK UP</h6>
          <h2 class="recommend_h2_text_pc text-primary">推薦商品</h2>
          <h3 class="recommend_h3_text_mobile text-primary">推薦商品</h3>
        </div>

        <!-- swiper -->
        <div>
          <Swiper
            class="swiper swiper_mobile"
            :pagination="{
              clickable: true
            }"
            :slides-per-view="2"
            :centeredSlides="false"
            :space-between="16"
            :breakpoints="{
              '992': {
                slidesPerView: 3,
                spaceBetween: 48
              }
            }"
            :modules="modules"
          >
            <SwiperSlide v-for="item in randomProducts" :key="item.id">
              <RouterLink :to="`/products/${item.id}`" class="mySwiper">
                <div class="swiper_img">
                  <img :src="item.imageUrl" alt="" />
                </div>
                <div class="swiper_text text-center">
                  <h5 class="swiper_text_h5 text-dark-text">{{ item.title }}</h5>
                  <h6 class="text-primary">NT$ {{ item.price }}</h6>
                </div>
              </RouterLink>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

    <section class="news">
      <!--por-->
      <div class="container">
        <div class="news_group">
          <div class="news_title">
            <h6 class="news_title_en">NEWS</h6>
            <h3 class="news_title_ch_mobile text-primary">最新消息</h3>
            <h2 class="news_title_ch_pc text-primary">最新消息</h2>
          </div>

          <div class="news_body">
            <div class="news_body_item" v-for="article in tempArticles" :key="article.id">
              <div class="item_left">
                <div class="item_time text-neutral caption">{{ article.dateString }}</div>
                <div class="fs-6 a_hover">
                  <RouterLink :to="`/news/${article.id}`" class="item_title">{{
                    article.title
                  }}</RouterLink>
                </div>
              </div>

              <div class="item_right arrow_icon">
                <img src="../../assets/icon/IconChevronRight.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="BgSec5">
        <img src="../../assets/img/BgSec5.svg" alt="" />
      </div>

      <div class="BgSec6">
        <img src="../../assets/img/BgSec6.svg" alt="" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  overflow-x: hidden;
}
.banner {
  background: #f5f5f5;
  height: 665px;

  > .container {
    position: relative;
  }
}

.banner_title {
  position: absolute;
  z-index: 1;
  top: 96px;
  white-space: nowrap;

  > h1 {
    font-size: 1.75rem;
    line-height: 2.125rem;
    margin-bottom: 0px;
  }
}

.banner_img {
  width: 100%; //375px
  height: 500px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.banner_link {
  display: block;
  position: absolute;
  z-index: 1;
  padding: 1rem;
  font-size: 1rem;
  top: 212px;
  color: white;
  background: #ff3d33;
  border-radius: 8px;
}

.bgSec1 {
  position: absolute;
  width: 370px;
  height: 439px;
  left: -90px;
  top: 337px;
}

// promote section
.promote {
  background: #f5f5f5;
  padding: 0 0 72px 0;
}

.promote_img {
  margin-bottom: 72px;

  > img {
    width: 100%;
  }
}

.promote_col_text {
  position: relative;
}

.promote_col_h3 {
  position: relative;
  z-index: 1;
  margin-bottom: 24px;
}

.promote_col_p {
  position: relative;
  z-index: 1;
}

.BgSec2 {
  position: absolute;
  top: -54px;
  right: -14px;
}

// feature section
.feature {
  background: #f5f5f5;
}

.feature_group {
  max-width: 1200px;
  padding: 0 0 36px 0;
  margin: 0 auto;
}

.feature_h2 {
  text-align: center;
  margin-bottom: 24px;
}

.feature_circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin: 24px auto;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.feature_content {
  padding: 12px 8px;
  text-align: justify;
}

// intro section
.intro {
  padding: 24px 12px;
  background: url('../../assets/img/ImgSec3.png') center center no-repeat;
}

.intro_text {
  border: 1px solid white;
  padding: 64px 12px;
}

.h2_pc {
  display: none;
}

// about section
.about {
  height: 740px;
  padding: 74px 0;
  background: #f5f5f5;
}

.about_container {
  position: relative;
}

.about_img {
  position: absolute;
  width: calc(100% - 16px);
  height: 300px;
  left: -16px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 50%;
  }
}

.about_text {
  position: absolute;
  width: calc(100% - 16px);
  padding: 24px 12px;
  border-radius: 8px 0px 0px 8px;
  top: 200px;
  left: 16px; // 等同於 right: 0px;
}

.about_text_title_en {
  text-transform: uppercase;
  margin-bottom: 12px;
}

.about_text_pc {
  display: none;
}

.about_text_title_ch_mobile {
  margin-bottom: 24px;
}

// recommend section
.recommend {
  background: #f5f5f5;
}
.recommend_h2_text_pc {
  display: none;
}

.recommend_text_h6 {
  margin-bottom: 12px;
}

// swiper
.swiper {
  background: linear-gradient(180deg, #f5f5f5 50%, #f2e7e8 50%);
}

a.mySwiper {
  display: block;
  padding: 0 0 40px 0;
}

.swiper_img {
  position: relative;
  width: 100%;
  height: 257px;
  border-radius: 8px;
  overflow: hidden;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.swiper_text_h5 {
  margin-top: 24px;
  margin-bottom: 12px;
}

// news section
.news {
  position: relative;
  background: #f5f5f5;
  padding: 48px 0 120px 0;
}

.item_title {
  color: #121212;

  &:hover {
    color: #ff3d33;
  }
}

.BgSec5 {
  position: absolute;
  width: 162px;
  height: 204px;
  top: -20px;
  right: 3px;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.BgSec6 {
  width: 120px;
  height: 153px;
  position: absolute;
  top: 60%;
  left: -20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.news_title_ch_pc {
  display: none;
}

.news_title_en {
  margin-bottom: 12px;
}

.news_title_ch_mobile {
  margin-bottom: 36px;
}

.news_body {
  position: relative;
  z-index: 1;
}

.news_body_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
}

a.item_title.text-dark-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

@media screen and (min-width: 576px) {
  .feature_content {
    width: 500px;
    margin: 0 auto;
  }

  .promote_col_text {
    padding: 0 20px;
  }
  .BgSec2 {
    top: -54px;
    right: 20px;
  }

  .about_img {
    width: calc(100% - 32px);
  }

  .about_text {
    padding: 24px 32px;
    width: calc(100% - 32px);
    right: 0;
    left: auto;
  }

  .news > .container {
    padding: 0 15px;
  }
}

@media screen and (min-width: 768px) {
  .banner_title,
  .banner_link {
    left: 20px;
  }

  .banner_img {
    width: 70%;
    right: 0;
    left: auto;
  }

  .banner_title {
    z-index: 1;
    top: 120px;
  }

  .bgSec1 {
    left: 108px;
    top: 269px;
  }

  .feature {
    padding: 0 15px;
  }

  .feature_content {
    width: 55%;
    align-self: center;
  }

  .about_img {
    height: 400px;
  }

  .about_text {
    top: 250px;
    width: calc(100% - 200px);
  }

  .news_group {
    display: flex;
    justify-content: space-around;
  }

  .news_title {
    width: 25%;
    padding: 0 0 0 20px;
  }

  .news_body {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .news_body_item {
    width: 100%;
  }

  .item_left {
    display: flex;
    align-items: center;
  }

  .item_time {
    margin-right: 24px;
    align-self: end;
  }

  .BgSec6 {
    top: 50%;
    left: 20px;
  }
}

@media screen and (min-width: 992px) {
  .banner {
    height: 852px;
  }

  .banner_title > h1 {
    font-size: 3rem;
    line-height: 3.6rem;
  }

  .banner_link {
    top: 324px;
    font-size: 1.125rem;
  }

  .bgSec1 {
    left: 136px;
    top: 376px;
  }

  .promote {
    padding: 0 0 120px 0;
  }

  .promote_img {
    padding: 0 15px;
    margin-bottom: 0;
  }

  .promote_text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .promote_col_text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .h3_mobile {
    display: none;
  }
  .h2_pc {
    display: block;
  }

  .about {
    padding: 120px 0;
  }

  .about_img {
    left: 0;
    width: calc(100% - 250px);
  }

  .about_text {
    width: calc(100% - 350px);
  }

  .recommend_h3_text_mobile {
    display: none;
  }

  .recommend_h2_text_pc {
    display: block;
    margin-bottom: 48px;
  }

  .swiper {
    padding: 0 141px;
  }

  .news_text_title_ch_mobile {
    display: none;
  }
  .news_text_title_ch_pc {
    display: block;
  }
}

@media screen and (min-width: 1200px) {
  .banner_img {
    width: 856px;
  }
  .bgSec1 {
    left: 294px;
    top: 355px;
  }

  .about {
    height: 912px;
  }

  .about_text_mobile {
    display: none;
  }
  .about_text_pc {
    display: block;
  }

  .about_text {
    width: calc(100% - 650px);
  }

  .news_group {
    margin: 0 110px;
  }

  .news_title {
    width: 20%;
  }

  .news_body {
    width: 636px;
  }

  .BgSec6 {
    top: 40%;
    left: 120px;
  }
}

@media screen and (min-width: 1400px) {
  .news {
    padding: 120px 0 216px 0;
  }
  .BgSec5 {
    top: -20px;
    right: 120px;
    z-index: 1;
  }

  .BgSec6 {
    top: 40%;
    left: 380px;
  }
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data() {
    return {
      modules: [Pagination], // swiper
      articles: [],
      allProducts: [],
      randomProducts: []
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    // 呈現三筆最新的文章
    tempArticles() {
      return this.articles.filter((item, index) => {
        return index < 3 //篩出前三筆(最新的三筆)
      })
      // tempArticles 是一個唯讀的變數，可直直渲染於畫面上

      // 原先在 data 中定義的 tempArticles 與 articles 無從屬關係，改於 computed 定義後，兩者產生依賴性、關聯性，因此會在 articles 有任何變動時即時更新 tempArticles
    }
  },
  methods: {
    getRandomProduct() {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.allProducts = res.data.products
          while (this.randomProducts.length < 5) {
            const index = Math.floor(Math.random() * this.allProducts.length)
            const item = this.allProducts[index]

            if (!this.randomProducts.includes(item)) {
              this.randomProducts.push(item)
            }

            //console.log('this.randomProducts',this.randomProducts)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    // 先取得所有最新消息
    this.$http
      .get(`${VITE_URL}v2/api/${VITE_PATH}/articles`)
      .then((res) => {
        // console.log(res.data.articles)
        // 轉換時間
        this.articles = res.data.articles.map((item) => {
          const time = item.create_at
          const date = new Date(time * 1000)
          const dateString = date.toLocaleDateString()
          return {
            ...item,
            dateString
          }
        })
      })
      .catch((err) => {
        console.log(err)
      }),
      this.getRandomProduct()
  }
}
</script>