import { FC } from "react";
import { GitHubRepo } from "@/types/github";
import { RightArrowIcon } from "@/icons/right-arrow-icon";
import styles from "./project-card.module.css";

type ProjectCardProps = GitHubRepo;

export const ProjectCard: FC<ProjectCardProps> = ({ name, description, url }) => {
	return (
		<div className={styles.container}>
			<div className={styles["text-container"]}>
				<h1 className={styles.name}>{name}</h1>
				<div className={styles.content}>
					<p className={styles.description}>{description}</p>
					<a className={styles.url} href={url}>
						View on GitHub
						<RightArrowIcon />
					</a>
				</div>
			</div>
		</div>
	);
};
