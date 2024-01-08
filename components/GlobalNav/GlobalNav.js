"use client";

import Link from "next/link";
import useClassificationData from "../../hooks/useClassificationData";
import useElementData from "../../hooks/useElementData";
import styles from "./GlobalNav.module.css";

const GlobalNav = () => {

	const classificationData = useClassificationData();
	const elementData = useElementData();

	return (
		<nav className={styles.nav}>
			<ul className={styles.parentList}>
				{classificationData.map(classification => {
					const elements = elementData.filter(element => {
						return element.classificationId === classification.id && element.href !== "";
					});

					if (elements.length > 0) {
						return (
							<li key={classification.id}>
								<span>{classification.name}</span>
								<ul className={styles.childList}>
									{elements.map(element => {
										return (
											<li key={element.id}>
												<Link href={element.href}>{element.id}</Link>
											</li>
										);
									})}
								</ul>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
};

export default GlobalNav;