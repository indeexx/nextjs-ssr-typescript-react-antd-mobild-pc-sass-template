/*
 * @Author: indeex
 * @Date: 2019-05-19 19:58:15
 * @Email: indeex@qq.com
 */
import { Todo } from "../utils/mongodb/types"
import { useRouter } from "next/router"
import { useState } from "react"
import { Card, Button } from 'antd-mobile'
import styles from './../styles/todoItem.module.scss'

interface ShowProps {
  todo: Todo
  url: string
}

function Show(props: ShowProps) {
  const router = useRouter()

  const [todo, setTodo] = useState<Todo>(props.todo)

  const handleComplete = async () => {
    if (!todo.completed) {
      const newTodo: Todo = { ...todo, completed: true }
      await fetch(props.url + "/" + todo._id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      })
      setTodo(newTodo)
    }

  }

  const handleDelete = async () => {
    await fetch(props.url + "/" + todo._id, {
      method: "delete",
    })
    router.push("/todo")
  }

  return (
    <div className={styles.todoItem}>
      <div className={styles.headerBar}>
        <Button size='middle' className={styles.back} onClick={() => {
          router.push("/todo")
        }}>返回</Button>
      </div>
      <Card
        className={styles.card}
        headerStyle={{
          // color: '#1677ff',
        }}
        bodyClassName={styles.customBody}
        title={todo.item}
      >
        {todo.completed ? "已完成" : "未完成"}
      </Card>
      <div className={styles.btns}>
        {todo.completed ? null : <Button color='primary' size="middle" onClick={handleComplete}>完成</Button>}
        <Button color='danger' size="middle" onClick={handleDelete}>删除</Button>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const res = await fetch(process.env.API_URL + "/" + context.query.id)
  const todo = await res.json()

  return { props: { todo, url: process.env.API_URL } }
}

export default Show