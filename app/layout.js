import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Inner from "../components/Inner/Inner";
import SearchBar from "../components/SearchBar/SearchBar";
import "../styles/global.css";
import styles from "./layout.module.css";

const RootLayout = ({ children }) => {
	return (
		<html lang="ja">
			<body className={styles.body}>

				<Header className={styles.header} />

				<div className={styles.content}>
					<Inner>
						<SearchBar />
						{children}
					</Inner>
				</div>

				<Footer className={styles.footer} />
				
			</body>
		</html>
	);
};

export default RootLayout;