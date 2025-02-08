import { GitHubRepo } from "@/types/github";
import { octokit } from "@/utils/github/octokit";
import { titleCase } from "@/utils/strings/title-case";
import { cache } from "@/utils/cache/cache";

export async function getRepos(): Promise<GitHubRepo[]> {
	const cachedRepos = cache.get<GitHubRepo[]>("github-repos");
	if (cachedRepos) {
		return cachedRepos;
	}

	const response = await octokit.repos.listForUser({ username: "oliverrknox" });
	const repos = response.data
		.filter((repo) => !repo.fork)
		.map((repo) => {
			return {
				name: repo.name.includes(".") ? repo.name : titleCase(repo.name), // Preserve case for website repo names but enforce Title Case for regular names
				description: repo.description,
				url: repo.html_url
			};
		});
	cache.set("github-repos", repos);
	return repos;
}
