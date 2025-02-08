import { FC } from "react";
import styles from "./about-card.module.css";

interface AboutCardProps {
	heading: string;
	content: string;
}

export const AboutCard: FC<AboutCardProps> = ({ heading, content }) => {
	return (
		<div className={styles.container}>
			<div className={styles["text-container"]}>
				<h1 className={styles.heading}>{heading}</h1>
				<p className={styles.content}>{content}</p>
			</div>
		</div>
	);
};
