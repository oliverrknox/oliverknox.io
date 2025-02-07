import { RequiredNonNullable } from "@/types/required-non-nullable";
import { Media } from "@/payload-types";

type RequiredMedia = Omit<Media, "url" | "alt"> & Pick<RequiredNonNullable<Media>, "url" | "alt">;

export function assertRequiredMedia(value: unknown): asserts value is RequiredMedia {
	if (typeof value !== "object" || value === null || !("url" in value) || !("alt" in value)) {
		throw new Error(`Invalid value for image - ${JSON.stringify(value)}`);
	}
}
