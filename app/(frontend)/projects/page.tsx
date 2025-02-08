import { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { HeroBanner } from "@/components/hero-banner";
import { generateMetadata } from "@/utils/next/generate-metadata";
import { ProjectCard } from "@/components/project-card";
import { getRepos } from "@/utils/github/get-repos";

export const metadata: Metadata = generateMetadata("Projects");

export default async function Projects() {
	const repos = await getRepos();

	return (
		<PageLayout hero={<HeroBanner heading="Projects" content="Building software, one commit at a time." button={{ href: "#content", text: "Learn more" }} />}>
			{repos.map((repo) => {
				return <ProjectCard key={repo.url} name={repo.name} description={repo.description} url={repo.url} />;
			})}
		</PageLayout>
	);
}
