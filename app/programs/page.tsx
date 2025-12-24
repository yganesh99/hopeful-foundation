import { Container } from '@/components/ui/Container';

export default function ProgramsPage() {
	return (
		<div className='bg-secondary min-h-[50vh] py-16'>
			<Container>
				<h1 className='font-heading text-4xl font-bold text-primary mb-8'>
					Our Programs
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					<div>
						<h2 className='font-heading text-2xl font-bold text-accent mb-4'>
							Wildlife Conservation
						</h2>
						<p className='text-primary/80 mb-6'>
							We work to protect endangered species and their
							habitats through anti-poaching initiatives, habitat
							restoration, and human-wildlife conflict mitigation
							strategies.
						</p>
					</div>
					<div>
						<h2 className='font-heading text-2xl font-bold text-accent mb-4'>
							Community Education
						</h2>
						<p className='text-primary/80 mb-6'>
							Empowering the next generation through environmental
							education, scholarship programs, and vocational
							training for sustainable livelihoods.
						</p>
					</div>
					<div>
						<h2 className='font-heading text-2xl font-bold text-accent mb-4'>
							Heritage Preservation
						</h2>
						<p className='text-primary/80 mb-6'>
							Documenting and preserving traditional knowledge,
							crafts, and cultural practices that define the
							unique identity of our rural communities.
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
}
