import { PictureCard } from "@/payload-types";
import { RequiredNonNullable } from "@/types/required-non-nullable";

type RequiredPictureCard = Omit<PictureCard, "heading" | "content" | "image"> & Pick<RequiredNonNullable<PictureCard>, "heading" | "content" | "image">;

export function assertRequiredPictureCard(value: unknown): asserts value is RequiredPictureCard {
	if (typeof value !== "object" || value === null || !("heading" in value) || !("content" in value) || !("image" in value)) {
		throw new Error(`Missing required fields in pictureCard - ${JSON.stringify(value)}`);
	}
}
