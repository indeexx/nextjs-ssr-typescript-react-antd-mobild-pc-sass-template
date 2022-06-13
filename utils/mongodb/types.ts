/*
 * @Author: indeex
 * @Date: 2019-05-19 19:54:39
 * @Email: indeex@qq.com
 */
export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
  }
  
  export interface Todo {
    _id?: number
    item: string
    completed: boolean
  }