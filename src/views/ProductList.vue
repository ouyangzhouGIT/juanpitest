<template>
  <div class="jp-list">
    <img :src="src" class="jp-list-img">
      <productitem
        v-for="item in somelist"
        :key="item.goodsTypeId"
        :datas="item"
      >
      
      </productitem>   
      </div>
</template>

<script>
import * as ajax from "@/request"
import productitem from "@/components/ProductItem"
import { Indicator } from 'mint-ui'
export default {
  props:['detailsid'],
  data() {
    return {
      id: "",
      list: [],
      src:"",
      somelist:[]
    };
  },
  methods : {
      getlist(){
          ajax.getProductList(this.id).then((resp)=>{
              let arr = resp.data
              this.list[0]= arr
              this.src = this.list[0].imageUrl
              this.somelist = this.list[0].secondLevelCategories
              Indicator.close();
          },
          )
      }
  },
  components: {
    productitem
  },
  beforeRouteEnter (to, from, next) {
      next(vm => { 
          vm.id = to.params.proId
          vm.getlist()
      })
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.proId
    this.getlist()
    next()
  },
  created(){
    console.log(this.detailsid)
  }
}
</script>

<style lang="scss">
  .jp-list{
    width: 100%;
    padding-left: 7px;
    .jp-list-img{
    width: 96%;
  }
  }
</style>
