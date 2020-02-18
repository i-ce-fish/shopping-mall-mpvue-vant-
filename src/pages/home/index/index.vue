<template>
  <div class="">
    <div class="title tui-center y-font-xl">会员内购</div>
    <div class="swiper-box">
    <swiper indicator-dots="true"
            autoplay="true" interval="2000" duration="500">
      <block v-for="(img,i) in imgs" :key="i">
        <swiper-item>
          <van-image
            width="750rpx"
            height="375rpx"
            fit="fill"
            :src="img"
          />
        </swiper-item>
      </block>
    </swiper>
    <div  class="address">丽水中山街店522号（百货大楼旁）</div>
    </div>

  </div>
</template>
<script>
  export default {
    onLoad(){
        wx.setNavigationBarTitle({
          title: '永康美特斯邦威店'
        })
    },
    methods: {
      test(){
        console.log('test () ')
      }
    },
    data() {
      return {
        imgs: [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg"]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .title{
    padding: 10rpx 0 ;
  }
  .swiper-box{
    position: relative;
.address{
  position: absolute;
  color: white;
  bottom: 10rpx;
  right: 10rpx;
}

}
</style>
