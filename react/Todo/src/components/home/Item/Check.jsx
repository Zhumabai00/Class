import React from 'react'
import { BsCheckLg } from 'react-icons/bs'


const Check = ({ isCompleted }) => {
	return (
		<div className='todo__check'>
			{isCompleted &&
				<BsCheckLg />
			}
		</div>
	)
}

export default Check;
