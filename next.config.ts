import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {};

export default withSentryConfig(withPayload(nextConfig), {
	org: "oliver-knox",
	project: "javascript-nextjs",
	silent: !process.env.CI,
	widenClientFileUpload: true,
	reactComponentAnnotation: {
		enabled: true
	},
	tunnelRoute: "/monitoring",
	hideSourceMaps: true,
	disableLogger: true,
	automaticVercelMonitors: true
});
