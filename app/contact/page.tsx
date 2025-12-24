import { Container } from '@/components/ui/Container';

export default function ContactPage() {
	return (
		<div className='bg-secondary min-h-[50vh] py-16'>
			<Container>
				<h1 className='font-heading text-4xl font-bold text-primary mb-8'>
					Contact Us
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					<div>
						<p className='text-lg text-primary/80 mb-6'>
							We are here to answer any questions you may have
							about our work or how you can get involved.
						</p>
						<div className='space-y-4 text-primary'>
							<p>
								<strong>Email:</strong>{' '}
								info@hopefulfoundation.org
							</p>
							<p>
								<strong>Phone:</strong> +94 11 234 5678
							</p>
							<p>
								<strong>Address:</strong>
								<br />
								123 Heritage Lane,
								<br />
								Colombo 07, Sri Lanka
							</p>
						</div>
					</div>
					<div className='bg-white p-6 rounded-lg shadow-sm'>
						{/* Placeholder form */}
						<form className='space-y-4'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-primary mb-1'
								>
									Name
								</label>
								<input
									type='text'
									id='name'
									className='w-full p-2 border border-neutral-support/30 rounded focus:ring-accent focus:border-accent'
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-primary mb-1'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									className='w-full p-2 border border-neutral-support/30 rounded focus:ring-accent focus:border-accent'
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-primary mb-1'
								>
									Message
								</label>
								<textarea
									id='message'
									rows={4}
									className='w-full p-2 border border-neutral-support/30 rounded focus:ring-accent focus:border-accent'
								></textarea>
							</div>
							<button
								type='submit'
								className='bg-primary text-secondary px-6 py-2  hover:bg-primary/90 transition-colors hover:text-white'
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</Container>
		</div>
	);
}
