<template>
        <div class="jp-content-item-list" @click="gotolist">
            <img :src="itemsrc" alt="">
            <p class="jp-content-item-list-name">{{name}}</p>  
        </div>
   
</template>

<script>
export default {
     props:['itemsrc',"name"],
     methods:{
         gotolist(){
             let id = this.$route.query.id
             this.$router.push({ path: '/List', query: { listid: id } })
         }
     },
}
</script>

<style lang="scss" scoped>
  .jp-content-item-list{
        width: 30%;
        height: 13.8%;
        background-color: #F8F8F8;
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 5px;
        img{
            width: 90%;
            text-align: center; 
        }
        &-name{
            height: 20px;
            line-height: 20px;
            color: #666;
            font-size: 10px;
            text-align: center;  
        }
    }
</style>
