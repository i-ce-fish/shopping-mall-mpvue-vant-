<template>
  <div class="container">
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
      <div class="address">丽水中山街店522号（百货大楼旁）</div>
    </div>
    <div class="content-box">
      <div class="userinfo-box   tui-flex ">
        <div class="avatar tui-col-2 tui-flex tui-vertical-center">
          <van-image
            round
            width="120rpx"
            height="120rpx"
            fit="fill"
            :src="imgs[1]"
            @tap="test"
          />
        </div>
        <div class="tui-col-10 tui-flex tui-align-between">

          <div class="info-box   tui-col-10">
            <div class="line1">
              杨晴文-上海
            </div>
            <div class="line2 tui-flex tui-align-between">
              <div class="">
                二级会员
              </div>
              <div class="">
                积分&nbsp;152
              </div>
            </div>
            <div class="line3 tui-flex tui-align-between  ">
              <div class="">
                账户余额&nbsp;￥1788
              </div>
              <div class="">
                优惠券&nbsp;3张
              </div>
            </div>
          </div>
          <div class="right-box tui-col-2">
            <div class="">
              <van-icon name="qr" @tap="go('/pages/my/qrcode/main')" size="32px"/>
            </div>
            <div class="detail tui-flex" @tap="go('/pages/my/qrcode/main')">
              <div class="tui-vertical-center">详情</div>
              <van-icon class="" name="arrow" size="15px"/>
            </div>
          </div>
        </div>

      </div>
      <div class="userinfo-detail-box ">
        <div class="">
          1、店铺新品对您 8.8 折
        </div>
        <div class="">
          2、您生日当月享受一件 7.5 折，另三件 8.5 折
        </div>
        <div class="">
          3、享受新品 8.8 折
        </div>
      </div>
      <div class="activity-box">
        <!--以空标题作为间隔-->
        <tui-list-view title="">
          <tui-list-cell bgcolor="#EE4225" :hover="false" :arrow="true">
            <div class="y-font-l y-color-white">
              今日店铺活动
            </div>
          </tui-list-cell>
          <div class="item-box y-padding y-bgc-white y-font-l ">
            <div class="">
              20春部分货品：2件8.8折
            </div>
            <div class="y-color-red">
              全场满500元立减100元
            </div>
            <div class="">
              女装：2件8折 （女装首次打折）
            </div>
          </div>
        </tui-list-view>

      </div>

      <div class="wear-box">
        <!--以空标题作为间隔-->
        <tui-list-view title="">
          <tui-list-cell bgcolor="#EE4225" :hover="false" :arrow="true">
            <div class="y-font-l y-color-white">
              近日新穿法 (新品)
            </div>
          </tui-list-cell>
          <div class="item-box tui-flex tui-align-between y-padding y-bgc-white">
            <div class="">
              <div class="">
                卫衣新品 3款
              </div>
              <div class="">
                衬衫新品 2款
              </div>
              <div class="">
                板鞋 1款
              </div>
            </div>
            <div class="">
              <div class="">
                范冰冰逛街穿搭
              </div>
              <div class="">
                上海潮男休闲套装
              </div>
              <div class="">
                韩国明星居家装
              </div>
            </div>
          </div>
        </tui-list-view>
      </div>

      <div class="explore-box">
        <!--以空标题作为间隔-->
        <tui-list-view title="">
          <tui-list-cell bgcolor="#EE4225" :hover="false" :arrow="true">
            <div class="y-font-l y-color-white">
              导购帮我找货
            </div>
          </tui-list-cell>
          <div class="item-box  y-padding y-bgc-white ">
            <div class="">
              1、请告诉店铺--是谁穿：
            </div>
            <div class="tui-flex tui-align-right">
              男女，年龄，身高，身材，肤色，职业
            </div>
            <div class="">
              2、请告诉店铺--要什么：
            </div>
            <div class="tui-flex tui-align-right">
              上衣，裤子，鞋子；春秋装、夏装、冬装
            </div>
          </div>
        </tui-list-view>
      </div>

      <div class="friend-box">
        <!--以空标题作为间隔-->
        <tui-list-view title="">
          <tui-list-cell bgcolor="#EE4225" :hover="false" :arrow="true">
            <div class="y-font-l y-color-white">
              我的好友圈
            </div>
          </tui-list-cell>
          <div class="item-box  y-padding y-bgc-white ">
            <div class="">
              衷心感谢您介绍亲友照顾店铺生意！
            </div>
            <div class="y-color-red">
              您的亲友可以享受您的待遇
            </div>
            <div class="">
              另送您一点薄礼以示谢意！
            </div>
          </div>
        </tui-list-view>
      </div>
    </div>
    <van-divider contentPosition="center">到底了</van-divider>
  </div>
</template>
<script>
  import tuiListView from "@/components/list-view/list-view"
  import tuiListCell from "@/components/list-cell/list-cell"
  import {login} from '@/api/user'
  export default {
    components: {
      tuiListCell, tuiListView
    },
    onLoad() {
      wx.setNavigationBarTitle({
        title: '永康美特斯邦威店'
      })
    },
    methods: {
      async test() {
        const  res = await login(
          {
            email: "maxazure@gmail.com",
            password: "11111111"
          }
        )
        console.log(res)
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
  .title {
    padding: 10rpx 0;
  }

  .swiper-box {
    position: relative;

    .address {
      position: absolute;
      color: white;
      bottom: 10rpx;
      right: 10rpx;
    }

  }

  .content-box{
    .userinfo-box{
      padding:16rpx 30rpx;
      background-color: #ee6310;
      color: white;
      .avatar{
        padding-right: 30rpx;

      }
      .info-box{
        box-sizing: border-box;
        padding-right: 30rpx;
        div{
          padding: 5rpx 0;
        }
      }
      .right-box{
        position: relative;
        .detail{
          position: absolute;
          bottom: 5rpx;
        }
      }
    }

    .userinfo-detail-box{
      padding:20rpx 30rpx;
      background-color: white;
      >div{
        padding: 10rpx 0 ;
      }
    }

    .activity-box,.wear-box,.friend-box,.explore-box{
      .item-box{
        >div{
          padding: 10rpx 0 ;
        }
      }
    }


  }
</style>
