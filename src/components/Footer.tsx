import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
	return (
		<footer>
			<div className={styles.footer + ' mxauto py3'}>
				{new Date().getFullYear()} - Proudly made in Indonesia 🇮🇩 with ❤.
			</div>
		</footer>
	)
}

export default Footer
