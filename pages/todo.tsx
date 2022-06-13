/*
 * @Author: indeex
 * @Date: 2019-05-19 19:58:15
 * @Email: indeex@qq.com
 */
import { Todo } from "../utils/mongodb/types"
import { useRouter } from "next/router"
import { List, Button } from 'antd-mobile'
import {
    ExclamationOutline,
    CheckOutline,
} from 'antd-mobile-icons'
import styles from './../styles/todo.module.scss'

interface TodosProps {
    todos: Array<Todo>
}

function Todos(props: TodosProps) {
    const { todos } = props
    const router = useRouter()

    return (
        <div className={styles.todo}>
            <List header='我的待办清单'>
                {todos.map(t => (
                    <List.Item className={styles.item + " " + (t.completed ? styles.complete : styles.incomp)} prefix={t.completed ? <CheckOutline className={styles.completed} /> : <ExclamationOutline className={styles.incomplete} />} extra={t.completed ? "已完成" : "未完成"} onClick={() => { router.push(`/${t._id}`) }} key={t._id}>
                        {t.item}
                    </List.Item>
                ))}
            </List>
            <Button block color='primary' size='large' fill='outline' onClick={() => { router.push("/create") }} className={styles.add}>
                添加清单
            </Button>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(process.env.API_URL as string)
    const todos = await res.json()

    return {
        props: { todos },
    }
}

export default Todos