<template>
  <view class="container">
    <!--header-->
    <!--header-->

    <!--banner-->
    <view class="tui-banner-swiper">
      <swiper :autoplay="true" :interval="5000" indicator-dots :duration="150" :circular="true" :style="{height:scrollH + 'px'}" @change="bannerChange">
      <block v-for="(item,index) in banner" :key="index">
        <swiper-item :data-index="index" @tap.stop="previewImage">
          <image :src="item" class="tui-slide-image" :style="{height:scrollH+'px'}" />
          </swiper-item>
        </block>
      </swiper>
    </view>

    <!--banner-->

    <view class="tui-pro-detail">
      <view class="tui-product-title tui-border-radius">
        <view class="tui-pro-pricebox tui-padding">
          <view class="tui-pro-price">
            <view>￥
              <text class="tui-price">49</text>
              .00
            </view>
            <van-tag size="small" :plain="true" type="success" round>新品</van-tag>

          </view>
          <view class="tui-collection tui-size" @tap="collecting">
            <van-icon :name="collected?'like':'like-o'" :color="collected?'#ff201f':'#333'" size="20"
                      class="tui-icon-collection"></van-icon>
            <view class="tui-scale" :class="[collected?'tui-red':'']">收藏</view>

          </view>
        </view>
        <view class="tui-original-price tui-gray">
          价格
          <text class="tui-line-through">￥199.00</text>
        </view>
        <view class="tui-pro-titbox">
          <view class="tui-pro-title">谈判官明星同款耳坠韩国气质简约显脸瘦的耳环女百搭个性长款耳钉 个性水滴耳环【A2】</view>
          <div  class="tui-share-btn tui-share-position">
            <van-tag   round size="small">
              <van-icon name="like-o" color="#fff" size="15"></van-icon>
              <text class="tui-share-text y-color-white" >分享</text>
            </van-tag>
          </div>
        </view>
        <view class="tui-padding">
          <view class="tui-sub-title tui-size tui-gray">此商品将于2019-06-28,10点结束闪购特卖，时尚美饰联合专场</view>
          <view class="tui-sale-info tui-size tui-gray">
            <view>快递：0.00</view>
            <view>月销2000</view>
            <view>浙江杭州</view>
          </view>
        </view>
      </view>

<!--      领券  满减 -->
<!--      <view class="tui-discount-box tui-radius-all tui-mtop">-->
<!--        <view class="tui-list-cell" @tap="coupon">-->
<!--          <view class="tui-bold tui-cell-title">领券</view>-->
<!--          <view class="tui-tag-coupon-box">-->
<!--            <van-tag  size="medium"  type="danger" round class="tui-tag-coupon">满99减8</van-tag>-->
<!--            <van-tag size="medium" type="danger" round class="tui-tag-coupon">满59减5</van-tag>-->
<!--          </view>-->
<!--          <van-icon name="ellipsis" size="20" class="tui-right tui-top40" color="#666"></van-icon>-->
<!--        </view>-->

<!--        <view class="tui-list-cell tui-last" @tap="showPopup">-->
<!--          <view class="tui-bold tui-cell-title">促销</view>-->
<!--          <view>-->
<!--            <view class="tui-promotion-box">-->
<!--              <van-tag size="small" type="danger" round plain class="tui-inline-block">多买优惠</van-tag>-->
<!--              <text>满1件，立减最低1件商品价格，包邮（限中国内地）</text>-->
<!--            </view>-->
<!--            <view class="tui-promotion-box">-->
<!--              <van-tag size="small" type="danger" round plain class="tui-inline-block">满额返券</van-tag>-->
<!--              <text>满2件，立减最低2件商品价格，包邮（限中国内地）</text>-->
<!--            </view>-->
<!--            <view class="tui-promotion-box">-->
<!--              <van-tag size="small" type="danger" round plain class="tui-inline-block">特别赠品</van-tag>-->
<!--              <text>满3件，立减最低3件商品价格，包邮（限中国内地）</text>-->
<!--            </view>-->
<!--          </view>-->
<!--          <van-icon name="ellipsis" size="20" class="tui-right tui-top40" color="#666"></van-icon>-->
<!--        </view>-->

<!--      </view>-->

      <view class="tui-basic-info tui-mtop tui-radius-all">
        <view class="tui-list-cell" @tap="showPopup">
          <view class="tui-bold tui-cell-title">已选</view>
          <view class="tui-selected-box">个性水滴耳环【A2】,1个，可选服务</view>
          <van-icon name="ellipsis" size="20" class="tui-right" color="#666"></van-icon>
        </view>
        <view class="tui-list-cell" @tap="showPopup">
          <view class="tui-bold tui-cell-title">送至</view>
          <view class="tui-addr-box">
            <view class="tui-addr-item">北京朝阳区三环到四环之间</view>
            <view class="tui-addr-item">今日23:59前完成下单，预计6月28日23:30前发货，7月1日24:00前送达</view>
          </view>
          <van-icon name="ellipsis" size="20" class="tui-right" color="#666"></van-icon>
        </view>
        <view class="tui-list-cell tui-last">
          <view class="tui-bold tui-cell-title">运费</view>
          <view class="tui-selected-box">在线支付免运费</view>
        </view>
        <view class="tui-guarantee">
          <view class="tui-guarantee-item">
            <van-icon name="passed" size="14" color="#999"></van-icon>
            <text class="tui-pl">可配送海外</text>
          </view>
          <view class="tui-guarantee-item">
            <van-icon name="passed" size="14" color="#999"></van-icon>
            <text class="tui-pl">店铺发货&售后</text>
          </view>
          <view class="tui-guarantee-item">
            <van-icon name="passed" size="14" color="#999"></van-icon>
            <text class="tui-pl">7天无理由退货</text>
          </view>
          <view class="tui-guarantee-item">
            <van-icon name="passed" size="14" color="#999"></van-icon>
            <text class="tui-pl">闪电退款</text>
          </view>
          <view class="tui-guarantee-item">
            <van-icon name="passed" size="14" color="#999"></van-icon>
            <text class="tui-pl">极速审核</text>
          </view>
        </view>
      </view>

      <view class="tui-cmt-box tui-mtop tui-radius-all">
        <view class="tui-list-cell tui-last tui-between">
          <view class="tui-bold tui-cell-title">评价</view>
          <view @tap="common">
            <text class="tui-cmt-all">查看全部</text>
            <van-icon name="ellipsis" size="20" color="#ff201f"></van-icon>
          </view>
        </view>

        <view class="tui-cmt-content tui-padding">
          <view class="tui-cmt-user">
            <image src="../../../static/images/news/avatar_2.jpg" class="tui-acatar"></image>
            <view>z***9</view>
          </view>
          <view class="tui-cmt">物流很快，很适合我的风格❤</view>
          <view class="tui-attr">颜色：叠层钛钢流苏耳环（A74）</view>
        </view>

        <view class="tui-cmt-btn">
          <van-tag type="black" :plain="true" class="tui-tag-cmt" @tap="common">查看全部评价</van-tag>
        </view>
      </view>

      <view class="tui-nomore-box">
      <van-divider contentPosition="center" >宝贝详情</van-divider>
      </view>
      <view class="tui-product-img tui-radius-all">
        <image :src="'https://www.thorui.cn/img/detail/'+(index+1)+'.jpg'" v-for="(img,index) in 20" :key="index" mode="widthFix">
      </image>
      <van-divider contentPosition="center">已经到最底了</van-divider>

      <view class="tui-safearea-bottom"></view>
    </view>

    <!--底部操作栏-->
<!--    <view class="tui-operation">-->
<!--      <view class="tui-operation-left tui-col-5">-->
<!--        <view class="tui-operation-item" hover-class="tui-opacity" hover-stay-time="150" @tap="common">-->
<!--          <van-icon name="kefu" size="22" color='#333'></van-icon>-->
<!--          <view class="tui-operation-text tui-scale-small">客服</view>-->
<!--        </view>-->
<!--        <view class="tui-operation-item" hover-class="tui-opacity" hover-stay-time="150" @tap="common">-->
<!--          <van-icon name="shop" size="22" color='#333'></van-icon>-->
<!--          <view class="tui-operation-text tui-scale-small">店铺</view>-->
<!--        </view>-->
<!--        <view class="tui-operation-item" hover-class="tui-opacity" hover-stay-time="150" @tap="common">-->
<!--          <van-icon name="cart" size="22" color='#333'></van-icon>-->
<!--          <view class="tui-operation-text tui-scale-small">购物车</view>-->
<!--&lt;!&ndash;          <tui-badge type="danger" size="small" tui-badge-class="tui-badge-class">2</tui-badge>&ndash;&gt;-->
<!--        </view>-->
<!--      </view>-->
<!--      <view class="tui-operation-right tui-right-flex tui-col-7">-->

<!--        <van-button type="danger" tui-button-class="tui-btn-equals" round size="mini" class="tui-flex-1"-->
<!--                    @tap="showPopup">加入购物车-->
<!--        </van-button>-->
<!--        <van-button type="warning" tui-button-class="tui-btn-equals" round size="mini" class="tui-flex-1"-->
<!--                    @tap="submit">立即购买-->
<!--        </van-button>-->
<!--      </view>-->
<!--    </view>-->
      <van-goods-action>
        <van-goods-action-icon
          icon="chat-o"
          text="客服"
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="cart-o"
          text="店铺"
          @click="onClickIcon"
        />
        <van-goods-action-button
          text="加入购物车"
          type="warning"
          @click="showPopup"
        />
        <van-goods-action-button
          text="立即购买"
          @click="hidePopup"
        />
      </van-goods-action>
    <!--底部操作栏--->

    <!--顶部下拉菜单-->
    <!---顶部下拉菜单-->

    <!--底部选择层-->
    <van-popup :show="popupShow"  position="bottom" @close="hidePopup">

      <view class="tui-popup-box">
        <view class="tui-product-box tui-padding">
          <image src="https://www.thorui.cn/img/product/11.jpg" class="tui-popup-img"></image>
          <view class="tui-popup-price">
            <view class="tui-amount tui-bold">￥49.00</view>
            <view class="tui-number">编号:4373299399393</view>
          </view>
        </view>
        <scroll-view scroll-y class="tui-popup-scroll">
          <view class="tui-scrollview-box">
            <view class="tui-bold tui-attr-title">颜色</view>
            <view class="tui-attr-box">
              <view class="tui-attr-item">
                五角星钻耳线
              </view>
              <view class="tui-attr-item">
                米子珍珠耳线
              </view>
              <view class="tui-attr-item">
                花朵镶钻耳线
              </view>
              <view class="tui-attr-item">
                扇子珍珠流苏耳线
              </view>
              <view class="tui-attr-item tui-attr-active">
                扇子珍珠流苏耳线耳线
              </view>
            </view>

            <view class="tui-number-box tui-bold tui-attr-title">
              <view class="tui-attr-title">数量</view>
              <tui-numberbox :max="99" :min="1" :value="value" @change="change"></tui-numberbox>
            </view>
            <view class="tui-bold tui-attr-title">尺寸</view>
            <view class="tui-attr-box">
              <view class="tui-attr-item">
                5cm
              </view>
              <view class="tui-attr-item">
                8cm
              </view>
              <view class="tui-attr-item">
                12cm
              </view>
              <view class="tui-attr-item">
                16cm
              </view>
              <view class="tui-attr-item tui-attr-active">
                18cm
              </view>
            </view>

<!--            <view class="tui-bold tui-attr-title">-->
<!--              保障服务-->
<!--            </view>-->
<!--            <view class="tui-attr-box">-->
<!--              <view class="tui-attr-item">-->
<!--                半年掉钻保 ￥4.0-->
<!--              </view>-->
<!--            </view>-->

<!--            <view class="tui-bold tui-attr-title">-->
<!--              只换不修-->
<!--            </view>-->
<!--            <view class="tui-attr-box">-->
<!--              <view class="tui-attr-item">-->
<!--                三月意外换￥2.0-->
<!--              </view>-->
<!--              <view class="tui-attr-item">-->
<!--                半年意外换￥2.0-->
<!--              </view>-->
<!--            </view>-->
          </view>
        </scroll-view>
        <view class="tui-operation tui-operation-right tui-right-flex tui-popup-btn">
          <van-button type="danger"  round class="tui-col-4"
                      @click="hidePopup">加入购物车
          </van-button>
          <van-button type="warning"    round   class="tui-col-4"
                      @click="submit">立即购买
          </van-button>
        </view>

        <van-icon name="close-fill" color="#999" class="tui-icon-close" size="20" @tap="hidePopup"></van-icon>
      </view>
    </van-popup>
    <!--底部选择层-->

  </view>
  </view>
</template>
<script>
 import tuiNumberbox from '@/components/numberbox/numberbox'
  export default {
    components: {tuiNumberbox},

    data() {
      return {
        height: 64, //header高度
        top: 0, //标题图标距离顶部距离
        scrollH: 0, //滚动总高度
        opcity: 0,
        iconOpcity: 0.5,
        banner: [
          "https://www.thorui.cn/img/product/11.jpg",
          "https://www.thorui.cn/img/product/6.png",
          "https://www.thorui.cn/img/product/7.jpg",
          "https://www.thorui.cn/img/product/8.jpg"
        ],
        bannerIndex: 0,
        topMenu: [{
          icon: "message",
          text: "消息",
          size: 26,
          badge: 3
        }, {
          icon: "home",
          text: "首页",
          size: 23,
          badge: 0
        }, {
          icon: "people",
          text: "我的",
          size: 26,
          badge: 0
        }, {
          icon: "cart",
          text: "购物车",
          size: 23,
          badge: 2
        }, {
          icon: "kefu",
          text: "客服小蜜",
          size: 26,
          badge: 0
        }, {
          icon: "feedback",
          text: "我要反馈",
          size: 23,
          badge: 0
        }, {
          icon: "share",
          text: "分享",
          size: 26,
          badge: 0
        }],
        menuShow: false,
        popupShow: false,
        value: 1,
        collected: false
      }
    },
    onLoad() {
      let obj = wx.getMenuButtonBoundingClientRect();
        this.width= obj.left,
        this.height= obj.top + obj.height + 8,
        this.top= obj.top + (obj.height - 32) / 2
      this.$nextTick(() => {
        wx.getSystemInfo({
          success: (res) => {
            this.scrollH= res.windowWidth
          }
        })
      })
    },
    methods: {
      bannerChange: function (e) {
          this.bannerIndex= e.mp.detail.current
      },
      previewImage: function (e) {
        let index = e.mp.currentTarget.dataset.index;
        wx.previewImage({
          current: this.banner[index],
          urls: this.banner
        })
      },
      //页面滚动执行方式
      onPageScroll(e) {
        let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
        let opcity = scroll / this.scrollH;
        if (this.opcity >= 1 && opcity >= 1) {
          return;
        }
          this.opcity= opcity,
          this.iconOpcity= 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
      },
      back: function() {
        wx.navigateBack()
      },
      openMenu: function() {
        this.menuShow = true
      },
      closeMenu: function() {
        this.menuShow = false
      },
      showPopup: function() {
        this.popupShow = true
      },
      hidePopup: function() {
        this.popupShow = false
      },
      change: function(e) {
        this.value = e.value
      },
      collecting: function() {
        this.collected = !this.collected
      },
      common: function () {
        // util.toast("功能开发中~")
        console.log("功能开发中~")
      },
      submit() {
        this.hidePopup()
        wx.navigateTo({
          url: '../mall-extend/submitOrder/submitOrder'
        })
      },
      coupon() {
        wx.navigateTo({
          url: '../mall-extend/coupon/coupon'
        })
      }
    }

  }
</script>
<style lang="scss">

  .container {
    padding-bottom: 110rpx;
  }

  .tui-header-box {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9998;
  }

  .tui-header {
    width: 100%;
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tui-header-icon {
    position: fixed;
    left: 10px;
    top: 0;
    display: flex;
    align-items: flex-start;
    height: 32px;
    transform: translateZ(0);
    z-index: 99999;
  }

  .tui-badge {
    background: #e41f19 !important;
    position: absolute;
    right: -4px;
  }

  .tui-icon-ml {
    margin-left: 20rpx;
  }

  .tui-icon {
    height: 32px !important;
    width: 32px !important;
    border-radius: 16px;
  }

  .tui-icon-back {
    height: 32px !important;
    width: 32px !important;
    display: block !important;
  }

  .tui-icon-more {
    height: 20px !important;
    width: 20px !important;
    padding: 6px !important;
    display: block !important;
  }

  .tui-banner-swiper {
    position: relative;
  }

  .tui-tag-banner {
    position: absolute;
    color: #fff;
    bottom: 30rpx;
    right: 0;
  }

  .tui-slide-image {
    width: 100%;
    display: block;
  }

  /*顶部菜单*/

  .tui-menu-box {
    box-sizing: border-box;
  }

  .tui-menu-header {
    font-size: 34rpx;
    color: #fff;
    height: 32px;
    display: flex;
    align-items: center;
  }

  .tui-top-dropdown {
    z-index: 9999 !important;
  }

  .tui-menu-itembox {
    color: #fff;
    padding: 40rpx 10rpx 0 10rpx;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    font-size: 26rpx;
  }

  .tui-menu-item {
    width: 22%;
    height: 160rpx;
    border-radius: 24rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    margin-right: 4%;
    margin-bottom: 4%;
  }

  .tui-menu-item:nth-of-type(4n) {
    margin-right: 0;
  }

  .tui-badge-box {
    position: relative;
  }

  .tui-menu-badge {
    position: absolute;
    top: -8px;
    right: -8px;
  }

  .tui-msg-badge {
    top: -10px;
  }

  .tui-icon-up {
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
  }

  .tui-menu-text {
    padding-top: 12rpx;
  }

  .tui-opcity .tui-menu-text, .tui-opcity .tui-badge-box {
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }

  /*顶部菜单*/

  /*内容 部分*/

  .tui-padding {
    padding: 0 30rpx;
    box-sizing: border-box;
  }

  .tui-size {
    font-size: 24rpx;
    line-height: 24rpx;
  }

  .tui-gray {
    color: #999;
  }

  .tui-red {
    color: #ff201f;
  }

  .tui-border-radius {
    border-bottom-left-radius: 24rpx;
    border-bottom-right-radius: 24rpx;
    overflow: hidden;
  }

  .tui-radius-all {
    border-radius: 24rpx;
    overflow: hidden;
  }

  .tui-mtop {
    margin-top: 26rpx;
  }

  .tui-pro-detail {
    box-sizing: border-box;
    color: #333;
  }

  .tui-product-title {
    background: #fff;
    padding: 30rpx 0;
  }

  .tui-pro-pricebox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ff201f;
    font-size: 36rpx;
    font-weight: bold;
    line-height: 44rpx;
  }

  .tui-pro-price {
    display: flex;
    align-items: center;
  }

  .tui-price {
    font-size: 58rpx;
  }

  .tui-original-price {
    font-size: 26rpx;
    line-height: 26rpx;
    padding: 10rpx 30rpx;
    box-sizing: border-box;
  }

  .tui-line-through {
    text-decoration: line-through;
  }

  .tui-collection {
    color: #333;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 44rpx;
  }

  .tui-scale {
    transform: scale(0.7);
    transform-origin: center center;
    line-height: 24rpx;
    font-weight: normal;
  }

  .tui-icon-collection {
    line-height: 20px !important;
    margin-bottom: 0 !important;
  }

  .tui-pro-titbox {
    font-size: 32rpx;
    font-weight: 500;
    position: relative;
    padding: 0 150rpx 0 30rpx;
    box-sizing: border-box;
  }

  .tui-pro-title {
    padding-top: 20rpx;
  }

  .tui-share-btn {
    display: block;
    background: none;
    margin: 0;
    padding: 0;
    border-radius: 0;
  }

  .tui-tag-share {
    display: flex;
    align-items: center;
  }

  .tui-share-position {
    position: absolute;
    right: 0;
    top: 30rpx;
  }

  .tui-share-text {
    padding-left: 8rpx;
  }

  .tui-sub-title {
    padding: 20rpx 0;
  }

  .tui-sale-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30rpx;
  }

  .tui-discount-box {
    background: #fff;
  }

  .tui-list-cell {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 26rpx;
    line-height: 26rpx;
    padding: 36rpx 30rpx;
    box-sizing: border-box;
  }

  .tui-right {
    position: absolute;
    right: 30rpx;
    top: 30rpx;
  }

  .tui-top40 {
    top: 40rpx !important;
  }

  .tui-bold {
    font-weight: bold;
  }

  .tui-list-cell::after {
    content: '';
    position: absolute;
    border-bottom: 1rpx solid #eaeef1;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    bottom: 0;
    right: 0;
    left: 126rpx;
  }

  .tui-last::after {
    border-bottom: 0 !important;
  }

  .tui-tag-coupon-box {
    display: flex;
    align-items: center;
  }

  .tui-tag-coupon {
    margin-right: 20rpx;
  }

  .tui-cell-title {
    width: 66rpx;
    padding-right: 30rpx;
    flex-shrink: 0;
  }

  .tui-promotion-box {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10rpx 0;
    width: 74%;
  }

  .tui-inline-block {
    display: inline-block !important;
    transform: scale(0.8);
    transform-origin: 0 center;
  }

  .tui-basic-info {
    background: #fff;
  }

  .tui-addr-box {
    width: 76%;
  }

  .tui-addr-item {
    padding: 10rpx;
    line-height: 34rpx;
  }

  .tui-guarantee {
    background: #fdfdfd;
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 30rpx 30rpx 30rpx;
    font-size: 24rpx;
  }

  .tui-guarantee-item {
    color: #999;
    padding-right: 30rpx;
    padding-top: 10rpx;
  }

  .tui-pl {
    padding-left: 4rpx;
  }

  .tui-cmt-box {
    background: #fff;
  }

  .tui-between {
    justify-content: space-between !important;
  }

  .tui-cmt-all {
    color: #ff201f;
    padding-right: 8rpx;
  }

  .tui-cmt-content {
    font-size: 26rpx;
  }

  .tui-cmt-user {
    display: flex;
    align-items: center;
  }

  .tui-acatar {
    width: 60rpx;
    height: 60rpx;
    border-radius: 30rpx;
    display: block;
    margin-right: 16rpx;
  }

  .tui-cmt {
    padding: 14rpx 0;
  }

  .tui-attr {
    font-size: 24rpx;
    color: #999;
    padding: 6rpx 0;
  }

  .tui-cmt-btn {
    padding: 50rpx 0 30rpx 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tui-tag-cmt {
    min-width: 130rpx;
    padding: 20rpx 52rpx !important;
    font-size: 26rpx !important;
    display: inline-block;
  }

  .tui-nomore-box {
    padding-top: 10rpx;
  }

  .tui-product-img {
    transform: translateZ(0);
  }

  .tui-product-img image {
    width: 100%;
    display: block;
  }

  /*底部操作栏*/

  .tui-col-7 {
    width: 58.33333333%;
  }

  .tui-col-5 {
    width: 41.66666667%;
  }

  .tui-operation {
    width: 100%;
    height: 100rpx;
    /* box-sizing: border-box; */
    background: rgba(255, 255, 255, 0.98);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    bottom: 0;
    left: 0;
    padding-bottom: env(safe-area-inset-bottom);
  }

  .tui-safearea-bottom {
    width: 100%;
    height: env(safe-area-inset-bottom);
  }

  .tui-operation::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0;
    left: 0;
    border-top: 1rpx solid #eaeef1;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  .tui-operation-left {
    display: flex;
    align-items: center;
  }

  .tui-operation-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  .tui-operation-text {
    font-size: 22rpx;
    color: #333;
  }

  .tui-opacity {
    opacity: 0.5;
  }

  .tui-scale-small {
    transform: scale(0.9);
    transform-origin: center center;
  }

  .tui-operation-right {
    height: 100rpx;
    /* box-sizing: border-box; */
    padding-top: 0;
  }

  .tui-right-flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tui-btn-equals {
    width: 90% !important;
    display: block !important;
    font-size: 30rpx !important;

  }

  .tui-badge-class {
    position: absolute;
    top: -6rpx;
  }

  .tui-flex-1 {
    flex: 1;
  }

  /*底部操作栏*/

  /*底部选择弹层*/

  .tui-popup {
    border-top-left-radius: 24rpx;
    border-top-right-radius: 24rpx;
    padding-bottom: env(safe-area-inset-bottom);
  }

  .tui-popup-box {
    position: relative;
    padding: 30rpx 0 100rpx 0;
  }

  .tui-popup-btn {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .tui-icon-close {
    position: absolute;
    top: 30rpx;
    right: 30rpx;
  }

  .tui-product-box {
    display: flex;
    align-items: flex-end;
    font-size: 24rpx;
    padding-bottom: 30rpx;
  }

  .tui-popup-img {
    height: 200rpx;
    width: 200rpx;
    border-radius: 24rpx;
    display: block;
  }

  .tui-popup-price {
    padding-left: 20rpx;
    padding-bottom: 8rpx;
  }

  .tui-amount {
    color: #ff201f;
    font-size: 36rpx;
  }

  .tui-number {
    font-size: 24rpx;
    line-height: 24rpx;
    padding-top: 12rpx;
    color: #999;
  }

  .tui-popup-scroll {
    height: 600rpx;
    font-size: 26rpx;
  }

  .tui-scrollview-box {
    padding: 0 30rpx 60rpx 30rpx;
    box-sizing: border-box;
  }

  .tui-attr-title {
    padding: 10rpx 0;
    color: #333;
  }

  .tui-attr-box {
    font-size: 0;
    padding: 20rpx 0;
  }

  .tui-attr-item {
    max-width: 100%;
    min-width: 200rpx;
    height: 64rpx;
    display: -webkit-inline-flex;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #f7f7f7;
    padding: 0 26rpx;
    box-sizing: border-box;
    border-radius: 32rpx;
    margin-right: 20rpx;
    margin-bottom: 20rpx;
    font-size: 26rpx;
  }

  .tui-attr-active {
    background: #fcedea !important;
    color: #e41f19;
    font-weight: bold;
    position: relative;
  }

  .tui-attr-active::after {
    content: "";
    position: absolute;
    border: 1rpx solid #e41f19;
    width: 100%;
    height: 100%;
    border-radius: 40rpx;
    left: 0;
    top: 0;
  }

  .tui-number-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx 0 30rpx 0;
    box-sizing: border-box;
  }

  /*底部选择弹层*/
</style>


