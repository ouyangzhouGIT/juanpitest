<template>
    <div class="jp-item">
        <p class="jp-item-title">{{datas.goodsTypeName}}</p>
        <ItemList
            v-for="item in datas.goodsTypeList"
            :key="item.goodsTypeName"
            :itemsrc="item.goodsTypeImgUrl"
            v-if="!list.includes(item.goodsTypeId)&&!pro.includes(item.goodsTypeName)"
            :name="item.goodsTypeName"
        >
        </ItemList>

    </div>
</template>

<script>
import ItemList from "@/components/ItemList"
export default {
    data(){
    return{
      list:['cat10000078','cat10000079',"cat10000144","cat10000149","cat10000154","cat20805703",
      "cat10000158",'cat10000092','cat10000093','cat15787570','cat15787575','cat10000103','cat10000110',
      'cat10000388','cat10000130','cat10000138','cat10005444','cat24327660','cat10000286','cat24327667',
      'cat10000337','cat10000323','cat10000055','cat20805685',"cat10000193","cat10000191","cat32616698",
      'cat10000229','cat10000227','cat15985621','cat10000211',"cat10000190",'cat10000221','cat32616625',
      "cat10000219",'cat16035559','cat16035570','cat15046070','cat16035600','cat16035581','cat16035628',
      'cat16035583','cat15555838','cat15555755','cat15555700','cat21675780','cat15555808','cat15985777',
      'cat15985811','cat10000398','cat15985784','cat15985811','cat21675750','cat10005467','cat21675768',
      'cat15985594','cat15985636','cat15985584','cat21435632','cat15985579','cat15985636','cat15985667',
      'cat10000407','cat21655572','cat10005505','cat15985665','cat10005489','cat15985691','cat15985655',
      'cat10005493','cat15965756','cat21455929','cat15965727','cat21445765','cat21445700','cat21445687',
      'cat21445645'],
        pro:['联想笔记本','神舟笔记本',"夏普电视","康佳电视","索尼电视","五粮液","牯牛峰","1段奶粉","男童装",
        "乐高","美体塑身","睡袍/睡裙","保暖内衣","帆布鞋","家居拖鞋","运动T恤","速干衣/裤","T恤","瑜伽服","凳类"]
    }
  },
    props:['datas'],
    components: {
    ItemList,
  },
}
</script>

<style lang="scss" scoped>
    .jp-item{
        .jp-item-title{
           font-size: 10px;
           color: #999;
           height: 30px;
           line-height: 30px;
        }
    }
</style>
