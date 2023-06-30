import React from 'react'
import icon from '../../assets/icons/MiniLogo.svg'

const Layout = ({ children }) => {
	return (
		<div className='body'>
			<div className="header">
				<img src={icon} alt="" />
			</div>
			{children}
		</div>
	)
}

export default Layout
