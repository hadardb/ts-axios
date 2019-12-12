/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-11 17:22:35
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2019-12-11 17:25:48
 */
 console.log(new Promise(function(resolve){
    resolve(123)
 }).then((res)=>{
     console.log(res)
 }))