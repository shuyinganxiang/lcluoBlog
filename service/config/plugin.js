'use strict';
// 此处 配置外部插件

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mysql = {
  enable: true,  // 是否开启
  package: 'egg-mysql',  // 对应的包
}

exports.cors = {
  enable: true,  // 是否开启
  package: 'egg-cors',  // 对应的包
}
