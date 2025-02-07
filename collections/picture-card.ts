import { CollectionConfig } from "payload";

export const PictureCard: CollectionConfig = {
	slug: "picture-card",
	fields: [
		{
			name: "heading",
			type: "text",
			required: true
		},
		{
			name: "content",
			type: "textarea",
			required: true
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			required: true
		},
		{
			name: "order",
			type: "number",
			required: true,
			unique: true
		}
	],
	access: {
		read: () => true
	}
};
