if (window.ZEle === undefined) {
    window.ZEle = {};
  }
  // 生产环境（客户环境）
  // window.ZEle.endpoint = "";
  // 开发环境（本地环境)
  window.ZEle.endpoint = "http://repo.dev.smallsaas.cn:8086";
  window.ZEle.nav = "left"; // LeftNavCollaps left top both
  window.ZEle.indexPage = "";
  window.ZEle.breadcrumb = true;
  
  window.ZEle.remoteConfig = {};