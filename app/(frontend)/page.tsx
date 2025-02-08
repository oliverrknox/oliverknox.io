import { Metadata } from "next";
import Image from "next/image";
import { getPayload } from "payload";
import config from "@payload-config";
import { HeroBanner } from "@/components/hero-banner";
import { PageLayout } from "@/components/page-layout";
import { PictureCard } from "@/components/picture-card";
import { assertRequiredMedia } from "@/utils/assertions/assert-required-media";
import { generateMetadata } from "@/utils/next/generate-metadata";

export const metadata: Metadata = generateMetadata("Home");

export default async function Home() {
	const payload = await getPayload({ config });
	const pictureCards = await payload.find({ collection: "picture-card", pagination: false, sort: "order" });

	return (
		<PageLayout
			hero={
				<HeroBanner heading="A Software Engineer" content="Building streamlined front-ends and great user experiences." button={{ href: "#content", text: "Learn more" }} />
			}
		>
			{pictureCards.docs.map((pictureCard) => {
				assertRequiredMedia(pictureCard.image);

				return (
					<PictureCard
						key={pictureCard.id}
						heading={pictureCard.heading}
						content={pictureCard.content}
						image={<Image src={pictureCard.image.url} alt={pictureCard.image.alt} height="300" width="300" />}
					/>
				);
			})}
		</PageLayout>
	);
}
