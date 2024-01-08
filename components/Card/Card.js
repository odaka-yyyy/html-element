"use client";

import styles from "./Card.module.css";

const Card = ({ children }) => {

	return (
		<div className={styles.card}>
			<div>{children}</div>
		</div>
	);
};

export default Card;