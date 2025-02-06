import { FC } from "react";
import styles from "./hero-banner.module.css";

type Button = {
	href: string;
	text: string;
};

interface HeroBannerProps {
	heading: string;
	content: string;
	button: Button;
}

export const HeroBanner: FC<HeroBannerProps> = ({ heading, content, button }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>{heading}</h1>
			<p className={styles.content}>{content}</p>
			<a className={styles.button} href={button.href}>
				{button.text}
			</a>
		</div>
	);
};
