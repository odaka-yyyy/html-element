"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Inner from "../Inner/Inner";
import styles from "./Header.module.css";

const HeaderTitle = ({ children }) => {
	if (usePathname() === "/") {
		return (
			<h1 className={styles.headerTitle}>{children}</h1>
		);
	} else {
		return (
			<Link className={styles.headerTitle} href="/">{children}</Link>
		);
	}
};

const Header = ({ className }) => {

	return (
		<header className={[styles.header, className].join(" ")}>
			<Inner>
				<HeaderTitle>HTML Elements - default styles</HeaderTitle>
			</Inner>
		</header>
	);
};

export default Header;