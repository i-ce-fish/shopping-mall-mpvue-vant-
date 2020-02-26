<template>
  <div class="container">
    <div class="head-box y-bgc-white y-padding tui-flex">
      <div class="avatar  tui-col-4 tui-flex tui-vertical-center">
        <van-image
          class=""
          round
          width="120rpx"
          height="120rpx"
          fit="fill"
          :src="imgs[1]"
        />
      </div>
      <div class="info-box tui-col-8 y-color-white">
        <div class="">
          杨晴文-上海
        </div>
        <div class="y-font-l">
          二级会员
        </div>
        <div class="y-font-l">
          新品88折
        </div>
      </div>
    </div>
    <div class="grid-box">
      <div class="my-box">
        <van-grid column-num="3">
          <van-grid-item icon="cash-on-deliver" @click="go('/pages/my/copon/main')" text="红包5张/卡券520"/>
          <van-grid-item icon="balance-o" @tap="go('/pages/my/money/main')" text="余额 1788.00"/>
          <van-grid-item icon="gift-o" @tap="go('/pages/my/integral/main')" text="积分 500"/>
          <van-grid-item icon="friends-o" @tap="go('/pages/my/friend/main')" text="亲友圈 58人"/>
          <van-grid-item icon="manager-o" text="我的专属顾问"/>
          <van-grid-item icon="qr" @tap="go('/pages/my/qrcode/main')" text="我的会员码"/>
        </van-grid>
      </div>
      <div class="my-box">
        <tui-list-view title="我是时尚达人">
          <van-grid column-num="3">
            <van-grid-item icon="contact" @tap="go('/pages/my/info/main')" text="完善我的基本资料"/>
            <van-grid-item icon="photo-o" @tap="go('/pages/my/wear-data/list/main')" text="亲友的穿衣数据"/>
            <van-grid-item icon="photo-o" text="我的货品建议"/>
            <van-grid-item icon="photo-o" text="我的穿搭美图"/>
            <van-grid-item icon="photo-o" text="我当模特"/>
            <van-grid-item icon="photo-o" text="我的定制"/>
          </van-grid>
        </tui-list-view>
      </div>
      <div class="my-box">
        <tui-list-view title="我的购物车">
          <van-grid column-num="3">
            <van-grid-item icon="completed" @click="go('/pages/shopping/order/paid-order/main')" text="已买好的"/>
            <van-grid-item icon="balance-pay" @click="go('/pages/shopping/order/paid-order/main')" text="未付款的"/>
            <van-grid-item icon="like-o" text="我想要的"/>
          </van-grid>
        </tui-list-view>
      </div>
      <div class="my-box">
        <tui-list-view title="温馨提示">
          <van-grid column-num="3">
            <van-grid-item icon="photo-o" @tap="go('/pages/rule/integral/main')" text="积分和折扣规则"/>
            <van-grid-item icon="photo-o" text="分销奖励政策"/>
            <van-grid-item icon="photo-o" text="会员退换货规定"/>
            <van-grid-item icon="photo-o" text="洗涤告示"/>
            <van-grid-item icon="photo-o" text="会员权益"/>
            <van-grid-item icon="photo-o" text="其他"/>
          </van-grid>
        </tui-list-view>
      </div>
    </div>
    <van-divider contentPosition="center">到底了</van-divider>
  </div>
</template>
<script>
  import tuiListView from "@/components/list-view/list-view"

  export default {
    components: {
      tuiListView
    },
    onLoad() {

    },
    methods: {},
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
  .head-box {
    background-color: #ee6310;

    .avatar {

    }

    .info-box {
      div {
        padding: 10rpx 0 ;

      }
    }
  }

</style>
