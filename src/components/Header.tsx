import React from 'react'
import styles from './header.module.scss'

const Header = () => {
	return (
		<header className={styles.wrapper}>
			<div className={`${styles.header} mxauto`}>
				<div>Job Post Generator</div>
				<a
					href='https://github.com/pixels-id/instragram-job-post-generator'
					target='_blank'
					rel='noopener nofollow noreferrer'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='1.4em'
						width='1.4em'
						aria-hidden='true'
						viewBox='0 0 24 24'
					>
						<path
							fill='currentColor'
							fillRule='evenodd'
							d='M12 0a12 12 0 0 0-3.8 23.4c.6 0 .8-.3.8-.6v-2.2c-3 .5-3.8-.8-4-1.4-.2-.4-.7-1.4-1.3-1.7-.4-.3-1-.8 0-.8s1.7.8 1.9 1.2c1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-6 0-1.2.4-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.4 3.3 1.2a11.1 11.1 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.6.3 2.8.1 3.1.8.9 1.3 2 1.3 3.3 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1 .8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12 12 12 0 0 0 12 0Z'
							clipRule='evenodd'
						/>
					</svg>
				</a>
			</div>
		</header>
	)
}

export default Header
