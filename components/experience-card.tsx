import { FC } from "react";
import styles from "./experience-card.module.css";

interface ExperienceCardProps {
	placeOfWork: string;
	role: string;
	startDate: Date;
	endDate?: Date | null;
	information: string[];
}

function formatShortDate(value: Date) {
	const formatter = new Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		month: "short"
	});
	return formatter.format(value);
}

export const ExperienceCard: FC<ExperienceCardProps> = ({ placeOfWork, role, startDate, endDate, information }) => {
	const startDateString = formatShortDate(startDate);
	const endDateString = endDate ? formatShortDate(endDate) : "Present";

	return (
		<div className={styles.container}>
			<div className={styles["text-container"]}>
				<h1 className={styles["place-of-work"]}>{placeOfWork}</h1>
				<h2 className={styles.role}>{role}</h2>
				<h3 className={styles["date-range"]}>
					{startDateString} - {endDateString}
				</h3>
				<ul className={styles.information}>
					{information.map((point, index) => (
						<li key={`experience-card-information-${index}`}>{point}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
