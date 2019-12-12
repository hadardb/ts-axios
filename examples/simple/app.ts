/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-11 10:07:34
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2019-12-11 10:07:37
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})