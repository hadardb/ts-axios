/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-11 11:04:21
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2019-12-11 19:06:41
 */
import { isPlainObject } from './util'

export function transformRequest (data: any): any {
    if(isPlainObject(data)){
        return JSON.stringify(data)
    }
    return data
}

// 对json字符串进行转换
export function transformResponse(data: any): any {
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data)
      } catch (e) {
        // do nothing
      }
    }
    return data
  }