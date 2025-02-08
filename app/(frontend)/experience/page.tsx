import { Metadata } from "next";
import { ExperienceCard } from "@/components/experience-card";
import { PageLayout } from "@/components/page-layout";
import { HeroBanner } from "@/components/hero-banner";
import { generateMetadata } from "@/utils/next/generate-metadata";
import { getPayload } from "payload";
import config from "@payload-config";

export const metadata: Metadata = generateMetadata("Experience");

export default async function Experience() {
	const payload = await getPayload({ config });
	const experienceCards = await payload.find({ collection: "experience-card", pagination: false, sort: "-startDate" });

	return (
		<PageLayout hero={<HeroBanner heading="Experience" content="The path so far." button={{ href: "#content", text: "Learn more" }} />}>
			{experienceCards.docs.map((experienceCard) => {
				return (
					<ExperienceCard
						key={experienceCard.id}
						placeOfWork={experienceCard.placeOfWork}
						role={experienceCard.role}
						startDate={new Date(experienceCard.startDate)}
						endDate={experienceCard.endDate ? new Date(experienceCard.endDate) : null}
						information={experienceCard.information.map(({ point }) => point)}
					/>
				);
			})}
		</PageLayout>
	);
}
