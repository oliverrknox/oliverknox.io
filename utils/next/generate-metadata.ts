import { Metadata } from "next";
import { titleCase } from "@/utils/strings/title-case";

export function generateMetadata(page: string): Metadata {
	return {
		title: `${titleCase(page)} • Oliver Knox`,
		description: "A portfolio website built with Next.js"
	};
}
