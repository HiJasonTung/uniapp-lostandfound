Component({
  data: {
    list:[
      {
        iconPath: "images/navigator/index.png",
        pagePath: "pages/index/index",
        selectedIconPath: "images/navigator/index_fill.png",
        text: "首页",
        type: 0
      },
      {
        iconPath: "images/navigator/classify.png",
        pagePath: "pages/classify/classify" ,
        selectedIconPath: "images/navigator/classify_fill.png",
        text: "分类",
        type: 0
      },
      {
        type: 1
      },
      {
        iconPath: "images/navigator/collection.png",
        pagePath: "pages/collection/collection",
        selectedIconPath: "images/navigator/collection_fill.png",
        text: "收藏夹",
        type: 0
      },
      {
        iconPath: "images/navigator/me.png",
        pagePath: "pages/me/me",
        selectedIconPath: "images/navigator/me_fill.png",
        text: "我的",
        type: 0
      }
    ]
  }
})