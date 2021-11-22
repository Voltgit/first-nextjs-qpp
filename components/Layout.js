import React from "react"
import styles from '../styles/Layout.module.scss'

function Layout(props) {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
};

export default Layout;
