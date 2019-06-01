/** 
 * @Desc: 工具类
 */

/**
 * localstorage工具
 */
export const localStorageUtil = {
  get: function (key) {
    var value = localStorage.getItem(key)
    return value ? JSON.parse(value) : ''
  },
  set: function (key, value, exprise) {
    localStorage.setItem(key, JSON.stringify(value))
    if(exprise) {
      setInterval(() => {
        localStorage.getItem(key) && localStorage.removeItem(key)
      }, exprise);
    }
  },
  remove: function (key) {
    localStorage.getItem(key) && localStorage.removeItem(key)
  }
}

/**
 * sessionStorage工具
 */
export const sessionStorageUtil = {
  get: function (key) {
    var value = sessionStorage.getItem(key)
    return value ? JSON.parse(value) : ''
  },
  set: function (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  remove: function (key) {
    sessionStorage.getItem(key) && sessionStorage.removeItem(key)
  }
}

/**
 * 文件大小格式化
 * @param {number} value： 字节值 
 */
export function formatFileSize(value) {
  if (null == value || value == '') {
    return "0B"
  }
  var unitArr = new Array("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
  var index = 0
  var srcsize = parseFloat(value)
  index = Math.floor(Math.log(srcsize) / Math.log(1024))
  var size = srcsize / Math.pow(1024, index)
  // 保留一个小数
  size = size.toFixed(1)
  // 小数为0则去除
  size = size.toString().indexOf('.0') !== -1 ? parseInt(size) : size
  return size + unitArr[index]
}

/**
 * 进入全屏
 */
export function enterFullScreen(ele) {
  if (ele.requestFullscreen) {
    return ele.requestFullScreen()
  } else if (ele.webkitRequestFullScreen) {
    return ele.webkitRequestFullScreen()
  } else if (ele.mozRequestFullScreen) {
    return ele.mozRequestFullScreen()
  } else {
    return ele.msRequestFullscreen()
  }
}

/**
 * 退出全屏
 */
export function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
  return false
}

/**
 * 检测浏览器是否处于通过requestFullScreen开启的全屏
 */
export function checkFullScreen() {
  var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled
  if (isFull === undefined) {
    isFull = false
  }
  return isFull
}

/**
 * 判断是否全屏（兼容f11和requestFullScreen两种方式开启的全屏）
 */
export function isFullscreen() {
  var explorer = window.navigator.userAgent.toLowerCase()
  var isFull
  if (explorer.indexOf('chrome') > 0) {
    if (document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width) {
      isFull = true
    } else {
      isFull = false
    }
  } else {
    if (window.outerHeight === window.screen.height && window.outerWidth === window.screen.width) {
      isFull = true
    } else {
      isFull = false
    }
  }
  return isFull
}

// 验证手机号或身份证号码
export function validataPhoneOrId(value) {
  let pattern = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|3|5|6|7|8]|18[0|1|2|3|5|6|7|8|9]|19[8|9])\d{8}$/
  let pattern1 = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  if (null == value || value == '') {
    return false
  } else if(value.length !== 11 && value.length !== 18) {
    return false
  } else if (value.length === 11 && !value.match(pattern)) {
    return false
  } else if (value.length === 18 && !value.match(pattern1)) {
    return false
  } else {
    return true
  }
}

// 验证手机号
export function validataPhone(value) {
  let pattern = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|3|5|6|7|8]|18[0|1|2|3|5|6|7|8|9]|19[8|9])\d{8}$/
  if (null == value || value == '') {
    return false
  } else if (!value.match(pattern) || value.length != 11) {
    return false
  } else {
    return true
  }
}

// 验证密码(6~32位字符)
export function validatePassword(value) {
  let pattern = /^.{6,32}$/
  if (null == value || value == '') {
    return false
  } else if (!value.match(pattern)) {
    return false
  } else {
    return true
  }
}

// 核对两次密码一致否
export function confirmPassword(password, confirmPassword) {
  return password == confirmPassword
}

// 验证码长度设置
export function validateCodeLength(value) {
  if (null == value || value == '') {
    return false
  } else if (value.length != 6) {
    return false
  } else return true
}

/**
 * 根据当前时间 获取下下周的最后一天的时间戳  时分秒都为0
 */
export function get2NextWeekLastDay() {
  var lastDay = new Date()
  var curDay = new Date().getDay()
  if (curDay === 0) {
    lastDay.setDate(lastDay.getDate() + 15)
  }
  else {
    lastDay.setDate(lastDay.getDate() + (22 - curDay))
  }
  lastDay.setHours(0, 0, 0, 0)
  return lastDay.getTime()
}
/* 
  获取url的参数对象
*/
export function getParams(url) {
  var index = url.indexOf('?')
  var queryStr = url.substring(index + 1)
  var queryArr = queryStr.split('&')
  var query = {}
  for (let val of queryArr) {
    var arr = val.split('=')
    query[arr[0]] = arr[1]
  }
  return query
}

/** 
 * 获取当前的时间格式 
*/
export function getCurrentDate() {
  Date.prototype.toLocaleString = function () {
    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + "_" + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds()
  }
  return str = new Date().toLocaleString()
}
/** 
 * 进入页面前的操作权限判断
*/
export const setOperatePower = (_standard = 'path', to, _have ) => {
  let standard = _standard, 
  seePower = true, 
  operatePower = true, 
  editPower = true,
  downloadPower = true, 
  exportPower = true, 
  printdPower = true, 
  cashierPower = true, 
  accountantPower = true;

  let pagePower = JSON.parse(localStorage.getItem('page-power_admin'));
  if(pagePower) {
    let have = undefined;
    if(_have) {
      have = Object.assign({}, _have);
    }else {
      if(standard === 'path') {
        have = pagePower.find(ele => ele[standard] === to[standard]);
      }else if(standard === 'modul' || standard === 'title') {
        have = pagePower.find(ele => ele[standard] === to.meta[standard]);
      }
    }
    if(!have) {
      return {
        seePower,
        operatePower,
        editPower,
        exportPower,
        printdPower,
        downloadPower,
        cashierPower,
        accountantPower,
      };
    }
    
    if(!have.author.includes('MANAGE')) { 
      operatePower = false;
    } else {
      return {
        seePower,
        operatePower,
        editPower,
        exportPower,
        printdPower,
        downloadPower,
        cashierPower,
        accountantPower,
      };
    }
    if(!have.author.includes('MODULE')) { 
      seePower = false;
    } 
    if(!have.author.includes('EDIT_CONTENT')) { 
      editPower = false;
    } 
    if(!have.author.includes('DOWNLOAD')) { 
      downloadPower = false;
    } 
    if(!have.author.includes('EXPORT')) { 
      exportPower = false;
    } 
    if(!have.author.includes('PRINT')) { 
      printdPower = false;
    } 
    if(!have.author.includes('CASHIER')) { 
      cashierPower = false;
    } 
    if(!have.author.includes('ACCOUNTANT')) {  
      accountantPower = false;
    } 
  }

  return {
    seePower,
    operatePower,
    editPower,
    downloadPower,
    exportPower,
    printdPower,
    cashierPower,
    accountantPower,
  };

}

/** 
 * 二级菜单权限--显示/隐藏
*/
export const setAuthority = (parentModul, menuList) => {
  let list = [...menuList];
  let power = JSON.parse(localStorage.getItem('power_admin'));

  for (let i = 0; i < list.length; i++) {
    let x = list[i];
    if (power && power[x.modul]) {
      x.author = power[x.modul]
    } else {
      list.splice(i, 1);
      i--;
    }
  }
  return list;

}


/** 
 * 时间格式化
*/
export const formatDateTime = (dt, type) => {
  let str = ""; //存储时间的字符串
  //获取年
  let year = dt.getFullYear();
  //获取月
  let month = dt.getMonth() + 1;
  //获取日
  let day = dt.getDate();
  //获取小时
  let hour = dt.getHours();
  //获取分钟
  let min = dt.getMinutes();
  //获取秒
  let sec = dt.getSeconds();
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  if (!type) {
    return str = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
  }
  if (type == 'yyyy-MM-dd HH:mm:ss') {
    return str = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
  }
  if (type == 'yyyy/MM/dd HH:mm:ss') {
    return str = year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;
  }
  if (type == 'yyyy-MM-dd HH:mm') {
    return str = year + "-" + month + "-" + day + " " + hour + ":" + min;
  }
  if (type == 'yyyy/MM/dd HH:mm') {
    return str = year + "/" + month + "/" + day + " " + hour + ":" + min;
  }
  if (type == 'yyyy-MM-dd') {
    return str = year + "-" + month + "-" + day;
  }
  if (type == 'yyyy/MM/dd') {
    return str = year + "/" + month + "/" + day;
  }
  if (type == 'HH:mm:ss') {
    return str = hour + ":" + min + ":" + sec;
  }
  if (type == 'HH:mm') {
    return str = hour + ":" + min;
  }
  return str = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
}

/**
 * 防抖
 * @param {function} fn 处理的函数
 * @param {number} delay delay的时间
 */
export function debounce(fn,delay){
  var delay=delay||200;
  var timer;
  return function(){
      var th=this;
      var args=arguments;
      if (timer) {
          clearTimeout(timer);
      }
      timer=setTimeout(function () {
              timer=null;
              fn.apply(th,args);
      }, delay);
  };
}

/**
* 合并对象
*/
export function
mergeObjs(def, obj) {
 if (!obj) {
   return def;
 } else if (!def) {
   return obj;
 }
 for (var i in obj) {
   // if its an object
   if (obj[i] != null && obj[i].constructor == Object) {
     def[i] = mergeObjs(def[i], obj[i]);
   }
   // if its an array, simple values need to be joined. Object values need to be remerged.
   else if(obj[i] != null && (obj[i] instanceof Array) && obj[i].length > 0) {
     // test to see if the first element is an object or not so we know the type of array we're dealing with.
     if(obj[i][0].constructor == Object) {
       var newobjs = [];
       // create an index of all the existing object IDs for quick access. There is no way to know how many items will be in the arrays.
       var objids = {}
       for(var x= 0, l= def[i].length ; x < l; x++ ) {
         objids[def[i][x].id] = x;
       }
     
       // now walk through the objects in the new array
       // if the ID exists, then merge the objects.
       // if the ID does not exist, push to the end of the def array
       for(var x= 0, l= obj[i].length; x < l; x++) {
         var newobj = obj[i][x];
         if(objids[newobj.id] !== undefined) {
           def[i][x] = mergeObjs(def[i][x],newobj);
         } else {
           newobjs.push(newobj);
         }
       }
     
       for(var x= 0, l = newobjs.length; x<l; x++) {
         def[i].push(newobjs[x]);
       }
     } else {
       for(var x=0; x < obj[i].length; x++) {
         var idxObj = obj[i][x];
         if(def[i].indexOf(idxObj) === -1) {
           def[i].push(idxObj);
         }
       }
     }
   } else {
     def[i] = obj[i];
   }
 }
 return def;
}


/**
 *  获取主域名
 * **/
export  function getMainHost() {
  let domain = document.domain;
  let domainList = domain.split( '.' );

  let urlItems   = [];
  // 主域名一定会有两部分组成
  urlItems.unshift( domainList.pop() );
  // 慢慢从后往前测试
  while( domainList.length ) {
    urlItems.unshift( domainList.pop() );
    let mainHost = urlItems.join( '.' );
    return mainHost;
  }
}

/**
 *  微信号正则匹配
 * **/
export const wechatReg = (value) => {
  let wechat = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
  let phone = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|3|5|6|7|8]|18[0|1|2|3|5|6|7|8|9]|19[8|9])\d{8}$/;
  let qq = /^[1-9][0-9]{4,10}$/;
  if (!value.match(wechat) && !value.match(phone) && !value.match(qq)) {
    return false;
  }else {
    return true;
  }


}
