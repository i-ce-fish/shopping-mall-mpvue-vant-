<template>
  <div class="container">
    <van-cell-group title="标题">
      <van-cell v-for="(o,i) of 5" :key="i" title="单元格" value="内容123" label="描述信息1" is-link/>
    </van-cell-group>
  </div>
</template>
<script>

  export default {
    components: {
    },
    onLoad() {
    },
    data() {
      return {
        testImg: "https://source.unsplash.com/random",
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss">

</style>


