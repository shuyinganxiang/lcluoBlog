/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584859899858_7485';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    // database configuration
    client: {
      // host
      // host: 'mysql.com',
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'react_blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.session = {
    key:'SESSION_ID',
    maxAge:864000,
    httpOnly: true,
    encrypt: true,
    renew: true //延长会话有效期
  }

  // config.security = { // 设置安全机制
  //   scrf: { // 默认都开启 scrf
  //     enable: false, // 开启状态 false
  //   },
  //   domainWhiteList: ['*']
  // }

  // config.cors = {
  //   origin: '*', // 允许哪些域名可以跨域访问
  //   allowMethods: 'GET,POST,PUT,UPDATE,HEAD,DELETE,PATCH.OPTIONS', // 允许访问的请求方式
  // }
  config.security = {
    csrf: {enable: false},
　  domainWhiteList: [ '*' ]
　};
  config.cors = {
    origin: 'http://localhost:3000', //只允许这个域进行访问接口
    credentials: true,   // 开启认证 允许 cookis 跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  return {
    ...config,
    ...userConfig,
  };
};


