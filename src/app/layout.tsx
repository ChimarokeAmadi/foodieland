import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { LikedFoodProvider } from "@/contexts/likedFoodContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Foodieland Website",
	description: "Home to your favourite recipes",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<LikedFoodProvider>
					<Navbar />
					{children}
					<Footer />
				</LikedFoodProvider>
			</body>
		</html>
	);
}
