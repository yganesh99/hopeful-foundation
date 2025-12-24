import { Container } from '../ui/Container';

const impacts = [
	{
		title: 'Wildlife & Conservation',
		description:
			'Protecting Sri Lanka’s unique biodiversity through ethical conservation practices and sustainable habitat management.',
	},
	{
		title: 'Community Empowerment',
		description:
			' uplifting rural communities through education, vocational training, and sustainable livelihood opportunities.',
	},
	{
		title: 'Cultural Preservation',
		description:
			'Safeguarding the rich heritage and traditions of the island, ensuring they thrive for future generations.',
	},
];

export function ImpactAreas() {
	return (
		<section className='py-20 bg-secondary'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
					{impacts.map((impact, index) => (
						<div
							key={impact.title}
							className='relative group'
						>
							<div className='mb-6 h-1 w-12 bg-neutral-support/40' />
							<h3 className='mb-4 font-heading text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300'>
								{impact.title}
							</h3>
							<p className='text-primary/80 leading-relaxed text-balance'>
								{impact.description}
							</p>

							{/* Divider between columns, hidden on mobile and last item */}
							{index !== impacts.length - 1 && (
								<div className='hidden md:block absolute top-0 -right-6 lg:-right-12 h-full w-px bg-neutral-support/20' />
							)}
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
