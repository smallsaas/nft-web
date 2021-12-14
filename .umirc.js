
// ref: https://umijs.org/config/
export default {
  title: 'NFT 交易平台',
  links: [
    // href的图片你可以放在public里面，直接./图片名.png 就可以了，也可以是cdn链接
     { rel: 'icon', href: './applogo.png' },
  ],
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  dynamicImport: {
    loading: '@/framework/Loading'
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  antd: {},
  dva: false,

  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件
}
