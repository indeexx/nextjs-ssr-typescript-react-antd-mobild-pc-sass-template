/*
 * @Author: indeex
 * @Date: 2019-05-19 19:58:15
 * @Email: indeex@qq.com
 */
import { useRouter } from "next/router"
import { Todo } from "../utils/mongodb/types"
import { Form, Input, Button } from 'antd-mobile'
import styles from './../styles/addItem.module.scss'

interface CreateProps {
  url: string
}

function Create(props: CreateProps) {
  const router = useRouter()

  const handleSubmit: any = async (values: any) => {
    let { content } = values;
    let todo: Todo = { item: content, completed: false }

    await fetch(props.url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })

    router.push("/todo")
  }

  return (
    <div className={styles.addItem}>
      <div className={styles.headerBar}>
        <Button size='middle' className={styles.back} onClick={() => {
          router.push("/todo")
        }}>返回</Button>
      </div>
      <Form
      className={styles.form}
        onFinish={handleSubmit}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Header>添加待办</Form.Header>
        <Form.Item
          name='content'
          label='内容'
          rules={[{ required: true, message: '内容不能为空' }]}
        >
          <Input placeholder='请输入内容' />
        </Form.Item>
      </Form>
    </div>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: {
      url: process.env.API_URL,
    },
  }
}

export default Create