import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function GetInvolvedPage() {
	return (
		<div className='bg-secondary min-h-[50vh] py-16'>
			<Container>
				<h1 className='font-heading text-4xl font-bold text-primary mb-8'>
					Get Involved
				</h1>
				<div className='bg-primary text-secondary p-8 rounded-lg mb-12'>
					<h2 className='font-heading text-2xl font-bold mb-4'>
						Donate Today
					</h2>
					<p className='mb-6 opacity-90 max-w-2xl'>
						Your contribution directly supports our conservation and
						community projects. Every donation makes a tangible
						difference.
					</p>
					<Button variant='primary'>Make a Donation</Button>
				</div>

				<div>
					<h2 className='font-heading text-2xl font-bold text-primary mb-4'>
						Volunteer Or Partner
					</h2>
					<p className='text-primary/80 mb-6 max-w-2xl'>
						We welcome partnerships with organizations and
						individuals who share our vision. Whether you want to
						volunteer your time or collaborate on a project, we'd
						love to hear from you.
					</p>
					<Button variant='secondary'>Contact Us</Button>
				</div>
			</Container>
		</div>
	);
}
