<template>
  <div class="container">
     测试模块
    <tui-list-view title="测试模块">
      <tui-list-cell v-for="(item,index) of 5 " :key="index" >
          {{item}}//{{index}}
      </tui-list-cell>
    </tui-list-view>
    <div  @tap="add">
      增加
    </div>
    <div  @tap="del" >
      删除
    </div>
    <div  @tap="getlist">
      查列表
    </div>
    <div  @tap="put">
      修改
    </div>

  </div>
</template>
<script>
  import {addBlog, delBlog, getBlogs, putBlog} from "../../api/blog";

  import TuiListView from "../../components/list-view/list-view";
  import TuiListCell from "../../components/list-cell/list-cell";
  export default {
    components: {
      TuiListCell,
      TuiListView
    },
    onLoad() {
    },
    mounted(){
      // this.getlist()
    },
    data() {
      return {
        list:[0,0,0,0,0,0,12],
        testImg: "https://source.unsplash.com/random",
      }
    },
    methods: {
      async get(){
        console.log(await  getBlog(1))
      },
      async getlist() {
        const res = await getBlogs()
        this.list = res
        // this.$set(this,'list',[...res])
      },
      async add() {
        const res = await addBlog({title:"标题",body:`内容${new Date()}`})
        this.getlist()
      },
      async put() {
        const res = await putBlog(this.list.pop().id,{title:"标题",body:"修改内容"})
        this.getlist()
      },
      async del() {
        const res = await delBlog(this.list.pop().id)
        this.getlist()
      }
    }
  }
</script>
<style lang="scss">

</style>


