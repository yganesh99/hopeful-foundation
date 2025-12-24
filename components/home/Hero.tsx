import Image from 'next/image';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero() {
	return (
		<section className='relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center'>
			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/hero-bg.png'
					alt='Sri Lankan Landscape at Sunset'
					fill
					className='object-cover'
					priority
					quality={90}
				/>
				{/* Overlay for readability */}
				<div className='absolute inset-0 bg-primary/40 mix-blend-multiply' />
				<div className='absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent' />
			</div>

			<Container className='relative z-10 text-center md:text-left'>
				<div className='max-w-3xl'>
					<h1 className='mb-6 font-heading text-4xl font-bold leading-tight text-secondary md:text-6xl lg:text-7xl'>
						Hopeful Foundation
					</h1>
					<p className='mb-8 text-lg font-medium text-secondary/90 md:text-xl lg:text-2xl max-w-2xl text-balance'>
						Creating Lasting Impact Through Community & Conservation
					</p>
					<div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
						<Button
							variant='primary'
							size='lg'
							className='border-none shadow-lg hover:translate-y-[-2px] transition-transform'
						>
							Support Our Mission
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}
