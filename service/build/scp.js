'use strict';
/**
 * 将指定文件发送至服务器
 * @author simorel
 */
const ora = require('ora'); // 日志打印归于一行插件件
const client = require('scp2'); // 文本发送插件
const chalk = require('chalk');
const config = require('../config/config.default')();  // 使用方法添加‘().’
const files = ['app/', 'config/', 'package.json']; // 后面加‘/’代表是上传整个文件夹

/**
 * 发送文件至腾讯云服务器类
 * @class DeployCos
 */
class DeployCos {
  constructor() {
    this.filesPath = files; // 打包后的静态资源路径，仅上传这些文件夹或文件
    this.config = config.server;
    this.total = 0; // 总文件数
    this.spinner = this._createSpinner();

    this.main();
  }

  /**
   * 创建进度条
   */
  _createSpinner() {
    let text = this._getTip(0, 0);
    return ora({
      text,
      color: 'green',
    }).start();
  }

  /**
   * 展示进度提示条
   * @param {number} index 当前文件索引
   * @param {number} sum 总文件数
   * @memberof DeployCos
   */
  _getTip(index, sum) {
    const percentage = sum === 0 ? 0 : Math.round((index / sum) * 100);
    return `Uploading to Tencent Server: ${percentage === 0 ? '' : percentage + '% '}${index}/${sum} files uploaded`;
  }

  /**
   * 获取文件路径，并上传至服务器
   * @memberof DeployCos
   */
  main() {
    this.total = this.filesPath.length;

    const promiseArr = this.filesPath.map((file, index) => {
      return this._uploadFile(file, index + 1); // 因为index从零开始，所以这里加一
    });

    Promise.all(promiseArr)
      .then(res => {
        this.spinner.succeed(); // 结束上传进度条打印
        console.log(chalk.cyan('\n  Send files to server success.\n'));
      })
      .catch(err => {
        console.log(chalk.red('\n  Send failed with errors.\n' + err));
      });
  }

  /**
   * 实际调用上传文件函数
   * @param {String} file 文件相对路径
   * @param {number} index 文件计数器
   * @memberof DeployCos
   */
  _uploadFile(file, index) {
    return new Promise((resolve, reject) => {
      client.scp(file, {
        port: 22,
        host: this.config.host,
        username: this.config.username,
        password: this.config.password,
        path: `${this.config.path}${file}`,
      }, err => {
        this.spinner.text = this._getTip(index, this.total);
        return err ? reject(err) : resolve(err);
      });
    });
  }
}

new DeployCos();