import Inner from "../Inner/Inner";
import styles from "./Footer.module.css";

const Footer = ({ className }) => {
	return (
		<footer className={[styles.footer, className].join(" ")}>
			<Inner>
				<p className={styles.copyright}><small>© {new Date().getFullYear()} odaka</small></p>
			</Inner>
		</footer>
	);
};

export default Footer;