import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	upload: {
		staticDir: "public/media",
		mimeTypes: ["image/*"]
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true
		}
	],
	access: {
		read: () => true
	}
};
