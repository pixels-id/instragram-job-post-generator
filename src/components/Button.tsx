import React from 'react'
import styles from './button.module.scss'

export const Button = ({ children, ...others }) => {
	return (
		<button className={styles.btn} type='button' {...others}>
			{children}
		</button>
	)
}
