import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  const typeTodoHandler = (event) => {
    setText(event.target.value)
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          onChange={typeTodoHandler}
          placeholder="Enter new todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
