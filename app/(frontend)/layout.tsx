import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "800"],
	display: "swap"
});

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
