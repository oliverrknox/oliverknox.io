import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	upload: {
		staticDir: "media",
		mimeTypes: ["image/*"]
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true
		}
	]
};
