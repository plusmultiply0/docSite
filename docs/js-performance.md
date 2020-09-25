---
id: js-performance
title: "性能优化"
sidebar_label: "性能优化"
slug: jsPerformance
---

### 函数防抖（debounce）

为函数的执行设置一个定时器，在指定时间后才执行。如果在执行前又调用了函数，则会清除上个函数的定时器，以此次调用的函数的定时器，重新开始等待执行时间。

也就是说，多次连续调用一个函数，只会执行最后的一次调用。

```js
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
```

值得注意的是，<code>clearTimeout</code> 接受 `undefined` 或 `null` 时，会静默失败，所以可以省略判断 `timer` 是否存在的条件判断。且在一次完整调用后，无需清除 `timer`。

**用途**

用于 UI 交互以及 API 调用的函数，防止多次连续的重复响应。

**参考链接**

- [debounce in js](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086)
- [When using setTimeout do you have to clearTimeout?
  ](https://stackoverflow.com/questions/7391567/when-using-settimeout-do-you-have-to-cleartimeout#:~:text=You%20don't%20actually%20need,because%20setInterval%20usually%20runs%20indefinitely.&text=clearTimeout%20is%20only%20necessary%20for%20cancelling%20a%20timeout.)
- [轻松理解 JS 函数节流和函数防抖](https://juejin.im/post/6844903535125987335)

### 函数节流（throttle）

让函数以一个固定时间间隔被调用。在时间间隔内的调用都会被忽略，直到一个时间间隔结束，函数调用才会成功。

```js
function throttle(func, delay) {
  let prev = null;
  return function (...args) {
    let now = Date.now();
    if (now - prev > delay||!prev) {
      func(...args);
      prev = now;
    }
  };
}
```
如果第一次也需要间隔 `delay` 调用，可将 `prev` 赋值为 `Date.now()` 并去掉 `if` 后面的判断条件。

**用途**
- [JavaScript 函数节流和函数去抖应用场景辨析](https://github.com/hanzichi/underscore-analysis/issues/20)

**参考链接**
- [轻松理解 JS 函数节流和函数防抖](https://juejin.im/post/6844903535125987335)