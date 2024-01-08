import React from "react";
import GlobalNav from "../../components/GlobalNav/GlobalNav";
import Inner from "../../components/Inner/Inner";
import SidebarLayout, { MainColumn, SidebarColumn } from "../../components/SidebarLayout/SidebarLayout";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
	return (
		<Inner className={styles.layout}>
			<SidebarLayout>
				<MainColumn>
					{children}
				</MainColumn>
				<SidebarColumn>
					<GlobalNav />
				</SidebarColumn>
			</SidebarLayout>
		</Inner>
	);
};

export default Layout;