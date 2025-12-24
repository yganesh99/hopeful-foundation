import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';

export function Footer() {
	return (
		<footer className='bg-quaternary text-black py-12 border-t border-secondary/10'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
					<div className='col-span-1 md:col-span-2'>
						<Link
							href='/'
							className='block relative h-16 md:h-18 lg:h-20 aspect-2/1'
						>
							<Image
								src='/logo.png'
								alt='Hopeful Foundation'
								fill
								className='object-cover object-left'
								priority
							/>
						</Link>
						<p className='text-black max-w-sm mb-6'>
							Creating lasting impact through community
							empowerment and conservation. Restoring hope,
							preserving heritage, and building a sustainable
							future together.
						</p>
					</div>

					<div>
						<h3 className='font-heading text-lg font-semibold mb-4 text-accent'>
							Quick Links
						</h3>
						<ul className='space-y-2'>
							{[
								{ name: 'Our Mission', href: '/about' },
								{ name: 'Programs', href: '/programs' },
								{ name: 'Get Involved', href: '/get-involved' },
								{ name: 'Contact Us', href: '/contact' },
							].map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='text-black hover:text-accent transition-colors'
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='font-heading text-lg font-semibold mb-4 text-accent'>
							Contact
						</h3>
						<ul className='space-y-2 text-black'>
							<li>info@hopefulfoundation.org</li>
							<li>+94 11 234 5678</li>
							<li>Colombo, Sri Lanka</li>
						</ul>
					</div>
				</div>

				<div className='pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center text-sm text-black text-center md:text-left'>
					<p>
						&copy; {new Date().getFullYear()} Hopeful Foundation.
						All rights reserved.
					</p>
					<div className='flex space-x-4 mt-4 md:mt-0'>
						{/* Social placeholders */}
						<span className='hover:text-accent cursor-pointer'>
							Facebook
						</span>
						<span className='hover:text-accent cursor-pointer'>
							Instagram
						</span>
						<span className='hover:text-accent cursor-pointer'>
							LinkedIn
						</span>
					</div>
				</div>
			</Container>
		</footer>
	);
}
