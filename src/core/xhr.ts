/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-10 20:10:12
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2019-12-11 19:57:05
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/headers'
import { createError } from '../helpers/error'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
    return new Promise((resolve, reject) => {
        const { data = null, url, method = 'get', headers, responseType, timeout } = config

        const request = new XMLHttpRequest()

        if (responseType) {
            request.responseType = responseType
        }

        request.open(method.toUpperCase(), url!, true)
        // 发送成功就返回Promise
        request.onreadystatechange = function handleLoad() {
            // 不成功就返回
            if (request.readyState !== 4) {
                return
            }

            // 响应状态码 超时或网络错误 都是 0
            if (request.status === 0) {
                return
            }
            const responseHeaders = parseHeaders(request.getAllResponseHeaders())
            const responseData = responseType && responseType !== 'text' ? request.response : request.responseText
            const response: AxiosResponse = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            }
            resolve(response)
        }
        // 失败报错
        request.onerror = function handleError() {
            reject(createError(
              'Network Error',
              config,
              null,
              request
            ))
          }

        // 超时报错
        if (timeout) {
            request.timeout = timeout
        }
        request.ontimeout = function handleTimeout() {
            reject(createError(
              `Timeout of ${config.timeout} ms exceeded`,
              config,
              'ECONNABORTED',
              request
            ))
          }
        // 如果内有data参数 就删除content-type 参数 并添加表头
        Object.keys(headers).forEach((name) => {
            if (data === null && name.toLowerCase() === 'content-type') {
                delete headers[name]
            } else {
                request.setRequestHeader(name, headers[name])
            }
        })

        request.send(data)

        // 非0报错
        function handleResponse(response: AxiosResponse) {
            if (response.status >= 200 && response.status < 300) {
              resolve(response)
            } else {
              reject(createError(
                `Request failed with status code ${response.status}`,
                config,
                null,
                request,
                response
              ))
            }
          }
    })
}

