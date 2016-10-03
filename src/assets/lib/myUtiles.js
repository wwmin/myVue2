/**
 * Created by wwm on 2016/10/2.
 */
import  {sqrt,square} from './bar'
/*
* name:一个模块的定义
* 1.必须有外部的封闭函数，且该函数必须至少被调用一次（每次调用都会创建一个新的模
* 块实例），模块CoolModule返回的对象就是该模块的公共API（也可以直接返回一个内部
* 函数）
* 2.封闭函数必须至少有一个内部函数被放回，这样内部函数才能在私有作用域中形成闭包
* ，并且可以访问或修改私有的状态
* */
function CoolModule() {
  var a=square(2);
  var something = 'cool'+a;
  var another = [1, 2, 3];
  function doSomething(){
    console.log(something);
  }
  function doAnother(){
    console.log(another.join('-'));
  }
  var publicAPI={
    doSomething:doSomething,
    doAnother:doAnother
  };
  return publicAPI;
}
var foo=CoolModule();
foo.doSomething();
foo.doAnother();

/*
* name:现代的模块机制
*
* */
var MyGlobal = {
  namespace: function (ns) {
    var parts = ns.split('.'),
      obj = this,
      i, len = parts.length;
    for (i = 0; i < len; i++) {
      if (!obj[parts[i]]) {
        obj[parts[i]] = {}
      }
      obj = obj[parts[i]];
    }
    return obj;
  }
};
var MyDodules = (function Manager() {
  var modules = {};

  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return modules[name];
  }

  return {
    define: define,
    get: get
  }
})();
export default {
  CoolModule
}
