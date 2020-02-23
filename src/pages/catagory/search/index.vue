<template>
    <view class="container">
      <view class="tui-searchbox">
        <view class="tui-search-input">
          <icon type="search" size='13' color='#333'></icon>
          <input confirm-type="search" placeholder="大家都在搜：2019退役球星" :auto-focus="true" placeholder-class="tui-input-plholder" class="tui-input" :value="key" @input="input"/>
          <icon type="clear" size='13' color='#bcbcbc' @tap="cleanKey" :hidden="!key"></icon>
        </view>
        <view class="tui-cancle" @tap="back">取消</view>
        <view class="tui-confirm" @tap="go('/pages/catagory/product-list/main')">确认</view>
      </view>

      <view class="tui-search-history" v-if="history.length>0">
        <view class="tui-history-header">
          <view class="tui-search-title">搜索历史</view>
          <van-icon name="delete" size='14' color='#333' @tap="openActionSheet" class="tui-icon-delete"></van-icon>
        </view>
        <view class="tui-history-content">
            <div class="tag-box tui-flex ">
             <block v-for="(item,index) of history" :key=index>
            <van-tag round   size="medium">{{item}}</van-tag>
          </block>
            </div>
        </view>
      </view>

      <view class="tui-search-hot">
        <view class="tui-hot-header">
          <view class="tui-search-title">大家正在搜</view>
        </view>
        <view class="tui-hot-content">
          <div class="tag-box tui-flex ">
          <block v-for="(item,index) of hot" :key=index>
            <van-tag  round size="medium">{{item}}</van-tag>
          </block>
            </div>
        </view>
      </view>
      <van-action-sheet
        :show="showActionSheet"
        :description="tips"
        :actions="actions"
        @select="itemClick"
        @close="closeActionSheet"
      />
    </view>
</template>
<script>

  export default {
    components: {
    },
    onLoad() {
    },
    methods: {
      back: function() {
        wx.navigateBack();
      },
      input: function(e) {
        let key = e.mp.detail.value;
        this.key = key
      },
      cleanKey: function() {
        this.key=""
      },
      closeActionSheet: function() {
          this.showActionSheet= false
      },
      openActionSheet: function() {
          this.showActionSheet=true
      },
      itemClick: function(e) {
        console.log(e)
        let index = e.mp.detail.index;
        if (index == 0) {
            this.showActionSheet=false,
            this.history= []
        }
      }
    },
    data() {
      return {

        history: [
          "羽绒",
          "T恤",
          "男",
          "牛仔裤",
          "毛衣",
          "衬衫",
          "夹克"
        ],
        hot: [
          "德利赫特",
          "托雷斯",
          "早安D站",
          "D站观点",
          "德利赫特",
          "美洲杯",
          "华为手机",
          "C罗",
          "自热火锅",
        ],
        key: "",
        showActionSheet: false,
        tips: "确认清空搜索历史吗？"
        ,
        actions: [
          { name: '选项1', color: '07c160' },
          { name: '选项2', color: '07c160' },
          { name: '禁用选项', disabled: true }]
      }
    }
  }
</script>
<style lang="scss">

  .container{
    padding:0 30rpx 30rpx 30rpx;
    box-sizing: border-box;
  }
  .tui-searchbox {
    padding: 30rpx 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .tui-search-input {
    width: 100%;
    height: 66rpx;
    border-radius: 35rpx;
    padding: 0 30rpx;
    box-sizing: border-box;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
  .tui-input{
    flex: 1;
    color: #333;
    padding:0 16rpx;
    font-size: 28rpx;
  }
  .tui-input-plholder{
    font-size: 28rpx;
    color: #b2b2b2;
  }
  .tui-cancle,.tui-confirm{
    color: #888;
    font-size: 28rpx;
    padding-left: 30rpx;
    flex-shrink: 0;
  }
  .tui-confirm{
    color: #333;
  }
  .tui-history-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30rpx 0;
  }
  .tui-icon-delete{
    padding: 10rpx;
  }
  .tui-search-title{
    font-size: 28rpx;
    font-weight: bold;
  }
  .tui-hot-header{
    padding: 30rpx 0;
  }
  .tui-tag{
    display: inline-block;
    margin-bottom: 20rpx;
    margin-right: 20rpx;
    font-size: 26rpx !important;
  }

  .tag-box{
    white-space: nowrap;
    flex-wrap: wrap;
    van-tag{
      margin: 10rpx;
    }
  }
</style>


