<template>
  <RouterView />
</template>


<script>
import { RouterView } from 'vue-router'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {}
  },
  components: { RouterView },

  mounted() {
    AOS.init()
  }
}
</script>


<style scope></style>
