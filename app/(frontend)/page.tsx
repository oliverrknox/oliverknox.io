import { Metadata } from "next";
import Image from "next/image";
import { getPayload } from "payload";
import config from "@payload-config";
import { HeroBanner } from "@/components/hero-banner";
import { PictureCard } from "@/components/picture-card";
import { assertRequiredMedia } from "@/utils/assertions/assert-required-media";
import { assertRequiredPictureCard } from "@/utils/assertions/assert-required-picture-card";
import { generateMetadata } from "@/utils/next/generate-metadata";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata("Home");

export default async function Home() {
	const payload = await getPayload({ config });
	const pictureCards = await payload.find({ collection: "picture-card", pagination: false, sort: "order" });

	return (
		<main>
			<section className={styles.hero}>
				<HeroBanner heading="A Software Engineer" content="Building streamlined front-ends and great user experiences." button={{ href: "#content", text: "Learn more" }} />
			</section>
			<section id="content" className={styles.content}>
				{pictureCards.docs.map((pictureCard) => {
					assertRequiredPictureCard(pictureCard);
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
			</section>
		</main>
	);
}
