import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./page-layout.module.css";

interface PageWrapperProps {
	hero: ReactNode;
}

export const PageLayout: FC<PropsWithChildren<PageWrapperProps>> = ({ hero, children }) => {
	return (
		<main>
			<section className={styles.hero}>{hero}</section>
			<section className={styles.content} id="content">
				{children}
			</section>
		</main>
	);
};
