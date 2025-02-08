import { CollectionConfig } from "payload";

export const ExperienceCard: CollectionConfig = {
	slug: "experience-card",
	fields: [
		{
			name: "placeOfWork",
			type: "text",
			required: true
		},
		{
			name: "role",
			type: "text",
			required: true
		},
		{
			name: "startDate",
			type: "date",
			required: true
		},
		{
			name: "endDate",
			type: "date"
		},
		{
			name: "information",
			type: "array",
			fields: [
				{
					name: "point",
					type: "text",
					required: true
				}
			],
			required: true
		}
	],
	access: {
		read: () => true
	}
};
