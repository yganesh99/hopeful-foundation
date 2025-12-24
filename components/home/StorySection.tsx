import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function StorySection() {
	return (
		<section className='py-24 bg-secondary border-t border-neutral-support/10'>
			<Container>
				<div className='max-w-4xl mx-auto text-center md:text-left'>
					<span className='block mb-6 text-sm font-bold tracking-widest uppercase text-accent'>
						Our Purpose
					</span>
					<h2 className='mb-8 font-heading text-3xl font-bold leading-tight text-primary md:text-5xl'>
						We believe in a future where nature and community thrive
						together.
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-primary/80 leading-relaxed'>
						<p>
							Hopeful Foundation was born from a deep love for Sri
							Lanka’s wild places and the people who call them
							home. We recognize that true conservation cannot
							happen in isolation—it requires the active
							participation and well-being of local communities.
						</p>
						<div>
							<p className='mb-6'>
								Our approach is long-term and holistic. We don't
								just funding projects; we build partnerships
								rooted in trust, transparency, and a shared
								vision for a sustainable future.
							</p>
							<Button
								variant='outline'
								className='border-primary text-primary hover:bg-primary hover:text-secondary'
							>
								Read Our Story
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
