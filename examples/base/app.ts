/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-11 10:54:02
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2019-12-11 16:41:31
 */
import axios from '../../src/index'


  axios({
    method: 'post',
    url: '/base/post',
    data: {
      a: 1,
      b: 2
    }
  })
  
  axios({
    method: 'post',
    url: '/base/post',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    data: {
      a: 1,
      b: 2
    }
  })
  
  const paramsString = 'q=URLUtils.searchParams&topic=api'
  const searchParams = new URLSearchParams(paramsString)
  
  axios({
    method: 'post',
    url: '/base/post',
    data: searchParams
  })

  axios({
    method: 'post',
    url: '/base/post',
    data: {
      a: 1,
      b: 2
    }
  }).then((res) => {
    console.log(res)
  })
  
  axios({
    method: 'post',
    url: '/base/post',
    responseType: 'json',
    data: {
      a: 3,
      b: 4
    }
  }).then((res) => {
    console.log(res)
  })