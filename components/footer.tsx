import { FC } from "react";
import styles from "./footer.module.css";

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<span className={styles.name}>Oliver Knox</span>
				<p>Copyright © 2025</p>
			</div>
		</footer>
	);
};
