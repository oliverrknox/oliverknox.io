import { Metadata } from "next";
import { Octokit } from "@octokit/rest";
import { PageLayout } from "@/components/page-layout";
import { HeroBanner } from "@/components/hero-banner";
import { generateMetadata } from "@/utils/next/generate-metadata";
import { GitHubRepo } from "@/types/github";
import { titleCase } from "@/utils/strings/title-case";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = generateMetadata("Projects");

const octokit = new Octokit();

export default async function Projects() {
	const response = await octokit.repos.listForUser({ username: "oliverrknox" });
	const repos: GitHubRepo[] = response.data.map((repo) => {
		return {
			name: repo.name.includes(".") ? repo.name : titleCase(repo.name), // Preserve case for website repo names but enforce Title Case for regular names
			description: repo.description,
			url: repo.html_url
		};
	});

	return (
		<PageLayout hero={<HeroBanner heading="Projects" content="Building software, one commit at a time." button={{ href: "#content", text: "Learn more" }} />}>
			{repos.map((repo) => {
				return <ProjectCard key={repo.url} name={repo.name} description={repo.description} url={repo.url} />;
			})}
		</PageLayout>
	);
}
