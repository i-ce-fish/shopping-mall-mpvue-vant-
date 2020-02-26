<template>
  <div class="container">
        <div class="">
          <van-cell-group>
            <van-cell title="姓名" label="手机号码"   />
            <van-cell title="姓名"  label="手机号码"  />
            <van-cell title="姓名" label="手机号码"  />
            <van-cell title="姓名" label="手机号码"  />
          </van-cell-group>
        </div>
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


