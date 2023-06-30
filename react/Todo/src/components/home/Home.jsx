import React, { useState } from 'react'
import TodoItem from './Item/TodoItem';
import CreateTodo from './create-todo/CreateTodo'
const data = [
	{
		_id: 1,
		title: 'Finish the easy collaboration',
		isCompleted: false,
	},
	{
		_id: 2,
		title: 'Read next chapter of the book',
		isCompleted: false,
	},
	{
		_id: 3,
		title: 'Send the finished assignment',
		isCompleted: false,
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id);
		current.isCompleted = !current.isCompleted;
		setTodos(copy)
	}
	const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

	return (
		<div className='todo'>
			<h1 className='todo__title'>Todo List</h1>
			<div className="todo__content">
				<CreateTodo setTodos={setTodos} />					{
					todos.map(todo => (
						<TodoItem
							key={todo._id}
							todo={todo}
							changeTodo={changeTodo}
							removeTodo={removeTodo}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Home

