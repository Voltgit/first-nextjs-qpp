import React from "react"
import Link from "next/link"
import styles from '../styles/SecretBox.module.css'

function SecretBox({ children, ...props }) {
	return (
		<div className={styles.box}>
			{children}
			<Link href='/about'><a>some link</a></Link>
		</div>
	)
};

export default SecretBox;
