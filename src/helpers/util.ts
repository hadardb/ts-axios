/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-11 10:29:31
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2019-12-11 15:25:05
 */
const toString = Object.prototype.toString

export function isDate (val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject (val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

// 判断是否为jison对象
export function isPlainObject (val: any): val is Object {
  return toString.call(val) === '[object Object]'
}