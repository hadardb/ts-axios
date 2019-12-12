/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-10 17:00:01
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2019-12-11 19:49:25
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import xhr from './core/xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
    processConfig(config)
    return xhr(config).then((res) => {
        return transformResponseData(res)
    })
}
function processConfig(config: AxiosRequestConfig): void {
    config.url = transformUrl(config)
    config.headers = transformHeaders(config)
    config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): string {
    const { url, params } = config
    return buildURL(url!, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
    return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
    const { headers = {}, data } = config
    return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
    res.data = transformResponse(res.data)
    return res
}
export default axios