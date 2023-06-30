import React from 'react'
import Check from './Check'
import { BsTrash3 } from 'react-icons/bs'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div className='todo__buttons'>
			<div className="todo__button">
				<div onClick={() => changeTodo(todo._id)}>
					<Check isCompleted={todo.isCompleted} />
				</div>
				<span className={`${todo.isCompleted ? "active" : ''}`}>{todo.title}</span>
				<div onClick={() => removeTodo(todo._id)} className='todo__box-trash'>
					<BsTrash3 className='todo__trash' />
				</div>
			</div>
		</div>
	)
}

export default TodoItem
