import { CollectionConfig } from "payload";

export const AboutCard: CollectionConfig = {
	slug: "about-card",
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
			name: "order",
			type: "number",
			unique: true,
			required: true
		}
	]
};
