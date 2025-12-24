import { Hero } from '@/components/home/Hero';
import { ImpactAreas } from '@/components/home/ImpactAreas';
import { StorySection } from '@/components/home/StorySection';
import { CallToAction } from '@/components/home/CallToAction';

export default function Home() {
	return (
		<>
			<Hero />
			<ImpactAreas />
			<StorySection />
			<CallToAction />
		</>
	);
}
