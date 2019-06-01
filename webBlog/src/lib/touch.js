
let pgX = 0, pgY = 0, cb, scope;

let courseWrapHeight = 0, courseDateHeight = 0, AandPHeight = 0;

let course_Info;

var touchObj = {
  flag: false,//是否找到位置
  init() {
    this.flag = false;
    var uls = document.getElementsByClassName('week');
    courseWrapHeight = Math.round(uls[0].children[0].children[0].offsetHeight);//Course-wrap的元素的高度
    courseDateHeight = Math.round(uls[0].children[0].children[0].children[0].offsetHeight);//course-date的p元素高度
    AandPHeight = courseWrapHeight - courseDateHeight;//上下午课程的总高度
    this.getElementPosition(uls);
    !this.flag && cb ? cb.call(scope, '对不起，您没有拖动到指定位置！') : null;//这里可以换成友好提示框
  },
  getElementPosition(doms) {
    for (var i of doms) {
      for (var j of i.getElementsByTagName('li')) {
        var obj = {};
        //这里是非IE浏览器下
        obj.left = Number(j.getBoundingClientRect().left + document.documentElement.scrollLeft);//左边的距离
        obj.top = Number(j.getBoundingClientRect().top + document.documentElement.scrollTop);//上边的距离
        obj.am = false;
        obj.pm = false;
        obj.Apmheight = courseWrapHeight - courseDateHeight;//这里应该记录第一层div Course-wrap的高度 并且要减去 p course-date的高度
        obj.width = Math.round(j.offsetWidth);
        if (!!this.getElementSelected(obj)) {
          obj.day = j.getAttribute('data-pos');//标志一个li元素的位置
          if (obj.am) {//如果是拖动到上午 则只判断上午
            obj.isCourse = !!j.getAttribute('data-mon');
          }
          if (obj.pm) {//如果是拖动到下午 则只判断下午
            obj.isCourse = !!j.getAttribute('data-after');
          }
          obj.courseInfo = course_Info;
          delete obj.left;
          delete obj.top;
          delete obj.width;
          delete obj.Apmheight;
          cb ? cb.call(scope, obj) : null;
          this.flag = true;
          return;
        }
      }
    }
  },
  getElementSelected(val) {
    if (0 < Math.round(pgX - val.left) && Math.round(pgX - val.left) < val.width && 0 < Math.round(pgY - val.top - courseDateHeight) && Math.round(pgY - val.top - courseDateHeight) < val.Apmheight) {
      if (Math.ceil(AandPHeight / 2) < Math.round(pgY - val.top - courseDateHeight) && Math.round(pgY - val.top - courseDateHeight) < Math.ceil(AandPHeight)) {
        val.pm = true;//否则是下午课的位置
        return true;
      } else if (0 <= Math.round(pgY - val.top - courseDateHeight) && Math.round(pgY - val.top - courseDateHeight) <= Math.ceil(AandPHeight / 2)) {
        val.am = true;//否则是上午课的位置
        return true;
      }
    }
    return false;
  }
}


/* 
   @param
   touchEnd 传递过来的pageX require
   touchEnd  pageY require
   courseInfo    课程信息 require
   callback 回调函数 require
 */
export default {
  init(pageX, pageY, courseInfo, callback, scope) {
    pgX = Number(pageX);
    pgY = Number(pageY);
    course_Info = courseInfo;
    cb = callback;
    scope = scope || null;
    touchObj.init();
  }
}