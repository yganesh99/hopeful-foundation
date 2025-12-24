import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function CallToAction() {
	return (
		<section className='py-24 bg-primary text-secondary'>
			<Container className='text-center'>
				<h2 className='mb-6 font-heading text-3xl font-bold md:text-5xl'>
					Join Us in Creating Lasting Change
				</h2>
				<p className='mb-10 text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto text-balance'>
					Your support empowers communities, protects wildlife, and
					preserves our shared heritage. Together, we can build a
					future full of hope.
				</p>
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<Button
						variant='primary'
						size='lg'
						className='min-w-40 hover:text-white'
					>
						Donate
					</Button>
					<Button
						size='lg'
						className=' min-w-40 hover:text-white'
					>
						Partner With Us
					</Button>
				</div>
			</Container>
		</section>
	);
}
