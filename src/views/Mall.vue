<template>
    <div class="dm-mall">
    <div class="dm-mall-sidebar">
      <ul>
        <router-link
          v-for="(item,index) in list"
          :key="index"
          :to="{path:`/Mall/${item.http}`,query:{id: item.detailID, backpath },}"
          tag="li" 
        >
        {{item.name}}
        </router-link>
      </ul>
    </div>
    <div class="dm-mall-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  created(){
    console.log(this.$route)
    if(this.$route.path === "/Mall"){
      this.$router.push(`/Mall/${this.list[0].http}?id=${this.list[0].detailID}`)
    }   
  },
  data(){
    return{
      backpath: this.$route.fullPath,
      list:[
        {name:"手机数码",http:"17951828",detailID:"1871"},{name:"电脑办公",http:"17951829",detailID:'1742'},{name:"电视影音",http:"17951830",detailID:'1744'},
        {name:"空调冰洗",http:"17951831",detailID:'1747'},{name:"厨房卫浴",http:"17951832",detailID:'1764'},{name:"生活电器",http:"17951833",detailID:'1934'},
        {name:"食品酒水",http:"17951834",detailID:'1754'},{name:"美妆个护",http:"17951835",detailID:'1759'},{name:"母婴玩具",http:"17951836",detailID:'1939'},
        {name:"营养保健",http:"17951837",detailID:'1752'},{name:"服饰鞋帽",http:"17951838",detailID:'1694'},{name:"运动户外",http:"17951839",detailID:'1776'},
        {name:"箱包奢品",http:"17951840",detailID:'2013'},{name:"钟表首饰",http:"17951841",detailID:'1730'},{name:"住宅家具",http:"17951842",detailID:'1767'}]
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .dm-mall{
    display: flex;
    height: 100%;
    &-sidebar{
      
      overflow-x: hidden;
      .router-link-exact-active,
      .router-link-active {
       color: #f20c59;
       background-color: #fff;
       border-left: 3px solid #f20c59;
    }
      width: 80px;
      background-color: #f0f0f0;
      li {
      font-size: 14px;
      height: 45px;
      line-height: 40px;
      text-align: center;
      }
    }
    &-main {
      flex: 1;
      overflow-x: hidden;
    }
  }


</style>
