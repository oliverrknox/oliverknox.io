import { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { HeroBanner } from "@/components/hero-banner";
import { generateMetadata } from "@/utils/next/generate-metadata";
import { getPayload } from "payload";
import config from "@payload-config";
import { AboutCard } from "@/components/about-card";

export const metadata: Metadata = generateMetadata("About");

export default async function About() {
	const payload = await getPayload({ config });
	const aboutCards = await payload.find({ collection: "about-card", pagination: false, sort: "order" });

	return (
		<PageLayout hero={<HeroBanner heading="About me" content="A technology enthusiast with a love for challenges." button={{ href: "#content", text: "Learn more" }} />}>
			{aboutCards.docs.map((aboutCard) => {
				return <AboutCard key={aboutCard.id} heading={aboutCard.heading} content={aboutCard.content} />;
			})}
		</PageLayout>
	);
}
