module.exports = {
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      //解决路径相关问题
      alias: {
        //别命
        //'@': 'src'默认配置
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
        //'router': '@/router'  不需要，因为通过this.router即可获得
        //this.$store  同理
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    client: {
      webSocketURL: "ws://0.0.0.0:3000/ws",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
