/**
 * 语法：addEventListener(element, type, fn, selector)
说明：如果selector没有，直接给element绑定事件，如果selector有，将selector对应的多个元素的事件委托绑定给父元素element
 * @param {[type]}   element  [description]
 * @param {[type]}   type     [description]
 * @param {Function} fn       [description]
 * @param {[type]}   selector [description]
 */
export function addEventListener(element, type, fn, selector) {
 // 如果没有指定selector, 普通的事件绑定
 if (!selector) {
   element.addEventListener(type, fn)
 } else {// 否则是代委托的事件绑定
   element.addEventListener(type, function (event) {
     // 得到真正发生事件的目标元素
     const target = event.target
     // 如果与选择器匹配
     if (target.matches(selector)) {
       // 调用处理事件的回调fn, 并指定this为目标元素, 参数为event
       fn.call(target, event)
     }
   })
 }
}
