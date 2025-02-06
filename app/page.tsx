import Image from "next/image";
import { HeroBanner } from "@/components/hero-banner";
import { PictureCard } from "@/components/picture-card";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main>
			<section className={styles.hero}>
				<HeroBanner heading="A Software Engineer" content="Building streamlined front-ends and great user experiences." button={{ href: "#content", text: "Learn more" }} />
			</section>
			<section id="content" className={styles.content}>
				<PictureCard
					heading="Software design and architecture"
					content={`
                        Software design and architecture are foundational to creating scalable, maintainable, and robust applications.
                        My experience as a front-end engineer has taught me how to design and architect software to meet the needs of the user.
                        By focusing on clean design principles and architectural patterns, I can help you build software that is easy to maintain and extend.
                    `}
					image={<Image src="/images/software.svg" alt="A man with a software design and architecture diagram" height="300" width="300" />}
				/>
				<PictureCard
					heading="Communication and documentation"
					content={`
                        Effective communication and thorough documentation are critical for aligning teams and ensure continuity in a software project.
                        In my role as a Software Engineer, I have consistently prioritized clear communication to bridge gaps between technical and non-technical stakeholders.
                        And by creating comprehensive documentation, I am able to improve collaboration with teammates across a shared codebase.
                    `}
					image={<Image src="/images/communication.svg" alt="An employee communicating with teammates" height="300" width="300" />}
				/>
				<PictureCard
					heading="Observability and monitoring"
					content={`
                        Observability and monitoring are critical to ensuring the health and performance of software.
                        Throughout my career, I have emphasized the importance of implementing monitoring tools in order to gain real-time insights and proactively identify issues.
                        Treating observability as a necessity opens opportunities for continuous improvement and streamlining processes over a products lifetime.
                    `}
					image={<Image src="/images/observability.svg" alt="A woman inspecting a monitoring dashboard" height="300" width="300" />}
				/>
				<PictureCard
					heading="Teamwork and collaboration"
					content={`
                        Teamwork and collaboration are vital for the success of any project.
                        By embracing diverse perspectives and fostering open communication, the shared knowledge of every member of a team can help create a more effective and inclusive workplace.
                        I am passionate about working in cultures that promote the collaboration and trust of individuals to drive the best outcomes.
                    `}
					image={<Image src="/images/teamwork.svg" alt="A group of people working together" height="300" width="300" />}
				/>
			</section>
		</main>
	);
}
