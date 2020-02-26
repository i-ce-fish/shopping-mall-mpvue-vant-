<template>
  <view class="tui-safe-area">
    <view class="tui-address">
      <block v-for="(item,index) in 3" :key="index">
      <tui-list-cell padding="0">
          <view class="tui-address-flex">
            <view class="tui-address-left">
              <view class="tui-address-main">
                <view class="tui-address-name tui-ellipsis">{{["姓名","王大大"][index]}}</view>
                <view class="tui-address-tel">138****7708</view>
              </view>
              <view class="tui-address-detail">
                <view class="tui-address-label" v-if="index===0">默认</view>
<!--                <view class="tui-address-label" v-if="index!=2">{{["公司","住宅","其它"][index]}}</view>-->
                <text>描述信息</text>
              </view>
            </view>
            <view class="tui-address-imgbox">
              <van-icon name="edit"  size="40rpx" />
            </view>
          </view>
        </tui-list-cell>
      </block>
    </view>
    <!-- 新增地址 -->
    <view class="tui-address-new">
      <van-button type="danger" custom-style="height:88rpx;width:100%;"   @click="go('/pages/my/wear-data/add/main')">+ 新增穿衣数据</van-button>
    </view>
  </view>
</template>
<script>
  import tuiListCell from "@/components/list-cell/list-cell"

  export default {
    components: {tuiListCell
    },
    onLoad() {
    },
    data() {
      return {
        testImg: "https://source.unsplash.com/random",
        addressList: []
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss">
  .tui-address {
    width: 100%;
    padding-top: 20rpx;
    padding-bottom: 160rpx;
  }
  .tui-address-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tui-address-main {
    width: 600rpx;
    height: 70rpx;
    display: flex;
    font-size: 30rpx;
    line-height: 86rpx;
    padding-left: 30rpx;
  }

  .tui-address-name {
    width: 120rpx;
    height: 60rpx;
  }

  .tui-address-tel {
    margin-left: 10rpx;
  }

  .tui-address-detail {
    font-size: 24rpx;
    word-break: break-all;
    padding-bottom: 25rpx;
    padding-left: 25rpx;
    padding-right: 120rpx;
  }

  .tui-address-label {
    padding: 5rpx 8rpx;
    flex-shrink: 0;
    background: #e41f19;
    border-radius: 6rpx;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 25rpx;
    line-height: 25rpx;
    transform: scale(0.8);
    transform-origin: center center;
    margin-right: 6rpx;
  }

  .tui-address-imgbox {
    width: 80rpx;
    height: 100rpx;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 10rpx;
  }

  .tui-address-img {
    width: 36rpx;
    height: 36rpx;
  }

  .tui-address-new {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    padding: 20rpx 25rpx 30rpx;
    box-sizing: border-box;
    background: #fafafa;
  }

  .tui-safe-area {
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>


