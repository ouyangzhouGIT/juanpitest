<template>
  <div>
    <mt-search v-model="value" cancel-text></mt-search>
  </div>
</template>
  
  <script>
import { Search } from "mint-ui";
export default {
  data() {
    return {
      value: "搜索"
    };
  }
};
</script>
  
  <style lang="scss" scoped>
.jp-app {
  .jp-app-header {
    height: 52px;
    .mint-search {
      height: 52px;
      width: 100%;

      .mint-searchbar {
        background-color:red;
        .mint-searchbar-inner {
          background-color: red;
          border-radius: 4px;
          i {
            color: rgb(153, 153, 153);
            font-size: 18px;
          }
          .mint-searchbar-core {
            background-color: #f2f2f2;
          }
        }
      }
      .mint-search-list {
        display: none;
      }
    }
  }
}
</style>