<template>
  <div class="jp-list">
    <div class="jp-list-header-wrap">
      <div class="jp-list-header">
        <p class="jp-list-header-return" @click="goBack">
          <span class="icon">&#xe63f;</span>
        </p>
        <p class="jp-list-header-title"><span>{{name}}</span></p>
        <p class="jp-list-header-right">
          <span class="icon">&#xe679;</span>
          <span class="icon">&#xe7ac;</span>
        </p>
      </div>
      <div class="jp-list-nav">
        <ul>
          <li id="1" class="col" @click.stop="onChange(0, $event)">推荐</li>
          <li  @click="onChange(1, $event)">
            <span>价格</span>
            <i></i>
          </li>
          <li @click="onChange(2, $event)">销量</li>
          <li @click="onChange(3, $event)">上新</li>
          <li @click="onChange(0, $event)">
            <span>筛选</span>
            <i></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="jp-list-main" 
        v-infinite-scroll="onLoadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <ListItem
          v-for="item in list"
          :key=item.id
          :id=item.id
          :price=item.price
          :image=item.image
          :originPrice=item.originPrice
          :saleNum=item.saleNum
          :title=item.title
        ></ListItem>
      <mt-spinner v-if="!isEnd" class="jp-load" type="fading-circle"  color="#26a2ff">加载更多...</mt-spinner>
      <div v-else class="jp-btn-load__more">没有更多了...</div>
      <JpBackTop
        container=".jp-list-main"
        :distance="200"
      ></JpBackTop>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem"
export default {
  data () {
    return {
      name: '',
      list: [],
      id: 1700,
      nextIndex: 0,
      isEnd: true,
      sort: 0,
      backPath: ''
    }
  },
  methods: {
    // 请求数据的方法
    getList () {
      this.$http.getList(this.id, this.nextIndex, this.sort).then(resp => {
        this.list = this.list.concat(resp.data.data.items.list)
        this.name = resp.data.data.category.name
        this.isEnd = resp.data.data.items.isEnd
        this.nextIndex = resp.data.data.items.nextIndex
      })
    },
    onChange (sort, el) {
      this.sort = sort
      this.nextIndex = 0
      this.list = []
      this.getList ()
      console.log(el)
      document.getElementById("1").classList.remove("col")
      document.getElementById("1").removeAttribute("id")
      el.target.classList.add("col")  
      el.target.setAttribute("id", 1)
    },
    onLoadMore () {
      this.loading = true
      this.getList()
    },
    goBack () {
      this.$router.push(this.backPath)
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.backPath = from.fullPath
    })
  },
  components: {
    ListItem
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1234258 */
  src: url('//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.eot');
  src: url('//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.woff') format('woff'),
  url('//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.svg#iconfont') format('svg');
}
.icon {
  font-family: "iconfont";
}
.jp-list {
  height: 100%;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  &-header-wrap {
    .jp-list-header {
      height: 44px;
      border-bottom: 1px solid #ebeced;
      display: flex;
      justify-content: space-between;
      line-height: 44px;

      &-return {
        padding-left: 12px;
        font-size: 18px;
        position: relative;
        z-index: 1;
      }

      &-title {
        width: 100%;
        text-align: center;
        position: absolute;
      }
      &-right {
        padding-right: 12px;
        font-size: 18px;
        span:nth-child(2) {
          padding-left: 8px;
        }
      }
    }

    .jp-list-nav {
      height: 43px;
      line-height: 43px;

      ul {
        display: flex;
        justify-content: space-around;
        font-size: 14px;

        li {
          width: 20%;
          display: flex;
          justify-content: center;
          align-content: center;
        }
        .col {
          color: #ff464e;

        }
        i {
          height: 16px;
          background-size: 55px 15px;
          background-repeat: no-repeat;
          align-self: center;
          margin-left: 6px;
        }
        li:nth-child(2) {
          i {
            width: 8px;
            background-image: url("../image/sort_sprite.png");
            background-position: 0 1px;
          }
        }

        li:last-child {
          i {
            width: 12px;
            background-image: url("../image/sort_sprite.png");
            background-position: -26px 1px;
          }
        }
      }
    }
  }

  &-main {
    flex: 1;
    overflow-x: hidden;

    .jp-btn-load__more {
    background: #26a2ff;
    text-align: center;
    box-sizing: border-box;
    padding: 6px;
    margin: 0 16px 6px;
    border-radius: 4px;
    color: #ffffff;
    }
  }
  .jp-load {
    position: relative;
    display: block;
    width: 90px;
    // text-align: center;
    margin: 0 auto;
    &::after {
      content: "正在加载...";
      position: absolute;
      right: -16px;
      top: 7px;
      font-size: 14px;
      color: #3e3e3e;
    }
  }
}
</style>
