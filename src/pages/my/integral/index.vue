<template>
  <div class="container">
    <van-tabs swipeable scrollspy sticky :active="active" @change="onChange">
      <van-tab title="全部明细">
        <div class="">
          <van-cell-group>
<!--            todo 1. 通过增加类名来改变样式（无法覆盖已有样式） 2. 使用插槽 -->
            <van-cell title="使用" label="2020-12-12 22:13:12"  value="-100" />
            <van-cell title="使用"  label="2020-12-12 22:13:12" value="-100" />
            <van-cell title="使用" label="2020-12-12 22:13:12" value="-100" />
            <van-cell title="使用" label="2020-12-12 22:13:12" value="-100" />
          </van-cell-group>
        </div>
<!--        <view>-->
<!--          <view class="tui-order-item" v-for="(item,indexA) in 1 "  :key="indexA"  >-->

<!--                <view class="tui-goods-item">-->
<!--                  <image :src="testImg" class="tui-goods-img"></image>-->
<!--                  <view class="tui-goods-center">-->
<!--                    <view class="tui-goods-name ">1000-100券</view>-->
<!--                    <view class="tui-goods-des y-font-s">仅限男装可用</view>-->
<!--                    <view class="tui-goods-attr">2020.02.26-2020-12-31</view>-->
<!--                  </view>-->

<!--                </view>-->
<!--          </view>-->
<!--        </view>-->
      </van-tab>
      <van-tab title="增加记录">
        <van-cell title="增加" label="2020-12-12 22:13:12" value="-100" />
        <van-cell title="增加" label="2020-12-12 22:13:12" value="-100" />
        <van-cell title="增加" label="2020-12-12 22:13:12" value="-100" />
        <van-cell title="增加" label="2020-12-12 22:13:12" value="-100" />
      </van-tab>
      <van-tab title="使用记录">内容 3</van-tab>
    </van-tabs>
    <van-divider contentPosition="center">到底了</van-divider>
  </div>
</template>
<script>
  import tuiListCell from "@/components/list-cell/list-cell"
  import tuiListView from "@/components/list-view/list-view"

  export default {
    components: {
      tuiListView,
      tuiListCell
    },
    data() {
      return {
        active:0,


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
      }
    }
  }
</script>
<style lang="scss">
</style>


