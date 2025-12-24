'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Container } from '../ui/Container';

const navItems = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Programs', href: '/programs' },
	{ name: 'Get Involved', href: '/get-involved' },
	{ name: 'Contact', href: '/contact' },
];

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='bg-white text-secondary sticky top-0 z-50 shadow-md'>
			<Container className='flex h-20 items-center justify-between'>
				<Link
					href='/'
					className='relative h-16 md:h-18 lg:h-20 aspect-2/1'
				>
					<Image
						src='/logo.png'
						alt='Hopeful Foundation'
						fill
						className='object-cover object-left'
						priority
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex gap-8'>
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className='text-primary hover:underline underline-offset-8 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
						>
							{item.name}
						</Link>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<div className='md:hidden'>
					<button
						className='text-primary p-2'
						onClick={() => setIsOpen(!isOpen)}
						aria-label='Toggle menu'
					>
						{isOpen ? (
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</button>
				</div>
			</Container>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div className='md:hidden absolute top-20 left-0 w-full bg-secondary border-b border-primary/10 shadow-lg py-4 px-6 animate-in slide-in-from-top-2 duration-200'>
					<nav className='flex flex-col space-y-4'>
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className='text-primary text-lg font-medium p-2 hover:bg-primary/5 rounded block'
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
