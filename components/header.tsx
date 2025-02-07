"use client";

import { FC, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";
import styles from "./header.module.css";
import { HamburgerIcon } from "@/icons/hamburger-icon";

export const Header: FC = () => {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	function applyActiveLink(link: string) {
		if (pathname === link) {
			return styles["active-link"];
		}
		return "";
	}

	useLayoutEffect(() => {
		// Close the "mobile" menu during the transition from small to large screen (on resize).
		if (isDesktop && isOpen) {
			setIsOpen(false);
		}
	}, [isDesktop]);

	return (
		<header>
			<nav className={styles.nav}>
				<div className={styles.container}>
					<Link className={styles.name} href="/">
						Oliver Knox
					</Link>
					<button className={styles.button} onClick={toggleMenu}>
						<HamburgerIcon />
					</button>
					{!isOpen && (
						<div className={styles.desktop}>
							<Link className={`${styles.link} ${applyActiveLink("/")}`} href="/">
								Home
							</Link>
							<Link className={`${styles.link} ${applyActiveLink("/about")}`} href="/about">
								About
							</Link>
							<Link className={`${styles.link} ${applyActiveLink("/projects")}`} href="/projects">
								Projects
							</Link>
							<Link className={`${styles.link} ${applyActiveLink("/experience")}`} href="/experience">
								Experience
							</Link>
						</div>
					)}
				</div>
				{isOpen && (
					<div className={styles.mobile}>
						<Link className={`${styles.link} ${applyActiveLink("/")}`} href="/">
							Home
						</Link>
						<Link className={`${styles.link} ${applyActiveLink("/about")}`} href="/about">
							About
						</Link>
						<Link className={`${styles.link} ${applyActiveLink("/projects")}`} href="/projects">
							Projects
						</Link>
						<Link className={`${styles.link} ${applyActiveLink("/experience")}`} href="/experience">
							Experience
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};
