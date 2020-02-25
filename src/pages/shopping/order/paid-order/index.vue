<template>
  <div class="container">
    <van-tabs :active="active" @change="onChange">
      <van-tab title="已完成订单">


        <view :class="scrollTop>=0?'tui-order-list':''">
          <view class="tui-order-item" v-for="(item,indexA) in 1 "  :key="indexA"  >
            <tui-list-cell :hover="false" :lineLeft="false">
              <view class="tui-goods-title">
                <view>订单号：T201910000</view>
                <view class="tui-order-status">已完成</view>
              </view>
            </tui-list-cell>
            <block v-for="(item,index) in 2" :key="index">
              <tui-list-cell padding="0" @click="detail">
                <view class="tui-goods-item">
                  <image :src="testImg" class="tui-goods-img"></image>
                  <view class="tui-goods-center">
                    <view class="tui-goods-name">欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）</view>
                    <view class="tui-goods-attr">黑色，50ml</view>
                  </view>
                  <view class="tui-price-right">
                    <view>￥298.00</view>
                    <view>x2</view>
                  </view>
                </view>
              </tui-list-cell>
            </block>
            <tui-list-cell :hover="false" :last="true">
              <view class="tui-goods-price">
                <view>共4件商品 合计：</view>
                <view class="tui-size-24">￥</view>
                <view class="tui-price-large">1192</view>
                <view class="tui-size-24">.00</view>
              </view>
            </tui-list-cell>
            <view class="tui-order-btn">
              <view class="tui-btn-ml">
                <van-button type="black" plain custom-style="width:148rpx;height:56rpx;" size="small" round>评价晒单</van-button>
              </view>
              <view class="tui-btn-ml">
                <van-button type="danger" plain custom-style="width:148rpx;height:56rpx;"  size="small" round>再次购买</van-button>
              </view>
            </view>
          </view>

<!--			<view class="tui-order-item">-->
<!--				<tui-list-cell :hover="false" :lineLeft="false">-->
<!--					<view class="tui-goods-title">-->
<!--						<view>订单号：T201910000</view>-->
<!--						<view class="tui-order-status">已取消</view>-->
<!--					</view>-->
<!--				</tui-list-cell>-->
<!--				<block v-for="(item,index) in 1" :key="index">-->
<!--					<tui-list-cell padding="0" @click="detail">-->
<!--						<view class="tui-goods-item">-->
<!--							<image :src="testImg" class="tui-goods-img"></image>-->
<!--							<view class="tui-goods-center">-->
<!--								<view class="tui-goods-name">欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）</view>-->
<!--								<view class="tui-goods-attr">黑色，50ml</view>-->
<!--							</view>-->
<!--							<view class="tui-price-right">-->
<!--								<view>￥298.00</view>-->
<!--								<view>x2</view>-->
<!--							</view>-->
<!--						</view>-->
<!--					</tui-list-cell>-->
<!--				</block>-->
<!--				<tui-list-cell :hover="false" :last="true">-->
<!--					<view class="tui-goods-price">-->
<!--						<view>共4件商品 合计：</view>-->
<!--						<view class="tui-size-24">￥</view>-->
<!--						<view class="tui-price-large">596</view>-->
<!--						<view class="tui-size-24">.00</view>-->
<!--					</view>-->
<!--				</tui-list-cell>-->
<!--				<view class="tui-order-btn">-->
<!--					<view class="tui-btn-ml">-->
<!--						<van-button type="black" plain custom-style="width:148rpx;height:56rpx;"   size="small" round>删除订单</van-button>-->
<!--					</view>-->
<!--					<view class="tui-btn-ml">-->
<!--						<van-button type="danger" plain custom-style="width:148rpx;height:56rpx;"  size="small" round>再次购买</van-button>-->
<!--					</view>-->
<!--				</view>-->
<!--			</view>-->

        </view>


      </van-tab>
      <van-tab title="未付款订单">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <van-divider contentPosition="center">到底了</van-divider>
  </div>
</template>
<script>
	import tuiListCell from "@/components/list-cell/list-cell"

	export default {
		components: {
			tuiListCell
		},
		data() {
			return {
        active:0,

				tabs: [{
					name: "全部"
				}, {
					name: "待付款"
				}, {
					name: "待发货"
				}, {
					name: "待收货"
				}, {
					name: "待评价"
				}],
				currentTab: 0,
				pageIndex: 1,
				loadding: false,
				pullUpOn: true,
				scrollTop: 0
			}
		},
		methods: {
			change(e) {
				this.currentTab = e.index
			},
			detail() {
			this.go('/pages/shopping/order/order-detail/main')
			}
		},
		onPullDownRefresh() {
			// setTimeout(() => {
			// 	uni.stopPullDownRefresh()
			// }, 200);
		},
		onReachBottom() {
			//只是测试效果，逻辑以实际数据为准
      // this.loadding = true
      // this.pullUpOn = true
      // setTimeout(() => {
      // 	this.loadding = false
      // 	this.pullUpOn = false
      // }, 1000)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>
<style lang="scss">
  .container {
    padding-bottom: env(safe-area-inset-bottom);
  }

  .tui-order-list {
    margin-top: 80rpx;
  }

  .tui-order-item {
    margin-top: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
  }

  .tui-goods-title {
    width: 100%;
    font-size: 28rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tui-order-status {
    color: #888;
    font-size: 26rpx;
  }

  .tui-goods-item {
    width: 100%;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  .tui-goods-img {
    width: 180rpx;
    height: 180rpx;
    display: block;
    flex-shrink: 0;
  }

  .tui-goods-center {
    flex: 1;
    padding: 20rpx 8rpx;
    box-sizing: border-box;
  }

  .tui-goods-name {
    max-width: 310rpx;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 26rpx;
    line-height: 32rpx;
  }

  .tui-goods-attr {
    font-size: 22rpx;
    color: #888888;
    line-height: 32rpx;
    padding-top: 20rpx;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .tui-price-right {
    text-align: right;
    font-size: 24rpx;
    color: #888888;
    line-height: 30rpx;
    padding-top: 20rpx;
  }

  .tui-color-red {
    color: #E41F19;
    padding-right: 30rpx;
  }

  .tui-goods-price {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 24rpx;
  }

  .tui-size-24 {
    font-size: 24rpx;
    line-height: 24rpx;
  }

  .tui-price-large {
    font-size: 32rpx;
    line-height: 30rpx;
    font-weight: 500;
  }

  .tui-order-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #fff;
    padding: 10rpx 30rpx 20rpx;
    box-sizing: border-box;
  }

  .tui-btn-ml {
    margin-left: 20rpx;
  }
</style>


