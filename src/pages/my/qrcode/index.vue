<template>
  <div class="container     tui-center">
    <div class="">
      永康美特斯邦威店
    </div>
    <div class="">
      会员码
    </div>
    <div class="avatar-box">
      <div class="avatar">
        <van-image
          round
          width="120rpx"
          height="120rpx"
          fit="fill"
          :src="testImg"
        />
      </div>
      <div class="">
        请向收银员出示，以便累计会员积分
      </div>
    </div>
    <div class="barcode-box">
      <div class="barcode">
        <van-icon name="photo-o" size="200rpx"/>
      </div>
      <div class="barcode-no">
        ID：WX20200212999
      </div>
    </div>
    <div class="qrcode-box">
      <div class="qrcode">
        <van-icon name="qr" size="200rpx"/>
      </div>
      <div class="">
        发送分享会员码，让亲友享受你的权益
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    components: {},
    onLoad() {

    },
    methods: {},
    data() {
      return {
        testImg: "https://source.unsplash.com/random",
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    > div {
      padding: 30rpx;
    }
  }
</style>
