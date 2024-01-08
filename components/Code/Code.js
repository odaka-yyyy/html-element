import styles from "./Code.module.css";

const Code = ({ children }) => {
	return (
		<div className={styles.code}>
			<pre>
				<code>{children}</code>
			</pre>
		</div>
	);
};

export default Code;