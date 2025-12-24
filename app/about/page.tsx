import { Container } from '@/components/ui/Container';

export default function AboutPage() {
	return (
		<div className='bg-secondary min-h-[50vh] py-16'>
			<Container>
				<h1 className='font-heading text-4xl font-bold text-primary mb-8'>
					About Us
				</h1>
				<div className='prose prose-lg text-primary/80 max-w-none'>
					<p className='mb-6'>
						The Hopeful Foundation is dedicated to creating lasting
						impact through community empowerment and conservation.
						We believe that the well-being of humanity and nature
						are deeply interconnected.
					</p>
					<h2 className='font-heading text-2xl font-semibold text-primary mt-8 mb-4'>
						Our Mission
					</h2>
					<p className='mb-6'>
						To restore hope, preserve heritage, and build a
						sustainable future for Sri Lanka's wildlife and
						communities.
					</p>
					<h2 className='font-heading text-2xl font-semibold text-primary mt-8 mb-4'>
						Our Values
					</h2>
					<ul className='list-disc pl-6 space-y-2'>
						<li>Integrity and Transparency</li>
						<li>Community-Led Development</li>
						<li>Environmental Stewardship</li>
						<li>Cultural Respect</li>
					</ul>
				</div>
			</Container>
		</div>
	);
}
