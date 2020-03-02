<template>
  <view class="tui-addr-box">
    <form report-submit="true">
      <tui-list-cell :hover="false" padding="0">
        <view class="tui-line-cell">
          <view class="tui-title">文本输入框</view>
          <input placeholder-class="tui-phcolor" class="tui-input" name="name" placeholder="请输入收货人姓名" maxlength="15"
                 type="text"/>
        </view>
      </tui-list-cell>
      <tui-list-cell :hover="false" padding="0">
        <view class="tui-line-cell tui-flex">
          <view class="tui-title">单选</view>
          <van-radio-group class="tui-flex-1 tui-flex tui-align-between " :value="radio" @change="onChange">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
        </view>
      </tui-list-cell>
      <tui-list-cell :hover="false" padding="0">
        <view class="tui-line-cell tui-flex">
          <view class="tui-title">多选</view>
          <van-checkbox-group class="tui-flex-1 tui-flex tui-align-between"
                              :value="checkbox"
                              @change="onCheckbox">
            <van-checkbox shape="square" name="a">a</van-checkbox>
            <van-checkbox  shape="square" name="b">b</van-checkbox>
            <van-checkbox  shape="square"name="c">c</van-checkbox>
          </van-checkbox-group>
        </view>
      </tui-list-cell>
      <tui-list-cell :hover="false" padding="0">
        <view class="tui-line-cell">
          <view class="tui-title">日期选择</view>
          <div @tap="showDatetime=true" placeholder-class="tui-phcolor" class="tui-input">
            {{dateTime}}
          </div>
        </view>
      </tui-list-cell>
      <tui-list-cell :hover="false" padding="0">
        <view class="tui-line-cell">
          <view class="tui-title" @tap="showArea = true">城市选择</view>
          <view placeholder-class="tui-phcolor" class="tui-input"
                 @tap="showArea = true">
            <view>
              {{areaValue}}
            </view>
          </view>
        </view>
      </tui-list-cell>
      <tui-list-cell :hover="false" padding="0">
        <view class="tui-line-cell">
          <view class="tui-title">数字输入</view>
          <input placeholder-class="tui-phcolor" class="tui-input" name="mobile" placeholder="请输入收货人手机号码" maxlength="11"
                 type="text"/>
        </view>
      </tui-list-cell>
      <tui-list-cell :hover="false" padding="0">
        <view class="tui-line-cell">
          <view class="tui-title">步进器</view>
          <van-stepper :value="stepper" @change="onChangeStepper" />
        </view>
      </tui-list-cell>
      <tui-list-cell :arrow="false" padding="0">
        <view class="tui-line-cell">
          <view class="tui-title">
            <text class="tui-title-city-text">单列选择</text>
          </view>
         <view class="tui-input" @tap="showPicker = true" >{{pickerValue}}</view>
        </view>
      </tui-list-cell>
<!--      <tui-list-cell :hover="false" padding="0">-->
<!--        <view class="tui-line-cell">-->
<!--          <view class="tui-title">收货地址</view>-->
<!--          <input placeholder-class="tui-phcolor" class="tui-input" name="address" placeholder="请输入详细的收货地址"-->
<!--                 maxlength="50" type="text"/>-->
<!--        </view>-->
<!--      </tui-list-cell>-->
<!--      <tui-list-cell :hover="false" padding="0">-->
<!--        <view class="tui-line-cell">-->
<!--          <view class="tui-cell-title">地址类型</view>-->
<!--          <view class="tui-addr-label">-->
<!--            <text v-for="(item,index) in lists" :key="index" class="tui-label-item"-->
<!--                  :class="{'tui-label-active':index==1}">{{item}}</text>-->
<!--          </view>-->
<!--        </view>-->
<!--      </tui-list-cell>-->

      <!-- 默认地址 -->
      <tui-list-cell :hover="false" padding="0">
        <view class="tui-swipe-cell">
          <view>开关</view>
          <switch checked color="#30CC67" class="tui-switch-small"/>
        </view>
      </tui-list-cell>
      <!-- 保存地址 -->
      <view class="tui-addr-save">
        <van-button type="danger" custom-style="height:88rpx;width:100%;" >保存</van-button>
      </view>

    </form>

<!--    弹出日期选择-->
    <van-popup :show="showDatetime" position="bottom" @close="showDatetime = false">
<!--      todo  3 errors  formatter not a function -->
      <van-datetime-picker
        type="date"
        :value="currentDate "
        @input="onDate"
        :min-date="minDate"
        :formatter="formatter"
        @cancel="showDatetime = false"
        @confirm="onConfirmDatetime"
      />
    </van-popup>
<!--    弹出城市选择-->

    <van-popup :show="showArea" position="bottom" @close="showArea= false">
    <van-area
      @confirm="onConfirmArea"
      @cancel="showArea= false"
      :area-list="provinceList"
      :value="areaValue"
    />
    </van-popup>

<!--弹出单列选择-->
    <van-popup :show="showPicker" position="bottom" @close="showPicker= false">
      <van-picker :columns="pickerList" @change="onChangePicker" />
    </van-popup>

  </view>
</template>
<script>
  import tuiListCell from "@/components/list-cell/list-cell"
  import tuiListView from "@/components/list-view/list-view"
  import provinceList from '@/utils/area'
  export default {
    components: {
      tuiListCell, tuiListView
    },
    created(){

    },
    data() {
      return {
        testImg: "https://source.unsplash.com/random",
        lists: ["公司", "家", "学校", "其他"],

          radio: '1',
        checkbox: ['a'],
        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
        dateTime: "请选择日期",
        showDatetime: false,
        formatter(type, value) {
              if (type === 'year') {
                return `${value}年`;
              } else if (type === 'month') {
                return `${value}月`;
              }
              return value;
          },

        showArea: false,
        provinceList: provinceList,
        areaValue: "请选择城市",
        stepper: 1,
        showPicker: false,
        pickerValue: "请选择",
        pickerList: [1,2,2,3,5,6,5]
      }
    },

    methods: {
      onChange(e) {
        console.log(e)
        if (e.mp.detail === this.radio) {
          this.radio = null
        }else {
        this.radio = e.mp.detail;

        }
      },
      onCheckbox(e) {
        this.checkbox = e.mp.detail
      },
      onDate(e) {
        this.currentDate = e.mp.detail
      },
      onConfirmDatetime(e) {
        this.dateTime = e.mp.detail
        this.showDatetime = false
      },
      onConfirmArea(e) {
        console.log(e.mp.detail)
        this.areaValue = e.mp.detail.values[2].name
        this.showArea = false
      },
      onChangeStepper(e) {
        this.stepper = e.mp.detail

      },
      onChangePicker(e) {
        console.log(e)
        this.pickerValue = e.mp.detail.value
      }
    },
  }
</script>
<style lang="scss">
  .tui-addr-box {
    padding: 20rpx 0;
  }

  .tui-line-cell {
    width: 100%;
    padding: 24rpx 30rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .tui-title {
    width: 180rpx;
    font-size: 28rpx;
  }

  .tui-title-city-text {
    width: 180rpx;
    height: 40rpx;
    display: block;
    line-height: 46rpx;
  }

  .tui-input {
    width: 500rpx;
  }

  .tui-input-city {
    flex: 1;
    height: 40rpx;
    font-size: 28rpx;
    padding-right: 30rpx;
  }

  .tui-phcolor {
    color: #ccc;
    font-size: 28rpx;
  }
  .tui-cell-title{
    font-size: 28rpx;
  }
  .tui-addr-label {
    margin-left: 70rpx;
  }

  .tui-label-item {
    width: 76rpx;
    height: 40rpx;
    border: 1rpx solid rgb(136, 136, 136);
    border-radius: 6rpx;
    font-size: 26rpx;
    text-align: center;
    line-height: 40rpx;
    margin-right: 20rpx;
    display: inline-block;
    transform: scale(0.9);
  }
  .tui-label-active{
    background: #E41F19;
    border-color:#E41F19;
    color: #fff;
  }
  .tui-swipe-cell {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 10rpx 24rpx;
    border-radius: 6rpx;
    overflow: hidden;
    font-size: 28rpx;
  }

  .tui-switch-small {
    transform: scale(0.8);
    transform-origin: 100% center;
  }

  .tui-switch-small .wx-switch-input {
    margin: 0 !important;
  }
  .tui-addr-save {
    padding: 24rpx;
    margin-top: 100rpx;
  }

  .tui-del {
    padding: 24rpx;
  }
</style>


