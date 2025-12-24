import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';

const navItems = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Programs', href: '/programs' },
	{ name: 'Get Involved', href: '/get-involved' },
	{ name: 'Contact', href: '/contact' },
];

export function Header() {
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
				<div className='md:hidden'>
					{/* Mobile menu button placeholder */}
					<button className='text-secondary p-2'>
						<span className='sr-only'>Open menu</span>
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
					</button>
				</div>
			</Container>
		</header>
	);
}
