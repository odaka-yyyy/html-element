import styles from "./Section.module.css";

const Section = ({ children, id, className }) => {
	return (
		<section id={id} className={[styles.section, className].join(" ")}>{children}</section>
	);
};

export default Section;