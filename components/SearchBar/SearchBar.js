import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.css";

config.autoAddCss = false;

const SearchBar = () => {
	return (
		<search className={styles.search}>
			<input className={styles.input} type="text" enterKeyHint="search" placeholder="要素名で検索" />
			<button className={styles.button} type="button">
				<FontAwesomeIcon icon={faMagnifyingGlass} fontSize="18px" />
			</button>
		</search>
	);
};

export default SearchBar;