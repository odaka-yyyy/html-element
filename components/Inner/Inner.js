import styles from "./Inner.module.css";

const Inner = ({ children, className }) => {
	return (
		<div className={[styles.inner, className].join(" ")}>{children}</div>
	);
};

export default Inner;