<template>
  <div class="container">
    <van-collapse :value="activeNames" @change="onChange">
      <van-collapse-item title="积分-等级-折率规定" name="1">
        <div class="line-box">
          <div class="tui-flex tui-center y-font-m ">
            <div class="tui-flex-1">
              会员等级
            </div>
            <div class="tui-flex-1">
              新品折率
            </div>
            <div class="tui-flex-1">
              积分
            </div>
          </div>
        </div>
        <div class="line-box">
          <div class="tui-flex tui-center">
            <div class="tui-flex-1">
              一级会员
            </div>
            <div class="tui-flex-1">
              95折
            </div>
            <div class="tui-flex-1">
              小于1000分
            </div>
          </div>
        </div>
        <div class="line-box">
          <div class="tui-flex tui-center">
            <div class="tui-flex-1">
              二级会员
            </div>
            <div class="tui-flex-1">
              88折
            </div>
            <div class="tui-flex-1">
              1000分-1999分
            </div>
          </div>
        </div>
        <div class="line-box">
          <div class="tui-flex tui-center">
            <div class="tui-flex-1">
              三级会员
            </div>
            <div class="tui-flex-1">
              85折
            </div>
            <div class="tui-flex-1">
              2000分及以上
            </div>
          </div>
        </div>

      </van-collapse-item>
      <van-collapse-item title="如何获得积分" name="2">
        <div class="" v-for="(item,index) of integralWay">
          {{item}}
        </div>
      </van-collapse-item>
      <van-collapse-item title=" 引荐亲友红包" name="3">
        <div class="" v-for="(item,index) of integralWay">
          {{item}}
        </div>
      </van-collapse-item>
      <van-collapse-item title="积分兑换规则" name="4">
        <div class="" v-for="(item,index) of integralWay">
          {{item}}
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>

  export default {
    components: {},
    onLoad() {
    },
    onShow() {
      this.init()
    },
    methods: {
      onChange(event) {
        console.log(event)
        this.activeNames = event.mp.detail
      },

      /**
       * 通过递归，【同步】执行自动打开折叠面板
       */
      init() {
        //结束递归的条件
        if (this.activeNames.length < this.collapseSize) {
          setTimeout(() => {
            //业务代码
            this.activeNames.push((this.activeNames.length + 1).toString())
            //递归
            this.init()
          }, 600)
        }
      }

    },
    data() {
      return {
        collapseSize: 4,
        activeNames: [],
        integralWay: [
          "1、购物1元，赠送1分。",
          "2、促销时，购物1元，可能获得双倍积分。",
          "3、给店铺帮忙（介绍顾客、提建议等等），也能获得积分赠送。",
          "4、本店积分能兑换现金。",
          "5、详情请关注店铺公告。"
        ]
      }
    }
  }
</script>
<style lang="scss">
  .container {
  }
</style>


