export function titleCase(str: string) {
	return str
		.replace("-", " ")
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
}
