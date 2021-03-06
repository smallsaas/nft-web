/** 
 * @开发环境配置
 * @关于Config配置说明
 * @优先级 此地方中的 endpoint 高于 public/config.js 中 window.ZEle.endpoint
 * @说明 此地方不设置生产环境endpoint设置 默认为public/config.js 中的 window.ZEle.endpoint 值
*/
export const Config ={
    // endpoint:'http://localhost:8001',
    // endpoint:'http://192.168.3.239:8484',
    endpoint:'http://portainer.host.smallsaas.cn:8084/',
    breadcrumbType:"header", //header,top
    theme:"LeftCover",//TopCover,LeftCover
    aloneWindow:[]  // 使用方法:在这里增加页面路径即可，如 /login
}