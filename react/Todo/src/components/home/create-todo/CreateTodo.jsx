import React, { useState } from 'react'

const CreateTodo = ({ setTodos }) => {
	const [title, setTiele] = useState('');

	const addTodo = title => {
		setTodos(prev => [
			{
				_id: new Date(),
				title,
				isCompleted: false,
			},
			...prev,
		])
		setTiele('')
	}
	console.log(title);
	return (
		<div className='todo__input'>
			<input
				onChange={e => setTiele(e.target.value)}
				onKeyPress={e => e.key === 'Enter' && addTodo(title)}
				value={title}
				type="text"
				placeholder='Add a task'
			/>
		</div>
	)
}

export default CreateTodo;
