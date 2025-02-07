// Marks each property as `Required` and `NonNullable`.
export type RequiredNonNullable<T> = {
	[P in keyof T]-?: NonNullable<T[P]>;
};
