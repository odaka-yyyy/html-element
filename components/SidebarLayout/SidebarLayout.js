import styles from "./SidebarLayout.module.css";

const SidebarLayout = ({ children }) => {
	return (
		<div className={styles.layout}>{children}</div>
	);
};

const MainColumn = ({ children }) => {
	return (
		<main className={styles.main}>{children}</main>
	);
};

const SidebarColumn = ({ children }) => {
	return (
		<aside className={styles.sidebar}>{children}</aside>
	);
};

export { MainColumn, SidebarColumn };

export default SidebarLayout;