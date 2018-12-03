# shop_market

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目依赖
+ 使用`vue init webpack <projectname>`初始化项目
    - 注意：使用此命令之前需要安装vue-cli脚手架工具
    - 安装方法自行百度，在此不再赘述
+ 按照终端提示进行操作，安装依赖`npm i`或直接在微云下载`https://share.weiyun.com/5q8q2Sa`，在项目根文件夹内下载，由于文件个数较多解压需要一定时间，具体时间取决于电脑性能。
+ 在`src文件夹中`依次创建`api common components filters mock pages router store`文件夹，和`App.vue main.js`文件
    - 各文件夹作用将在`README.md`中进行描述
+ 安装stylus依赖包
    - 使用`npm install stylus stylus-loader --save-dev`或`cnpm install stylus stylus-loader --save-dev`
+ 配置路由
    - 使用`npm install vue-router --save`或`cnpm i vue-router --save`
+ 使用`swiper`实现产品轮播展示
  - 使用`npm install --save swiper`或`cnpm i --save swiper`进行下载
+ 下载`axios`实现异步加载
  - 使用 `npm install --save axios`或`cnpm i --save axios`进行下载
+ 下载`Vuex`管理状态
  - 使用`npm install --save vuex`或`cnpm i --save vuex`
