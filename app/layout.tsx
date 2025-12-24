import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const playfair = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Hopeful Foundation',
	description: 'Creating Lasting Impact Through Community & Conservation',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.variable} ${playfair.variable} antialiased bg-secondary text-primary font-body`}
			>
				<div className='flex flex-col min-h-screen'>
					<Header />
					<main className='grow'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
