import axios from 'axios'
import { Indicator } from 'mint-ui'

const ajax = axios.create()

ajax.interceptors.request.use(config => {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
})

ajax.interceptors.response.use(resp => {
  // 响应地时候把loading关闭
  Indicator.close()
  // 全局的错误处理
  if (resp.status === 200) {
    return resp
  } else {
    return {
      status: 400,
      msg: '网络错误'
    }
  }
})

const baseUrl = 'https://m.gome.com.cn'
export const getProductList = id => ajax.get(baseUrl + `/index.php?ctl=goods_class&act=ajaxGetClassList&cid=${id}`)
export const getimg = (url) => ajax.get(`/api/${url}`)

export const getHome = () => {
  return ajax.get('http://xiongmaoyouxuan.com/api/tab/1?start=0')
}

export const getCategory = () => {
  return ajax.get('https://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8&app_name=zhe&catname=newest_zhe')
}
// 精选专场  4219  4210
export const getHomeList = (start, itemId) => {
  return ajax.get(`http://xiongmaoyouxuan.com/api/column/${itemId}/items?start=${start}`)
}

// 列表页
export const getList = (id, start = 0, sort = 0) => ajax.get(`http://www.xiongmaoyouxuan.com/api/category/${id}/items?start=${start}&sort=${sort}`)

// 详情
export const getDetail = id => ajax.get(`http://www.xiongmaoyouxuan.com/api/detail?id=${id}`)

// 登录rap2
export const login = (userinfo) => {
  return ajax.post('http://rap2api.taobao.org/app/mock/166518/login', userinfo)
}
