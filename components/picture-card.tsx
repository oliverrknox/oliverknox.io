import { FC, ReactNode } from "react";
import styles from "./picture-card.module.css";

interface PictureCardProps {
	heading: string;
	content: string;
	image: ReactNode;
}

export const PictureCard: FC<PictureCardProps> = ({ heading, content, image }) => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.heading}>{heading}</h1>
				<p className={styles.content}>{content}</p>
			</div>
			{image}
		</div>
	);
};
