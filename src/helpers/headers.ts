/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-11 15:13:50
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2019-12-11 19:07:00
 */
import { isPlainObject } from './util'

function normalizeHeaderName(headers: any, normalizedName: string): void {
    if (!headers) {
        return
    }
    Object.keys(headers).forEach(name => {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = headers[name]
            delete headers[name]
        }
    })
}

export function processHeaders(headers: any, data: any): any {
    normalizeHeaderName(headers, 'Content-Type')

    if (isPlainObject(data)) {
        if (headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8'
        }
    }
    return headers
}

// 将json字符串转为json数据  当格式不规整的时候
export function parseHeaders(header: string): any {
    let obj = Object.create(null)  // 不能直接 设置{}
    if (!header) {
        return
    }
    header.split('\r\n').forEach((item) => {
        let [key, val] = item.split(':')
        key = key.trim().toLowerCase()
        if (!key) {
            return
        }
        if (val) {
            val = val.trim()
        }
        obj[key] = val
    })
    return obj
}